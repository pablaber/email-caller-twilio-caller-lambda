'use strict';

const twilio = require('twilio');
const precond = require('precond');

exports.handler = async (event) => {
  const config = require('./lib/config').newInstance();
  const Logger = require('./lib/logger');

  const log = new Logger(config);

  log.debug(config);

  const { accountSid, authToken, phoneNumber } = config.twilio;

  const client = twilio(accountSid, authToken);

  const callee = precond.checkIsString(event.callee);
  const noCall = event.noCall === true;

  log.debug({ callee, noCall })

  const callParams = {
    url: 'http://demo.twilio.com/docs/voice.xml',
    to: `+${callee}`,
    from: `+${phoneNumber}`,
  };

  if (noCall) {
    log.debug('Skipping call as noCall is true')
    log.info(callParams);
    return;
  }

  let call;
  try {
    call = await client.calls.create(callParams);
  } catch (err) {
    throw err;
  }
  log.info({ callSid: call.sid });
}