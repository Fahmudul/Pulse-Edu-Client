export function calculateHours(
  schedule: { [key: string]: { startTime: string; endTime: string } },
  startDate: Date,
  endDate: Date
): number {
  // console.log({ schedule, startDate, endDate });
  const start = new Date(startDate);
  const end = new Date(endDate);
  let totalHours = 0;

  // Mapping of weekdays to numbers (Sunday = 0, Monday = 1, ..., Saturday = 6)
  const dayMap: Record<string, number> = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
  };

  // Loop through the date range
  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    const dayName = Object.keys(dayMap).find(
      (key) => dayMap[key] === d.getDay()
    );

    if (dayName && schedule[dayName]) {
      // Extract start and end time
      const { startTime, endTime } = schedule[dayName];

      const [startHour, startMinute] = startTime.split(":").map(Number);
      const [endHour, endMinute] = endTime.split(":").map(Number);

      // Calculate duration in hours and minutes
      const duration =
        endHour + endMinute / 60 - (startHour + startMinute / 60);

      totalHours += duration;
    }
  }
  console.log(totalHours);
  return totalHours;
}

// Example Usage
const schedule: Record<string, { startTime: string; endTime: string }> = {
  monday: { startTime: "09:00", endTime: "10:30" },
  wednesday: { startTime: "09:00", endTime: "10:00" },
  saturday: { startTime: "09:00", endTime: "10:00" },
};

// const startDate = "2025-03-03"; // Start date (YYYY-MM-DD)
// const endDate = "2025-04-03"; // End date (YYYY-MM-DD)

// const totalDuration = calculateTotalDuration(schedule, startDate, endDate);
// console.log(`Total Duration: ${totalDuration} hours`);
