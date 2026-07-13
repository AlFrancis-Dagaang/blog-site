export function formatDateToPHT(dateInput: Date | string): string {
  const date = new Date(dateInput);

  if (Number.isNaN(date.getTime())) {
    return "Invalid Date";
  }

  return date.toLocaleDateString("en-US", {
    timeZone: "Asia/Manila",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
