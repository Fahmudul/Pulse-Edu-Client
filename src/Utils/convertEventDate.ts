export const convertEventDate = (date: Date, ) => {
  let isoDate = new Date(date).toISOString().split("T")[0];
  const updatedStartDate = (parseInt(isoDate.split("-")[2]) + 1).toString();
  const splittedDate = isoDate.split("-");
  isoDate = `${splittedDate[0]}-${splittedDate[1]}-${updatedStartDate}`;
  return isoDate;
};
