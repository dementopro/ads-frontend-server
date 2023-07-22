import DesciptionAndVideo from '@/components/home/DesciptionAndVideo'
import FeaturedOn from '@/components/home/FeaturedOn'
import Footer from '@/components/home/Footer'
import Header from '@/components/home/Header'
import IndustryLeader from '@/components/home/IndustryLeader'
import IntroOne from '@/components/home/IntroOne'
import IntroTwo from '@/components/home/IntroTwo'
import Landing from '@/components/home/Landing'
import OurSolutions from '@/components/home/OurSolutions'
import UserTestimonials from '@/components/home/UserTestimonials'
import ReactGA from "react-ga4"

export const metadata = {
  title: 'Home - AdsGency AI',
}
ReactGA.initialize("G-NQ34MWCQDB");
ReactGA.ga({ hitType: "pageview", page: "/", title: metadata.title });

export default function Home() {
  return (
    <main className="overflow-hidden flex min-h-screen flex-col bg-[#121212] text-white">
      <Header />
      <Landing />
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
