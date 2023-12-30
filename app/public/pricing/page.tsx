import ReactGATag from "@/components/ReactGATag"
import DefaultLayout from "@/layout/default"
import Hero from "@/components/public/pricing/Hero"
import ChoosePlan from "@/components/public/pricing/ChoosePlan"
import PricingFaq from"@/components/public/pricing/PricingFaq"
import GetStarted from "@/components/public/pricing/GetStarted"
import Comparison from "@/components/public/pricing/Comparison"
import AboveFooter from "@/components/common/AboveFooter"


export const metadata = {
  title: "Pricing - AdsGency AI",
}


const PricingPage = () => {

  return (
    <DefaultLayout>
      <ReactGATag
        fieldObject={{
          hitType: "pageview",
          page: "/public/pricing",
          title: metadata.title,
        }}
      />
      <div className="ipad:px-[60px] desktop:px-[100px] android:pt-[100px] ipad:pt-[150px] w-full relative z-10 bg-hero-gradient bg-cover">
        <Hero />
        <ChoosePlan />
      </div>
      <Comparison />
      <PricingFaq />
      <GetStarted />
      <AboveFooter target='Sign Up' link='/register' icon={false} />
    </DefaultLayout>
  )
}

export default PricingPage
