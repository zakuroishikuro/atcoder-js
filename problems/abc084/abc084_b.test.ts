// B - Postal Code
// https://atcoder.jp/contests/abc084/tasks/abc084_b
// 2022-09-23T04:06:21.521Z
//Object.getOwnPropertyNames(Math).forEach((n) => globalThis[n] = Math[n]);

export function main(input: string) {
  const [a, b, s] = input.split(/\s/);
  return new RegExp(`^\\d{${a}}-\\d{${b}}$`).test(s) ? "Yes" : "No";
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["3 4\n269-6650", "Yes"],
    ["1 1\n---", "No"],
    ["1 2\n7444", "No"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
