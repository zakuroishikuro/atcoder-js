// A - Lucky 7
// https://atcoder.jp/contests/abc162/tasks/abc162_a
// 2022-10-14T15:06:06.636Z

export function main(input: string) {
  return input.includes("7") ? "Yes" : "No";
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["117", "Yes"],
    ["123", "No"],
    ["777", "Yes"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
