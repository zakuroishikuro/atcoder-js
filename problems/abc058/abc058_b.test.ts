// B - ∵∴∵
// https://atcoder.jp/contests/abc058/tasks/abc058_b
// 2022-10-14T14:58:18.472Z

export function main(input: string) {
  const [O, E] = input.split(/\s/);
  return [...O].reduce((a, b, i) => a + b + (E[i] || ""), "");
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["xyz\nabc", "xaybzc"],
    ["atcoderbeginnercontest\natcoderregularcontest", "aattccooddeerrbreeggiunlnaerrccoonntteesstt"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
