// B - Broken Rounding
// https://atcoder.jp/contests/abc273/tasks/abc273_b
// 2022-10-15T12:04:00.059Z

export function main(input: string) {
  const [X, K] = input.split(/\s/).map(Number);

  let x = X;
  for (let i = 1; i <= K; i++) {
    const pos = 10 ** i;
    const rem = x % pos;
    const d = rem / (pos / 10);
    x -= rem;
    x += d <= 4 ? 0 : pos;
    
  }
  return x;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["2048 2", "2100"],
    ["1 15", "0"],
    ["999 3", "1000"],
    ["314159265358979 12", "314000000000000"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
