import { useMemo } from "react";

const useDateDifferenceText = (
  date1Ms: number,
  date2Ms: number = Date.now()
) => {
  const differenceText = useMemo(() => {
    const d1 = new Date(date1Ms);
    const d2 = new Date(date2Ms);

    let years = d2.getFullYear() - d1.getFullYear();
    let months = d2.getMonth() - d1.getMonth();
    let days = d2.getDate() - d1.getDate();

    if (days < 0) {
      months -= 1;
      const previousMonth = new Date(d2.getFullYear(), d2.getMonth(), 0);
      days += previousMonth.getDate();
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    if (years > 0) {
      return `${years} years and ${months} months`;
    } else if (months > 0) {
      return `${months} months`;
    } else {
      return `${days} days`;
    }
  }, [date1Ms, date2Ms]);

  return date1Ms ? differenceText : "";
};

export default useDateDifferenceText;
