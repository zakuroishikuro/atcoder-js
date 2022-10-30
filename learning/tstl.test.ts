// ドキュメント https://samchon.github.io/tstl/api/modules/std.html

import std from "tstl";

test("adjacent_find", () => {
  const vec = new std.Vector([1, 3, 5, 7, 9, 9, 51, 101]);

  // 隣り合う値がイコールの最初の位置
  const actual = std.adjacent_find(vec.begin(), vec.end());
  expect(actual.index()).toBe(4);
});

// 全て当てはまるか。Array#every
test("all_of", () => {
  const vec = new std.Vector([1, 3, 5, 7, 9, 9, 51, 101]);
  const actual = std.all_of(vec.begin(), vec.end(), (value) => (value & 1) == 1);
  expect(actual).toBeTruthy(); // 全て奇数
});

// どれか当てはまるか。Array#some
test("any_of", () => {
  const vec = new std.Vector([1, 3, 5, 7, 9, 9, 51, 101]);
  const actual = std.any_of(vec.begin(), vec.end(), (value) => (value & 1) != 1);
  expect(actual).toBeFalsy(); // 偶数は含まない
});

// ソート済みの配列に値が含まれるか。Array#indexOf, Array#find。ただし二分探索なので早い
test("binary_search", () => {
  const vec = new std.Vector([1, 3, 5, 7, 9, 9, 51, 101]);

  expect(std.binary_search(vec.begin(), vec.end(), 51)).toBeTruthy();
  expect(std.binary_search(vec.begin(), vec.end(), 50)).toBeFalsy();
});

// valueをn以上m以下に制限
test("binary_search", () => {
  // value, low, high
  expect(std.clamp(50, 10, 100)).toBe(50);
  expect(std.clamp(50, 60, 100)).toBe(60);
  expect(std.clamp(50, 10, 40)).toBe(40);
});

// 数える (値)
test("count", () => {
  const vec = new std.Vector([1, 3, 5, 7, 9, 9, 51, 101]);
  expect(std.count(vec.begin(), vec.end(), 51)).toBe(1);
  expect(std.count(vec.begin(), vec.end(), 9)).toBe(2);
  expect(std.count(vec.begin(), vec.end(), 8)).toBe(0);
});

// 数える (関数)
test("count_if", () => {
  const vec = new std.Vector([1, 3, 5, 7, 9, 9, 51, 101]);
  expect(std.count_if(vec.begin(), vec.end(), (n) => n == 51)).toBe(1);
  expect(std.count_if(vec.begin(), vec.end(), (n) => n == 9)).toBe(2);
  expect(std.count_if(vec.begin(), vec.end(), (n) => n == 8)).toBe(0);
});

// Array#sliceみたいな。copy_backward, copy_if, copy_nもある。fill, fill_nもある。
test("copy", () => {
  // 長さが同じでないとエラー
  const vec = new std.Vector([1, 2]);
  const vec2 = new std.Vector([10, 20]);
  const it = std.copy(vec.begin(), vec.end(), vec2.begin());

  // 中身が上書きされる
  expect([...vec2]).toEqual([1, 2]);
  expect(it).toEqual(vec2.end()); // イテレータが返ってくる。たぶん不要
});

// distance。イテレータからイテレータまでの長さ
test("distance", () => {
  const vec = new std.Vector([1, 3, 5, 7, 9, 9, 51, 101]);
  expect(std.distance(vec.begin(), vec.end())).toBe(vec.size());
  expect(std.distance(vec.begin(), vec.begin().advance(5))).toBe(5); // 5つ進めたから5
});

// empty
test("empty", () => {
  const vec = new std.Vector();
  const vec2 = new std.Vector([]);
  const vec3 = new std.Vector([1, 2, 3]);
  expect(std.empty(vec)).toBeTruthy();
  expect(std.empty(vec2)).toBeTruthy();
  expect(std.empty(vec3)).toBeFalsy();

  // ??? Arrayには使えない？
  expect(std.empty([])).toBeFalsy();
  expect(std.empty([1, 2, 3])).toBeTruthy();
});

// distance。イテレータからイテレータまでの長さ
test("distance", () => {
  const vec = new std.Vector([1, 3, 5, 7, 9, 9, 51, 101]);
  expect(std.distance(vec.begin(), vec.end())).toBe(vec.size());
  expect(std.distance(vec.begin(), vec.begin().advance(5))).toBe(5); // 5つ進めたから5
});

// 値がすべて等しいか
test("equal", () => {
  const vec = new std.Vector([1, 3, 5, 7, 9, 9, 51, 101]);
  const vec2 = new std.Vector([1, 3, 5, 7, 9, 9, 51, 101]);
  expect(std.equal(vec.begin(), vec.end(), vec2.begin())).toBe(true);

  const vec3 = new std.Vector([1, 3, 5, 7, 9, 9, 51, 102]);
  expect(std.equal(vec.begin(), vec.end(), vec3.begin())).toBe(false);

  // 長さが違っても大丈夫
  const vec4 = new std.Vector([1, 3, 5, 7, 9, 9, 51]);
  expect(std.equal(vec.begin(), vec.end(), vec4.begin())).toBe(false);
  const vec5 = new std.Vector([1, 3, 5, 7, 9, 9, 51, 101, 201]);
  expect(std.equal(vec.begin(), vec.end(), vec4.begin())).toBe(false);
});

// 値がすべて等しいか
test("equal_range", () => {
  const vec = new std.Vector([1, 3, 5, 7, 9, 9, 51, 101]);
  // lower_bound, upper_boundのペア
  const { first, second } = std.equal_range(vec.begin(), vec.end(), 9);
  expect(first.index()).toBe(4);
  expect(second.index()).toBe(6);
});

// 連番
test("iota", () => {
  const vec = new std.Vector(10, 0);
  std.iota(vec.begin(), vec.end(), 1);
  expect([...vec]).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

// ranges.iota。こっちはArrayとかそのまま使える。たぶんrangesの他も同じ感じ
test("ranges.iota", () => {
  const arr = Array(10);
  std.ranges.iota(arr, 1);
  expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test("lower_bound", () => {
  const arr = [1, 3, 5, 7, 9, 9, 51, 101];
  expect(std.ranges.lower_bound(arr, 3).value).toBe(3);
  expect(std.ranges.lower_bound(arr, 4).value).toBe(5);

  const vec = new std.Vector(arr);
  expect(std.lower_bound(vec.begin(), vec.end(), 3).value).toBe(3);
  expect(std.lower_bound(vec.begin(), vec.end(), 4).value).toBe(5);
});

// gcd, lcm
// max, max_element
// min, min_element
// minmax, minmax_element
// lower_bound, upper_bound
// make_pair
// randint
// rbegin, rend

//remove, remove_if, remove_copy
