const BookService = require("./books.service");
const {  generateManyBook } = require("../fakes/book.fake");

const mockGetAll = jest.fn();

jest.mock("../lib/mongo.lib.js", () =>
  jest.fn().mockImplementation(() => ({
    getAll: mockGetAll,
    create: () => {},
  }))
);

describe("pruebas para bookservice", () => {
  let service;
  beforeEach(() => {
    service = new BookService();
    jest.clearAllMocks();
  });

  // describe("test for getBook", () => {
  //   test("should return a list book", async () => {
  //     //Arrange
  //     const fakeBooks = generateOneBook();
  //     mockGetAll.mockResolvedValue(fakeBooks);
  //     //Act

  //     const books = await service.getBooks({});
  //     console.log(books);

  //     //Assert
  //     expect(books.length).toEqual(fakeBooks.length);
  //     expect(mockGetAll).toHaveBeenCalled();
  //     expect(mockGetAll).toHaveBeenCalledTimes(1);
  //     expect(mockGetAll).toHaveBeenCalledWith("books", {});
  //   });
  // });
  describe("test for getBooks", () => {
    test("should return a list book", async () => {
      //Arrange
      const fakeBooks = generateManyBook(20);
      mockGetAll.mockResolvedValue(fakeBooks);
      //Act

      const books = await service.getBooks({});
      console.log(books);

      //Assert
      expect(books.length).toEqual(fakeBooks.length);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith("books", {});
    });
  });
});
