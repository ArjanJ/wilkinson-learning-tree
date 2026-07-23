"use strict";

const whitespace = new Set([9, 10, 12, 13, 32]);
const ZERO = "0".charCodeAt(0);
const NINE = "9".charCodeAt(0);

function parse(formula) {
  formula = formula.trim().toLowerCase();

  if (formula === "even") return [2, 0];
  if (formula === "odd") return [2, 1];

  let idx = 0;
  let a = 0;
  let sign = readSign();
  let number = readNumber();

  if (idx < formula.length && formula.charAt(idx) === "n") {
    idx++;
    a = sign * (number ?? 1);
    skipWhitespace();

    if (idx < formula.length) {
      sign = readSign();
      skipWhitespace();
      number = readNumber();
    } else {
      sign = 0;
      number = 0;
    }
  }

  if (number === null || idx < formula.length) {
    throw new Error(`n-th rule couldn't be parsed ('${formula}')`);
  }

  return [a, sign * number];

  function readSign() {
    if (formula.charAt(idx) === "-") {
      idx++;
      return -1;
    }

    if (formula.charAt(idx) === "+") {
      idx++;
    }

    return 1;
  }

  function readNumber() {
    const start = idx;
    let value = 0;

    while (
      idx < formula.length &&
      formula.charCodeAt(idx) >= ZERO &&
      formula.charCodeAt(idx) <= NINE
    ) {
      value = value * 10 + (formula.charCodeAt(idx) - ZERO);
      idx++;
    }

    return idx === start ? null : value;
  }

  function skipWhitespace() {
    while (idx < formula.length && whitespace.has(formula.charCodeAt(idx))) {
      idx++;
    }
  }
}

module.exports = { parse };
