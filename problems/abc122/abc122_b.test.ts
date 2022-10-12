// B - ATCoder
// https://atcoder.jp/contests/abc122/tasks/abc122_b
// 2022-09-24T04:24:22.588Z
//Object.getOwnPropertyNames(Math).forEach((n) => globalThis[n] = Math[n]);

export function main(input: string) {
  return Math.max(...(input.match(/[ACGT]+/g) || [""]).map((s) => s.length));
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["ATCODER", "3"],
    ["HATAGAYA", "5"],
    ["SHINJUKU", "0"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
