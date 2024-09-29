import React, { createContext, useReducer, useContext } from 'react';

const RecurrenceContext = createContext();

const initialState = {
  recurrencePattern: 'daily',
  interval: 1,
  daysOfWeek: [],
  nthDay: null,
  startDate: new Date(),
  endDate: null,
};

function recurrenceReducer(state, action) {
  switch (action.type) {
    case 'SET_RECURRENCE_PATTERN':
      return { ...state, recurrencePattern: action.payload };
    case 'SET_INTERVAL':
      return { ...state, interval: action.payload };
    case 'SET_DAYS_OF_WEEK':
      return { ...state, daysOfWeek: action.payload };
    case 'SET_NTH_DAY':
      return { ...state, nthDay: action.payload };
    case 'SET_START_DATE':
      return { ...state, startDate: action.payload };
    case 'SET_END_DATE':
      return { ...state, endDate: action.payload };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

export function RecurrenceProvider({ children }) {
  const [state, dispatch] = useReducer(recurrenceReducer, initialState);

  return (
    <RecurrenceContext.Provider value={{ state, dispatch }}>
      {children}
    </RecurrenceContext.Provider>
  );
}

export function useRecurrence() {
  return useContext(RecurrenceContext);
}
