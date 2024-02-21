//setup y teardowns
describe("Set", () => {
  beforeAll(() => {
    //tambien llamado hooks
    console.log("Levante una bd");
    //up db
  });

  afterAll(() => {
    //tambien llamado hooks
    console.log("down una bd");
    //down db
  });

  beforeEach(()=>{
    //corre antes de cada caso de prueba
    console.log('funciona todo')
  })

  afterEach(()=>{
    //corre despues de cada caso de prueba
    console.log('funciona todo')
  })
  test("case1", () => {
    expect(1 + 1).toBe(2);
    console.log("case1");
  });
  test("case 2", () => {
    expect(1 + 3).toBe(4);
  });

  describe("other group", () => {
    beforeAll(() => {
      //tambien llamado hooks
      console.log("Levante una bd2");
      //up db
    });
    test("case3", () => {
      expect(1 + 5).toBe(6);
    });
    test("case4", () => {
      expect(1 + 0).toBe(1);
    });
  });
});
