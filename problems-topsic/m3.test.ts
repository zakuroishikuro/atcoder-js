// /*subject*/
// /*url*/
// /*timestamp*/

import { Vector, lower_bound } from "tstl";

export function main(input: string) {
  const [[N, MATH_W, ENG_W], ...rows] = input.split(/\n/).map((r) => r.split(/\s/).map(BigInt));
  const students = rows.map(([math, eng]) => -(math * MATH_W + eng * ENG_W));
  const vec = new Vector(students.slice().sort((a, b) => Number(a - b)));
  return students.map((pt) => lower_bound(vec.begin(), vec.end(), pt).index() + 1).join("\n");
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    [`3 1 2\n50 70\n80 50\n40 80`, `2\n3\n1`],
    [`3 10 20\n50 50\n50 50\n50 50`, `1\n1\n1`],
    [
      `10 5610 8612\n613 3109\n7753 8560\n5880 6054\n8230 3461\n5845 6648\n9883 9308\n3757 5725\n7017 5629\n9392 5702\n8252 6439`,
      `10\n2\n7\n8\n5\n1\n9\n6\n3\n4`,
    ],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
