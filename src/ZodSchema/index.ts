import { z } from "zod";

export const bookingSchema = z.object({
  selectedDays: z
    .array(
      z.object({
        value: z.string(),
        label: z.string(),
      })
    )
    .nonempty("At least one day must be selected"),

  selectedDay: z.string().nonempty("Please select a day"),

  selectedTime: z.string().nonempty("Please select a time"),

  selectedSubject: z.string().nonempty("Please select a subject"),

  date: z
    .object({
      from: z
        .date()
        .refine((date) => date instanceof Date, "Invalid start date"),
      to: z.date().refine((date) => date instanceof Date, "Invalid end date"),
    })
    .refine((data) => data.from < data.to, {
      message: "Start date must be before end date",
    })
    .refine((data) => data.from && data.to, {
      message: "You must select a valid date range",
    })
    .refine((data) => data.from || data.to, {
      message: "Please select a date range",
    }),
});

export type BookingData = z.infer<typeof bookingSchema>;
