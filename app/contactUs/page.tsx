import DefaultLayout from '@/layout/default'
import styles from './contactUs.module.css'
import Cards from '@/app/contactUs/Cards'
import ReactGATag from '@/components/ReactGATag'
import Header from '@/components/home/Header'


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
      <div className="w-full h-auto relative">
        <div className="ipad:px-[60px] desktop:px-[100px] android:pt-[0px] ipad:pt-[82px] w-full relative bg-hero-pattern bg-cover">
          <Header />
        </div>
      </div>
    </DefaultLayout>
  )
}

export default ContactUsPage
