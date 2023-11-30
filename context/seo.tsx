import { Account, QueryAccountResp } from "@/types/account";
import { CompanyDetailForm, CompanyForm } from "@/types/planning";
import { createContext, useContext, useEffect, useState } from "react";
import { isUserLogin, onLogin, onLogout } from "@/lib/auth";
import { redirect, usePathname, useRouter } from 'next/navigation';

import { SUCCESS_CODE } from "@/data/constant";
import axios from '@/lib/axios';
import { calculateExpireDays } from "@/lib/date";
import { getCookie } from "@/lib/cookies";

// Import necessary modules and constants
export type SeoAnalysis = {
  url: string;
  warnings: Array<string>;
}

export type EmailOption = {
  characteristic: string;
  email_template: string;
  option_name: string;
  summary: string;
  template_subject_line: string;
}

export type EmailInstruction = {
  email_template_type: string;
  email_options: Array<EmailOption>;
}

// Create a context for managing user account-related data
export const SeoAnalyzerContext = createContext<{
  onpage: Array<SeoAnalysis>,
  offpage: Array<SeoAnalysis>,
  isLoadingOnpage: boolean,
  isLoadingOffpage: boolean,
  company: CompanyDetailForm,
  emailInstruction: EmailInstruction,
  setOnpage: (data: Array<SeoAnalysis>) => void,
  setOffpage: (data: Array<SeoAnalysis>) => void,
  setIsLoadingOnpage: (data: boolean) => void,
  setIsLoadingOffpage: (data: boolean) => void,
  setCompany: (data: CompanyDetailForm) => void,
  setEmailInstruction: (data: EmailInstruction) => void
}>({
  onpage: [],
  offpage: [],
  isLoadingOnpage: false,
  isLoadingOffpage: false,
  company: {
    name: '',
    website: '',
    description: '',
    customer_profile: '',
    target_audice: '',
    competitors:'',
    business_objectives: [],
    content_type: 'SEO',
    product_description: '',
    email: '',
    marketing_template: '',
    schedule: {}
  },
  emailInstruction: {
    email_options: [],
    email_template_type: ''
  },
  setOnpage: (data) => {},
  setOffpage: (data) => {},
  setIsLoadingOnpage: (data) => {},
  setIsLoadingOffpage: (data) => {},
  setCompany: (data) => {},
  setEmailInstruction: (data) => {}
});

export const useSeoAnalyzerContext = () => useContext(SeoAnalyzerContext);

// Create an AccountProvider component
export const SeoAnalyzerProvider = ({ children }: { children: React.ReactNode }) => {

  // Define state variables to manage user account data
  const [onpage, setOnpage] = useState<Array<SeoAnalysis>>([]);
  const [offpage, setOffpage] = useState<Array<SeoAnalysis>>([]);
  const [isLoadingOnpage, setIsLoadingOnpage] = useState<boolean>(false);
  const [isLoadingOffpage, setIsLoadingOffpage] = useState<boolean>(false);
  const [company, setCompany] = useState<CompanyDetailForm>({
    name: '',
    website: '',
    description: '',
    customer_profile: '',
    target_audice: '',
    competitors:'',
    business_objectives: [],
    content_type: 'SEO',
    product_description: '',
    email: '',
    marketing_template: '',
    schedule: {}
  })
  const [emailInstruction, setEmailInstruction] = useState<EmailInstruction>({
    email_options: [],
    email_template_type: ''
  });
  const pathname: string = usePathname();
  const router = useRouter();

  // Provide the account data through the context to child components
  return (
    <SeoAnalyzerContext.Provider value={{
      onpage, setOnpage,
      offpage, setOffpage,
      isLoadingOnpage, setIsLoadingOnpage,
      isLoadingOffpage, setIsLoadingOffpage,
      company, setCompany,
      emailInstruction, setEmailInstruction
    }}>
      {children}
    </SeoAnalyzerContext.Provider>
  )
}
