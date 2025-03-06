const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
const User = require("./models/user");
const Order = require("./models/order");

const app = express();
app.use(cors());
app.use(express.json());

// Setup relasi
User.hasMany(Order);
Order.belongsTo(User);

// Routes
app.use("/users", require("./routes/users"));
app.use("/orders", require("./routes/orders"));

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
