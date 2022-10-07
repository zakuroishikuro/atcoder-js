// 二分探索
function search(target, list = [], compare = (value) => value - target) {
  let first = 0;
  let last = list.length - 1;
  while (first <= last) {
    const middle = first + Math.floor((last - first) / 2);
    const order = compare(list[middle]);
    if (order == 0) return middle;
    if (order < 0) {
      first = middle + 1;
    } else {
      last = middle - 1;
    }
  }
  return -1;
}

module.exports = { search };