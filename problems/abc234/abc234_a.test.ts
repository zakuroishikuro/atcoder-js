// A - Weird Function
// https://atcoder.jp/contests/abc234/tasks/abc234_a
// 2022-10-18T12:38:09.242Z

const f = (x) => x * x + 2 * x + 3;

export function main(input: string) {
  const t = +input;
  return f(f(f(t) + t) + f(f(t)));
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["0", "1371"],
    ["3", "722502"],
    ["10", "1111355571"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
