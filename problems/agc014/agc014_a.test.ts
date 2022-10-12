// A - Cookie Exchanges
// https://atcoder.jp/contests/agc014/tasks/agc014_a
// 2022-10-10T06:40:18.222Z

const sim = (a: number, b: number, c: number) => {
  const isEven = (n) => (n & 1) == 0;

  let cnt = 0;
  while ([a, b, c].every(isEven)) {
    [a, b, c] = [b + c, a + c, a + b].map((n) => n / 2);
    cnt++;
  }
  return cnt;
};

export function main(input: string) {
  const [A, B, C] = input.split(/\s/).map(Number);
  if (A == B && A == C) {
    return A & 1 ? 0 : -1; //奇数なら0回。偶数なら無限ループなので-1。
  }

  // 鹿本で似たようなの読んだからめっちゃ数学的な考察してたけど普通にシミュレーションでいいらしい
  // 手で解いて、真ん中の数字は変わらなくて、左右の一回ごとの差が真ん中の半分になっていくのは分かった
  // だからO(logM)
  return sim(A, B, C);
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["4 12 20", "3"],
    ["14 14 14", "-1"],
    ["454 414 444", "1"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
