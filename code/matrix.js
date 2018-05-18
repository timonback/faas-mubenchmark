'use strict';

const clock = require('./clock.js');

exports.add = (m1, m2) => {
  const t0 = clock.clock();

  let result = [];
  for (let i = 0; i < m1.length; i++) {
    result[i] = [];
    for (let j = 0; j < m2[0].length; j++) {
      result[i][j] = m1[i][j] + m2[i][j];
    }
  }

  console.log("Matrix.add time: " + clock.clock(t0));

  //console.table(mResult)

  return result;
};

exports.create = (m, n) => {
  const t0 = clock.clock();

  let matrix = [];
  for (let i = 0; i < m; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      // initialized 'random'
      row[j] = i * j;
    }
    matrix[i] = row;
  }

  console.log("Matrix.create time: " + clock.clock(t0));

  //console.table(matrix)

  return matrix;
};

exports.multiply = (m1, m2) => {
  const t0 = clock.clock();

  let result = [];
  for (let i = 0; i < m1.length; i++) {
    result[i] = [];
    for (let j = 0; j < m2[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < m1[0].length; k++) {
        sum += m1[i][k] * m2[k][j];
      }
      result[i][j] = sum;
    }
  }

  console.log("Matrix.multiply time: " + clock.clock(t0));

  //console.table(mResult)

  return result;
};

exports.subset = (m1, offset_x, offset_y, width, height) => {
  const t0 = clock.clock();

  let result = [];
  for (let i = offset_x; i < m1.length && i < offset_x + width; i++) {
    result[i] = [];
    for (let j = offset_y; j < m1[0].length && j < offset_y + height; j++) {
      result[i - offset_x][j - offset_y] = m1[i][j];
    }
  }

  console.log("Matrix.subset time: " + clock.clock(t0));

  //console.table(mResult)

  return result;
};

