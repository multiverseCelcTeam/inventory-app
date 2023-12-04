const { db, DataTypes } = require('../db/connection');

const Sauce = db.define("sauces", {
  name: DataTypes.STRING,
  image: DataTypes.STRING,
});

module.exports = Sauce;