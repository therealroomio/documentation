import './globals.css'
import { Inter } from 'next/font/google'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MitBridge Documentation',
  description:
    'Documentation for MitBridge WordPress and WooCommerce custom theme by Roomio'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <SidebarProvider>
          <AppSidebar />
          <SidebarTrigger className="ml-3 mt-3" />
          <main className="flex-1 overflow-auto p-8 pt-16">{children}</main>
        </SidebarProvider>
      </body>
    </html>
  )
}
