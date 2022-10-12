// subject: B - Some Sums
// url: https://atcoder.jp/contests/abc083/tasks/abc083_b
// timestamp: 2022-09-21T14:54:22.892Z

const sumDigits = (n: number) => ("" + n).split("").reduce((a, b) => +a + +b, 0);

export function main(input: string) {
  const [n, a, b] = input.split(/\s/).map(Number);
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    const sum = sumDigits(i);
    if (a <= sum && sum <= b) {
      ans += i;
    }
  }

  return ans;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["20 2 5", "84"],
    ["10 1 2", "13"],
    ["100 4 16", "4554"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
