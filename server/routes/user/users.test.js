const request = require('supertest');
const app = require('../../app');
const execSync = require('child_process').execSync;
const { User, Item } = require('../../models/index');

let newUser, item1, item2;
// PLACEHOLDER for mock data. Runs seed script every time before test to reset
beforeAll(async () => {
  const test = execSync('cd server && node seed.js', { encoding: 'utf-8' });
  console.log(test);
  newUser = await User.create({ username: 'test', password: "test" });
  item1 = await Item.create({ "name":"test",
    "price":10,
    "description":"test",
    "category":"test",
    "image":"test" });
  item2 = await Item.create({ "name":"test2",
    "price":10,
    "description":"test2",
    "category":"test2",
    "image":"test2" });

  //   console.log(newUser.dataValues, item1.dataValues, item2.dataValues);
  await newUser.setItems(item1);
  await newUser.addItems(item2);
  await item1.addUsers(newUser);
  await item2.addUsers(newUser);
});

describe('When we call upon our /users route', () => {
  test('AND we send a get request, all users are returned', async () => {
    const response = await request(app)
      .get('/users');

    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });

  test('AND we send a parameterized get request, 1 user is returned', async () => {
    const response = await request(app)
      .get('/users/1');

    // console.log(response.body)
    // console.log(Array(response.body))

    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
    expect(Array(response.body)).toHaveLength(1);
  });

//   test('test', async () => {
//     console.log(await newUser.getItems());
//   });
});

// npm test -- server/routes/user/users.test.js



// it('has a many-to-many relationship with Card', async () => {
//     const associatedCard = await attack.getCards();
//     const associatedAttack = await card.getAttacks();
//     expect(associatedAttack.length).toEqual(1);
//     expect(associatedCard.length).toEqual(1);
//   });