import { cookies } from "next/headers";

export function getUser() {
  if (typeof cookies().get("auth") !== "undefined") {
    return JSON.parse(cookies().get("auth")?.value || "");
  }
  return "";
}
