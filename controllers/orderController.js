const { User } = require("../models/user");
const { Order } = require("../models/order");

exports.createOrder = async (req, res) => {
  try {
    const user = await User.findByPk(req.body.userId);
    if (!user) throw new Error("User not found");

    const order = await Order.create({
      ...req.body,
      UserId: user.id,
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
