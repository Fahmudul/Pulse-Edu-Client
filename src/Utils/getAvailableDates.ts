import { addDays, startOfWeek, addWeeks } from "date-fns";
export const getAvailableDates = (availability: any) => {
  const today = new Date();
  const startOfCurrentWeek = startOfWeek(today, { weekStartsOn: 0 }); // Week starts on Sunday
  let availableDates: Date[] = [];

  Object.keys(availability).forEach((day) => {
    const dayIndexMap: { [key: string]: number } = {
      sunday: 0,
      monday: 1,
      tuesday: 2,
      wednesday: 3,
      thursday: 4,
      friday: 5,
      saturday: 6,
    };

    if (availability[day].length > 0) {
      const dayIndex = dayIndexMap[day];

      for (let i = 0; i < 4; i++) {
        // Get available dates for the next 4 weeks
        availableDates.push(addDays(addWeeks(startOfCurrentWeek, i), dayIndex));
      }
    }
  });

  return availableDates;
};
