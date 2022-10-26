// A - A to Z String 2
// https://atcoder.jp/contests/abc257/tasks/abc257_a
// 2022-10-26T13:57:52.225Z

export function main(input: string) {
  const [N, X] = input.split(/\s/).map(Number);
  const idx = Math.ceil(X / N) - 1;
  return String.fromCodePoint("A".codePointAt(0) + idx);
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["1 3","C"],["2 12","F"]
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
