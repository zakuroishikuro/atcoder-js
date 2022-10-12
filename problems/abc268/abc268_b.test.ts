// B - Prefix?
// https://atcoder.jp/contests/abc268/tasks/abc268_b
// 2022-09-23T07:49:28.330Z
//Object.getOwnPropertyNames(Math).forEach((n) => globalThis[n] = Math[n]);

export function main(input: string) {
  const [s, t] = input.split(/\s/);
  return t.startsWith(s) ? "Yes" : "No";
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["atco\natcoder", "Yes"],
    ["code\natcoder", "No"],
    ["abc\nabc", "Yes"],
    ["aaaa\naa", "No"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
