// A04 - Binary Representation 1
// https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_d
// 2022-10-02T01:12:05.282Z

function main1(input = "") {
  return (+input).toString(2).padStart(10, 0);
}

function main2(input = "") {
  let n = +input;
  const bits = [];
  while (n > 0) {
    bits.unshift(n & 1);
    n >>= 1;
  }

  return bits.join("").padStart(10, 0);
}

function main3(input = "") {
  let n = +input;
  const bits = [];
  while (n > 0) {
    bits.unshift(n % 2);
    n = Math.floor(n / 2);
  }

  return bits.join("").padStart(10, 0);
}

function main(input = "") {
  let n = +input;

  let out = "";
  for (let i = 9; i >= 0; i--) {
    const wari = 1 << i;
    out += Math.floor(n / wari) % 2;
  }

  return out;
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  const examples = [
    ["13", "0000001101"],
    ["37", "0000100101"],
    ["1000", "1111101000"],
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
