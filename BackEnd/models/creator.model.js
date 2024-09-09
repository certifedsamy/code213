const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const CreatorSchema = new mongoose.Schema(
  {
    Fullname: {
      type: String,
      required: true,
    },
    Username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
CreatorSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

CreatorSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("creator", CreatorSchema);
