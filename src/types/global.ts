import { Option } from "@/components/ui/multiple-selector";
import { DateRange } from "react-day-picker";

export type TUserType = {
  id: string;
  name: string;
  email: string;
  role: string;
};
export type FormDataType = {
  title: string;
  liveLink: string;
  githubLink: string;
  description: string;
  image: File | string;
  techStack: string[];
  projectTypes: string[];
};
export type BlogDataType = {
  title: string;
  description: string;
  image: File | string;
  category: string;
  content: string;
  createdAt?: string;
  _id?: string;
  email?: string;
};

// Antd Table Props
export interface DataType {
  key: string;
  email: string;
  postedOn: string;
  title: string;
  category: string;
}

export interface IProjectDataType {
  key: string;
  description: string;
  liveLink: string;
  postedOn: string;
  title: string;
  category: string;
}

export interface IMessage {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  phone: string;
  subject: string;
  createdAt?: string;
}
interface TimeSlot {
  startTime: string;
  endTime: string;
  isBooked?: boolean;
}
export interface IAvailability {
  [key: string]: TimeSlot[];
}

export interface ISchedule {
  [key: string]: { startTime: string; endTime: string };
}

export interface IBookingData {
  student?: string;
  teacher?: string | string[];
  schedule?: ISchedule;
  subject?: string;
  duration?: number;
}

// Booking session
export interface IBookingData {
  student?: string;
  teacher?: string;
  schedule?: ISchedule;
  subject?: string;
  duration?: number;
}

export type Subject = {
  _id: string;
  name: string;
  category: string;
  description: string;
  tutor: string;
};

export interface FormValues {
  selectedDays: Option[];
  selectedDay: string;
  selectedTime: string;
  selectedSubject: string;
  date: DateRange | undefined;
}

export interface ITeacher {
  _id?: string;
  name?: string;
  email: string;
  googleAccessToken?: string;
  googleRefreshToken?: string;
  googleid?: string;
  phone?: string;
  image?: string;
  availability: IAvailability;
  description?: string;
}

export interface IStudent {
  id?: string;
  name?: string;
  email?: string;
  role?: string;
}

export interface ISessionDetails {
  summary: string;
  description: string;
  start: {
    dateTime: string;
    timeZone: string;
  };
  end: {
    dateTime: string;
    timeZone: string;
  };
  recurrence: string[];
  attendees: { email: string }[];
}
export interface IBooking {
  student: string;
  teacher: string;
  status: string;
  event: ISessionDetails;
  subject: string;
  duration: number;
}

export interface PaymentProps {
  subject?: {
    name?: string;
    imageUrl?: string;
  };
  schedule?: {
    day?: string;
    startTime?: string;
    endTime?: string;
  }[];
  teacher?: string;
  duration?: {
    startDate?: string;
    endDate?: string;
  };
  price?: number;
  totalSessions?: number;
  status?: "pending" | "confirmed" | "cancelled";
  payBtn?: boolean;
  bookingId?: string;
}

export interface IPaymentPayload {
  paymentId?: string;
  student?: string;
  price?: number;
  courseName?: string;
  teacher?: string;
  status?: string;
  currency?: string;
  bookingId?: string;
  method?: string;
  studentName?: string;
}
