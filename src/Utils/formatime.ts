export function formatDate(isoString: Date) {
  const date = new Date(isoString);

  // Get day with ordinal suffix
  const day = date.getDate();
  const suffix = (day: number) =>
    ["th", "st", "nd", "rd"][
      day % 10 > 3 || Math.floor((day % 100) / 10) === 1 ? 0 : day % 10
    ];

  // Format the date
  const options: Intl.DateTimeFormatOptions = {
    month: "long", // 'long' is valid
    year: "numeric", // 'numeric' is valid
    hour: "numeric", // 'numeric' is valid
    minute: "2-digit", // '2-digit' is valid
    hour12: true, // Boolean value is valid
  };

  const formattedDate = date.toLocaleString("en-US", options);

  return `${day}${suffix(day)} ${formattedDate
    .replace(String(day), "")
    .trim()}`;
}
