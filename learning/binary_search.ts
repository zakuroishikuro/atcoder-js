//二分探索アルゴリズムを一般化 〜 めぐる式二分探索法のススメ 〜
//https://qiita.com/drken/items/97e37dd6143e33a64c8c

const isOK = <T>(index: number, key: T, values: T[]) => {
  if (values[index] >= key) {
    return true;
  } else {
    return false;
  }
};

const binary_search = <T>(key: T, values: T[]) => {
  let left = -1;
  let right = values.length;
  while (right - left > 1) {
    const mid = Math.floor(left + (right - left) / 2);
    if (isOK(mid, key, values)) right = mid;
    else left = mid;
  }
  return right;
};
