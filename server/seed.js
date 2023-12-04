// replace with items later
const { items } = require('./seedData.js');

const { db } = require('./db');
const Item = require('./models/Item.js');

const seed = async () => {

  try {
    // drop and recreate tables per model definitions
    await db.sync({ force: true });

    // insert data
    await Promise.all(items.map(item => Item.create(item)));

    console.log("db populated!");
  } catch (error) {
    console.error(error);
  }
};

seed();
