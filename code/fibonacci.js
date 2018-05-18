'use strict';

exports.calcFib = function (n) {
  let [a, b] = [1, 0];
  while (n-- > 0) {
    [a, b] = [b + a, a];
  }
  return b;
};
