import ReactGATag from '@/components/ReactGATag'
import DefaultLayout from '@/layout/default'
import React from 'react'
import styles from './privacy.module.css'


export const metadata = {
  title: 'Privacy Policy - AdsGency AI',
}

const PrivacyPolicyPage = () => {
  return (
    <DefaultLayout>
      <ReactGATag
        fieldObject={{
          hitType: "pageview",
          page: "/privacy",
          title: metadata.title
        }}
      />
      <div className={`w-full bg-[#1B1C21] flex flex-col items-center justify-center ${styles['home-bg']} pt-8 pb-12`}>
        <section className='flex flex-col max-w-[1000px] mx-auto sm:px-8 my-8 bg-black/80'>
          <h1 className='text-center text-4xl sm:text-4xl font-bold'>
            AdsGency AI
          </h1>
          <div className='flex flex-col gap-4 mt-6 max-sm:w-[90%] mx-auto'>
            <h1 className='text-center text-3xl font-bold pb-3 border-b border-primary-gray/50 px-4'>
              Privacy Policy
            </h1>
            <h2 className='text-xl font-semibold my-2'>Introduction</h2>
            <p className='font-mono text-white/70'>
              {`AdsGency AI (the "Company") values the privacy of its users ("User" or "you") and has developed this Privacy Policy to demonstrate its commitment to protecting your privacy. This Privacy Policy describes the types of information we may collect from you or that you may provide when you use our Services, and our practices for collecting, using, maintaining, protecting, and disclosing that information.`}
            </p>
            <h2 className='text-xl font-semibold my-2'>Personal Identification Information</h2>
            <p className='font-mono text-white/70'>
              {`We may collect personally identifiable information ("PII") that you provide to us, such as your name, email address, postal address, phone number, and payment method details. We may collect this information in various ways, including but not limited to, when you register on our site, subscribe to a newsletter, fill out a form, or enter information on our Services.`}
            </p>
            <h2 className='text-xl font-semibold my-2'>Non-Personal Identification Information</h2>
            <p className='font-mono text-white/70'>
              {`We may collect non-personal identification information about Users whenever they interact with our Services. This may include the browser name, the type of computer, and technical information about Users' means of connection to our Services, such as the operating system, the Internet service providers utilized, and other similar information.`}
            </p>
            <h2 className='text-xl font-semibold my-2'>Cookies and Tracking Technologies</h2>
            <p className='font-mono text-white/70'>
              {`We may use cookies, pixel tags, and similar technologies to automatically collect this information. Cookies are small bits of information that are stored by your computer’s web browser. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Services.`}
            </p>
            <h2 className='text-xl font-semibold my-2'>Use of Collected Information and AI Training</h2>
            <p className='font-mono text-white/70'>
              {`AdsGency AI collects and uses Users' personal information for various purposes: to provide and maintain our services; to notify you about changes to our Services; to allow you to participate in interactive features of our Services when you choose to do so; to provide customer support; to gather analysis or valuable information so that we can improve our Services; to monitor the usage of our Services; to detect, prevent and address technical issues; to fulfil any other purpose for which you provide it; to provide you with news, special offers and general information about other goods, services and events which we offer. We also use the aggregated and anonymized data to train our machine learning models for providing better services and experiences.`}
            </p>
            <h2 className='text-xl font-semibold my-2'>Protection of Your Information</h2>
            <p className='font-mono text-white/70'>
              {`We take reasonable measures to protect your personal information in an effort to prevent loss, misuse, unauthorized access, disclosure, alteration, and destruction. These measures include firewalls, data encryption, physical access controls to our data centers, and information access authorization controls. We also have implemented measures to maintain the safety of your personal information when you enter, submit, or access your personal information.`}
            </p>
            <h2 className='text-xl font-semibold my-2'>Changes to this Privacy Policy</h2>
            <p className='font-mono text-white/70'>
              {`AdsGency AI has the discretion to update this Privacy Policy at any time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.`}
            </p>
            <h1 className='text-center text-3xl font-bold mt-4 pb-3 border-b border-primary-gray/50 px-4'>
              Terms of Service
            </h1>
            <h2 className='text-xl font-semibold my-2'>Acceptance of Terms</h2>
            <p className='font-mono text-white/70'>
              {`The services that AdsGency AI provides are subject to the following Terms of Service ("TOS"). AdsGency AI reserves the right to update the TOS at any time without notice to you. The most current version of the TOS can be reviewed by clicking on the "Terms of Service" hypertext link located at the bottom of our Web pages.`}
            </p>
            <h2 className='text-xl font-semibold my-2'>Use of Services</h2>
            <p className='font-mono text-white/70'>
              {`You agree to not use the Services to: upload or distribute any computer viruses, worms, or any software intended to damage or alter a computer system or data; send unsolicited or unauthorized advertising, promotional materials, junk mail, or any other form of duplicative or unsolicited messages; defame, harass, abuse, threaten or defraud Users of the Services, or collect, or attempt to collect, personal information about Users or third parties without their consent.`}
            </p>
            <h2 className='text-xl font-semibold my-2'>Privacy and Protection of Personal Information</h2>
            <p className='font-mono text-white/70'>
              {`See the Privacy Policy relating to the collection and use of your information, which is incorporated by reference into these Terms of Service.`}
            </p>
            <h2 className='text-xl font-semibold my-2'>
              Termination of Use
            </h2>
            <p className='font-mono text-white/70'>
              {`You agree that AdsGency AI may, in its sole discretion, terminate or suspend your access to all or part of the Services with or without notice and for any reason, including, without limitation, breach of these Terms of Service. Any suspected fraudulent, abusive or illegal activity may be grounds for terminating your relationship and may be referred to appropriate law enforcement authorities.`}
            </p>
            <h2 className='text-xl font-semibold my-2'>Intellectual Property</h2>
            <p className='font-mono text-white/70'>
              {`All content included as part of the Services, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the Services, is the property of AdsGency AI or its suppliers and protected by copyright and other laws that protect intellectual property and proprietary rights.`}
            </p>
            <h2 className='text-xl font-semibold my-2'>Governing Law</h2>
            <p className='font-mono text-white/70'>
              {`These Terms of Service shall be governed by and construed in accordance with the laws of the country where the Company is registered, without regard to its conflict of law provisions.`}
            </p>
          </div>
        </section>
      </div>
    </DefaultLayout>
  )
}

export default PrivacyPolicyPage
