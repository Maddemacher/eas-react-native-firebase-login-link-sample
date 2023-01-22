export const useEmulator = jest.fn();

const isSignInWithEmailLink = jest.fn();
const signInWithEmailLink = jest.fn();

export default () => ({
  useEmulator,
  currentUser: null,
  isSignInWithEmailLink,
  signInWithEmailLink
});
