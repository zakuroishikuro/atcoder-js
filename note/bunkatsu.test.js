// 意味はない。普通に線形探索したほうがいい。やってみたかっただけ。
function max(a = []) {
  if (a.length <= 1) return a[0];

  const half = (a.length + (a.length & 1)) / 2;
  const left = max(a.slice(0, half));
  const right = max(a.slice(half));

  return left > right ? left : right;
}

// マージソート
function sort(a = []) {
  if (a.length == 1) return a;

  const half = (a.length + (a.length & 1)) / 2;
  const left = sort(a.slice(0, half));
  const right = sort(a.slice(half));

  return a.map(() => (left.length ? (right.length ? (left[0] < right[0] ? left : right) : left) : right).shift());
}

test('div', () => {
  expect(max([1])).toBe(1);
  expect(max([1, 2])).toBe(2);
  expect(max([1, 2, 3])).toBe(3);
  expect(max([143143, 34, 241, 1314321482174])).toBe(1314321482174);
});

test('sort', () => {
  expect(sort([1])).toEqual([1]);
  expect(sort([2, 1])).toEqual([1, 2]);
  expect(sort([3, 2, 1])).toEqual([1, 2, 3]);
  expect(sort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
