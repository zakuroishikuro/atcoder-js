import { Vector, lower_bound, upper_bound } from "tstl";

const { test, expect } = import.meta.vitest;
test("yea", () => {
  const vec = new Vector([1, 2, 4, 10, 20]);

  // lower_boundは「n以上の」最初の要素
  expect(lower_bound(vec.begin(), vec.end(), 2).value).toBe(2); //値
  expect(lower_bound(vec.begin(), vec.end(), 2).index()).toBe(1); //位置

  // upper_boundは「nより大きい」最初の要素
  expect(upper_bound(vec.begin(), vec.end(), 2).value).toBe(4); //値
  expect(upper_bound(vec.begin(), vec.end(), 2).index()).toBe(2); //位置

  // 
  expect(lower_bound(vec.begin(), vec.end(), 8).value).toBe(10); //位置
  expect(upper_bound(vec.begin(), vec.end(), 8).value).toBe(10);

});