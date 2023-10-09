// Import necessary modules and constants
import { SUCCESS_CODE } from "@/data/constant";
import { isUserLogin, onLogin, onLogout } from "@/lib/auth";
import { calculateExpireDays } from "@/lib/date";
import { Account, QueryAccountResp } from "@/types/account";
import { createContext, useEffect, useState } from "react";
import { getCookie } from "@/lib/cookies";
import { useAuthContext } from "./auth";

// Create a context for managing user account-related data
export const AccountContext = createContext<{
  totalCredits: number;
  isSubscribed: boolean;
  trialDateAt: string;
  nextPage: string;
  creditInfo:boolean;
  setNextPage:(nextPage:string) => void;
  setSelectedPlan:(selectedPlan:number) => void;
  selectedPlan:number;
  setCreditInfo:(creditInfo:boolean) => void;
  setCredits: (credits: number) => void;
  setTrialDays: (trialDays: number) => void;
  setTotalCredits: (totalCredits: number) => void;
  setIsSubscribed: (isSubscribed: boolean) => void;
  updateAccount: () => void;
  setTrialDateAt: (trialDateAt: string) => void;
} & Account>({
  isLogin: false,
  planId: 0,
  credits: 0,
  trialDays: 0,
  totalCredits: 0,
  isSubscribed: false,
  creditInfo: false,
  trialDateAt: '',
  nextPage: "",
  selectedPlan: -1,
  setCredits: () => { },
  setTrialDays: () => { },
  setTotalCredits: () => { },
  setIsSubscribed: () => { },
  setTrialDateAt: () => { },
  setSelectedPlan:() => {},
  setCreditInfo:()=>{},
  setNextPage:() => {},
  updateAccount: () => { },
});

// Create an AccountProvider component
export const AccountProvider = ({ children }: { children: React.ReactNode }) => {

  // Define state variables to manage user account data
  const [planId, setPlanId] = useState(0)
  const [credits, setCredits] = useState(0)
  const [trialDays, setTrialDays] = useState(0)
  const [totalCredits, setTotalCredits] = useState(10)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [trialDateAt, setTrialDateAt] = useState('')
  const [isLogin, setIsLogin] = useState(false)
  const [creditInfo, setCreditInfo] = useState(false)
  const [nextPage, setNextPage] = useState("")
  const [selectedPlan, setSelectedPlan] = useState(-1)

  const {loading, user} = useAuthContext ()
  // }, [])

  useEffect (()=>{
    if (user) {
      setIsLogin (true)
      updateAccount ()
    } else {
      setIsLogin (false)
    }
  },[loading, user])

  // Function to fetch and update user account data
  async function updateAccount() {
    if (!isLogin) return
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/fapi/inquiry_subscription_api`, {
        method: 'GET',
      })
      if (response.ok) {
        const data: QueryAccountResp = await response.json()
        if (data.status === SUCCESS_CODE) {
          if (data.data) {
            const {
              credit_num,
              subscribe_end_time,
              subscription_plan_id,
              subscription_status,
              credit_info
            } = data.data
            setPlanId(subscription_plan_id)
            setTrialDays(calculateExpireDays(subscribe_end_time))
            setIsSubscribed(subscription_status === 'active' ? true : false)
            setCredits(credit_num || 0)
            setCreditInfo(credit_info)
            setTrialDateAt(new Date(subscribe_end_time * 1000).toLocaleDateString())
          } else {
            setIsSubscribed(false)
            setTrialDays(0)
            setPlanId(0)
            setCredits(0)
          }
        } else {
          console.log(data)
        }
      } else {
        console.log(response.statusText)
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  // Provide the account data through the context to child components
  return (
    <AccountContext.Provider value={{
      credits, setCredits,
      trialDays, setTrialDays,
      totalCredits, setTotalCredits,
      isSubscribed, setIsSubscribed,
      planId, updateAccount,
      trialDateAt, setTrialDateAt,
      isLogin, creditInfo, setCreditInfo,nextPage,
      setNextPage, selectedPlan, setSelectedPlan
    }}>
      {children}
    </AccountContext.Provider>
  )
}

