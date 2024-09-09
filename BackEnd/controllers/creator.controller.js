const Creator = require("../models/creator.model");

const registerCreator = async (req, res) => {
  const { Fullname, Username, email, password } = req.body;
  const FindCreator = Creator.findOne({ email });

  if (FindCreator) {
    res.status(302).json("the creator already exists");
  }
  const creator = new Creator({ Fullname, Username, email, password });
  await creator.save();
  try {
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};
const loginCreator = async (req, res) => {
  const { email, password } = req.body;
  const logedCreator = await User.findOne({ email });
  if (!logedCreator) {
    res.status(404).json("user does not exist");
  }

  const checkedPassword = await logedCreator.matchPassword(password);
  if (!checkedPassword) {
    res.status(404).json("password incorrect");
  }

  try {
    res.status(201).json(logeduser);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { registerCreator, loginCreator };
