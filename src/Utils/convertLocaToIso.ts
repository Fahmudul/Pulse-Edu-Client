export function convertLocalTimeToISOString(
  time: string,
  date?: Date,
  timeZone: string = "America/New_York"
): string {
  // Use provided date or current date
  const currentDate = date || new Date();

  // Parse the input time
  const [hours, minutes] = time.split(":").map(Number);

  // Create a new date with the provided time
  const fullDateTime = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    hours,
    minutes
  );

  // Use Intl.DateTimeFormat to get timezone offset
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZoneName: "shortOffset",
  });

  // Get parts of the formatted date
  const parts = formatter.formatToParts(fullDateTime);

  // Extract timezone offset
  const timeZonePart = parts.find((p) => p.type === "timeZoneName");
  const offsetPart = timeZonePart ? timeZonePart.value : "-05:00";

  // Format to ISO 8601
  return fullDateTime.toISOString().split(".")[0] + offsetPart;
}

// Example usage
// console.log(convertISOToTime("2024-03-04T13:00:00-05:00")); // Output: "13:00"
