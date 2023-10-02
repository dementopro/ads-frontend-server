// Imports
import Content from "@/app/public/pricing/Content"
import ReactGATag from "@/components/ReactGATag"
import DefaultLayout from "@/layout/default"
import styles from "./pricing.module.css"


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
      <h1 className={`${styles['landing-txt']} mt-8`}>
        Get Started With AdsGency AI
      </h1>
      <Content />
    </DefaultLayout>
  )
}

export default PricingPage
