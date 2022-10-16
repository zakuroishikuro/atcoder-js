// A - Candy Distribution Again
// https://atcoder.jp/contests/agc027/tasks/agc027_a
// 2022-10-16T15:41:27.001Z

export function main(input: string) {
  const [N, X, ...A] = input.split(/\s/).map(Number);
  A.sort((a, b) => b - a); //降順ソート (Array#shiftしてもいいけどO(N)って聞いたからArray#popでO(1)にしたいので...)

  let x = X;
  while (A.length > 0) {
    const n = A.pop();
    if (x >= n) {
      x -= n;
    } else {
      A.push(n); //もどす(無駄)
      break;
    }
  }

  // キャンディは配り切らなければいけないので、
  // この時点で配り切ってる場合は一人に犠牲になってもらう必要がある
  // キャンディが残ってる場合は一人に全て背負わせるので、全員に配ることが出来ていた場合は0人でなく一人にする
  
  const Y = x > 0 ? Math.max(1, A.length) : A.length;

  return N - Y;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["3 70\n20 30 10", "2"],
    ["3 10\n20 30 10", "1"],
    ["4 1111\n1 10 100 1000", "4"],
    ["2 10\n20 20", "0"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
