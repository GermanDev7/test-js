const { sum, mult, rest, div } = require("./math");

describe("pruebas math", () => {
  describe("prueba suma", () => {
    test("adds 1 + 3 should be 4", () => {
      const rta = sum(1, 3);
      expect(rta).toBe(4);
    });
  });
  describe("prueba resta", () => {
    test("rest 3-1 should be 2", () => {
      const rta = rest(3, 1);
      expect(rta).toBe(2);
    });
  });
  describe("prueba multiplicacion", () => {
    test("mult 1 * 3 should be 3", () => {
      const rta = mult(1, 3);
      expect(rta).toBe(3);
    });
  });
  describe("prueba division", () => {
    test("divide 3/1 should be 3", () => {
      const rta = div(3, 1);
      expect(rta).toBe(3);
      const rta2 = div(5, 2);
      expect(rta2).toBe(2.5);
      const rta3 = div(5, 0);
      expect(rta3).toBe(null);
    });
  });
});
