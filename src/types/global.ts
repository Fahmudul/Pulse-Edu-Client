export type UserType = {
  _id: string;
  name: string;
  email: string;
  password?: string; // Optional
  role: "admin" | "user";
  createdAt: string;
  updatedAt: string;
  __v: number;
};
