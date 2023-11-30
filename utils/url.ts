export const formValidUrl = (url: string) => {
  return (url.startsWith("http://") || url.startsWith("https://")) ? url : `https://${url}`
}

export const oauthRedirectURL: string | undefined = process.env.NODE_ENV === 'development' ? "http://localhost:3000" : process.env.NEXT_PUBLIC_PRODUCTION_URL;
