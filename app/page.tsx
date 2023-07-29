import ReactGATag from '@/components/ReactGATag'
import DesciptionAndVideo from '@/components/home/DesciptionAndVideo'
import FeaturedOn from '@/components/home/FeaturedOn'
import Footer from '@/components/home/Footer'
import IndustryLeader from '@/components/home/IndustryLeader'
import IntroOne from '@/components/home/IntroOne'
import IntroTwo from '@/components/home/IntroTwo'
import MainLanding from '@/components/home/MainLanding'
import OurSolutions from '@/components/home/OurSolutions'
import UserTestimonials from '@/components/home/UserTestimonials'

export const metadata = {
  title: 'Home - AdsGency AI',
}

export default function Home() {
  return (
    <main className="overflow-hidden flex min-h-screen flex-col bg-[#121212] text-white">
      <ReactGATag fieldObject={{
        hitType: "pageview",
        page: "/",
        title: metadata.title
      }} />
      <MainLanding />
      <IndustryLeader />
      <FeaturedOn />
      <DesciptionAndVideo />
      <IntroOne />
      <IntroTwo />
      <UserTestimonials />
      <OurSolutions />
      <Footer />
    </main>
  )
}
