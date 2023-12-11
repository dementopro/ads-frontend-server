"use client"

import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

import LoadingSpin from "@/app/planning/LoadingSpin";

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
    <div className="w-screen h-screen absolute left-0 top-0 bg-white flex items-center justify-center">
      <LoadingSpin />
      <p className="text-xl text-primary-purple font-bold pt-[70px]">
        Granting Access
      </p>
    </div>
  );
};

export default SignInPage;
