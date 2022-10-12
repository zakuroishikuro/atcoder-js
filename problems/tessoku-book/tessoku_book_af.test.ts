// A32 - Game 1
// https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_af
// 2022-10-08T11:03:22.739Z

export function main(input: string) {
  const [N, A, B] = input.split(/\s/).map(Number);

  const rem = N % (A + B);

  return rem <= A ? "Second" : "First";
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["8 2 3", "First"],
    ["6 2 3", "Second"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
