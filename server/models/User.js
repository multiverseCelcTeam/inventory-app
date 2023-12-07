const { db, DataTypes } = require('../db');

const User = db.define("users", {
  username: DataTypes.STRING,
  password: DataTypes.STRING
});

module.exports = User;