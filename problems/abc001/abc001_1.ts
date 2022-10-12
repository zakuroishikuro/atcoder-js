// A - 積雪深差
// https://atcoder.jp/contests/abc001/tasks/abc001_1
// 2022-09-28T14:02:53.981Z

function main(input: string) {
  const [h1, h2] = input.split(/\s/).map(Number);
  return h1 - h2;
}

if (process.env.NODE_ENV != "test")
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
else {
  test.each([
    ["15\n10", "5"],
    ["0\n0", "0"],
    ["5\n20", "-15"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
