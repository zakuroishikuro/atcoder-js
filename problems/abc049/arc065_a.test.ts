// C - 白昼夢
// https://atcoder.jp/contests/abc049/tasks/arc065_a
// 2022-09-30T13:09:34.131Z

/*
export function main(input: string) {
  const r = /(dreamer|dream|eraser|erase)$/;
  while (r.test(input)) input = input.replace(r, "");
  return input ? "NO" : "YES";
}*/

export function main(input: string) {
  const words = ["dream", "dreamer", "erase", "eraser"];

  const dp = [true, ...Array(input.length - 1)];

  for (let i = 1; i <= input.length; i++) {
    for (const word of words) {
      if (!dp[i - word.length]) continue;
      const prev = input.slice(i - word.length, i);
      if (word == prev) dp[i] = true;
    }
  }

  return dp.pop() ? "YES" : "NO";
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["erasedream", "YES"],
    ["dreameraser", "YES"],
    ["dreamerer", "NO"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
