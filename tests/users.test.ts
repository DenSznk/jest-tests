import {
  addUser,
  removeUser,
  getAdminsList,
  checkAge,
  userList,
} from "../src/main";

describe("User functions", () => {
  beforeEach(() => {
    userList.length = 0;
    addUser({ name: "Alice", age: 30, isAdmin: false });
    addUser({ name: "Bob", age: 30, isAdmin: true });
    addUser({ name: "Charlie", age: 30, isAdmin: false });
  });
  test("add users", () => {
    expect(userList.length).toBe(3);
  });
  test("Remove user from list", () => {
    removeUser(userList, "Bob");
    expect(userList.length).toBe(2);
    expect(userList.find((user) => user.name === "Bob")).toBe(undefined);
  });
  test("return admins", () => {
    expect(getAdminsList(userList).length).toBe(1);
    expect(getAdminsList(userList).find(user => user.name === "Bob")).toBeDefined()
  })
  test("check age" , () => {
    expect(checkAge(userList, 40)).toBeFalsy()
    expect(checkAge(userList, 30)).toBeTruthy()
  })
});


