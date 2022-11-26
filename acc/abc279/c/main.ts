export function main(input: string) {
  const rows = input.split(/\n/);
  const [H, W] = rows[0].split(/\s/).map(Number);

  const sCols = [];
  const tCols = [];
  for (let x = 0; x < W; x++) {
    let sChars = [];
    let tChars = [];
    for (let y = 0; y < H; y++) {
      const s = rows[1 + y][x];
      const t = rows[1 + H + y][x];
      sChars.push(s);
      tChars.push(t);
    }
    sCols.push(sChars.join(""));
    tCols.push(tChars.join(""));
  }
  sCols.sort();
  tCols.sort();

  for (let x = 0; x < W; x++) {
    const s = sCols[x];
    const t = tCols[x];
    if (s !== t) return "No";
  }
  return "Yes";
}

if (__dirname.includes("imojudge")) console.log(main(require("fs").readFileSync(0, "utf8").trim()));
// === test ===
else {
  const filter = /.*/;
  (async () => {
    const { readFileSync, readdirSync } = await import("fs");
    const dir = `${__dirname}/tests`;
    const examples: { [name: string]: { _in?: string; _out?: string } } = {};
    for (const f of readdirSync(dir)) {
      const [name, ext] = f.split(".");
      if (!filter.test(name)) continue;
      if (ext == "in" || ext == "out") {
        if (!(name in examples)) examples[name] = {};
        examples[name]["_" + ext] = readFileSync(`${dir}/${f}`, "utf-8");
      }
    }
    for (const [name, { _in, _out }] of Object.entries(examples)) {
      if (!filter.test(name)) continue;
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
