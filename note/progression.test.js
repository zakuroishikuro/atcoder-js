const {term, sum} = require("./progression.js")

test("term", ()=>{
  // term(index, [diff=1], [first=1])

  // index
  expect(term(1)).toBe(1);
  expect(term(2)).toBe(2);
  expect(term(3)).toBe(3);

  expect(term(0)).toBe(0);
  expect(term(-1)).toBe(-1);
  expect(term(-2)).toBe(-2);

  // diff(step)
  expect(term(1, 0)).toBe(1);
  expect(term(1, 1)).toBe(1);
  expect(term(1, 2)).toBe(1);
  expect(term(1, 3)).toBe(1);

  expect(term(5, 1)).toBe(5);  // 1, 2, 3,  4,  *5*
  expect(term(5, 2)).toBe(9);  // 1, 3, 5,  7,  *9*
  expect(term(5, 3)).toBe(13); // 1, 4, 7, 10, *13*

  expect(term(5, -1)).toBe(-3);  // 1,  0, -1, -2,  *-3*
  expect(term(5, -2)).toBe(-7);  // 1, -1, -3, -5,  *-7*
  expect(term(5, -3)).toBe(-11); // 1, -2, -5, -8, *-11*

  // first
  expect(term(1, 1, 1)).toBe(1);
  expect(term(1, 1, 2)).toBe(2);
  expect(term(1, 1, 3)).toBe(3); 

  expect(term(3, 1, 1)).toBe(3); // 1, 2, *3*
  expect(term(3, 1, 2)).toBe(4); // 2, 3, *4*
  expect(term(3, 1, 3)).toBe(5); // 3, 4, *5*

  expect(term(3, 3, 1)).toBe(7); // 1, 4, *7*
  expect(term(3, 3, 2)).toBe(8); // 2, 5, *8*
  expect(term(3, 3, 3)).toBe(9); // 3, 6, *9*

  expect(term(3, 1, -1)).toBe(1);  // -1,  0,  *1*
  expect(term(3, 1, -2)).toBe(0);  // -2, -1,  *0*
  expect(term(3, 1, -3)).toBe(-1); // -3, -2, *-1*
})

test("sum", () => {
  // sum(terms, step=1, first=step)

  // 1 ～ terms
  expect(sum(1)).toBe(1);
  expect(sum(2)).toBe(3);
  expect(sum(3)).toBe(6);
  expect(sum(4)).toBe(10);
  expect(sum(5)).toBe(15);
  expect(sum(6)).toBe(21);
  expect(sum(7)).toBe(28);
  expect(sum(8)).toBe(36);
  expect(sum(9)).toBe(45);
  expect(sum(10)).toBe(55);

  // step ～ 10, step n
  expect(sum(10)).toBe(55);
  expect(sum(10, 1)).toBe(55);
  expect(sum(10, 2)).toBe(30); // 2 + 4 + 6 + 8 + 10
  expect(sum(10, 3)).toBe(18); // 3 + 6 + 9
  expect(sum(10, 4)).toBe(12); // 4 + 8
  expect(sum(10, 5)).toBe(15); // 5 + 10
  expect(sum(10, 6)).toBe(6); // 6
  expect(sum(10, 7)).toBe(7);  // 7
  expect(sum(10, 8)).toBe(8);
  expect(sum(10, 9)).toBe(9);
  expect(sum(10, 10)).toBe(10);
  expect(sum(10, 11)).toBe(0); // out of bounds

  // n ～ 10, step 1
  expect(sum(10, 1)).toBe(55);
  expect(sum(10, 1, 1)).toBe(55);
  expect(sum(10, 1, 2)).toBe(65);
  expect(sum(10, 1, 3)).toBe(75);
  expect(sum(10, 1, 4)).toBe(85);
  expect(sum(10, 1, 5)).toBe(95);
  expect(sum(10, 1, 6)).toBe(105);
  expect(sum(10, 1, 7)).toBe(115);
  expect(sum(10, 1, 8)).toBe(125);
  expect(sum(10, 1, 9)).toBe(135);
  expect(sum(10, 1, 10)).toBe(145);
  expect(sum(10, 1, 11)).toBe(155);
});