// A - Good morning
// https://atcoder.jp/contests/abc245/tasks/abc245_a
// 2022-10-27T13:31:07.642Z

export function main(input: string) {
  const [A, B, C, D] = input.split(/\s/).map(Number);
  return A * 60 + B <= C * 60 + D ? "Takahashi" : "Aoki";
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["7 0 6 30", "Aoki"],
    ["7 30 7 30", "Takahashi"],
    ["0 0 23 59", "Takahashi"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
