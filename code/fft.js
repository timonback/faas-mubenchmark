'use strict';

const fft = require('fft-js').fft;
const fftUtil = require('fft-js').util;

const frequency = 440;
const sampleRate = 44100;

module.exports.fft = (size) => {
  if (Math.log2(size) % 1 !== 0) {
    return "Input has to be a log2 number.";
  }

  const signal = createData(size);
  const phasors = fft(signal);

  const frequencies = fftUtil.fftFreq(phasors, sampleRate); // Sample rate and coef is just used for length, and frequency step
  const magnitudes = fftUtil.fftMag(phasors);

  const frequenciesBeginning = frequencies.slice(0, 100);

  return frequenciesBeginning.map(function (f, ix) {
    return {frequency: f, magnitude: magnitudes[ix]};
  });
};

function createData(size) {
  const waveform = new Float32Array(size);
  for (let i = 0; i < size; i++) {
    waveform[i] = Math.sin(frequency * Math.PI * 2 * (i / sampleRate));
  }
  return waveform
}


if (require.main === module) {
  module.exports.fft(1024);
}
