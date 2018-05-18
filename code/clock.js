'use strict';

exports.clock = (start) => {
  if (!start) return process.hrtime();
  const end = process.hrtime(start);
  return Math.round((end[0] * 1000) + (end[1] / 1000000));
};
