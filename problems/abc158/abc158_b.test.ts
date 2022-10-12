// B - Count Balls
// https://atcoder.jp/contests/abc158/tasks/abc158_b
// 2022-10-02T06:43:38.936Z

export function main(input: string) {
  const [n, a, b] = parse(input);
  /*
  const ans = (a + b) * 1000;
  const x = Math.floor(ans / n) * a;
  const y = Math.max(a, ans % n)
  */
  //https://blog.hamayanhamayan.com/entry/2020/03/08/100424
  const len = a + b;
  const ans = (n / len) * a + Math.min(a, n % len);
  return Math.floor(ans);
}

function parse(s = "", f = Number) {
  const m = f ? (s) => s.split(/\s/).map(f) : (s) => s.split(/\s/);
  return /\n.+\n/s.test(s) ? s.split(/\n/).map(m) : m(s);
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["8 3 4", "4"],
    ["8 0 4", "0"],
    ["6 2 4", "2"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
