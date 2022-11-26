
export function main(input: string): number | string {
  const [A, B] = input.split(/\s/).map(BigInt);

  const MAX = 1000n;

  const fn = (bCnt: bigint) => {
    const time = bCnt * B;
    const g = 1n + bCnt;
    const result = Number(time) + Number(A) / Math.sqrt(Number(g));
    console.log(bCnt, time, g, result);
    return result;
  };

  const comp = (a: bigint, b: bigint): boolean => {
    const aResult = fn(a);
    const bResult = fn(b);
    return aResult > bResult;
  };

  let prevMid;
  const binarySearch = (value: bigint) => {
    let left = -1n;
    let right = MAX;
    while (left <= right) {
      const mid = left + (right - left) / 2n;
      if (mid === prevMid) return mid;
      prevMid = mid;
      if (comp(mid, value)) right = mid;
      else left = mid;
    }
    return right;
  };

  const res = binarySearch(0n);
  console.log(res, fn(res));

  return fn(res);
}

if (__dirname.includes("imojudge")) console.log(main(require("fs").readFileSync(0, "utf8").trim()));
// === test ===
else {
  (async () => {
    const filter = /1/;
    const { readFileSync, readdirSync } = await import("fs");
    const dir = `${__dirname}/tests`;
    const examples: { [name: string]: { _in?: string; _out?: string } } = {};
    for (const f of readdirSync(dir)) {
      if (!filter.test(f)) continue;
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
