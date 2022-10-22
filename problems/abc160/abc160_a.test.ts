// A - Coffee
// https://atcoder.jp/contests/abc160/tasks/abc160_a
// 2022-10-22T17:41:07.059Z
// tags: 正規表現

export function main(input: string) {
  return input.match(/^..(.)\1(.)\2/) ? "Yes" : "No";
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["sippuu", "Yes"],
    ["iphone", "No"],
    ["coffee", "Yes"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
