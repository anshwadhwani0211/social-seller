"use client"

import type * as React from "react"
import {
  Package,
  ShoppingCart,
  Users,
  FolderOpen,
  User,
  Grid3X3,
  Activity,
  ImageIcon,
  Star,
  GraduationCap,
  Ticket,
  Truck,
  CreditCard,
  Megaphone,
  Settings,
  Home,
  Search,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// Navigation items organized by category
const navigationItems = [
  {
    title: "Main",
    items: [
      {
        title: "Dashboard",
        url: "/",
        icon: Home,
        isActive: true,
      },
    ],
  },
  {
    title: "Sales & Orders",
    items: [
      {
        title: "Orders",
        url: "/orders",
        icon: ShoppingCart,
      },
      {
        title: "Leads",
        url: "/leads",
        icon: Users,
      },
      {
        title: "Transactions",
        url: "/transactions",
        icon: CreditCard,
      },
    ],
  },
  {
    title: "Product Management",
    items: [
      {
        title: "Products",
        url: "/products",
        icon: Package,
      },
      {
        title: "Categories",
        url: "/categories",
        icon: FolderOpen,
      },
      {
        title: "Collections",
        url: "/collections",
        icon: Grid3X3,
      },
      {
        title: "Suppliers",
        url: "/suppliers",
        icon: Truck,
      },
    ],
  },
  {
    title: "Content & Marketing",
    items: [
      {
        title: "Banners",
        url: "/banners",
        icon: ImageIcon,
      },
      {
        title: "Campaigns",
        url: "/campaigns",
        icon: Megaphone,
      },
      {
        title: "Coupons",
        url: "/coupons",
        icon: Ticket,
      },
      {
        title: "Reviews",
        url: "/reviews",
        icon: Star,
      },
    ],
  },
  {
    title: "Learning & Users",
    items: [
      {
        title: "Courses",
        url: "/courses",
        icon: GraduationCap,
      },
      {
        title: "Users",
        url: "/users",
        icon: User,
      },
      {
        title: "Activity",
        url: "/activity",
        icon: Activity,
      },
    ],
  },
  {
    title: "System",
    items: [
      {
        title: "Settings",
        url: "/settings",
        icon: Settings,
      },
    ],
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-2">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <Package className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">Social Seller</span>
            <span className="truncate text-xs">Dashboard</span>
          </div>
        </div>
        <div className="px-2 py-2">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <SidebarInput placeholder="Search..." className="pl-8" />
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {navigationItems.map((section) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <User />
              <span>John Doe</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
