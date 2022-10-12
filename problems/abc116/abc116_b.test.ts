// B - Collatz Problem
// https://atcoder.jp/contests/abc116/tasks/abc116_b
// 2022-10-11T11:09:01.775Z

const sim = (n, bucket = {}, i = 0) => {
  if (n in bucket) return i + 1;
  bucket[n] = true;
  n = n & 1 ? 3 * n + 1 : n / 2;
  return sim(n, bucket, i + 1);
};

export function main(input: string) {
  const s = +input;
  return sim(s);
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["8", "5"],
    ["7", "18"],
    ["54", "114"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
