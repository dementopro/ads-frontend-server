import ReactGATag from '@/components/ReactGATag';
import DefaultLayout from '@/layout/default';
import styles from './BookMeeting.module.css';
import BookMeetingView from '@/app/bookMeeting/BookMeetingView';

export const metadata = {
  title: 'Book a meeting - AdsGency AI',
  description: 'Book a meeting',
}

const BookMeetingPage = () => {

  return (
    <DefaultLayout>
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
        <BookMeetingView />
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

export default BookMeetingPage
