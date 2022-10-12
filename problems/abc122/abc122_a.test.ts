// A - Double Helix
// https://atcoder.jp/contests/abc122/tasks/abc122_a
// 2022-09-24T04:21:27.816Z
//Object.getOwnPropertyNames(Math).forEach((n) => globalThis[n] = Math[n]);

export function main(input: string) {
  return { A: "T", T: "A", C: "G", G: "C" }[input];
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["A", "T"],
    ["G", "C"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
