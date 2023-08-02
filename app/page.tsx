import ReactGATag from '@/components/ReactGATag'
import DesciptionAndVideo from '@/components/home/DesciptionAndVideo'
import FeaturedOn from '@/components/home/FeaturedOn'
import IndustryLeader from '@/components/home/IndustryLeader'
import IntroOne from '@/components/home/IntroOne'
import IntroTwo from '@/components/home/IntroTwo'
import Landing from '@/components/home/Landing'
import OurSolutions from '@/components/home/OurSolutions'
import UserTestimonials from '@/components/home/UserTestimonials'
import DefaultLayout from '@/layout/default'

export const metadata = {
  title: 'Home - AdsGency AI',
}

export default function Home() {
  return (
    <DefaultLayout>
      <ReactGATag fieldObject={{
        hitType: "pageview",
        page: "/",
        title: metadata.title
      }} />
      <Landing />
      <IndustryLeader />
      <FeaturedOn />
      <DesciptionAndVideo />
      <IntroOne />
      <IntroTwo />
      <UserTestimonials />
      <OurSolutions />
    </DefaultLayout>
  )
}
