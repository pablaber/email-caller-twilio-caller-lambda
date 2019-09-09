'use strict';

const newInstance = () => {
  const config = {
    app: {
      debug: process.env.DEBUG === 'true' || false,
    },
    twilio: {
      phoneNumber: process.env.TWILIO_PHONE_NUMBER || '+1234567890',
      accountSid: process.env.TWILIO_ACCOUNT_SID || 'test-twilio-account-sid',
      authToken: process.env.TWILIO_AUTH_TOKEN || 'test-twilio-auth-token',
    }
  }

  return config;
}

module.exports = {
  newInstance,
};