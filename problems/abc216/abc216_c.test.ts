// C - Many Balls
// https://atcoder.jp/contests/abc216/tasks/abc216_c
// 2022-10-20T15:00:13.199Z

export function main(input: string) {
  let N = BigInt(input);

  let spell = "";
  while (N > 1) {
    if (N & 1n) {
      spell = "A" + spell;
      N--;
    } else {
      N >>= 1n;
      spell = "B" + spell;
    }
  }

  return "A" + spell;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["5", "AABA"],
    ["14", "BBABBAAAB"],
  ])("example %#", (input, expected) => {
    const actual = main(input).toString();
    let result = 0n;
    for (const c of actual) {
      if (c == "A") {
        result++;
      } else {
        result <<= 1n;
      }
    }
    expect(result.toString()).toBe(input);
  });
}
