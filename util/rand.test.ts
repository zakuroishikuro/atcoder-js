import { test, expect } from "vitest";

const seed = (s = 0xC0FFEE) => (h = 1000, l = 0) => (s ^= s << 13, s ^= s >> 17, s ^= s << 5, l + (Math.abs(s) % (h + 1 - l)));
const randNums = (len = 10000, h?: number, l?: number, rand = seed()) => () => [...Array(len)].map(() => rand(h, l));

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
  const rand4 = seed
  const nums4 = [...Array(LEN)].map(() => Math.floor(rand(max, min)));
  nums4.forEach(n => {
    expect(n).toBeLessThanOrEqual(max);
    expect(n).toBeGreaterThanOrEqual(min);
  })
})

test("randNums", () => {
  const rands = randNums(100, 1000000);
  const nums = rands(); //シード固定したいのでこうなる
  expect(nums.length).toBe(100);
  expect(nums.length).toBe(new Set(nums).size);
})