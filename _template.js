function main(input) {

}

if (require.main == module) {
  console.log(main(require("fs").readFileSync(0, "utf-8").trim()))
} else {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
} 