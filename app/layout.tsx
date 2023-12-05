import './globals.css'
import { getServerSession } from 'next-auth';
import WithProviders from '@/app/WithProviders'

export const metadata = {
  title: 'AdsGency AI',
  description:
    'Maximize ROI with our Generative AI ad platform! Create, distribute, optimize. Ignite your ad revolution - Sign up now!',
  keywords:
    'Generative AI Advertising, AI Ad Agency, AI Advertising, AdsGency AI, AdsGency AI Generative Advertising Solutions',
};

export default async function RootLayout({
  children,
  types
}: {
  children: React.ReactNode;
  types: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="w-full">
        <WithProviders session={session}>{children}</WithProviders>
      </body>
    </html>
  );
}
