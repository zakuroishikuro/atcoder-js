// A - A Unique Letter
// https://atcoder.jp/contests/abc260/tasks/abc260_a
// 2022-10-26T13:01:27.838Z

export function main(input: string) {
  return [...input].find((c, i, a) => a.filter((d) => c == d).length == 1) || -1;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["pop", "o"],
    ["abc", "a"],
    ["xxx", "-1"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
