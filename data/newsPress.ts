import { NewsType } from "@/types/news";

export const news: NewsType[] = [
    {
        id: '1',
        title: 'Techstars',
        description: `For the first time in Techstars Seattle's history, we are proud to present our largest cohort of 24 early-stage startup companies. We are thrilled to welcome them to Seattle as we return to an in-person experience for our 15th program.`,
        size: 'large',
        image: '/images/news/news1.svg',
        link: 'https://www.techstars.com/newsroom/meet-the-24-companies-joining-techstars-seattle-class-of-2023'
    },
    {
        id: '2',
        title: 'Futurepedia',
        description: `Level Up Your Advertising Game with AdsGency AI.It’s an all-in-one ad solution for businesses that harnesses the power of AI to plan, create, manage, and optimize ad campaigns like an agency.`,
        size: 'small',
        image: '/images/news/news2.svg',
        link: 'https://www.futurepedia.io/tool/adsgency-ai'
    },
    {
        id: '3',
        title: 'Product Hunt',
        description: 'AdsGency helps marketers effortlessly create engaging ads, maximize ROI & gain data-driven insights for multichannel marketing.',
        size: 'small',
        image: '/images/news/news3.svg',
        link: 'https://www.producthunt.com/products/adsgency-ai-beta'
    }
]