// B - 辞書式順序
// https://atcoder.jp/contests/abc007/tasks/abc007_2
// 2022-10-30T08:15:40.463Z

export function main(input: string) {
  if (input.length == 1) {
    if (input == "a") return -1;
    return String.fromCodePoint(input.codePointAt(0) - 1);
  }
  return input.slice(0, -1);
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["xyz", "xy"],
    ["c", "b"],
    ["a", "-1"],
    ["aaaaa", "aaaa"],
  ])("example %#", (input, expected) => {
    const actual = main(input).toString();
    if (input == "a") {
      expect(actual).toBe("-1");
    } else {
      expect(actual < input).toBeTruthy();
    }
  });
}
