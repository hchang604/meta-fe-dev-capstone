import { fireEvent, render, screen } from '@testing-library/react';
import BookingPage from './components/Reservations/BookingPage';
import { initializeTimes, updateTimes } from './components/Main';

test('Renders the BookingForm heading', () => {
  render(<BookingPage availableTimes={[]} />);
  const chooseDateText = screen.getByText("Choose date");
  expect(chooseDateText).toBeInTheDocument();
  const chooseTimeText = screen.getByText("Choose time");
  expect(chooseTimeText).toBeInTheDocument();
})

test('Submits BookingForm', () => {
  render(<BookingPage availableTimes={['17:00']} />);

  const datePicker = screen.getByLabelText('choose date')
  fireEvent.change(datePicker, {
    target: { value: '2024-12-28'}
  })

  const submitBtn = screen.getByText('Make Your reservation')

  fireEvent.click(submitBtn)

  expect(screen.getByText('Reservation confirmed')).toBeInTheDocument()
})

test('initializeTimes reducer returns correct value', () => {
  const initialState = {
    availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
  }
  expect(JSON.stringify(initializeTimes())).toEqual(JSON.stringify(initialState))
})

test('updateTImes returns same value provided in state', () => {
  const initialState = {
    availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
  }
  expect(JSON.stringify(updateTimes())).toEqual(JSON.stringify(initialState))
})