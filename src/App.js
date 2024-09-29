import React from 'react';
import RecurrencePicker from './components/RecurrencePicker';
import 'react-datepicker/dist/react-datepicker.css';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <RecurrencePicker />
    </div>
  );
}

export default App;

