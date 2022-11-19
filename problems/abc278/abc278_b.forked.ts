// B - Misjudge the Time
// https://atcoder.jp/contests/abc278/tasks/abc278_b
// 2022-11-19T12:05:42.045Z

// スタック上限拡張
if (process.execArgv.every((a) => !a.includes("--stack-size="))) {
  require("child_process").execFileSync(process.argv0, ["--stack-size=99900", ...process.execArgv, __filename], { stdio: "inherit" });
  process.exit(0);
}

export function main(input: string): number | string {
  const [H, M] = input.split(/\s/).map(Number);

  let h = H;
  let m = M;
  while (true) {
    const [h1, h2] = h.toString().padStart(2, "0");
    const [m1, m2] = m.toString().padStart(2, "0");

    const hh = Number(`${h1}${m1}`);
    const mm = Number(`${h2}${m2}`);
    if (hh <= 23 && mm <= 59) {
      return [h, m].join(" ");
    }

    if (m < 60) {
      m++;
    } else {
      h = (h + 1) % 24;
      m = m % 60;
    }
  }
}

if (process.env.NODE_ENV !== "test") console.log(main(require("fs").readFileSync(0, "utf8").trim()));

// テスト
if (process.env.NODE_ENV === "test") {
  [
    ["1 23", "1 23"],
    ["19 57", "20 0"],
    ["20 40", "21 0"],
  ].forEach(([input, e], i) => {
    const a = main(input).toString();
    const failed = a !== e;
    console.log(`example #${i}: `, failed ? "failed !" : "success !");
    if (failed) console.error(JSON.stringify({ input, e, a }, null, "  "));
  });
}
