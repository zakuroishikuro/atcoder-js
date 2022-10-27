// A - T-shirt
// https://atcoder.jp/contests/abc242/tasks/abc242_a
// 2022-10-27T13:36:36.723Z

export function main(input: string) {
  const [A, B, C, X] = input.split(/\s/).map(Number);
  if (X <= A) return 1;
  if (X <= B) return C / (B - A);
  return 0;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["30 500 20 103", "0.042553191489"],
    ["50 500 100 1", "1.000000000000"],
    ["1 2 1 1000", "0.000000000000"],
  ])("example %#", (input, expected) => {
    expect(main(input)).toBeCloseTo(parseFloat(expected));
  });
}
