import React, { useState } from 'react';
import { useRecurrence } from './RecurrenceContext';

const RecurrenceCustomization = () => {
  const { state, dispatch } = useRecurrence();
  const [customInterval, setCustomInterval] = useState(state.interval);

  const handleIntervalChange = (e) => {
    const interval = e.target.value;
    setCustomInterval(interval);
    dispatch({ type: 'SET_INTERVAL', payload: interval });
  };

  const handleDayOfWeekChange = (day) => {
    const updatedDays = state.daysOfWeek.includes(day)
      ? state.daysOfWeek.filter((d) => d !== day)
      : [...state.daysOfWeek, day];
    dispatch({ type: 'SET_DAYS_OF_WEEK', payload: updatedDays });
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">Customize Recurrence</label>
      <div className="mb-2">
        <input
          type="number"
          min="1"
          value={customInterval}
          onChange={handleIntervalChange}
          className="border px-2 py-1 rounded"
        />{' '}
        {state.recurrencePattern}
      </div>

      {state.recurrencePattern === 'weekly' && (
        <div>
          <label className="block text-sm font-medium text-gray-700">Select Days of the Week</label>
          <div className="flex space-x-2 mt-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
              <button
                key={day}
                onClick={() => handleDayOfWeekChange(index)}
                className={`px-3 py-2 rounded ${
                  state.daysOfWeek.includes(index) ? 'bg-blue-500 text-white' : 'bg-gray-100'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecurrenceCustomization;
