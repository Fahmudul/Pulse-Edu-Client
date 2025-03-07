export const convertEventDate = (date: Date) => {
  let isoDate = new Date(date).toISOString().split("T")[0];
  let splittedDate = isoDate.split("-");

  let year = splittedDate[0];
  let month = splittedDate[1];
  let day = (parseInt(splittedDate[2]) + 1).toString().padStart(2, '0'); // Increment day by 1 and ensure two-digit day

  return `${year}-${month}-${day}`;
};
