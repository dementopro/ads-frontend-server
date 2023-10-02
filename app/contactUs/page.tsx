import DefaultLayout from '@/layout/default'
import styles from './contactUs.module.css'
import Cards from '@/app/contactUs/Cards'
import ReactGATag from '@/components/ReactGATag'


export const metadata = {
  title: 'Contact Us - AdsGency AI',
  description: 'Contact Us',
}

const ContactUsPage = () => {
  return (
    <DefaultLayout>
      <ReactGATag fieldObject={{
        hitType: "pageview",
        page: "/contactUs",
        title: metadata.title
      }} />
      <section className={`w-full h-[calc(100vh-64px)] bg-[#1B1C21] flex flex-col items-center justify-center ${styles['home-bg']}`}>
        <h1 className="text-2xl sm:text-4xl text-white font-bold">Contact Us</h1>
        <Cards />
      </section>
    </DefaultLayout>
  )
}

export default ContactUsPage
