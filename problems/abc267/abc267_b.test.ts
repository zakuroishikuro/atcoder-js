// B - Split?
// https://atcoder.jp/contests/abc267/tasks/abc267_b
// 2022-09-29T14:50:09.071Z

export function main(s: string) {
  return !+s[0] && [s[6], s[3], +s[1] | +s[7], +s[0] | +s[4], +s[2] | +s[8], +s[5], s[9]].join("").match(/10+1/) ? "Yes" : "No";
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["0101110101", "Yes"],
    ["0100101001", "Yes"],
    ["0000100110", "No"],
    ["1101110101", "No"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
