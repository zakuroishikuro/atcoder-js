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

function includes(n, a = []) {
  if (a.length <= 1) return a[0] == n;
  const half = (a.length + (a.length & 1)) / 2;
  if (a[half] == n) return true; // なくても動きはする
  const sub = a[half] > n ? a.slice(0, half) : a.slice(half);
  return includes(n, sub);
}

function search(target, list = [], _first = 0, _last = list.length - 1) {
  const size = _last - _first + 1;
  if (size < 1) return -1;

  const middle = _first + Math.floor(size / 2);
  if (list[middle] == target) return middle;

  return list[middle] > target ? search(target, list, _first, middle - 1) : search(target, list, middle + 1, _last);
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

test('includes', () => {
  expect(includes(1, [1])).toEqual(true);
  expect(includes(1, [1, 2])).toEqual(true);
  expect(includes(1, [1, 2, 3])).toEqual(true);
  expect(includes(1, [1, 2, 3, 4])).toEqual(true);
  expect(includes(1, [1, 2, 3, 4, 5])).toEqual(true);
  expect(includes(2, [1, 2, 3, 4, 5])).toEqual(true);
  expect(includes(3, [1, 2, 3, 4, 5])).toEqual(true);
  expect(includes(4, [1, 2, 3, 4, 5])).toEqual(true);
  expect(includes(5, [1, 2, 3, 4, 5])).toEqual(true);

  expect(includes(0, [1])).toEqual(false);
  expect(includes(0, [1, 2])).toEqual(false);
  expect(includes(0, [1, 2, 3])).toEqual(false);
  expect(includes(0, [1, 2, 3, 4])).toEqual(false);
  expect(includes(0, [1, 2, 3, 4, 5])).toEqual(false);

  // 辞書順
  expect(includes('a', ['a'])).toEqual(true);
  expect(includes('a', ['a', 'b'])).toEqual(true);
  expect(includes('a', ['a', 'b', 'c'])).toEqual(true);
  expect(includes('b', ['a', 'b', 'c'])).toEqual(true);
  expect(includes('c', ['a', 'b', 'c'])).toEqual(true);

  expect(includes('x', ['a'])).toEqual(false);
  expect(includes('x', ['a', 'b'])).toEqual(false);
  expect(includes('x', ['a', 'b', 'c'])).toEqual(false);
});

test('search', () => {
  expect(search(1, [1])).toEqual(0);
  expect(search(1, [1, 2])).toEqual(0);
  expect(search(1, [1, 2, 3])).toEqual(0);
  expect(search(1, [1, 2, 3, 4])).toEqual(0);
  expect(search(1, [1, 2, 3, 4, 5])).toEqual(0);
  expect(search(2, [1, 2, 3, 4, 5])).toEqual(1);
  expect(search(3, [1, 2, 3, 4, 5])).toEqual(2);
  expect(search(4, [1, 2, 3, 4, 5])).toEqual(3);
  expect(search(5, [1, 2, 3, 4, 5])).toEqual(4);

  expect(search(0, [1])).toEqual(-1);
  expect(search(0, [1, 2])).toEqual(-1);
  expect(search(0, [1, 2, 3])).toEqual(-1);
  expect(search(0, [1, 2, 3, 4])).toEqual(-1);
  expect(search(0, [1, 2, 3, 4, 5])).toEqual(-1);

  // 辞書順
  expect(search('a', ['a'])).toEqual(0);
  expect(search('a', ['a', 'b'])).toEqual(0);
  expect(search('a', ['a', 'b', 'c'])).toEqual(0);
  expect(search('b', ['a', 'b', 'c'])).toEqual(1);
  expect(search('c', ['a', 'b', 'c'])).toEqual(2);

  expect(search('x', ['a'])).toEqual(-1);
  expect(search('x', ['a', 'b'])).toEqual(-1);
  expect(search('x', ['a', 'b', 'c'])).toEqual(-1);
});
