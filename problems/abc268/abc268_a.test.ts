// A - Five Integers
// https://atcoder.jp/contests/abc268/tasks/abc268_a
// 2022-09-23T07:47:54.182Z

export function main(input: string) {
  return new Set(input.split(/\s/)).size;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["31 9 24 31 24", "3"],
    ["0 0 0 0 0", "1"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
