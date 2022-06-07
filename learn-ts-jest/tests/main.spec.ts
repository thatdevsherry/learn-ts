import sum from "../src/main";

test("test sum", () => {
  expect(sum(1, 2)).toBe(3);
});

test("test 2", () => {
  expect(sum(1, 100)).toBeLessThan(200);
});
