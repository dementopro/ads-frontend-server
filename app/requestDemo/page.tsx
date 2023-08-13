import RequestDemoForm from '@/app/requestDemo/RequestDemoForm';
import ReactGATag from '@/components/ReactGATag';
import DefaultLayout from '@/layout/default';
import styles from './RequestDemo.module.css';

export const metadata = {
  title: 'Request Demo - AdsGency AI',
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
      <section className='relative flex flex-col items-center justify-center'>
        <h2 className={`text-3xl text-center font-semibold px-4 mt-8 sm:mt-20 ${styles['gradient-text']}`}>
          {`We're looking forward to meeting you.`}
        </h2>
        <RequestDemoForm />
        <div className={`${styles['pop']} ${styles['pop1']}`}>
          {`We've delivered over 77000+ Ads content for clients`}
        </div>
        <div className={`${styles['pop']} ${styles['pop2']}`}>
          {`Saving time from training marketers, hiring agencies and conducting analysis.`}
        </div>
        <div className={`${styles['pop']} ${styles['pop3']}`}>
          {`No code interface & low maintenance for users applications`}
        </div>
      </section>
    </DefaultLayout>
  )
}

export default RequestDemoPage