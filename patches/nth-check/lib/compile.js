"use strict";

function trueFunc() {
  return true;
}

function falseFunc() {
  return false;
}

function compile(parsed) {
  const a = parsed[0];
  const b = parsed[1] - 1;

  if (b < 0 && a <= 0) return falseFunc;
  if (a === -1) return (index) => index <= b;
  if (a === 0) return (index) => index === b;
  if (a === 1) return b < 0 ? trueFunc : (index) => index >= b;

  const absA = Math.abs(a);
  const bMod = ((b % absA) + absA) % absA;

  return a > 1
    ? (index) => index >= b && index % absA === bMod
    : (index) => index <= b && index % absA === bMod;
}

module.exports = { compile };
