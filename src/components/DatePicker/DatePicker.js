import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.module.css' //imported default styles
import './style.css'    //custom styles

const StyledDatePicker = () => {
    const[selectedDate, setSelectedDate] = useState(null)
    
    const handleDateChange = (date) =>{
        setSelectedDate(date);
    };


  return (
    <div className="datepicker-container ">
        <label htmlFor="date-picker" className="datepicker-label mx-auto flex justify-center"></label>
        <DatePicker
            id="date-picker"
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select a date"
            className="styled-input border-2 hover:border-slate-300 hover:cursor-pointer w-24 mx-auto rounded-full" // Applying custom class for input
            popperPlacement="bottom"
        />
    </div>
  )
}

export default StyledDatePicker;