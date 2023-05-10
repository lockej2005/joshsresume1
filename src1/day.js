import React, { useContext, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { SelectedDayContext } from './home';
import './App.css';
import daysData from './days.json';

const Day = () => {
  const { day } = useParams();
  const selectedDay = useContext(SelectedDayContext);

  // Find the day object with matching day number
  const dayObject = daysData.find((item) => item.day === parseInt(day));

  // Retrieve the day name if the day object is found, otherwise use an empty string
  const dayName = dayObject ? dayObject.dayName : '';
  const timesAvailable = dayObject ? dayObject.timesAvailable : [];

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
      <p>This is the Day page for {dayName}.</p>
      <p>Selected Day from Home: {selectedDay}</p>

      <div className="availability-grid">
        {timesAvailable.map((time, index) => (
          time.available && (
            <div
              key={index}
              className={`availability-item ${selectedTimes.includes(time) ? 'selected' : ''}`}
              onClick={() => handleTimeSelection(time)}
            >
              {time.time}
              {selectedTimes.includes(time) && <div className="selected-indicator" />}
            </div>
          )
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
