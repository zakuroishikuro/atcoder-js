// C - AB Substrings
// https://atcoder.jp/contests/diverta2019/tasks/diverta2019_c
// 2022-09-25T05:36:55.167Z

function main(input = "") {
  let _ab_ = 0;
  let b__a = 0;
  let ___a = 0;
  let b___ = 0;

  for (const s of input.split(/\n/).slice(1)) {
    const a = s.endsWith("A");
    const b = s.startsWith("B");

    _ab_ += (s.match(/AB/gi) || []).length;
    b__a += a & b;
    ___a += a & !b;
    b___ += !a & b;
  }

  if (___a == 0 && b___ == 0) {
    return _ab_ + Math.max(b__a - 1, 0);
  } else {
    return _ab_ + b__a + Math.min(___a, b___);
  }
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  const examples = [
    ["3\nABCA\nXBAZ\nBAD", "2"],
    ["9\nBEWPVCRWH\nZZNQYIJX\nBAVREA\nPA\nHJMYITEOX\nBCJHMRMNK\nBP\nQVFABZ\nPRGKSPUNA", "4"],
    ["7\nRABYBBE\nJOZ\nBMHQUVA\nBPA\nISU\nMCMABAOBHZ\nSZMEHMA", "4"],
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
