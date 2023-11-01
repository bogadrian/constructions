import '@/styles/globals.css';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { delius, GeistSans, GeistMono } from '@/config/fonts';
import { Providers } from './providers';
import { Navbar } from '@/components/navbar/navbar';
import { Link } from '@nextui-org/link';
import clsx from 'clsx';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head />
      <body
        className={clsx(
          `min-h-screen bg-background font-sans antialiased w-full
   
     
          pb-24
          relative
         
          z-10
          
          bg-[url('../public/dragon.webp')]
          bg-cover
          bg-no-repeat
          bg-blend-overlay

    
          before:content-['']
          before:absolute
          before:inset-0
          before:block
          before:bg-gradient-to-r
          before:bg-background
        
          before:opacity-50
          before:z-[-5]
          rounded-large`
          // delius.className
        )}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <div className="relative flex flex-col h-screen ">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 h-auto flex-grow ">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                title="nextui.org homepage"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">NextUI</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
