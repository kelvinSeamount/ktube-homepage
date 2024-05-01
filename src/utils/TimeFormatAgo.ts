const formatter = new Intl.RelativeTimeFormat(undefined, {
  numeric: "always",
});

const DIVISIONS: { amount: number; name: Intl.RelativeTimeFormatUnit }[] = [
  { amount: 60, name: "seconds" }, //1 minute is 60 seconds
  { amount: 60, name: "minutes" },
  { amount: 24, name: "hours" },
  { amount: 7, name: "days" },
  { amount: 4.34524, name: "weeks" },
  { amount: 12, name: "months" },
  { amount: Number.POSITIVE_INFINITY, name: "years" },
];

export function TimeFormatAgo(date: Date) {
  let duration = (date.getTime() - new Date().getTime()) / 1000;

  for (let i = 0; i < DIVISIONS.length; i++) {
    const divisions = DIVISIONS[i];
    if (Math.abs(duration) < divisions.amount) {
      return formatter.format(Math.round(duration), divisions.name);
    }
    duration /= divisions.amount;
  }
}
