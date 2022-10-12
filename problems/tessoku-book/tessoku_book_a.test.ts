// A01 - The First Problem
// https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_a
// 2022-10-01T09:24:35.236Z

export function main(input: string) {
  return (+input) ** 2;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["2", "4"],
    ["8", "64"],
    ["100", "10000"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
