// A - Station and Bus
// https://atcoder.jp/contests/abc158/tasks/abc158_a
// 2022-10-02T06:32:39.963Z

export function main(input: string) {
  return input.replace(/A/g, "").length % 3 ? "Yes" : "No";
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["ABA", "Yes"],
    ["BBA", "Yes"],
    ["BBB", "No"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
