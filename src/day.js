import React, { useContext, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { SelectedDayContext } from './home';
import axios from 'axios';

const Day = () => {
  const { day } = useParams();
  const selectedDay = useContext(SelectedDayContext);

  const [timesAvailable, setTimesAvailable] = useState([]);
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [depositAmount, setDepositAmount] = useState(0);

  const handleTimeSelection = (time) => {
    if (selectedTimes.includes(time)) {
      // Deselect the time if it is already selected
      setSelectedTimes(selectedTimes.filter((selectedTime) => selectedTime !== time));
    } else {
      // Select the time if it is not already selected
      setSelectedTimes([...selectedTimes, time]);
    }
  };

  // Fetch the available times from the API based on the day
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/appointments`) // Replace with the appropriate API endpoint to fetch all appointments
      .then((response) => {
        const appointmentsData = response.data;
        const availableTimes = appointmentsData
          .filter((appointment) => appointment.bookingID === parseInt(day))
          .map((appointment) => appointment.time);
        setTimesAvailable(availableTimes);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [day]);

  // Calculate the total cost and deposit amount based on the number of selected times
  useEffect(() => {
    const selectedCount = selectedTimes.length;
    const costPerTime = 90;
    const total = selectedCount * costPerTime;
    setTotalCost(total);

    const deposit = total * 0.1; // Calculate 10% deposit
    setDepositAmount(deposit);
  }, [selectedTimes]);

  return (
    <div>
      <h1>Day {day}</h1>
      <p>This is the Day page.</p>
      <p>Selected Day from Home: {selectedDay}</p>

      <div className="availability-grid">
        {timesAvailable.map((time, index) => (
          <div
            key={index}
            className={`availability-item ${selectedTimes.includes(time) ? 'selected' : ''}`}
            onClick={() => handleTimeSelection(time)}
          >
            {time}
            {selectedTimes.includes(time) && <div className="selected-indicator" />}
          </div>
        ))}
      </div>

      <p>Total Cost: ${totalCost}</p>
      <p>Amount Payable Today (10% Deposit): ${depositAmount}</p>

      <div style={{ paddingTop: '50px' }}>
        <Link to="/home" className="solution-btn" style={{ textDecoration: 'none' }}>
          Go back to Calendar
        </Link>
      </div>
    </div>
  );
};

export default Day;
