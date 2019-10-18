/* eslint-disable no-restricted-syntax */
// Requiring some constants
const Analysis = require('tago/analysis');
const Utils = require('tago/utils');
const Device = require('tago/device');

async function formValidation(context, device, type, message) {
  const datatotago = {
    variable: 'keypadvalidation',
    value: message,
    metadata: {
      type,
    },
  };
  await device.insert(datatotago).then(context.log);
}

/**
 * Main function
 * @param {Context} context Context of our script
 */
// eslint-disable-next-line consistent-return
async function myAnalysis(context, scope) {
  // Configurating device, services and account objects
  const envVars = Utils.env_to_obj(context.environment);
  if (!envVars.device_token) return context.log('Missing device_token environment variable');
  const device = new Device(envVars.device_token);

  const keypad = scope[0].value.split(',');
  if (keypad.length > 1) {
    if (keypad[1] === '0') {
      await formValidation(context, device, 'info', 'Keypad Cleared Up');
    } else if (keypad[0] === '0000' && keypad[1] === '1') {
      await device.insert({ variable: 'status', value: 'On' });
      await formValidation(context, device, 'success', 'Correct password!');
    } else if (keypad[0] === '0000' && keypad[1] === '2') {
      await device.insert({ variable: 'status', value: 'Off' });
      await formValidation(context, device, 'success', 'Correct password!');
    } else {
      await formValidation(context, device, 'danger', 'Incorrect Password');
    }
  } else {
    await formValidation(context, device, 'danger', 'Invalid Command');
  }
}

module.exports = new Analysis(myAnalysis, '074204f7-0059-44a2-b6f5-aca3444736c7');
