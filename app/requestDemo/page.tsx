import RequestDemoForm from '@/app/requestDemo/RequestDemoForm';
import ReactGATag from '@/components/ReactGATag';
import DefaultLayout from '@/layout/default';
import styles from './RequestDemo.module.css';

export const metadata = {
  title: 'Enterprise Inquiry - AdsGency AI',
  description: 'Request Demo',
}

const RequestDemoPage = () => {

  return (
    <DefaultLayout>
      <ReactGATag
        fieldObject={{
          hitType: "pageview",
          page: "/requestDemo",
          title: metadata.title
        }}
      />
      <div className="ipad:px-[60px] desktop:px-[100px] android:pt-[100px] ipad:pt-[150px] pb-[32px] w-full relative z-10 bg-hero-pattern bg-cover">
        <div className="android:w-full ipadmini:w-[495px] ipad:w-full desktop:w-[1240px] mx-auto flex justify-center items-center flex-col gap-[32px] android:mt-[60px] android:mb-[32px] ipad:my-[60px] android:px-[32px] ipadmini:px-[0px]">
          <div className='text-center w-full bg-gradient-to-r from-[#D634FF] to-[#4663FF] text-transparent bg-clip-text android:text-[34px] ipad:text-[36px] font-bold font-poppins'>
            We&apos;re looking forward to meeting you
          </div>
          <RequestDemoForm />
        </div>
      </div>
    </DefaultLayout >
  )
}

export default RequestDemoPage
