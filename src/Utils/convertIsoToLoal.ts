export function convertISOStringToLocalTime(isoString: string): {
  time: string;
  date: Date;
} {
  // Parse the ISO string
  const date = new Date(isoString);

  // Extract hours and minutes
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return {
    time: `${hours}:${minutes}`,
    date: date,
  };
}
