// /*subject*/
// /*url*/
// /*timestamp*/

// スタック上限拡張
if (process.execArgv.every((a) => !a.includes("--stack-size="))) {
  require("child_process").execFileSync(process.argv0, ["--stack-size=99900", ...process.execArgv, __filename], { stdio: "inherit" });
  process.exit(0);
}

export function main(input: string): number | string {
  const [A, B] = input.split(/\s/).map(Number);
  return input;
}

if (process.env.NODE_ENV !== "test") console.log(main(require("fs").readFileSync(0, "utf8").trim()));

// テスト
if (process.env.NODE_ENV === "test") {
  [
    /*examples*/
  ].forEach(([input, e], i) => {
    const a = main(input).toString();
    const failed = a !== e;
    console.log(`example #${i}: `, failed ? "failed !" : "success !");
    if (failed) console.error(JSON.stringify({ input, e, a }, null, "  "));
  });
}
