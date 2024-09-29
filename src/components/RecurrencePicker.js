import React from 'react';
import { RecurrenceProvider } from './RecurrenceContext';
import RecurrenceOptions from './RecurrenceOptions';
import RecurrenceCustomization from './RecurrenceCustomization';
import MiniCalendar from './MiniCalendar';
import DateRangePicker from './DateRangePicker';

const RecurrencePicker = () => {
  return (
    <RecurrenceProvider>
      <div className="max-w-lg mx-auto p-4 bg-white rounded shadow">
        <h1 className="text-xl font-bold mb-4">Select Recurring Dates</h1>
        <RecurrenceOptions />
        <RecurrenceCustomization />
        <DateRangePicker />
        <MiniCalendar />
      </div>
    </RecurrenceProvider>
  );
};

export default RecurrencePicker;
