"use strict";

const { compile } = require("./lib/compile");
const { parse } = require("./lib/parse");

function nthCheck(formula) {
  return compile(parse(formula));
}

nthCheck.parse = parse;
nthCheck.compile = compile;
nthCheck.default = nthCheck;

module.exports = nthCheck;
