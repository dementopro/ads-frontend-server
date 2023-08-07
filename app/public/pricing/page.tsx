import Content from "@/app/public/pricing/Content"
import ReactGATag from "@/components/ReactGATag"
import DefaultLayout from "@/layout/default"


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
      <Content />
    </DefaultLayout>
  )
}

export default PricingPage
