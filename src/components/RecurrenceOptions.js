import React from 'react';
import { useRecurrence } from './RecurrenceContext';

const RecurrenceOptions = () => {
  const { state, dispatch } = useRecurrence();

  const handlePatternChange = (pattern) => {
    dispatch({ type: 'SET_RECURRENCE_PATTERN', payload: pattern });
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">Recurrence Pattern</label>
      <div className="flex space-x-2">
        {['daily', 'weekly', 'monthly', 'yearly'].map((pattern) => (
          <button
            key={pattern}
            onClick={() => handlePatternChange(pattern)}
            className={`px-3 py-2 rounded ${
              state.recurrencePattern === pattern ? 'bg-blue-500 text-white' : 'bg-gray-100'
            }`}
          >
            {pattern.charAt(0).toUpperCase() + pattern.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecurrenceOptions;
