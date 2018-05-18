'use strict';

const Promise = require("bluebird");

exports.callback = (delay, callback) => {
  return Promise.delay(delay).then(callback);
};
