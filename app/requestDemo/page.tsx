// Import necessary dependencies and components
import RequestDemoForm from '@/app/requestDemo/RequestDemoForm';
import ReactGATag from '@/components/ReactGATag';
import DefaultLayout from '@/layout/default';
import styles from './RequestDemo.module.css';

// Metadata for the page
export const metadata = {
  title: 'Enterprise Inquiry - AdsGency AI',
  description: 'Request Demo',
}

// Define the RequestDemoPage component
const RequestDemoPage = () => {

  return (
    // Use the DefaultLayout component as the page layout
    <DefaultLayout>
      {/* Add Google Analytics tracking tag */}
      <ReactGATag
        fieldObject={{
          hitType: "pageview",
          page: "/requestDemo",
          title: metadata.title
        }}
      />
      {/* Main content section */}
      <section className='relative flex flex-col items-center justify-center'>
        {/* Page heading */}
        <h2 className={`text-3xl text-center font-semibold px-4 mt-8 sm:mt-20 ${styles['gradient-text']}`}>
          {`We're looking forward to meeting you.`}
        </h2>
        {/* Render the RequestDemoForm component */}
        <RequestDemoForm />
        {/* Additional information sections */}
        <div className={`${styles['pop']} ${styles['pop1']}`}>
          {`We've delivered over 229K+ ad content for clients`}
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

// Export the RequestDemoPage component as the default export
export default RequestDemoPage