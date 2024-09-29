import { render, fireEvent } from '@testing-library/react';
import RecurrenceOptions from './RecurrenceOptions';
import { RecurrenceProvider } from './RecurrenceContext';

test('allows selecting recurrence pattern', () => {
  const { getByText } = render(
    <RecurrenceProvider>
      <RecurrenceOptions />
    </RecurrenceProvider>
  );
  const weeklyButton = getByText('Weekly');
  fireEvent.click(weeklyButton);
  expect(weeklyButton).toHaveClass('bg-blue-500');
});
