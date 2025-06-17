"use client"

import { useState } from "react"
import { AppSidebar } from "./components/app-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  Bell,
  Calendar,
  DollarSign,
  Search,
  TrendingUp,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  ShoppingCart,
  Package,
  Star,
} from "lucide-react"
import Image from "next/image"

export default function SocialSellerDashboard() {
  const [searchQuery, setSearchQuery] = useState("")

  // Sample data
  const metrics = [
    {
      title: "Total Revenue",
      value: "$45,231",
      change: "+20.1%",
      trend: "up",
      icon: DollarSign,
    },
    {
      title: "Total Orders",
      value: "1,234",
      change: "+15.3%",
      trend: "up",
      icon: ShoppingCart,
    },
    {
      title: "Active Products",
      value: "567",
      change: "+8.2%",
      trend: "up",
      icon: Package,
    },
    {
      title: "Customer Reviews",
      value: "4.8",
      change: "+0.2",
      trend: "up",
      icon: Star,
    },
  ]

  const recentOrders = [
    {
      id: "#ORD-001",
      customer: "Sarah Johnson",
      product: "Premium Course Bundle",
      status: "Completed",
      amount: "$299",
      date: "2 hours ago",
    },
    {
      id: "#ORD-002",
      customer: "Mike Chen",
      product: "Social Selling Toolkit",
      status: "Processing",
      amount: "$149",
      date: "4 hours ago",
    },
    {
      id: "#ORD-003",
      customer: "Emily Davis",
      product: "LinkedIn Mastery Course",
      status: "Pending",
      amount: "$199",
      date: "1 day ago",
    },
    {
      id: "#ORD-004",
      customer: "Alex Rodriguez",
      product: "Sales Analytics Dashboard",
      status: "Completed",
      amount: "$399",
      date: "2 days ago",
    },
  ]

  const topProducts = [
    { name: "LinkedIn Mastery Course", sales: 234, revenue: "$46,800", growth: "+12%" },
    { name: "Social Selling Toolkit", sales: 189, revenue: "$28,350", growth: "+8%" },
    { name: "Premium Course Bundle", sales: 156, revenue: "$46,644", growth: "+15%" },
    { name: "Sales Analytics Dashboard", sales: 98, revenue: "$39,102", growth: "+22%" },
  ]

  const quickStats = [
    { label: "Active Leads", value: "2,350", color: "bg-blue-500" },
    { label: "Pending Orders", value: "45", color: "bg-yellow-500" },
    { label: "Active Campaigns", value: "12", color: "bg-green-500" },
    { label: "Course Enrollments", value: "1,234", color: "bg-purple-500" },
  ]

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {/* Header */}
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Overview</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="ml-auto flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
            <Button variant="outline" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Calendar className="h-4 w-4" />
            </Button>
            <div className="flex items-center space-x-2">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="Profile"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-sm font-medium">John Doe</span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add New
              </Button>
            </div>
          </div>

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              {/* Key Metrics */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {metrics.map((metric) => {
                  const Icon = metric.icon
                  return (
                    <Card key={metric.title}>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                        <Icon className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{metric.value}</div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          {metric.trend === "up" ? (
                            <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                          ) : (
                            <ArrowDownRight className="h-3 w-3 text-red-500 mr-1" />
                          )}
                          <span className={metric.trend === "up" ? "text-green-500" : "text-red-500"}>
                            {metric.change}
                          </span>
                          <span className="ml-1">from last month</span>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Quick Stats */}
              <div className="grid gap-4 md:grid-cols-4">
                {quickStats.map((stat, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${stat.color}`}></div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">{stat.label}</p>
                          <p className="text-2xl font-bold">{stat.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                {/* Recent Orders */}
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Recent Orders</CardTitle>
                    <CardDescription>Latest customer orders and their status</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Order ID</TableHead>
                          <TableHead>Customer</TableHead>
                          <TableHead>Product</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {recentOrders.map((order) => (
                          <TableRow key={order.id}>
                            <TableCell className="font-medium">{order.id}</TableCell>
                            <TableCell>{order.customer}</TableCell>
                            <TableCell>{order.product}</TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  order.status === "Completed"
                                    ? "default"
                                    : order.status === "Processing"
                                      ? "secondary"
                                      : "outline"
                                }
                              >
                                {order.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">{order.amount}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                {/* Top Products */}
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Top Products</CardTitle>
                    <CardDescription>Best performing products this month</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {topProducts.map((product, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">{product.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {product.sales} sales • {product.revenue}
                            </p>
                          </div>
                          <div className="text-right">
                            <Badge variant="outline" className="text-green-600">
                              {product.growth}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Activity Chart Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle>Sales Activity</CardTitle>
                  <CardDescription>Overview of sales performance over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-gray-500">
                    <TrendingUp className="h-8 w-8 mr-2" />
                    <span>Sales activity chart would go here</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Analytics Dashboard</CardTitle>
                  <CardDescription>Detailed analytics and insights</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-gray-500">
                    <span>Analytics content would go here</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reports" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Reports</CardTitle>
                  <CardDescription>Generate and view detailed reports</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-gray-500">
                    <span>Reports content would go here</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
