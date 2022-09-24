const posCalc = (w) => (x, y) => x < 0 || y < 0 || x >= w ? -1 : x + y * w;

module.exports = {posCalc};