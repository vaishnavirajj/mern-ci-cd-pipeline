const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server');
const Item = require('../models/item');

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/devops_test', { useNewUrlParser: true, useUnifiedTopology: true });
  await Item.deleteMany({});
});

afterAll(async () => {
  await Item.deleteMany({});
  await mongoose.connection.close();
});

// These tests require a running MongoDB instance. They are skipped by default.
describe.skip('Item API', () => {
  test('GET /api/items returns empty array', async () => {
    const res = await request(app).get('/api/items');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBe(0);
  });

  test('POST /api/items creates item', async () => {
    const res = await request(app)
      .post('/api/items')
      .send({ name: 'Test Item', description: 'test description' });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Test Item');
  });
});
