import React, { useState, useEffect } from 'react';
import bookingsData from './bookings.json';

const Admin = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    setBookings(bookingsData);
  }, []);

  const pushAppointmentBack = (bookingId, minutes) => {
    // Find the booking in the state by its ID
    const updatedBookings = bookings.map((booking) => {
      if (booking.bookingId === bookingId) {
        // Push the appointment back by the specified minutes
        const newTime = new Date(booking.time);
        newTime.setMinutes(newTime.getMinutes() + minutes);
        return { ...booking, time: newTime };
      }
      return booking;
    });

    // Update the state with the modified bookings
    setBookings(updatedBookings);
  };

  return (
    <div>
      <h1>Booking Details</h1>
      {bookings.map((booking) => (
        <div key={booking.bookingId}>
          <h2>Client Number: {booking.customerNumber}</h2>
          <p>Day Number: {booking.dayNumber}</p>
          <p>Time: {booking.time}</p>
            <button className="push-back-button" onClick={() => pushAppointmentBack(booking.bookingId, 15)}>
            Push Back 15 Minutes
            </button>
            <button className="push-back-button" onClick={() => pushAppointmentBack(booking.bookingId, 30)}>
            Push Back 30 Minutes
            </button>
            <button className="push-back-button" onClick={() => pushAppointmentBack(booking.bookingId, 45)}>
            Push Back 45 Minutes
            </button>
            <button className="push-back-button" onClick={() => pushAppointmentBack(booking.bookingId, 60)}>
            Push Back 1 Hour
            </button>

          <hr />
        </div>
      ))}
    </div>
  );
};

export default Admin;