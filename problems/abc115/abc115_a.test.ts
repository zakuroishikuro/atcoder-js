// A - Christmas Eve Eve Eve
// https://atcoder.jp/contests/abc115/tasks/abc115_a
// 2022-09-25T08:41:07.415Z

export function main(input: string) {
  return "Christmas" + " Eve".repeat(25 - +input);
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["25", "Christmas"],
    ["22", "Christmas Eve Eve Eve"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
