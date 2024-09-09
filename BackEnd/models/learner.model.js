const mongoose = require("mongoose");

const LearnerSchema = new mongoose.Schema(
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

module.exports = mongoose.model("learner", LearnerSchema);
