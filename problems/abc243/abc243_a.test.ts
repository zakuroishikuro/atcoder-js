// A - Shampoo
// https://atcoder.jp/contests/abc243/tasks/abc243_a
// 2022-10-23T13:15:21.749Z

export function main(input: string) {
  const [v, a, b, c] = input.split(/\s/).map(Number);
  let rem = v % (a + b + c);
  if ((rem -= a) < 0) return "F";
  if ((rem -= b) < 0) return "M";
  if ((rem -= c) < 0) return "T";
  return "F";
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["25 10 11 12", "T"],
    ["30 10 10 10", "F"],
    ["100000 1 1 1", "M"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
