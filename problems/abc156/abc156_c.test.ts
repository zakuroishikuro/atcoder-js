// C - Rally
// https://atcoder.jp/contests/abc156/tasks/abc156_c
// 2022-10-09T13:53:25.712Z

export function main(input: string) {
  const [_A, ...X] = input.split(/\s/).map(Number);

  let min = 100;
  let max = 1;
  for (const x of X) {
    min = Math.min(min, x);
    max = Math.max(max, x);
  }

  // どうせTLE ←なんか大丈夫だった
  let minCalory = Number.POSITIVE_INFINITY;
  for (let p = min; p <= max; p++) {
    const c = X.map((x) => cal(x, p)).reduce((a, b) => a + b);
    minCalory = Math.min(minCalory, c);
  }

  return minCalory;
}

const cal = (x, p) => (x - p) * (x - p);

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["2\n1 4", "5"],
    ["7\n14 14 2 13 56 2 37", "2354"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
