// C - POW
// https://atcoder.jp/contests/abc205/tasks/abc205_c
// 2022-10-18T13:34:36.605Z

export function _main(input: string) {
  const [A, B, C] = input.split(/\s/).map(BigInt);
  // もちろんダメ
  const n = A ** C;
  const m = B ** C;
  if (n < m) return "<";
  if (n > m) return ">";
  return "=";
}

export function main(input: string) {
  let [A, B, C] = input.split(/\s/).map(Number);
  if (C % 2 == 0) [A, B] = [A, B].map(Math.abs);
  return "<=>"[Math.sign(A - B) + 1];
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["3 2 4", ">"],
    ["-7 7 2", "="],
    ["-8 6 3", "<"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
