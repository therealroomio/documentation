'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { GalleryVerticalEnd, Search } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from '@/components/ui/sidebar'

const navItems = [
  { title: 'Introduction', url: '/' },
  {
    title: 'Divi Builder',
    items: [
      { title: 'Getting Started', url: '/divi/getting-started' },
      { title: 'Building Pages', url: '/divi/building-pages' },
      { title: 'Modules & Elements', url: '/divi/modules' },
      { title: 'Theme Options', url: '/divi/theme-options' }
    ]
  },
  {
    title: 'WordPress',
    items: [
      { title: 'Pages & Posts', url: '/wordpress/content' },
      { title: 'User Management', url: '/wordpress/users' },
      { title: 'Media Library', url: '/wordpress/media' }
    ]
  },
  {
    title: 'WooCommerce',
    items: [
      { title: 'Store Setup', url: '/woocommerce/setup' },
      { title: 'Products', url: '/woocommerce/products' },
      { title: 'Payment Settings', url: '/woocommerce/payments' },
      { title: 'Troubleshooting', url: '/woocommerce/troubleshooting' }
    ]
  }
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="bg-primary text-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">MIT Bridge Doc</span>
                  <span className="">powered by Roomio</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <form>
          <SidebarGroup className="py-0">
            <SidebarGroupContent className="relative">
              <Label htmlFor="search" className="sr-only">
                Search
              </Label>
              <Input
                id="search"
                placeholder="Search the docs..."
                className="pl-8"
              />
              <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
            </SidebarGroupContent>
          </SidebarGroup>
        </form>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === '/'}>
                  <Link href="/">{navItems[0].title}</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {navItems.slice(1).map(section => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items?.map(item => (
                  <SidebarMenuItem key={item.url}>
                    <SidebarMenuButton asChild isActive={pathname === item.url}>
                      <Link href={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
