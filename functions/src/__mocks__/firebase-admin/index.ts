const firebaseAdmin: any = jest.createMockFromModule("firebase-admin");

firebaseAdmin.initializeApp = (params: Record<string, unknown>, appName: string): Record<string, unknown> => {
  return {};
};

module.exports = firebaseAdmin;
