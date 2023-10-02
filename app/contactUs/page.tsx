// Import necessary dependencies and components
import DefaultLayout from '@/layout/default';
import styles from './contactUs.module.css';
import Cards from '@/app/contactUs/Cards';
import ReactGATag from '@/components/ReactGATag';

// Define metadata for the Contact Us page (used for SEO)
export const metadata = {
  title: 'Contact Us - AdsGency AI',
  description: 'Contact Us',
};

// Define the ContactUsPage component
const ContactUsPage = () => {
  return (
    // Render the DefaultLayout component to establish a common layout structure
    <DefaultLayout>
      {/* Use ReactGATag to track page view analytics */}
      <ReactGATag fieldObject={{
        hitType: "pageview",
        page: "/contactUs",
        title: metadata.title
      }} />
      <section className={`w-full h-[calc(100vh-64px)] bg-[#1B1C21] flex flex-col items-center justify-center ${styles['home-bg']}`}>
        {/* Display the "Contact Us" heading */}
        <h1 className="text-2xl sm:text-4xl text-white font-bold">Contact Us</h1>
        {/* Render the Cards component to display contact information */}
        <Cards />
      </section>
    </DefaultLayout>
  );
};

// Export the ContactUsPage component as the default export

export default ContactUsPage;

