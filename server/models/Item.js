const { db, DataTypes } = require('../db/connection');

const Item = db.define("items", {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    category: DataTypes.STRING,
    image: DataTypes.STRING
});

module.exports = Item;