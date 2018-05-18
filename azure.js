'use strict';

// File for Azure Functions

const Fibonacci = require("./code/fibonacci.js");
const Fft = require("./code/fft.js");
const Matrix = require("./code/matrix.js");
const Pi = require("./code/pi.js");
const Sleep = require("./code/sleep.js");
const UnionFind = require("./code/unionfind.js");


const fiboFunc = (context, req) => {
  context.log(req);

  let param = 0;
  if (req.query.param || (req.body && req.body.param)) {
    param = req.query.param || req.body.param;
  }

  const fibNum = Fibonacci.calcFib(param);

  const res = {};
  res.body = 'The ' + param + 'th fibonacci number is ' + fibNum;
  res.status = 200;

  context.done(null, res);
};
module.exports.fibo128 = fiboFunc;
module.exports.fibo256 = fiboFunc;
module.exports.fibo512 = fiboFunc;
module.exports.fibo1024 = fiboFunc;
module.exports.fibo2048 = fiboFunc;


const fftFunc = (context, req) => {
  context.log(req);

  let param = 0;
  if (req.query.param || (req.body && req.body.param)) {
    param = req.query.param || req.body.param;
  }

  const result = Fft.fft(param);

  const res = {};
  res.body = JSON.stringify(result);
  res.status = 200;

  context.done(null, res);
};
module.exports.fft128 = fftFunc;
module.exports.fft256 = fftFunc;
module.exports.fft512 = fftFunc;
module.exports.fft1024 = fftFunc;
module.exports.fft2048 = fftFunc;


const helloFunc = (context, req) => {
  context.log(req);

  const res = {};
  res.body = `Hello World`;
  res.status = 200;

  context.done(null, res);
};
module.exports.hello = helloFunc;
module.exports.hello128 = helloFunc;
module.exports.hello256 = helloFunc;
module.exports.hello512 = helloFunc;
module.exports.hello1024 = helloFunc;
module.exports.hello2048 = helloFunc;


const matrixFunc = (context, req) => {
  context.log(req);

  let param = 0;
  if (req.query.param || (req.body && req.body.param)) {
    param = req.query.param || req.body.param;
  }

  const a = Matrix.create(param, param);
  const b = Matrix.create(param, param);
  const resultBig = Matrix.multiply(a, b);
  const result = Matrix.subset(resultBig, 0, 0, 10, 10);

  const res = {};
  res.body = JSON.stringify(result);
  res.status = 200;

  context.done(null, res);
};
module.exports.matrix128 = matrixFunc;
module.exports.matrix256 = matrixFunc;
module.exports.matrix512 = matrixFunc;
module.exports.matrix1024 = matrixFunc;
module.exports.matrix2048 = matrixFunc;


const piFunc = (context, req) => {
  context.log(req);

  let param = 0;
  if (req.query.param || (req.body && req.body.param)) {
    param = req.query.param || req.body.param;
  }

  const piNum = Pi.calcPi(param);

  const res = {};
  res.body = 'Approximated Pi with ' + param + ' iterations is ' + piNum;
  res.status = 200;

  context.done(null, res);
};
module.exports.pi128 = piFunc;
module.exports.pi256 = piFunc;
module.exports.pi512 = piFunc;
module.exports.pi1024 = piFunc;
module.exports.pi2048 = piFunc;


const sleepFunc = (context, req) => {
  context.log(req);

  let param = 0;
  if (req.query.param || (req.body && req.body.param)) {
    param = req.query.param || req.body.param;
  }

  return Sleep.callback(param, function () {
    const res = {};
    res.body = 'Hello Sleep for ' + param + 'ms';
    res.status = 200;

    context.done(null, res);
  });
};
module.exports.sleep128 = sleepFunc;
module.exports.sleep256 = sleepFunc;
module.exports.sleep512 = sleepFunc;
module.exports.sleep1024 = sleepFunc;
module.exports.sleep2048 = sleepFunc;


const UnionFindFunc = (context, req) => {
  context.log(req);

  let param = 0;
  if (req.query.param || (req.body && req.body.param)) {
    param = req.query.param || req.body.param;
  }

  const result = UnionFind.unionfind(param);

  const res = {};
  res.body = 'Finished union find component analysis with ' + param;
  res.status = 200;

  context.done(null, res);
};
module.exports.unionfind128 = UnionFindFunc;
module.exports.unionfind256 = UnionFindFunc;
module.exports.unionfind512 = UnionFindFunc;
module.exports.unionfind1024 = UnionFindFunc;
module.exports.unionfind2048 = UnionFindFunc;
