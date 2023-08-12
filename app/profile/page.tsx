import Row1 from '@/app/profile/Row1'
import ReactGATag from '@/components/ReactGATag'
import AdminLayout from '@/layout/admin'
import React from 'react'

export const metadata = {
  title: 'User Profile - AdsGency AI',
}

const gridTemplateLargeScreens = `
  "a a a"
  "b b b"
  "c c c"
`

const ProfilePage = () => {
  return (
    <AdminLayout>
      <ReactGATag
        fieldObject={{
          hitType: "pageview",
          page: "/profile",
          title: metadata.title
        }}
      />
      <section className='w-full grid gap-4'
        style={{
          // gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(1, minmax(200px, 1fr))",
          gridTemplateAreas: gridTemplateLargeScreens,
        }}
      >
        <Row1 />
      </section>
    </AdminLayout>
  )
}

export default ProfilePage
