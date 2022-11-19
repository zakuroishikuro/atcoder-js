// A - Shift
// https://atcoder.jp/contests/abc278/tasks/abc278_a
// 2022-11-19T12:00:47.095Z

// スタック上限拡張
if (process.execArgv.every((a) => !a.includes("--stack-size="))) {
  require("child_process").execFileSync(process.argv0, ["--stack-size=99900", ...process.execArgv, __filename], { stdio: "inherit" });
  process.exit(0);
}

export function main(input: string): number | string {
  const [N, K, ...A] = input.split(/\s/).map(Number);
  return [...A.slice(K), ...Array(K).fill(0)].slice(0, N).join(" ");
}

if (process.env.NODE_ENV !== "test") console.log(main(require("fs").readFileSync(0, "utf8").trim()));

// テスト
if (process.env.NODE_ENV === "test") {
  [
    ["3 2\n2 7 8", "8 0 0"],
    ["3 4\n9 9 9", "0 0 0"],
    ["9 5\n1 2 3 4 5 6 7 8 9", "6 7 8 9 0 0 0 0 0"],
  ].forEach(([input, e], i) => {
    const a = main(input).toString();
    const failed = a !== e;
    console.log(`example #${i}: `, failed ? "failed !" : "success !");
    if (failed) console.error(JSON.stringify({ input, e, a }, null, "  "));
  });
}
