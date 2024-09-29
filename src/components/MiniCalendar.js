import React from 'react';
import { addDays, addWeeks, addMonths, addYears, eachDayOfInterval, isBefore, format } from 'date-fns';
import { useRecurrence } from './RecurrenceContext';

const calculateRecurringDates = (state) => {
  const { recurrencePattern, interval, startDate, endDate, daysOfWeek } = state;
  const dates = [];
  let currentDate = startDate;

  while (!endDate || isBefore(currentDate, endDate)) {
    switch (recurrencePattern) {
      case 'daily':
        dates.push(currentDate);
        currentDate = addDays(currentDate, interval); // Add interval days
        break;
      case 'weekly':
        // For weekly recurrence, calculate next occurrences for selected days
        for (let i = 0; i < 7; i++) {
          const nextDate = addDays(currentDate, i);
          if (daysOfWeek.includes(nextDate.getDay())) {
            dates.push(nextDate);
          }
        }
        currentDate = addWeeks(currentDate, interval); // Add interval weeks
        break;
      case 'monthly':
        // Add X months and retain the same day
        dates.push(currentDate);
        currentDate = addMonths(currentDate, interval); // Add interval months
        break;
      case 'yearly':
        dates.push(currentDate);
        currentDate = addYears(currentDate, interval); // Add interval years
        break;
      default:
        break;
    }

    // If end date is defined and the next date exceeds it, break the loop
    if (endDate && isBefore(endDate, currentDate)) {
      break;
    }
  }

  return dates;
};

const MiniCalendar = () => {
  const { state } = useRecurrence();
  const selectedDates = calculateRecurringDates(state);

  return (
    <div className="mt-4 p-4 bg-gray-100 rounded">
      <h2 className="font-medium text-gray-800">Preview</h2>
      <div className="grid grid-cols-7 gap-2 mt-4">
        {selectedDates.map((date, index) => (
          <div key={index} className="text-center">
            {format(date, 'dd')}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniCalendar;
