const Person = require("./person.js");
describe("test para la clase person", () => {
  let person;
  beforeEach(() => {
    person = new Person("Nicolas", 59, 1.7);
  });
  test("should return down", () => {
    person.weight = 45;
    const imc = person.calcIMC();
    expect(imc).toBe("down");
  });

  test("should return normal", () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe("normal");
  });
});
