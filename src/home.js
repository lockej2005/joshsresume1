import React, { createContext } from 'react';
import { Link } from 'react-router-dom';

export const SelectedDayContext = createContext();

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSlots: {},
      totalCost: 0,
      selectedDay: null,
    };
  }

  handleSlotSelection = (day, slot) => {
    const { selectedSlots, totalCost } = this.state;
    const isSlotSelected = selectedSlots[day]?.includes(slot);

    // Update selected slots
    let updatedSelectedSlots = { ...selectedSlots };
    if (isSlotSelected) {
      updatedSelectedSlots[day] = selectedSlots[day].filter((selectedSlot) => selectedSlot !== slot);
    } else {
      updatedSelectedSlots[day] = [...(selectedSlots[day] || []), slot];
    }

    // Update total cost
    const updatedTotalCost = isSlotSelected ? totalCost - 90 : totalCost + 90;

    this.setState({
      selectedSlots: updatedSelectedSlots,
      totalCost: updatedTotalCost,
      selectedDay: day,
    });
  };

  render() {
    const { selectedSlots, totalCost, selectedDay } = this.state;
    const days = [...Array(30)].map((_, i) => i + 1);

    return (
      <div style={{ width: '900px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'row', marginTop:'20px' }}>
        <h1 style={{ marginRight: '50px' }}>Lawn Mowing Booking Service</h1>
        <Link to="/" className="solution-btn" style={{ textDecoration: 'none', marginTop:'20px' }}>Go back to Home</Link>
        </div>
        <p>This is the landing page.</p>
        <h1>test blurrrrrrr</h1>
        <h1>final test</h1>
        <h1>main?</h1>
        <h2>Calendar</h2>
        <p>Total Cost: ${totalCost}</p>
        <SelectedDayContext.Provider value={selectedDay}>
          <div className="calendar" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {days.map((day) => (
              <Link
                to={`/day/${day}`}
                key={day}
                className={`day ${selectedSlots[day] ? 'selected' : ''}`}
                style={{
                  width: '100px',
                  height: '100px',
                  border: '1px solid #24e344', // Green outline for each grid line
                  margin: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  backgroundColor: '#111',
                  boxShadow: '0 0 5px #24e344',
                }}
                onClick={() => this.setState({ selectedDay: day })}
              >
                <div
                  className="day-number"
                  style={{
                    
                    padding: '4px',
                    fontSize: '18px',
                    color: selectedSlots[day] ? 'black' : '#24e344', // Green numbers that don't change color
                  }}
                >
                  {day}
                </div>
                {selectedSlots[day] && (
                  <div className="time-slots">
                    {[...Array(24)].map((_, slotIndex) => {
                      const slot = slotIndex + 1;
                      const isSlotSelected = selectedSlots[day].includes(slot);

                      return (
                        <button
                          key={slot}
                          onClick={(e) => {
                            e.stopPropagation();
                            this.handleSlotSelection(day, slot);
                          }}
                          style={{
                            background: isSlotSelected ? 'green' : 'transparent',
                            margin: '2px',
                          }}
                        >
                          {slot}:00 - {slot + 1}:00
                        </button>
                      );
                    })}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </SelectedDayContext.Provider>
      </div>
    );
  }
}

export default Home;

