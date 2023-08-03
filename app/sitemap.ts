import { MetadataRoute } from 'next'

const urls = [
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
    url: '/pricing',
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
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const baseUrl = 'https://adsgency.ai'
  return urls.map(url => {
    return {
      ...url,
      lastModified,
      url: `${baseUrl}${url.url}`,
    }
  })
}
