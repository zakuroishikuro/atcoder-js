// A - 484558
// https://atcoder.jp/contests/abc271/tasks/abc271_a
// 2022-10-01T12:00:31.101Z

export function main(input: string) {
  return (+input).toString(16).slice(0, 2).padStart(2, "0").toUpperCase();
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["99", "63"],
    ["12", "0C"],
    ["0", "00"],
    ["255", "FF"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
