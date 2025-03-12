import { useAppSelector } from "@/Redux/hooks";
import { getALlPayment } from "@/Services/Payment";
import { formatDate } from "@/Utils/formatime";
import {
  CirclePlayIcon,
  CreditCard,
  DollarSign,
  DownloadIcon,
} from "lucide-react";
import React, { useEffect, useState } from "react";

const StudentPaymentCard = () => {
  const session = useAppSelector((state) => state.auth);
  const [payment, setPayment] = useState([]);
  useEffect(() => {
    const getALlPaymentFromDb = async () => {
      const data = await getALlPayment(session.id as string);
      console.log("from line 18", data);
      setPayment(data?.data);
    };
    getALlPaymentFromDb();
  }, []);
  // const data = await getALlPayment;
  // console.log("from line 18", session);
  return (
    <div>
      {payment.map((item: any) => (
        <div className="border shadow-lg shadow-cyan-500/40 bg-[#F9F9F9] border-[#E9EAF0] p-6 flex justify-between items-center">
          <div className=" flex flex-col gap-4">
            <span className="text-2xl font-semibold">{item.courseName}</span>
            <span>{formatDate(item.createdAt)}</span>
            <span className="flex items-center gap-4">
              <span className="flex items-cemter gap-1">
                <CirclePlayIcon className="text-[#564FFD]" />
                <p>3 Courses</p>
              </span>
              <span className="flex items-cemter gap-1">
                <DollarSign className="text-[#FF6636]" />
                <p>{item?.price} USD</p>
              </span>
              <span className="flex items-cemter gap-1">
                <CreditCard className="text-[#23BD33]" />
                <p>Credit Card</p>
              </span>
            </span>
          </div>
          <DownloadIcon />
        </div>
      ))}
    </div>
  );
};

export default StudentPaymentCard;
