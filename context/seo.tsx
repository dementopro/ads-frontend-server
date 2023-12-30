import { Account, QueryAccountResp } from "@/types/account";
import { CompanyDetailForm } from "@/types/planning";
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

export type SocialMedia = Array<{
  content: any;
  img_url: string;
}>

// Create a context for managing user account-related data
export const SeoAnalyzerContext = createContext<{
  onpage: Array<SeoAnalysis>,
  offpage: Array<SeoAnalysis>,
  infographics: Object,
  landingPage: Object,
  isLoadingOnpage: boolean,
  isLoadingOffpage: boolean,
  company: CompanyDetailForm,
  emailInstruction: EmailInstruction,
  socialMedia: SocialMedia,
  setOnpage: (data: Array<SeoAnalysis>) => void,
  setOffpage: (data: Array<SeoAnalysis>) => void,
  setInfographics: (data: Object) => void,
  setLandingPage: (data: Object) => void,
  setIsLoadingOnpage: (data: boolean) => void,
  setIsLoadingOffpage: (data: boolean) => void,
  setCompany: (data: CompanyDetailForm) => void,
  setEmailInstruction: (data: EmailInstruction) => void
  setSocialMedia: (data: SocialMedia) => void
}>({
  onpage: [],
  offpage: [],
  infographics: {},
  landingPage: {},
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
    infographics_styles: [],
    content_type: 'SEO',
    product_description: '',
    email: '',
    url: '',
    marketing_template: '',
    schedule: {},
    assets: []
  },
  emailInstruction: {
    email_options: [],
    email_template_type: ''
  },
  socialMedia: [],
  setOnpage: (data) => {},
  setOffpage: (data) => {},
  setInfographics: (data) => {},
  setLandingPage: (data) => {},
  setIsLoadingOnpage: (data) => {},
  setIsLoadingOffpage: (data) => {},
  setCompany: (data) => {},
  setEmailInstruction: (data) => {},
  setSocialMedia: (data) => {}
});

export const useSeoAnalyzerContext = () => useContext(SeoAnalyzerContext);

// Create an AccountProvider component
export const SeoAnalyzerProvider = ({ children }: { children: React.ReactNode }) => {

  // Define state variables to manage user account data
  const [onpage, setOnpage] = useState<Array<SeoAnalysis>>([]);
  const [offpage, setOffpage] = useState<Array<SeoAnalysis>>([]);
  const [infographics, setInfographics] = useState<Object>({});
  const [landingPage, setLandingPage] = useState<Object>({});
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
    infographics_styles: [],
    content_type: 'SEO',
    product_description: '',
    email: '',
    url: '',
    marketing_template: '',
    socialMediaType: '',
    schedule: {},
    assets: []
  })
  const [emailInstruction, setEmailInstruction] = useState<EmailInstruction>({
    email_options: [],
    email_template_type: ''
  });
  const [socialMedia, setSocialMedia] = useState<SocialMedia>([]);

  // Provide the account data through the context to child components
  return (
    <SeoAnalyzerContext.Provider value={{
      onpage, setOnpage,
      offpage, setOffpage,
      infographics, setInfographics,
      landingPage, setLandingPage,
      isLoadingOnpage, setIsLoadingOnpage,
      isLoadingOffpage, setIsLoadingOffpage,
      company, setCompany,
      emailInstruction, setEmailInstruction,
      socialMedia, setSocialMedia
    }}>
      {children}
    </SeoAnalyzerContext.Provider>
  )
}
