//二分探索アルゴリズムを一般化 〜 めぐる式二分探索法のススメ 〜
//https://qiita.com/drken/items/97e37dd6143e33a64c8c

//javascript-algorithms/binarySearch.js at master · trekhleb/javascript-algorithms
//https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/search/binary-search/binarySearch.js

const binarySearch = <T>(values: Array<T>, value: T, comp = (a: T, b: T) => a >= b) => {
  let left = -1;
  let right = values.length;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (comp(values[mid], value)) right = mid;
    else left = mid;
  }
  return right;
};