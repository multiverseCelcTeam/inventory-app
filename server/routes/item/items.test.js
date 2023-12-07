const request = require('supertest');
const app = require('../../app');
const execSync = require('child_process').execSync;
// const Show = require('../../../models/index');

// jest.mock(Show.Show, () => ({ update: jest.fn() }));
// jest.mock('../../../models/Show', () => ({ belongsToMany: jest.fn() }));
// jest.mock('./models/Restaurant', () => ({ destroy: jest.fn() }));

// PLACEHOLDER for mock data. Runs seed script every time before test to reset
beforeAll(() => {
  const test = execSync('cd server && node seed.js', { encoding: 'utf-8' });
  console.log(test);
});

describe('When we call upon our /items route', () => {
  test('AND we send a get request, all shows are returned', async () => {
    const response = await request(app)
      .get('/items');


    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });

  test('AND we send a parameterized get request, 1 item is returned', async () => {
    const response = await request(app)
      .get('/items/1');

    // console.log(response.body)
    // console.log(Array(response.body))

    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
    expect(Array(response.body)).toHaveLength(1);
  });

  test('AND we send a put request, the proper status code is returned and the body is changed as expected', async () => {
    const body = { "name" : "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 999999999,
      "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
    };

    // Show.Show.update.mockResolvedValue(body, {where : {id : 1}});

    const response = await request(app)
      .put('/items/1')
      .send(body);

    const check = await request(app)
      .get('/items/1');

    expect(response.status).toBe(200);
    expect(check.body.price).toBe(999999999);
  });

  test('AND we send a post request with VALID data, it creates', async () => {
    const testItem = {
      "name": "test",
      "price": 10,
      "description": 'test',
      "category": 'test',
      "image": 'test.com'
    };

    await request(app)
      .post('/items')
      .send(testItem)
      .expect(200);
  });

  test('AND we send a post or put request with INVALID data, it throws validation error', async () => {
    const invalidItem1 = {
      "name": "test that should absolutely not pass under any circumstance because look at how long this name is. Like who would be putting this much in a title. DM them or something if you really wanna know this, or put it in the description, since you know, thats what its for",
      "price": 10,
      "description": 'test',
      "category": 'test',
      "image": 'test.com'
    };

    const invalidItem2 = {
      "name": "",
      "price": 10,
      "description": 'test',
      "category": 'test',
      "image": 'test.com'
    };

    const invalidItem3 = {
      "name": "test",
      "price": "invalid price",
      "description": 'test',
      "category": 'test',
      "image": 'test.com'
    };

    const invalidItem4 = {
      "name": "test",
      "price": 10,
      "description": '',
      "category": 'test',
      "image": 'test.com'
    };

    const response1 = await request(app)
      .post('/items')
      .send(invalidItem1);

    const put1 = await request(app)
      .put('/items/1')
      .send(invalidItem1);

    const response2 = await request(app)
      .post('/items')
      .send(invalidItem2);

    const response3 = await request(app)
      .post('/items')
      .send(invalidItem3);

    const response4 = await request(app)
      .post('/items')
      .send(invalidItem4);

    const check = await request(app)
      .get('/items');

    expect(response1.body).toHaveProperty('errors');
    expect(put1.body).toHaveProperty('errors');
    expect(response2.body).toHaveProperty('errors');
    expect(response3.body).toHaveProperty('errors');
    expect(response4.body).toHaveProperty('errors');
    // length of the original array in seedData.js
    expect(check.body).toHaveLength(21);
    expect(check.body[0]).not.toContain('test');
  });

  test('AND we send a delete request, the proper status code is returned and a get req no longer returns the deleted obj', async () => {
    await request(app)
      .delete('/items/1')
      .expect(200);

    const check = request(app)
      .get('/items/1');

    expect(check.body).toBeUndefined();
  });
});

// RUN TEST via CLI
// npm test -- server/routes/item/items.test.js