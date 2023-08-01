import { SUCCESS_CODE } from "@/data/constant";
import { calculateExpireDays } from "@/lib/date";
import { Account, QueryAccountResp } from "@/types/account";
import { createContext, useState } from "react";

export const AccountContext = createContext<{
  totalCredits: number;
  isSubscribed: boolean;
  setCredits: (credits: number) => void;
  setTrialDays: (trialDays: number) => void;
  setTotalCredits: (totalCredits: number) => void;
  setIsSubscribed: (isSubscribed: boolean) => void;
  updateAccount: () => void;
} & Account>({
  planId: 0,
  credits: 0,
  trialDays: 0,
  totalCredits: 0,
  isSubscribed: false,
  setCredits: () => { },
  setTrialDays: () => { },
  setTotalCredits: () => { },
  setIsSubscribed: () => { },
  updateAccount: () => { },
})

export const AccountProvider = ({ children }: { children: React.ReactNode }) => {

  const [planId, setPlanId] = useState(0)
  const [credits, setCredits] = useState(0)
  const [trialDays, setTrialDays] = useState(0)
  const [totalCredits, setTotalCredits] = useState(10)
  const [isSubscribed, setIsSubscribed] = useState(false)

  async function updateAccount() {
    try {
      const response = await fetch('/fapi/inquiry_subscription_api', {
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
              subscription_status
            } = data.data
            setPlanId(subscription_plan_id)
            setTrialDays(calculateExpireDays(subscribe_end_time))
            setIsSubscribed(subscription_status === 'cancel' ? false : true)
            setCredits(credit_num || 0)
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

  return (
    <AccountContext.Provider value={{
      credits, setCredits,
      trialDays, setTrialDays,
      totalCredits, setTotalCredits,
      isSubscribed, setIsSubscribed,
      planId, updateAccount
    }}>
      {children}
    </AccountContext.Provider>
  )
}

