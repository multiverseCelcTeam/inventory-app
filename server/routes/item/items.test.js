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

  test('AND we send a parameterized get request, 1 show is returned', async () => {
    const response = await request(app)
      .get('/items/1');

    // console.log(response.body)
    // console.log(Array(response.body))

    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
    expect(Array(response.body)).toHaveLength(1);
  });

  test('AND we send a put request, the proper status code is returned and the body is changed as expected', async () => {
    const body = { "price": 999999999 };

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

  //   test('AND we send a post request with INVALID data, it throws validation error', async () => {
  //     const invalidShow = {
  //       "title": "test that should absolutely not pass under any circumstance",
  //       "genre": "Fantasy",
  //       "rating": null,
  //       "status": null,
  //       "available": true
  //     };

  //     const response = await request(app)
  //       .post('/shows')
  //       .send(invalidShow);

  //     expect(response.body).toHaveProperty('errors');
  //   });

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