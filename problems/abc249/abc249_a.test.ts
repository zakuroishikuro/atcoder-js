// A - Jogging
// https://atcoder.jp/contests/abc249/tasks/abc249_a
// 2022-10-27T13:01:25.571Z

const calc = (a, b, c, x) => {
  const t = a + c;
  const quo = Math.floor(x / t);
  const mod = x % t;
  return (quo * a + Math.min(a, mod)) * b;
};

export function main(input: string) {
  const [A, B, C, D, E, F, X] = input.split(/\s/).map(Number);
  const tak = calc(A, B, C, X);
  const aok = calc(D, E, F, X);

  if (tak < aok) return "Aoki";
  if (tak > aok) return "Takahashi";
  return "Draw";
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["4 3 3 6 2 5 10", "Takahashi"],
    ["3 1 4 1 5 9 2", "Aoki"],
    ["1 1 1 1 1 1 1", "Draw"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
