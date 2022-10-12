// A - Welcome to AtCoder
// https://atcoder.jp/contests/practice/tasks/practice_1
// 2022-10-09T05:58:24.160Z

export function main(input: string) {
  const [a, b, c, s] = input.split(/\s+/);
  return `${+a + +b + +c} ${s}`;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["1\n2 3\ntest", "6 test"],
    ["72\n128 256\nmyonmyon", "456 myonmyon"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
