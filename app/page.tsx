// Import necessary components and layouts
import ReactGATag from '@/components/ReactGATag'
import DesciptionAndVideo from '@/components/home/DesciptionAndVideo'
import Growth from '@/components/home/Growth'
import Supporters from '@/components/home/Supporters'
import SimplifyAds from '@/components/home/SimplifyAds'
import Sales from '@/components/home/Sales'
import Statistics from '@/components/home/Statistics'
import IntroOne from '@/components/home/IntroOne'
import IntroTwo from '@/components/home/IntroTwo'
import NewLanding from '@/components/home/NewLanding'
import OurSolutions from '@/components/home/OurSolutions'
import Testimonials from '@/components/home/Testimonials'
import DefaultLayout from '@/layout/default'
import Features from '@/components/home/Features'

// Metadata for the page
export const metadata = {
  title: 'Home - AdsGency AI',
}

// Define the Home component
export default function Home() {
  return (
    // Wrap the content with the DefaultLayout component
    <DefaultLayout>
      {/* Add Google Analytics tracking tag */}
      <ReactGATag fieldObject={{
        hitType: "pageview",
        page: "/",
        title: metadata.title
      }} />
      {/* Render various components to build the home page */}
      <NewLanding />
      <Growth />
      <Testimonials />
      <Supporters />
      <SimplifyAds />
      <Sales />
      <Statistics />
      <Features />
    </DefaultLayout>
  )
}