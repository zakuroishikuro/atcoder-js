// C - 白昼夢
// https://atcoder.jp/contests/abc049/tasks/arc065_a
// 2022-09-30T13:09:34.131Z

/*
function _main(input = "") {
  const r = /(dreamer|dream|eraser|erase)$/;
  while (r.test(input)) input = input.replace(r, "");
  return input ? "NO" : "YES";
}*/

function main(input = "") {
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

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  const examples = [
    ["erasedream", "YES"],
    ["dreameraser", "YES"],
    ["dreamerer", "NO"],
  ];

  if (process.env.NEKO == "cat") {
    const idx = process.argv[2] || 1;
    const input = examples[idx - 1][0];
    console.log(`----- 🐈 example #${idx}:\n${input}\n----- output:\n${main(input)}\n-----\n`);
  } else {
    examples.forEach(([input, output], i) => {
      test(`example #${i + 1}`, () => {
        expect(`${main(input)}`).toBe(output);
      });
    });

    test("stub", () => {
      expect().toBe();
    });
  }
}
