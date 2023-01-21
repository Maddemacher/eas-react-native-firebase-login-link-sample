export {};

declare global {
  namespace Express {
    export interface User {
      uid: string;
    }

    export interface Request {
      user?: User;
    }
  }
}
