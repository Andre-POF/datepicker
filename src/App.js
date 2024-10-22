import "./App.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Container } from "react-bootstrap";

function App() {
  const [selectedDate, setSelectedDate] = useState(Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Container className="d-flex justify-content-around align-items-center mt-5">
      <div>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          placeholderText="Select a date.."
        />
        <div>
          <Button variant="primary" type="submit">
            Hello world
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default App;
