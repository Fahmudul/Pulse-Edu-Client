"use client";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckCheck, X } from "lucide-react";

import { acceptBookingRequest, getAllBooking } from "@/Services/Booking";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import { useSession } from "next-auth/react";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const { data } = useSession();
  // console.log(data?.user?.id);
  const userId = data?.user?.id;
  useEffect(() => {
    const fetchBooking = async () => {
      const res = await getAllBooking(data?.user.id as string);
      console.log(res.data);
      setBookings(res?.data);
      setLoading(false);
    };
    if (userId) {
      fetchBooking();
    }
  }, [userId, loading]);
  // console.log(bookings);
  const handleAction = async (id: string, newStatus: string) => {
    const toastId = toast.loading("Accepting request...");
    const res = await acceptBookingRequest(id, newStatus);
    if (res?.success) {
      setLoading(true);
      toast.success(res?.message, { id: toastId });
    } else {
      toast.error(res?.message);
    }
    console.log(id);
  };
  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-primary mb-4">
          Booking Requests
        </h2>
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {loading
              ? Array(4)
                  .fill(0)
                  .map((item, idx) => (
                    <TableRow key={idx}>
                      <TableCell className="">
                        <Skeleton className="h-6  rounded-md" />
                      </TableCell>
                      <TableCell className="">
                        <Skeleton className="h-6  rounded-md" />
                      </TableCell>
                      <TableCell className="">
                        <Skeleton className="h-6  rounded-md" />
                      </TableCell>
                      <TableCell className="">
                        <Skeleton className="h-6  rounded-md" />
                      </TableCell>
                      <TableCell className="">
                        <Skeleton className="h-6  rounded-md" />
                      </TableCell>
                      <TableCell className="">
                        <Skeleton className="h-6  rounded-md" />
                      </TableCell>
                    </TableRow>
                  ))
              : bookings.map((user: any) => (
                  <TableRow key={user._id}>
                    <TableCell>{user?.student?.name}</TableCell>
                    <TableCell>{user?.student?.email}</TableCell>
                    <TableCell>
                      <span
                        className={`py-1 px-2 rounded-md ${
                          user.status === "Accepted"
                            ? "bg-green-100 text-green-700"
                            : user.status === "Rejected"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {user.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-primary font-semibold">
                      {user.duration} Hr
                    </TableCell>
                    <TableCell className="text-primary font-semibold">
                      {user?.duration * user?.teacher?.hourlyRate}$
                    </TableCell>
                    <TableCell
                      className={`flex space-x-2 items-center ${
                        user?.status === "Pending" ? "visible" : "hidden"
                      }`}
                    >
                      <button
                        onClick={() => handleAction(user._id, "Accepted")}
                        // disabled={status === "Accepted"}
                      >
                        <CheckCheck className="text-green-500 w-7 h-7" />
                      </button>
                      <button
                        onClick={() => handleAction(user._id, "Rejected")}
                        // disabled={status === "Rejected"}
                      >
                        <X className="text-red-500 w-7 h-7" />
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
