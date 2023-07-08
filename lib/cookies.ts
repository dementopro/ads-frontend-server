import { cookies } from "next/headers";

export function getCookie(key: string) {
  return cookies().get(key)?.value
}
