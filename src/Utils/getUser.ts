"use server";

import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export interface IDecodedData {
  id: string;
  email: string;
  name: string;
  role: string;
  iat: number;
  exp: number;
}
export const getUser = async () => {
  const token = (await cookies()).get("accessToken")?.value;
  if (!token) return null;
  return jwtDecode(token!) as IDecodedData;
};
