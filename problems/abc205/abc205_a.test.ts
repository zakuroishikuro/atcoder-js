// A - kcal
// https://atcoder.jp/contests/abc205/tasks/abc205_a
// 2022-10-18T12:27:46.065Z

export function main(input: string) {
  const [A, B] = input.split(/\s/).map(Number);

  return A * B / 100;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["45 200","90"],["37 450","166.5"],["0 1000","0"],["50 0","0"]
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
