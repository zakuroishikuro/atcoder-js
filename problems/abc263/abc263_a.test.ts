// A - Full House
// https://atcoder.jp/contests/abc263/tasks/abc263_a
// 2022-10-15T16:30:30.019Z

export function main(input: string) {
  const cards = input.split(/\s/);
  return new Set(cards).size == 2 && cards.filter((c) => c == cards[0]).length & 2 ? "Yes" : "No";
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["1 2 1 2 1", "Yes"],
    ["1 2 1 2 1", "Yes"],
    ["12 12 11 1 2", "No"],

    ["1 1 1 1 1", "No"],
    ["1 1 2 1 1", "No"],
    ["1 2 1 2 1", "Yes"],
    ["1 2 2 2 1", "Yes"],
    ["2 2 2 2 1", "No"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
