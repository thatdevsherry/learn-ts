const testFunction = require("../src/main-js");
test("should pass in JS", () => {
  expect(testFunction()).toBe(5);
});
