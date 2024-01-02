import { useCases } from '@/data/UseCases/useCases';
import { Blogs } from '@/data/blogs';
import { MetadataRoute } from 'next'

const links = [
  {
    url: '/',
  },
  {
    url: '/contactUs',
  },
  {
    url: '/bookMeeting',
  },
  {
    url: '/public/pricing',
  },
  {
    url: '/requestDemo',
  },
  {
    url: '/login',
  },
  {
    url: '/register',
  },
  {
    url: '/blog',
  },
  {
    url: '/careers',
  },
  {
    url: '/aboutUs',
  },
  {
    url: '/features',
  },
  {
    url: '/privacy',
  },
  {
    url: '/terms',
  },
  {
    url: '/newsPress',
  },
  {
    url: '/landing',
  },
  {
    url: '/reportMisuse',
  },
  {
    url: '/styleGuide',
  },
  {
    url: '/customerReview',
  },
  {
    url: '/ethics',
  },
  {
    url: '/adsGencyVsChatGPT',
  },
  {
    url: '/adsGencyVsJasperAI',
  },
  {
    url: '/features/seo',
  },
  {
    url: '/features/socialMedia',
  },
  {
    url: '/features/emailMarketing',
  },
  {
    url: '/features/infographics',
  },
  {
    url: '/useCases',
  },
]

const blogs = Blogs.map(blog => {
  return {
    url: `/blog/${blog.id}`,
  }
})

const uses = useCases.map(useCase => {
  return {
    url: `/useCases/${useCase.name}`,
  }
})

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const baseUrl = 'https://adsgency.ai'
  const urls = [...links, ...blogs, ...uses]
  return urls.map(url => {
    return {
      ...url,
      lastModified,
      url: `${baseUrl}${url.url}`,
    }
  })
}
