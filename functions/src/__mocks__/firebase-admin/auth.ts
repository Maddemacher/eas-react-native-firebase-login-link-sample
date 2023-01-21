// import { decode } from "jsonwebtoken";
import faker from "faker";

const verifyIdTokenMock = jest.fn(async (token: string) => {
  // const decodedToken = decode(token);
  // return Promise.resolve(decodedToken);
  return Promise.resolve("Hej");
});

const createUserMock = jest.fn();
const deleteUserMock = jest.fn();
const updateUserMock = jest.fn();
const getUserMock = jest.fn();
const getUsersMock = jest.fn();
const setCustomUserClaims = jest.fn();
const generatePasswordResetLink = jest.fn(async () => faker.internet.url());
const generateEmailVerificationLink = jest.fn(async () => faker.internet.url());
const generateSignInWithEmailLink = jest.fn(async () => faker.internet.url());

const auth = {
  verifyIdToken: verifyIdTokenMock,
  createUser: createUserMock,
  deleteUser: deleteUserMock,
  updateUser: updateUserMock,
  getUser: getUserMock,
  getUsers: getUsersMock,
  setCustomUserClaims,
  generatePasswordResetLink,
  generateEmailVerificationLink,
  generateSignInWithEmailLink,
};

export const getAuth = jest.fn(() => auth);
