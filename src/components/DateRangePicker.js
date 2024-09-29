import React from 'react';
import DatePicker from 'react-datepicker';
import { useRecurrence } from './RecurrenceContext';

const DateRangePicker = () => {
  const { state, dispatch } = useRecurrence();

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
      <div className="flex space-x-4">
        <DatePicker
          selected={state.startDate}
          onChange={(date) => dispatch({ type: 'SET_START_DATE', payload: date })}
          className="border px-2 py-1 rounded"
        />
        <DatePicker
          selected={state.endDate}
          onChange={(date) => dispatch({ type: 'SET_END_DATE', payload: date })}
          className="border px-2 py-1 rounded"
        />
      </div>
    </div>
  );
};

export default DateRangePicker;
