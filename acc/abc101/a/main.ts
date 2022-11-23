export function main(input: string): number | string {
  const plus = [...input].filter((op) => op === "+").length;
  const minus = input.length - plus;
  return plus - minus;
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
