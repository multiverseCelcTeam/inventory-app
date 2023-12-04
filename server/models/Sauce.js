const { db, DataTypes } = require('../db');

const Sauce = db.define("sauces", {
  name: DataTypes.STRING,
  image: DataTypes.STRING,
});

module.exports = Sauce;