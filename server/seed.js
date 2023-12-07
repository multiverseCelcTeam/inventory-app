// replace with items later
const { items, users } = require('./seedData.js');

const { db } = require('./db');
const { Item, User } = require('./models');

const seed = async () => {

  try {
    // drop and recreate tables per model definitions
    await db.sync({ force: true });

    // insert data
    const itemArr = await Item.bulkCreate(items);
    const userArr = await User.bulkCreate(users);

    await userArr[0].setItems(itemArr[0]);
    await userArr[0].setItems(itemArr[1]);
    await itemArr[0].setUsers(userArr[0]);
    await itemArr[1].setUsers(userArr[0]);
    console.log(userArr[0].__proto__);

    console.log("db populated!");
  } catch (error) {
    console.error(error);
  }
};

seed();
