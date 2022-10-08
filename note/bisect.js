// 二分探索
function search(target, list = []) {
  let first = 0;
  let last = list.length - 1;
  while (first <= last) {
    const middle = first + Math.floor((last - first) / 2);
    if (list[middle] == target) return middle;
    if (list[middle] < target) {
      first = middle + 1;
    } else {
      last = middle - 1;
    }
  }
  return -1;
}

// TypedArrayから二分探索で値を検索する
function searchTA(target = 0, list = new Uint32Array) {
  if (list.length <= 1) return list[0] == target ? list.byteOffset / list.BYTES_PER_ELEMENT : -1;
  const mid = list.length >> 1;
  if (list[mid] == target) return mid + list.byteOffset / list.BYTES_PER_ELEMENT;
  const sub = list[mid] >= target ? list.subarray(0, mid) : list.subarray(mid);
  return searchTA(target, sub);
}

searchTA(2, Uint32Array.from([1, 2, 3]))
//=> 1


function __search(target, list = [], compare = (value) => value - target) {
  let first = 0;
  let last = list.length - 1;
  while (first <= last) {
    const mid = first + Math.floor((last - first) / 2);
    const order = compare(list[mid]);
    if (order == 0) return middle;
    if (order < 0) {
      first = middle + 1;
    } else {
      last = middle - 1;
    }
  }
  return -1;
}

module.exports = { search, searchTA };