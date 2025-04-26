/*
 * Database seeding script
 *
 * This script connects to MongoDB using the same connection logic as the
 * application and populates the `items` collection with some sample
 * documents.  Running seeds is helpful during development or testing when
 * you want to quickly populate the database with known data.  Use the
 * `npm run seed` command defined in package.json to execute this script.
 */

require('dotenv').config();
const connectDB = require('./config/db');
const Item = require('./models/item');

// Sample items to insert
const items = [
  { name: 'Sample Item 1', description: 'This is the first seeded item' },
  { name: 'Sample Item 2', description: 'This is the second seeded item' },
  { name: 'Sample Item 3', description: 'Another example item for seeding' },
];

async function seed() {
  const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/devops_db';
  await connectDB(mongoUri);
  try {
    // Clear existing data
    await Item.deleteMany({});
    // Insert sample items
    await Item.insertMany(items);
    console.log('Database seeded successfully');
  } catch (err) {
    console.error('Error seeding data:', err);
  } finally {
    await require('mongoose').connection.close();
    process.exit();
  }
}

seed();