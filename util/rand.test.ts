import { test, expect } from "vitest";

const seed = (s = 0xC0FFEE) => (max = 100, min = 0) => (s ^= s << 13, s ^= s >> 17, s ^= s << 5, min + (Math.abs(s) % (max + 1 - min)));
const randNums = (max = 100, min = 1, len = 1000, rand = seed()) => () => [...Array(len)].map(() => rand(max, min));
const uniqNums = (max = 100, min = 1, len = 1000, rand = seed()) => () => {
  if (max - min < len) throw "デカすぎんだろ・・・";
  const s = new Set();
  while (s.size < len) s.add(rand(max, min));
  return [...s];
}

test("rand", () => {
  const LEN = 10;

  // 全てユニークな値
  const rand = seed();
  const nums = [...Array(LEN)].map(rand);
  expect(nums.length).toBe(new Set(nums).size);

  // 並び順がランダム
  expect(nums).not.toEqual(nums.slice().sort((a, b) => a - b));

  // シードが同じなら作り直しても全て同じ値
  const rand2 = seed();
  const nums2 = [...Array(LEN)].map(rand2);
  expect(nums).toEqual(nums2);

  // シードが異なれば全て違う値
  const rand3 = seed(0xDEADBEEF);
  const nums3 = [...Array(LEN)].map(rand3);
  expect(nums).not.toEqual(nums3);

  // 範囲指定
  const min = 10, max = 100;
  const nums4 = [...Array(LEN)].map(() => Math.floor(rand(max, min)));
  nums4.forEach(n => {
    expect(n).toBeLessThanOrEqual(max);
    expect(n).toBeGreaterThanOrEqual(min);
  })

  // かぶってない？
  const nums5 = [...Array(10000)].map(() => Math.floor(rand(10, 1)));
  expect(new Set(nums5).size).toBe(10);

  // 比率は？
  let cnt = Array(10).fill(0);
  nums5.forEach(n => cnt[n - 1]++);
  cnt = cnt.map(n => n / 100).map(n => n >= 9 && n <= 11);
  expect(cnt)
})

test("randNums", () => {
  const len = 100, min = 0, max = 100000;
  const rands = randNums(max, min, len);
  const nums = rands(); //シード固定したいのでこうなる
  expect(nums.length).toBe(100);
  expect(nums.length).toBe(new Set(nums).size);
});