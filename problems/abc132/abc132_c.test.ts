// C - Divide the Problems
// https://atcoder.jp/contests/abc132/tasks/abc132_c
// 2022-10-10T13:59:40.554Z

export function main(input: string) {
  const [N, ...D] = input.split(/\s/).map(Number);

  D.sort((a, b) => a - b);
  const mid = Math.floor(D.length / 2);

  return Math.abs(D[mid - 1] - D[mid]);
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["6\n9 1 4 4 6 7", "2"],
    ["8\n9 1 14 5 5 4 4 14", "0"],
    ["14\n99592 10342 29105 78532 83018 11639 92015 77204 30914 21912 34519 80835 100000 1", "42685"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
