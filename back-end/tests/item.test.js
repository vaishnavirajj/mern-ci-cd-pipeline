/* eslint-disable no-undef */
// Tests for the item API routes.  These tests are marked with `.skip` to avoid
// running automatically until a MongoDB instance is available.  Remove `.skip`
// to enable the tests after configuring the test database (for example using
// mongodb-memory-server).

const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server');

describe.skip('Item API', () => {
  beforeAll(async () => {
    // Connect to an in‑memory MongoDB instance here.
  });

  afterAll(async () => {
    // Clean up database connections.
    await mongoose.connection.close();
  });

  test('GET /api/items should return an empty array initially', async () => {
    const res = await request(app).get('/api/items');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBe(0);
  });

  test('POST /api/items should create a new item', async () => {
    const res = await request(app)
      .post('/api/items')
      .send({ name: 'Test Item', description: 'A new test item' });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Test Item');
    expect(res.body.description).toBe('A new test item');
  });
});