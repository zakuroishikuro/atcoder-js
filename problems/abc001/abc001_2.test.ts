// B - 視程の通報
// https://atcoder.jp/contests/abc001/tasks/abc001_2
// 2022-09-28T14:07:51.982Z

function main(input: string) {
  const m = +input;
  if (m < 100) return "00";
  if (m <= 5_000) return `${m / 100}`.padStart(2, "0");
  if (m <= 30_000) return `${m / 1000 + 50}`;
  if (m <= 70_000) return `${(m / 1000 - 30) / 5 + 80}`;
  return 89;
}

if (require.main == module)
  console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());
else {
  test.each([
    ["15000", "65"],
    ["75000", "89"],
    ["200", "02"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
