

import React, { ReactNode } from 'react'
import '@/styles/globals.css'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import ClientPrivate from '@/components/ClientPrivate'
import 'tailwindcss/tailwind.css';



export const metadata = {
  title: "Next Test",
  description: 'Test'
}

type LayoutProps = {
  children: ReactNode;
}



const RootLayout: React.FC<LayoutProps> = ({ children }) => {



  return (
    <html>
      <body>
        <AppRouterCacheProvider>
          <main>
            {children}
          </main>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}

export default RootLayout
