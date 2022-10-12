// B - AcCepted
// https://atcoder.jp/contests/abc104/tasks/abc104_b
// 2022-09-23T03:49:20.043Z
//Object.getOwnPropertyNames(Math).forEach((n) => globalThis[n] = Math[n]);

export function main(input: string) {
  return /^A[a-z]+C[a-z]+$/.test(input) ? "AC" : "WA";
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["AtCoder", "AC"],
    ["ACoder", "WA"],
    ["AcycliC", "WA"],
    ["AtCoCo", "WA"],
    ["Atcoder", "WA"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
