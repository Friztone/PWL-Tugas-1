const User = require("../models/user");

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      include: ["orders"],
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
