'use strict';

// File for OpenWhisk Functions

const Fibonacci = require("./code/fibonacci.js");
const Fft = require("./code/fft.js");
const Matrix = require("./code/matrix.js");
const Pi = require("./code/pi.js");
const Sleep = require("./code/sleep.js");
const UnionFind = require("./code/unionfind.js");


const fiboFunc = (params) => {
  console.log(params);

  const param = params.param || 0;

  const fibNum = Fibonacci.calcFib(param);

  return {payload: `The ${param}th fibonacci number is ${fibNum}`};
};
module.exports.fibo128 = fiboFunc;
module.exports.fibo256 = fiboFunc;
module.exports.fibo512 = fiboFunc;
module.exports.fibo1024 = fiboFunc;
module.exports.fibo2048 = fiboFunc;


const fftFunc = (params) => {
  console.log(params);

  const param = params.param || 0;

  const result = Fft.fft(param);

  return {payload: JSON.stringify(result)};
};
module.exports.fft128 = fftFunc;
module.exports.fft256 = fftFunc;
module.exports.fft512 = fftFunc;
module.exports.fft1024 = fftFunc;
module.exports.fft2048 = fftFunc;


const helloFunc = (params) => {
  return {payload: `Hello World!`};
};
module.exports.hello = helloFunc;
module.exports.hello128 = helloFunc;
module.exports.hello256 = helloFunc;
module.exports.hello512 = helloFunc;
module.exports.hello1024 = helloFunc;
module.exports.hello2048 = helloFunc;

const matrixFunc = (params) => {
  console.log(params);

  const param = params.param || 0;

  const a = Matrix.create(param, param);
  const b = Matrix.create(param, param);
  const resultBig = Matrix.multiply(a, b);
  const result = Matrix.subset(resultBig, 0, 0, 10, 10);

  return {payload: JSON.stringify(result)};
};
module.exports.matrix128 = matrixFunc;
module.exports.matrix256 = matrixFunc;
module.exports.matrix512 = matrixFunc;
module.exports.matrix1024 = matrixFunc;
module.exports.matrix2048 = matrixFunc;

const piFunc = (params) => {
  console.log(params);

  const param = params.param || 0;

  const piNum = Pi.calcPi(param);

  return {payload: `Approximated Pi with ${param} iterations is ${piNum}`};
};
module.exports.pi128 = piFunc;
module.exports.pi256 = piFunc;
module.exports.pi512 = piFunc;
module.exports.pi1024 = piFunc;
module.exports.pi2048 = piFunc;


const sleepFunc = (params) => {
  console.log(params);

  const param = params.param || 0;

  return Sleep.callback(param, function () {
    return {payload: `Hello Sleep for ${param}ms`};
  });
};
module.exports.sleep128 = sleepFunc;
module.exports.sleep256 = sleepFunc;
module.exports.sleep512 = sleepFunc;
module.exports.sleep1024 = sleepFunc;
module.exports.sleep2048 = sleepFunc;


const UnionFindFunc = (params) => {
  console.log(params);

  const param = params.param || 0;

  const result = UnionFind.unionfind(param);

  return {payload: `Finished union find component analysis with ${param}`};
};
module.exports.unionfind128 = UnionFindFunc;
module.exports.unionfind256 = UnionFindFunc;
module.exports.unionfind512 = UnionFindFunc;
module.exports.unionfind1024 = UnionFindFunc;
module.exports.unionfind2048 = UnionFindFunc;
