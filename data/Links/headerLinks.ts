import { useCases } from "@/data/UseCases/useCases";

export const headerLinks = [
  {
    title: 'Features',
    href: '/features',
  },
  {
    title: 'Company',
    section: [
      {
        title: 'Information',
        links: [
          {
            label: 'Pricing',
            href: '/public/pricing',
          },
          {
            label: 'Features',
            href: '/features',
          },
          {
            label: 'Ethics',
            href: '/ethics',
          },
          {
            label: 'Careers',
            href: '/careers',
          },
          {
            label: 'Customer Review',
            href: '/customerReview',
          },
        ],
      },
      {
        title: 'Support',
        links: [
          {
            label: 'Contact Us',
            href: '/contactUs'
          },
          // {
          //   label: 'Help Center',
          //   href: '/helpCenter'
          // },
          {
            label: 'Report Misuse',
            href: '/reportMisuse',
          },
          {
            label: 'Request Demo',
            href: '/requestDemo',
          },
        ],
      },
    ],
  },
  {
    title: 'Resouces',
    section: [
      {
        title: 'General',
        links: [
          {
            label: 'Blog',
            href: '/blog',
          },
          {
            label: 'Style Guide',
            href: '/styleGuide',
          },
          {
            label: 'Privacy Policy',
            href: '/privacy',
          },
          {
            label: 'Terms of Service',
            href: '/terms',
          },

        ],
      },
      {
        title: 'Comparisons',
        links: [
          {
            label: 'AdsGency vs ChatGPT',
            href: '/adsGencyVsChatGPT',
          },
          {
            label: 'AdsGency vs Jasper AI',
            href: '/adsGencyVsJasperAI',
          },
        ],
      },
    ],
  },
  {
    title: 'Solutions',
    section: [
      {
        title: 'By Use Cases',
        links: [
          {
            label: 'SEO',
            href: '/features/seo',
          },
          {
            label: 'Social Media',
            href: '/features/socialMedia',
          },
          {
            label: 'Email Marketing',
            href: '/features/emailMarketing',
          },
          {
            label: 'Infographics',
            href: '/features/infographics',
          },
        ],
      },
      {
        title: 'By Industries',
        links: [
          ...useCases.map((item, index) => ({
            label: `${item.name}`,
            href: `/useCases/${item.name}`,
          })),
        ],
      },
    ],
  },
];
