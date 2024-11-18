import { useState } from "react";
import DatePicker from "react-datepicker";
import { format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import { connect } from "react-redux";
import { fetchHorizonMetrics } from "../../redux/ActionCreators";

const mapDispatchToProps = (dispatch) => ({
    fetchHorizonMetrics: ({ date, year }) => { dispatch(fetchHorizonMetrics({ date, year })) }
})

const DatePickerCard = (props) => {

    const [selectedDate, setSelectedDate] = useState(null);
    const handleDateChange = (date) => {
        setSelectedDate(date);
        props.fetchHorizonMetrics({ date: format(date, 'yyyy-MM-dd') });
    };

    const handleLive = () => {
        setSelectedDate(null);
        props.fetchHorizonMetrics({});
    };

    return (
        // <div className="flex items-center justify-center bg-gray-100">
        //     <div className="max-w-sm p-4 bg-white rounded-lg shadow-md relative">
        //         <label htmlFor="date-picker" className="block text-sm font-medium text-gray-700">
        //             Select a Date
        //         </label>
        //         <button className="absolute top-3 right-3 bg-red-400 rounded-full shadow-md px-2 text-white" onClick={handleLive}>Live</button>
        //         <DatePicker
        //             id="date-picker"
        //             selected={selectedDate}
        //             onChange={handleDateChange}
        //             showYearDropdown
        //             scrollableYearDropdown
        //             // minDate={new Date()}
        //             // maxDate={new Date(2025, 11, 31)}                  
        //             dateFormat="yyyy-MM-dd"
        //             className="mt-2 block w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        //             placeholderText="Select a date"
        //         />
        //         {selectedDate && (
        //             <p className="mt-2 text-sm text-gray-600">
        //                 Selected date: {format(selectedDate, 'MMMM d, yyyy')}
        //             </p>
        //         )}
        //     </div>
        // </div>

        <div className="flex items-center justify-center max-w-sm w-fit p-4 bg-white rounded-lg shadow-md relative">
            <button className="absolute top-3 right-3 bg-red-400 rounded-full shadow-md px-2 text-white z-10" onClick={handleLive}>Live</button>
            <DatePicker
                id="date-picker"
                selected={selectedDate}
                onChange={handleDateChange}
                showYearDropdown
                scrollableYearDropdown
                // minDate={new Date()}
                // maxDate={new Date(2025, 11, 31)}                  
                dateFormat="yyyy-MM-dd"
                className="mt-7 block w-full px-2 text-gray-700 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholderText="Select a date"
            />
        </div>
    )
}

export default connect(null, mapDispatchToProps)(DatePickerCard);