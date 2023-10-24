// Import necessary components and layouts
import ReactGATag from '@/components/ReactGATag'
import Growth from '@/components/home/Growth'
import Supporters from '@/components/home/Supporters'
import SimplifyAds from '@/components/home/SimplifyAds'
import Sales from '@/components/home/Sales'
import Statistics from '@/components/home/Statistics'
import Landing from '@/components/home/Landing'
import Testimonials from '@/components/home/Testimonials'
import DefaultLayout from '@/layout/default'
import Features from '@/components/home/Features'
import AboveFooter from '@/components/home/AboveFooter'

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
      <Landing />
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