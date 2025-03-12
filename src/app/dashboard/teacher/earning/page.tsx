"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  ChevronLeft,
  MoreHorizontal,
  CreditCard,
  Plus,
  Layers,
  ArrowDown,
  ShoppingBag,
} from "lucide-react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const EarningsDashboard = () => {
  // Sample data for the chart
  const data = [
    { name: "Aug 01", value: 15000 },
    { name: "Aug 05", value: 20000 },
    { name: "Aug 10", value: 18000 },
    { name: "Aug 15", value: 22000 },
    { name: "Aug 20", value: 15000 },
    { name: "Aug 25", value: 20000 },
    { name: "Aug 31", value: 23000 },
  ];

  // Sample withdrawal history
  const withdrawalHistory = [
    {
      date: "21 Sep, 2021 at 2:14 AM",
      method: "Mastercards",
      amount: "American Express",
      status: "Pending",
    },
    {
      date: "21 Sep, 2021 at 2:14 AM",
      method: "Visa",
      amount: "American Express",
      status: "Pending",
    },
    {
      date: "21 Sep, 2021 at 2:14 AM",
      method: "Visa",
      amount: "American Express",
      status: "Cancel Withdraw",
    },
    {
      date: "21 Sep, 2021 at 2:14 AM",
      method: "Mastercards",
      amount: "American Express",
      status: "Completed",
    },
    {
      date: "21 Sep, 2021 at 2:14 AM",
      method: "Visa",
      amount: "American Express",
      status: "Cancelled",
    },
    {
      date: "21 Sep, 2021 at 2:14 AM",
      method: "Mastercards",
      amount: "American Express",
      status: "Completed",
    },
    {
      date: "21 Sep, 2021 at 2:14 AM",
      method: "Mastercards",
      amount: "American Express",
      status: "Completed",
    },
  ];

  return (
    <div className="w-full p-4 bg-gray-50">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="bg-white shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-start">
              <div className="p-2 bg-red-50 rounded-lg mr-3">
                <Layers className="h-5 w-5 text-red-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">$13,804.00</p>
                <p className="text-sm text-gray-500">Total Revenue</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-start">
              <div className="p-2 bg-blue-50 rounded-lg mr-3">
                <CreditCard className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">$16,593.00</p>
                <p className="text-sm text-gray-500">Current Balance</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-start">
              <div className="p-2 bg-red-50 rounded-lg mr-3">
                <ArrowDown className="h-5 w-5 text-red-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">$13,184.00</p>
                <p className="text-sm text-gray-500">Total Withdrawals</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-start">
              <div className="p-2 bg-green-50 rounded-lg mr-3">
                <ShoppingBag className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">$162.00</p>
                <p className="text-sm text-gray-500">Today Revenue</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Section */}
        <Card className="bg-white col-span-2 shadow-sm">
          <CardContent className="p-6">
            <div className="flex justify-between mb-6">
              <h3 className="font-medium">Statistic</h3>
              <div className="flex items-center">
                <p className="text-sm text-gray-500 mr-2">Revenue</p>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </div>
            </div>

            <div className="h-64 relative">
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
                <span>1m</span>
                <span>500k</span>
                <span>100k</span>
                <span>50k</span>
                <span>10k</span>
                <span>1k</span>
                <span>0</span>
              </div>

              <div className="pl-8 h-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12 }}
                    />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-black text-white p-2 text-xs rounded">
                              <p>
                                $
                                {payload[0]?.value
                                  ? payload[0]?.value.toLocaleString()
                                  : "0"}
                              </p>
                              <p className="text-gray-300">
                                {payload[0].payload.name}
                              </p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#22c55e"
                      strokeWidth={2}
                      dot={false}
                      activeDot={{
                        r: 6,
                        fill: "#22c55e",
                        stroke: "white",
                        strokeWidth: 2,
                      }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cards Section */}
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="flex justify-between mb-6">
              <h3 className="font-medium">Cards</h3>
              <div className="flex items-center">
                <p className="text-sm text-gray-500 mr-2">Revenue</p>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </div>
            </div>

            <div className="bg-blue-600 rounded-lg p-4 text-white mb-6">
              <div className="flex justify-between mb-8">
                <p className="font-bold text-xl">VISA</p>
                <MoreHorizontal />
              </div>

              <p className="font-mono text-lg mb-8">4855 **** **** ****</p>

              <div className="flex justify-between text-xs">
                <div>
                  <p className="text-blue-200 mb-1">EXPIRES</p>
                  <p>04/24</p>
                </div>
                <div>
                  <p className="text-blue-200 mb-1">CARD NAME</p>
                  <p>Vako Shvili</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between mb-3">
              <div className="flex space-x-2">
                <div className="h-2 w-2 bg-red-500 rounded-full mt-1"></div>
                <div className="h-2 w-2 bg-orange-200 rounded-full mt-1"></div>
              </div>
              <div className="flex space-x-2">
                <ChevronLeft className="h-5 w-5 text-gray-300" />
                <ChevronRight className="h-5 w-5 text-gray-500" />
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2 mt-4"
            >
              <Plus className="h-4 w-4" />
              <span>Add new card</span>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Withdrawal Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Withdraw your money */}
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6">
            <h3 className="font-medium mb-6">Withdraw your money</h3>

            <p className="text-sm text-gray-500 mb-3">Payment method:</p>

            <div className="border rounded-lg p-3 flex items-center justify-between mb-3">
              <div className="flex items-center">
                <div className="bg-white border rounded p-1 mr-3">
                  <img
                    src="/api/placeholder/40/24"
                    alt="Visa"
                    className="h-6"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-mono">4855 **** **** ****</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span>04/24</span>
                    <span className="mx-2">•</span>
                    <span>Vako Shvili</span>
                  </div>
                </div>
              </div>
              <div className="h-6 w-6 bg-green-100 rounded-full flex items-center justify-center">
                <div className="h-3 w-3 bg-green-500 rounded-full"></div>
              </div>
            </div>

            <div className="border rounded-lg p-3 flex items-center justify-between mb-3">
              <div className="flex items-center">
                <div className="bg-white border rounded p-1 mr-3">
                  <img
                    src="/api/placeholder/40/24"
                    alt="Mastercard"
                    className="h-6"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-mono">2855 **** **** ****</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span>04/24</span>
                    <span className="mx-2">•</span>
                    <span>Vako Shvili</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-3 flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="bg-white border rounded p-1 mr-3">
                  <img
                    src="/api/placeholder/40/24"
                    alt="PayPal"
                    className="h-6"
                  />
                </div>
                <p className="text-xs text-gray-500">
                  You will be redirected to the PayPal site after reviewing your
                  order.
                </p>
              </div>
            </div>

            <div className="text-lg font-bold mb-4">$16,593.00</div>
            <p className="text-sm text-gray-500 mb-6">Current Balance</p>

            <Button className="w-full text-white">Withdraw Money</Button>
          </CardContent>
        </Card>

        {/* Withdraw History */}
        <Card className="bg-white shadow-sm col-span-2">
          <CardContent className="p-6">
            <h3 className="font-medium mb-6">Withdraw History</h3>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-xs text-gray-500 border-b">
                    <th className="text-left pb-3 font-normal">DATE</th>
                    <th className="text-left pb-3 font-normal">METHOD</th>
                    <th className="text-left pb-3 font-normal">AMOUNT</th>
                    <th className="text-left pb-3 font-normal">STATUS</th>
                    <th className="text-left pb-3 font-normal"></th>
                  </tr>
                </thead>
                <tbody>
                  {withdrawalHistory.map((item, index) => (
                    <tr key={index} className="border-b last:border-b-0">
                      <td className="py-4 text-sm">{item.date}</td>
                      <td className="py-4 text-sm">{item.method}</td>
                      <td className="py-4 text-sm">{item.amount}</td>
                      <td className="py-4 text-sm">
                        <span
                          className={`px-2 py-1 rounded text-xs 
                          ${
                            item.status === "Pending"
                              ? "bg-orange-100 text-orange-500"
                              : item.status === "Completed"
                              ? "bg-green-100 text-green-500"
                              : item.status === "Cancelled"
                              ? "bg-red-100 text-red-500"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className="py-4 text-sm">
                        <MoreHorizontal className="h-5 w-5 text-gray-400" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EarningsDashboard;
