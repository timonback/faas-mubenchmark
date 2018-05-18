'use strict';

// File for AWS Functions

const Fibonacci = require("./code/fibonacci.js");
const Fft = require("./code/fft.js");
const Matrix = require("./code/matrix.js");
const Pi = require("./code/pi.js");
const Sleep = require("./code/sleep.js");
const UnionFind = require("./code/unionfind.js");


const fiboFunc = (event, context, callback) => {
  console.log(event);
  console.log(context);
  const param = event["queryStringParameters"]['param'] || 0;
  console.log('Input param=' + param);
  const fibNum = Fibonacci.calcFib(param);
  callback(null, {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: 'The ' + param + 'th fibonacci number is ' + fibNum
  });
};
module.exports.fibo128 = fiboFunc;
module.exports.fibo256 = fiboFunc;
module.exports.fibo512 = fiboFunc;
module.exports.fibo1024 = fiboFunc;
module.exports.fibo2048 = fiboFunc;


const fftFunc = (event, context, callback) => {
  console.log(event);
  console.log(context);
  const param = event["queryStringParameters"]['param'] || 0;
  console.log('Input param=' + param);
  const result = Fft.fft(param);
  callback(null, {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(result)
  });
};
module.exports.fft128 = fftFunc;
module.exports.fft256 = fftFunc;
module.exports.fft512 = fftFunc;
module.exports.fft1024 = fftFunc;
module.exports.fft2048 = fftFunc;


const helloFunc = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: 'Hello World'
  });
};
module.exports.hello = helloFunc;
module.exports.hello128 = helloFunc;
module.exports.hello256 = helloFunc;
module.exports.hello512 = helloFunc;
module.exports.hello1024 = helloFunc;
module.exports.hello2048 = helloFunc;


const matrixFunc = (event, context, callback) => {
  console.log(event);
  console.log(context);
  const param = event["queryStringParameters"]['param'] || 1;
  console.log('Input param=' + param);
  const a = Matrix.create(param, param);
  const b = Matrix.create(param, param);
  const resultBig = Matrix.multiply(a, b);
  const result = Matrix.subset(resultBig, 0, 0, 10, 10);
  callback(null, {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(result)
  });
};
module.exports.matrix128 = matrixFunc;
module.exports.matrix256 = matrixFunc;
module.exports.matrix512 = matrixFunc;
module.exports.matrix1024 = matrixFunc;
module.exports.matrix2048 = matrixFunc;


const PiFunc = (event, context, callback) => {
  console.log(event);
  console.log(context);
  const param = event["queryStringParameters"]['param'] || 0;
  console.log('Input param=' + param);
  const piNum = Pi.calcPi(param);
  callback(null, {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: 'Approximated Pi with ' + param + ' iterations is ' + piNum
  });
}
module.exports.pi128 = PiFunc;
module.exports.pi256 = PiFunc;
module.exports.pi512 = PiFunc;
module.exports.pi1024 = PiFunc;
module.exports.pi2048 = PiFunc;


const sleepFunc = (event, context, callback) => {
  console.log(event);
  console.log(context);
  const param = event["queryStringParameters"]['param'] || 0;
  console.log('Input param=' + param);
  Sleep.callback(param, function () {
    callback(null, {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      body: 'Hello Sleep for ' + param + 'ms'
    });
  });
};
module.exports.sleep128 = sleepFunc;
module.exports.sleep256 = sleepFunc;
module.exports.sleep512 = sleepFunc;
module.exports.sleep1024 = sleepFunc;
module.exports.sleep2048 = sleepFunc;


const UnionFindFunc = (event, context, callback) => {
  console.log(event);
  console.log(context);
  const param = event["queryStringParameters"]['param'] || 0;
  console.log('Input param=' + param);
  const result = UnionFind.unionfind(param);
  callback(null, {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: 'Finished union find component analysis with ' + param
  });
};
module.exports.unionfind128 = UnionFindFunc;
module.exports.unionfind256 = UnionFindFunc;
module.exports.unionfind512 = UnionFindFunc;
module.exports.unionfind1024 = UnionFindFunc;
module.exports.unionfind2048 = UnionFindFunc;

