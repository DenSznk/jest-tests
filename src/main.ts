type Users = {
  name: string;
  age: number;
  isAdmin: boolean;
};

export const userList: Users[] = [];

export const checkAge = (users: Users[], age: number) => {
  return users.every((user) => user.age === age);
};

export const getAdminsList = (users: Users[]) => {
  return users.filter((user) => user.isAdmin);
};

export const addUser = (user: Users) => {
  userList.push(user);
};

export const removeUser = (users: Users[], name: string) => {
  const index = users.findIndex((user) => user.name === name);
  if (index !== -1) {
    users.splice(index, 1)
  } else {
    return console.log("User not found");
  }
};
