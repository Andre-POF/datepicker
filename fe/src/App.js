import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import { it } from 'date-fns/locale';
import { Container } from 'react-bootstrap';
import './App.css';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center mt-5">
      <div className="datepicker-container">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          placeholderText="Select a date..."
          locale={it}
          onSelect={handleDateChange}
        />

      </div>
    </Container>
  );
}

export default App;