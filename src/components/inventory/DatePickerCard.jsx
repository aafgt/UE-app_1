import { useState } from "react";
import DatePicker from "react-datepicker";
import { format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerCard = (props) => {

    const [selectedDate, setSelectedDate] = useState(null);
    const handleDateChange = (date) => {
        setSelectedDate(date);
        props.setDate(format(date, 'MM-dd-yyyy'));
    };

    const handleLive = () => {
        setSelectedDate(null);
        props.setDate("");
    };

    return (
        <div className="flex items-center justify-center max-w-sm w-fit h-10 p-4 bg-white rounded-lg shadow-md relative">
            <button className="absolute top-2 right-1 bg-[#76C18B] rounded-full shadow-md px-2 text-white z-10" onClick={handleLive}>Today</button>
            <i className="bi bi-calendar3 mr-1"></i>
            <DatePicker
                id="date-picker"
                selected={selectedDate}
                onChange={handleDateChange}
                showYearDropdown
                scrollableYearDropdown
                // minDate={new Date()}
                // maxDate={new Date(2025, 11, 31)}                  
                dateFormat="yyyy-MM-dd"
                className="block w-9/12 px-2 text-gray-700 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholderText="Select a date"
            />
        </div>
    )
}

export default DatePickerCard;