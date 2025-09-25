import i18next from 'i18next';

export const getDateRangeString = (
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
    : i18next.t("now");

  return `${startDateFormatted} - ${endDateFormatted}`;
};

export const getPeriodSting = (
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

  return `${diff.years}${i18next.t(diff.years > 1 ? "years" : "year")}, ${
    diff.months
  }m`;
};
