export function calculateAge(
  dateOfBirth: string,
  timeZone = "Asia/Jakarta",
) {
  const [year, month, day] = dateOfBirth.split("-").map(Number);
  if (!year || !month || !day) return null;

  const birthday = { year, month, day };
  const parts = new Intl.DateTimeFormat("en", {
    timeZone,
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).formatToParts(new Date());
  const current = Object.fromEntries(parts.map(({ type, value }) => [type, Number(value)]));
  const hasHadBirthdayThisYear =
    current.month > birthday.month ||
    (current.month === birthday.month && current.day >= birthday.day);

  return current.year - birthday.year - (hasHadBirthdayThisYear ? 0 : 1);
}
