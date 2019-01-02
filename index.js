var mocha = require('mocha')
var inherits = require('../utils').inherits;

function EvenMoreMin(runner) {
  Base.call(this, runner);
  runner.once('end', this.epilogue.bind(this));
}

inherits(EvenMoreMin, Base);
exports = module.exports = EvenMoreMin;
