// A - 居合を終え、青い絵を覆う
// https://atcoder.jp/contests/abc049/tasks/abc049_a
// 2022-09-30T13:06:08.384Z

export function main(input: string) {
  return "aiueo".includes(input) ? "vowel" : "consonant";
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["a", "vowel"],
    ["z", "consonant"],
    ["s", "consonant"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
