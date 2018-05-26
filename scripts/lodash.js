const $ = require('jquery'),
      _ = require('lodash');
const Square = (n) => {
  return n * n;
}
const mapResult = _.map([4, 8, 3, 6], Square);
const lastResult = _.findLast(mapResult, function(el) {
  return el%2 == 1;
});
 module.exports = lastResult;