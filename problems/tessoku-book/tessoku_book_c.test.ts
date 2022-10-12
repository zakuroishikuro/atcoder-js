// A03 - Two Cards
// https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_c
// 2022-10-01T14:27:37.653Z

export function main(input: string) {
  const [[_n, _k], pList, qList] = input.split(/\n/).map((r) => r.split(/\s/).map(Number));

  for (const p of pList) {
    for (const q of qList) {
      if (p + q == _k) return "Yes";
    }
  }

  return "No";
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["3 100\n17 57 99\n10 36 53", "No"],
    ["5 53\n10 20 30 40 50\n1 2 3 4 5", "Yes"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
