// A - Horizon
// https://atcoder.jp/contests/abc239/tasks/abc239_a
// 2022-10-30T14:38:43.117Z

export function main(input: string) {
  const H = +input;

  return Math.sqrt(H * (12800000 + H));
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["333", "65287.907678222"],
    ["634", "90086.635834623"],
  ])("example %#", (input, expected) => {
    expect(main(input)).toBeCloseTo(parseFloat(expected));
  });
}
