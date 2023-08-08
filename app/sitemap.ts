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
  }
]

const blogs = Blogs.map(blog => {
  return {
    url: `/blog/${blog.id}`,
  }
})

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const baseUrl = 'https://adsgency.ai'
  const urls = [...links, ...blogs]
  return urls.map(url => {
    return {
      ...url,
      lastModified,
      url: `${baseUrl}${url.url}`,
    }
  })
}
