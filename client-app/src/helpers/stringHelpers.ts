import { IntlShape } from "react-intl";

export const getDateRangeString = (
  nowString: string,
  startDate?: Date,
  endDate?: Date
): string => {
  var startDateFormatted = startDate?.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "2-digit",
  });
  var endDateFormatted = endDate
    ? endDate.toLocaleDateString("en-GB", {
        year: "numeric",
        month: "2-digit",
      })
    : nowString;

  return `${startDateFormatted} - ${endDateFormatted}`;
};

export const getPeriodSting = (
  intl: IntlShape,
  startDate: Date,
  endDate?: Date
): string => {
  if (!endDate) endDate = new Date();

  var monthsDiff =
    endDate.getMonth() -
    startDate.getMonth() +
    12 * (endDate.getFullYear() - startDate.getFullYear());

  var diff = { years: Math.floor(monthsDiff / 12), months: monthsDiff % 12 };

  if (diff.years <= 0) return `${diff.months}m`;

  return `${diff.years}${intl.messages[diff.years > 1 ? "years" : "year"]}, ${
    diff.months
  }m`;
};
