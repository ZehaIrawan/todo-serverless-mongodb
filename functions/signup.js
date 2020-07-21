const { connectDB, closeDB } = require('../config/db');
const User = require('../models/User')


exports.handler = async function (event) {
  let errorStatusCode = 500;

  try {
    await connectDB();
    const users = await User.find()
    console.log(users);
    return {
      statusCode: errorStatusCode,
      body: JSON.stringify(users),
    };
  } catch (err) {
    console.log(err);
  } finally {
    await closeDB();
  }
};
