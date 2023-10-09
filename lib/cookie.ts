"use server";

import { cookies } from "next/headers";

export async function setCookie(params:any) {
    try {
        if (!cookies) {
            throw new Error ('no parameter provided')
        }
        Object.keys (params).forEach (key=>{
            cookies().set(key, params[key]);
        })
    } catch (error) {
        console.log (error)
    }
}