// C - Swappable
// https://atcoder.jp/contests/abc206/tasks/abc206_c
// 2022-10-24T10:50:55.680Z

// AtCoder 最速で緑になる 基礎・典型50問詳細解説
// 17 連想配列

export function main(input: string) {
  const [N, ...A] = input.split(/\s/).map(Number);

  const dict = {} as { [k: string]: number };
  for (const a of A) {
    dict[a] = dict[a] ? dict[a] + 1 : 1;
  }

  const combin = (x: number) => (x * (x - 1)) / 2;
  return Object.values(dict).reduce((ans, cnt) => ans - combin(cnt), combin(N));
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["3\n1 7 1", "2"],
    ["10\n1 10 100 1000 10000 100000 1000000 10000000 100000000 1000000000", "45"],
    ["20\n7 8 1 1 4 9 9 6 8 2 4 1 1 9 5 5 5 3 6 4", "173"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
