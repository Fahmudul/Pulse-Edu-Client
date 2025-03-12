"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Download,
  BookOpen,
  Users,
  MessageSquare,
  Award,
  CheckCircle,
  FileText,
  DollarSign,
  Star as StarIcon,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import Image from "next/image";
import { useSession } from "next-auth/react";

const InstructorDashboard = () => {
  const { data: session } = useSession();
  console.log(session?.user.image);
  // Stats data
  const stats = [
    {
      title: "Enrolled Courses",
      value: "957",
      icon: <BookOpen className="h-4 w-4 text-red-500" />,
      bgColor: "bg-red-50",
    },
    {
      title: "Active Courses",
      value: "19",
      icon: <FileText className="h-4 w-4 text-blue-500" />,
      bgColor: "bg-blue-50",
    },
    {
      title: "Course Instructors",
      value: "241",
      icon: <Users className="h-4 w-4 text-orange-500" />,
      bgColor: "bg-orange-50",
    },
    {
      title: "Completed Courses",
      value: "951",
      icon: <CheckCircle className="h-4 w-4 text-green-500" />,
      bgColor: "bg-green-50",
    },
    {
      title: "Students",
      value: "1,674,767",
      icon: <Users className="h-4 w-4 text-red-500" />,
      bgColor: "bg-red-50",
    },
    {
      title: "Online Courses",
      value: "3",
      icon: <FileText className="h-4 w-4 text-green-500" />,
      bgColor: "bg-green-50",
    },
    {
      title: "USD Total Earning",
      value: "$7,461,767",
      icon: <DollarSign className="h-4 w-4 text-gray-500" />,
      bgColor: "bg-gray-50",
    },
    {
      title: "Course Sold",
      value: "56,489",
      icon: <Award className="h-4 w-4 text-blue-500" />,
      bgColor: "bg-blue-50",
    },
  ];

  // Revenue data for LineChart
  const revenueData = [
    { name: "Aug 1", value: 5000 },
    { name: "Aug 5", value: 7500 },
    { name: "Aug 10", value: 4000 },
    { name: "Aug 15", value: 6000 },
    { name: "Aug 20", value: 3500 },
    { name: "Aug 25", value: 7000 },
    { name: "Aug 30", value: 5500 },
  ];

  // Monthly Revenue data for BarChart
  const monthlyRevenueData = [
    { name: "1", value: 800 },
    { name: "2", value: 300 },
    { name: "3", value: 1200 },
    { name: "4", value: 1300 },
    { name: "5", value: 500 },
    { name: "6", value: 700 },
    { name: "7", value: 400 },
    { name: "8", value: 1100 },
    { name: "9", value: 300 },
    { name: "10", value: 900 },
    { name: "11", value: 700 },
    { name: "12", value: 600 },
  ];

  // Course Overview data for multi-line chart
  const courseOverviewData = [
    { name: "Sun", red: 10, blue: 20 },
    { name: "Mon", red: 15, blue: 30 },
    { name: "Tue", red: 25, blue: 10 },
    { name: "Wed", red: 5, blue: 5 },
    { name: "Thu", red: 10, blue: 15 },
    { name: "Fri", red: 30, blue: 20 },
    { name: "Sat", red: 15, blue: 25 },
  ];

  // Course Rating data for Line Chart
  const ratingData = [
    { name: "1", value: 4.2 },
    { name: "2", value: 4.5 },
    { name: "3", value: 4.3 },
    { name: "4", value: 4.6 },
    { name: "5", value: 4.7 },
    { name: "6", value: 4.8 },
    { name: "7", value: 4.6 },
  ];

  // Recent activity data
  const recentActivity = [
    {
      icon: <MessageSquare className="h-4 w-4 text-white" />,
      bgColor: "bg-red-500",
      name: "Kevin",
      action:
        'comments on your lecture "What is UX" in "2021 UIux design with figma"',
      time: "Just now",
    },
    {
      icon: <StarIcon className="h-4 w-4 text-white" />,
      bgColor: "bg-orange-500",
      name: "John",
      action:
        'gives a 5 star rating on your course "2021 UIux design with figma"',
      time: "5 mins ago",
    },
    {
      icon: <Users className="h-4 w-4 text-white" />,
      bgColor: "bg-orange-500",
      name: "Student",
      action: 'purchase your course "2021 UIux design with figma"',
      time: "6 mins ago",
    },
    {
      icon: <Users className="h-4 w-4 text-white" />,
      bgColor: "bg-red-500",
      name: "Arif",
      action: 'purchase your course "2021 UIux design with figma"',
      time: "8 mins ago",
    },
  ];

  // Star ratings
  const starRatings = [
    { stars: 5, percentage: 58, color: "bg-orange-400" },
    { stars: 4, percentage: 37, color: "bg-orange-400" },
    { stars: 3, percentage: 8, color: "bg-orange-400" },
    { stars: 2, percentage: 1, color: "bg-orange-400" },
    { stars: 1, percentage: 0.1, color: "bg-orange-400" },
  ];

  return (
    <div className="w-[95%] mx-auto shadow-lg  shadow-cyan-500/40 p-6 bg-[#f5f7fa] mb-6">
      {/* Stats Cards - Top Two Rows */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-white shadow-sm">
            <CardContent className="flex items-start p-4">
              <div className={`p-2 rounded-lg mr-3 ${stat.bgColor}`}>
                {stat.icon}
              </div>
              <div>
                <p className="text-lg font-bold">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.title}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity and Revenue */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Recent Activity */}
        <Card className="bg-white shadow-sm">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">Recent Activity</h3>
              <div className="flex items-center bg-gray-100 rounded-md px-2 py-1">
                <span className="text-xs mr-1">Today</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start">
                  <div className={`p-2 rounded-full ${activity.bgColor} mr-3`}>
                    {activity.icon}
                  </div>
                  <div>
                    <p className="text-sm">
                      <span className="font-medium">{activity.name}</span>{" "}
                      {activity.action}
                    </p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Revenue */}
        <Card className="bg-white shadow-sm">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">Revenue</h3>
              <div className="flex items-center bg-gray-100 rounded-md px-2 py-1">
                <span className="text-xs mr-1">This month</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <div className="flex space-x-4 h-64">
              {/* Line Chart */}
              <div className="w-1/2 h-full relative">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueData}>
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#6366f1"
                      strokeWidth={2}
                      dot={false}
                    />
                    <XAxis
                      dataKey="name"
                      tick={{ fontSize: 10 }}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      tick={{ fontSize: 10 }}
                      tickLine={false}
                      axisLine={false}
                    />
                    <CartesianGrid stroke="#f3f4f6" vertical={false} />
                  </LineChart>
                </ResponsiveContainer>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs">
                  $1,749
                </div>
              </div>

              {/* Bar Chart */}
              <div className="w-1/2 h-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyRevenueData}>
                    <Bar dataKey="value" fill="#22c55e" radius={[2, 2, 0, 0]} />
                    <XAxis
                      dataKey="name"
                      tick={{ fontSize: 10 }}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      tick={{ fontSize: 10 }}
                      tickLine={false}
                      axisLine={false}
                    />
                    <CartesianGrid stroke="#f3f4f6" vertical={false} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="text-center mt-2">
              <p className="text-xl font-bold">$7,443</p>
              <p className="text-xs text-gray-500">USD dollar you earned.</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Course Rating and Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Course Rating */}
        <Card className="bg-white shadow-sm">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">Overall Course Rating</h3>
              <div className="flex items-center bg-gray-100 rounded-md px-2 py-1">
                <span className="text-xs mr-1">This week</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <div className="flex space-x-4">
              {/* Rating Box */}
              <div className="w-48 h-40 bg-orange-50 p-4 flex flex-col items-center justify-center">
                <p className="text-3xl font-bold mb-1">4.6</p>
                <div className="flex mb-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon
                      key={star}
                      className={`h-4 w-4 ${
                        star <= 4 ? "text-orange-400" : "text-orange-200"
                      }`}
                      fill="currentColor"
                    />
                  ))}
                  <StarIcon
                    className="h-4 w-4 text-orange-200"
                    fill="currentColor"
                  />
                </div>
                <p className="text-xs text-gray-500">Overall Rating</p>
              </div>

              {/* Rating Chart */}
              <div className="flex-1 h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={ratingData}>
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#f97316"
                      strokeWidth={2}
                      dot={false}
                    />
                    <XAxis
                      dataKey="name"
                      tick={{ fontSize: 10 }}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      tick={{ fontSize: 10 }}
                      tickLine={false}
                      axisLine={false}
                      domain={[4, 5]}
                    />
                    <CartesianGrid stroke="#f3f4f6" vertical={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Star Ratings */}
            <div className="mt-4 space-y-2">
              {starRatings.map((rating, index) => (
                <div key={index} className="flex items-center text-xs">
                  <div className="flex w-20">
                    {Array.from({ length: rating.stars }).map((_, i) => (
                      <StarIcon
                        key={i}
                        className="h-3 w-3 text-orange-400"
                        fill="currentColor"
                      />
                    ))}
                    <span className="ml-1">{rating.stars} Star</span>
                  </div>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden mx-2">
                    <div
                      className={`h-full ${rating.color}`}
                      style={{ width: `${rating.percentage}%` }}
                    ></div>
                  </div>
                  <span>{rating.percentage}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Course Overview */}
        <Card className="bg-white shadow-sm">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">Course Overview</h3>
              <div className="flex items-center bg-gray-100 rounded-md px-2 py-1">
                <span className="text-xs mr-1">This week</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={courseOverviewData}>
                  <Line
                    type="monotone"
                    dataKey="red"
                    stroke="#ef4444"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="blue"
                    stroke="#6366f1"
                    strokeWidth={2}
                    dot={false}
                  />
                  <XAxis
                    dataKey="name"
                    tick={{ fontSize: 10 }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    tick={{ fontSize: 10 }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <CartesianGrid stroke="#f3f4f6" vertical={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InstructorDashboard;
