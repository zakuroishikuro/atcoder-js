// C - Manga
// https://atcoder.jp/contests/abc271/tasks/abc271_c
// 2022-10-01T12:08:02.003Z

function main(input = "") {
  const [_n, ...data] = input.split(/\s/).map(Number);

  data.sort((a, b) => a - b);

  let i = 0;
  let v = 0;
  let l = data.length;
  while (true) {
    if (i >= l) break;
    v++;
    const cur = data[i];
    if (cur == v) {
      i++;
    } else {
      if (l - i >= 2) {
        l -= 2;
      } else {
        v--;
        break;
      }
    }
  }

  return v;
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  const examples = [
    ["6\n1 2 4 6 7 271", "4"],
    ["10\n1 1 1 1 1 1 1 1 1 1", "5"],
    ["1\n5", "0"],

    ["5\n1 2 3 4 5", "5"],
    [`50\n${Array(100).fill(1).join(" ")}`, "50"],
    ["5\n1 3 5 7 13", "3"],
    ["5\n1 2 3 5 7 9 13 15", "6"],
    ["5\n1 2 3 5 7 9 13", "5"],
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
