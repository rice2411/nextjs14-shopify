import { setCookie } from "cookies-next";

export function setUser(user: any) {
  setCookie("auth", JSON.stringify(user));
  return user;
}
