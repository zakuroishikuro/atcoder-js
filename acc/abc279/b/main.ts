export function main(input: string): number | string {
  const rows = input.split(/\n/).map((r) => r.split(/\s/));
  const [H, W] = rows[0].map(Number);
  const S = rows.slice(1, 1 + H + 1);
  const T = rows.slice(1 + H + 1);

  const sSharp = [];
  const tSharp = [];
  for (let x = 0; x < W; x++) {
    let sCnt = 0;
    let tCnt = 0;
    for (let y = 0; y < H; y++) {
      if (S[y][x] == "#") sCnt++;
      if (T[y][x] == "#") tCnt++;
    }
    sSharp.push(sCnt);
    tSharp.push(tCnt);
  }
  sSharp.sort((a,b)=>a - b);
  tSharp.sort((a,b)=>a - b);

  for (let x = 0; x < W; x++) {
    const s = sSharp[x];
    const t = tSharp[t];
    if (s !== t) return "No";
  }
  return "Yes";
}

if (__dirname.includes("imojudge")) console.log(main(require("fs").readFileSync(0, "utf8").trim()));
// === test ===
else {
  (async () => {
    const { readFileSync, readdirSync } = await import("fs");
    const dir = `${__dirname}/tests`;
    const examples: { [name: string]: { _in?: string; _out?: string } } = {};
    for (const f of readdirSync(dir)) {
      const [name, ext] = f.split(".");
      if (ext == "in" || ext == "out") {
        if (!(name in examples)) examples[name] = {};
        examples[name]["_" + ext] = readFileSync(`${dir}/${f}`, "utf-8");
      }
    }
    for (const [name, { _in, _out }] of Object.entries(examples)) {
      const input = _in!.trim();
      const expected = _out!.trim();
      const actual = main(input).toString();
      if (actual == expected) {
        console.log(`${name}: success !`);
      } else {
        console.log(`${name}: failed !`);
        console.error(
          Object.entries({ input, expected, actual })
            .flatMap(([k, v]) => [`--- ${k} ---`, v])
            .join("\n") + "\n------\n",
        );
      }
    }
  })();
}
