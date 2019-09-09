const { handler } = require('./index');
require('dotenv').config();

(async () => {
  const event = {
    callee: process.env.CALLEE,
    noCall: true,
  };
  try {
    await handler(event)
  } catch (err) {
    console.error(err);
  }
})();