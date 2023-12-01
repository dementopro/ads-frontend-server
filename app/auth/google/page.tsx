"use client"

import { signIn, useSession } from "next-auth/react";
import { useContext, useEffect } from "react";

import { AccountContext } from '@/context/account';

const SignInPage = () => {
    const { data: session, status } = useSession();
    const { isGoogleAnalyticsDone, setIsGoogleAnalyticsDone } = useContext(AccountContext);

    useEffect(() => {
      if (!(status === "loading") && !session) void signIn("google");
      if (session) {
        window.close();
        if (isGoogleAnalyticsDone < 0)
          setIsGoogleAnalyticsDone(0);
      }
    }, [isGoogleAnalyticsDone, session, setIsGoogleAnalyticsDone, status]);

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
