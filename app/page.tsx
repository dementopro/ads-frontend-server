// Import necessary components and layouts
import ReactGATag from '@/components/ReactGATag'
import Growth from '@/components/home/Growth'
import Supporters from '@/components/home/Supporters'
import SimplifyAds from '@/components/home/SimplifyAds'
import Sales from '@/components/home/Sales'
import Statistics from '@/components/home/Statistics'
import NewLanding from '@/components/home/NewLanding'
import Testimonials from '@/components/home/Testimonials'
import DefaultLayout from '@/layout/default'
import Features from '@/components/home/Features'
import AboveFooter from '@/components/home/AboveFooter'
import Announcement from '@/components/home/Announcement'

// Metadata for the page
export const metadata = {
  title: 'Home - AdsGency AI',
}

// Define the Home component
export default function Home() {
  return (
    // Wrap the content with the DefaultLayout component
    <DefaultLayout>
      <ReactGATag fieldObject={{
        hitType: "pageview",
        page: "/",
        title: metadata.title
      }} />
      <Announcement />
      <NewLanding />
      <Growth />
      <Testimonials />
      <Supporters />
      <SimplifyAds />
      <Sales />
      <Statistics />
      <Features />
      <AboveFooter />
    </DefaultLayout>
  )
}