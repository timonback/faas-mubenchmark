'use strict';

// File for Google Functions

const Fibonacci = require("./code/fibonacci.js");
const Fft = require("./code/fft.js");
const Matrix = require("./code/matrix.js");
const Pi = require("./code/pi.js");
const Sleep = require("./code/sleep.js");
const UnionFind = require("./code/unionfind.js");


const FiboFunc = (request, response) => {
  const param = request.query.param || 0;
  console.log('Input param=' + param);
  const fibNum = Fibonacci.calcFib(param);
  response.status(200).send('The ' + param + 'th fibonacci number is ' + fibNum);
};
exports.fibo128 = FiboFunc;
exports.fibo256 = FiboFunc;
exports.fibo512 = FiboFunc;
exports.fibo1024 = FiboFunc;
exports.fibo2048 = FiboFunc;


const fftFunc = (request, response) => {
  const param = request.query.param || 0;
  console.log('Input param=' + param);

  const result = Fft.fft(param);

  response.status(200).send(JSON.stringify(result));
};
module.exports.fft128 = fftFunc;
module.exports.fft256 = fftFunc;
module.exports.fft512 = fftFunc;
module.exports.fft1024 = fftFunc;
module.exports.fft2048 = fftFunc;


const helloFunc = (request, response) => {
  response.status(200).send('Hello World!');
};
exports.hello = helloFunc;
exports.hello128 = helloFunc;
exports.hello256 = helloFunc;
exports.hello512 = helloFunc;
exports.hello1024 = helloFunc;
exports.hello2048 = helloFunc;


const MatrixFunc = (request, response) => {
  const param = request.query.param || 1;
  console.log('Input param=' + param);
  const a = Matrix.create(param, param);
  const b = Matrix.create(param, param);
  const resultBig = Matrix.multiply(a, b);
  const result = Matrix.subset(resultBig, 0, 0, 10, 10);
  response.status(200).send(JSON.stringify(result));
};
exports.matrix128 = MatrixFunc;
exports.matrix256 = MatrixFunc;
exports.matrix512 = MatrixFunc;
exports.matrix1024 = MatrixFunc;
exports.matrix2048 = MatrixFunc;


const PiFunc = (request, response) => {
  const param = request.query.param || 0;
  console.log('Input param=' + param);
  const piNum = Pi.calcPi(param);
  response.status(200).send('Approximated Pi with ' + param + ' iterations is ' + piNum);
};
exports.pi128 = PiFunc;
exports.pi256 = PiFunc;
exports.pi512 = PiFunc;
exports.pi1024 = PiFunc;
exports.pi2048 = PiFunc;


const sleepFunc = (request, response) => {
  const param = request.query.param || 0;
  console.log('Input param=' + param);
  Sleep.callback(param, function () {
    response.status(200).send('Hello Sleep!');
  });
};
exports.sleep128 = sleepFunc;
exports.sleep256 = sleepFunc;
exports.sleep512 = sleepFunc;
exports.sleep1024 = sleepFunc;
exports.sleep2048 = sleepFunc;


const UnionFindFunc = (request, response) => {
  const param = request.query.param || 0;
  console.log('Input param=' + param);

  const result = UnionFind.unionfind(param);

  response.status(200).send('Finished union find component analysis with ' + param);
}
module.exports.unionfind128 = UnionFindFunc;
module.exports.unionfind256 = UnionFindFunc;
module.exports.unionfind512 = UnionFindFunc;
module.exports.unionfind1024 = UnionFindFunc;
module.exports.unionfind2048 = UnionFindFunc;
