import DefaultLayout from '@/layout/default';
import ReactGATag from '@/components/ReactGATag'
import BookMeeting from '@/components/contactUs/BookMeeting';
import ContactUsFaq from '@/components/contactUs/ContactUsFaq';
import ContactUsContainer from '@/components/contactUs/ContactUsContainer';

export const metadata = {
  title: 'Contact Us - AdsGency AI',
  description: 'Contact Us',
};

const ContactUsPage = () => {
  return (
    <DefaultLayout>
      <ReactGATag
        fieldObject={{
          hitType: 'pageview',
          page: '/contactUs',
          title: metadata.title,
        }}
      />
      <div className="ipad:px-[60px] desktop:px-[100px] android:pt-[100px] ipad:pt-[150px] pb-[32px] w-full relative z-10 bg-hero-pattern bg-cover">
        <ContactUsContainer />
      </div>
      <BookMeeting />
      <ContactUsFaq />
    </DefaultLayout>
  );
};

export default ContactUsPage;
