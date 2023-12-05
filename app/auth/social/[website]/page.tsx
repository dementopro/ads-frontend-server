"use client"

import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

const SignInPage = ({ params }: { params: { website: string } }) => {
  const { data: session, status } = useSession();
  const website: string = params.website;

  useEffect(() => {
    console.log("session: ", status, session, website);
    if (!(status === "loading") && !session) void signIn(website);
    if (session && (session as any)[website] && status === "authenticated") {
      window.opener.postMessage({ event: "close", data: `Closing ${website} auth window` }, process.env.NEXT_PUBLIC_FRONTEND_URL as string);
      setTimeout(() => {
        window.close();
      }, 100);
    }
  }, [session, status, website]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        left: 0,
        top: 0,
        background: "white",
      }}
    ></div>
  );
};

export default SignInPage;
