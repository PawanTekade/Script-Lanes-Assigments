import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "./styles.css";
import "react-datepicker/dist/react-datepicker.css";
import ShowData from "./componets/showData";
export default function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [data, setData] = useState({});
  // useEffect(() => {
  //   const url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=363&date=${getRealDate(
  //     selectedDate
  //   )}`;
  //   console.log(url);
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setData(json);
  //     });
  // }, [selectedDate]);

  console.log(data?.centers?.[0]);
  const sendReq = () => {
    const url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=363&date=${getRealDate(
      selectedDate
    )}`;
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  };
  return (
    <div className="App">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => {
          setSelectedDate(date);
        }}
        dateFormat="dd/MM/yyyy"
        minDate={new Date()}
        isClearable
        showYearDropdown
        scrollableMonthYearDropdown
      />
      <button onClick={sendReq}>GO</button>
      <ShowData data={data} />
    </div>
  );
}

const getRealDate = (input) =>
  `${input.getDate()}-${input.getMonth() + 1}-${input.getFullYear()}`;
