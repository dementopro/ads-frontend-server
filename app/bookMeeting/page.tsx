// Import necessary modules and components.
import ReactGATag from '@/components/ReactGATag';
import DefaultLayout from '@/layout/default';
import styles from './BookMeeting.module.css';
import BookMeetingView from '@/app/bookMeeting/BookMeetingView';

// Metadata for the page.
export const metadata = {
  title: 'Book a meeting - AdsGency AI',
  description: 'Book a meeting',
}

// Define the BookMeetingPage component.
const BookMeetingPage = () => {

  return (
    // Wrap the page content in the DefaultLayout component.
    <DefaultLayout>
      {/* Add Google Analytics tracking for the page. */}
      <ReactGATag
        fieldObject={{
          hitType: "pageview",
          page: "/bookMeeting",
          title: metadata.title
        }}
      />
      <section className='relative flex flex-col items-center justify-center'>
        <h2 className={`text-3xl text-center font-semibold px-4 mt-8 sm:mt-20 ${styles['gradient-text']}`}>
          {`We're looking forward to meeting you.`}
        </h2>
        {/* Include the BookMeetingView component to display the meeting confirmation message and options. */}
        <BookMeetingView />
        {/* Additional information displayed with animations. */}
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

export default BookMeetingPage;