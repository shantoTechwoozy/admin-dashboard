"use client"
import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';

interface CustomDatePickerProps {
    placeholder: string;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({ placeholder }) => {
    const [startDate, setStartDate] = useState<Date | null>(null);

    const formatDate = (date: Date | null) => {
        if (!date) return "";
        const day = format(date, 'dd');
        const month = format(date, 'MMMM');
        const week = format(date, 'EEE');
        const year = format(date, 'yyyy');
        return `${day} | ${month}\n${week}, ${year}`;
    };

    return (
        <DatePicker
            selected={startDate}
            onChange={(date: Date | null) => setStartDate(date)}
            dateFormat="dd | MMM - EEE, yyyy"
            placeholderText={placeholder}
            customInput={<input type="text" className="w-full text-md h-full p-6 rounded-lg text-sm lg:text-md" />
            
            }
            renderCustomHeader={({
                date,
                changeMonth,
                changeYear,
                decreaseMonth,
                increaseMonth,
            }) => (
                <div>
                    <button onClick={decreaseMonth}>{"<"}</button>
                    <span>{format(date, 'MMMM yyyy')}</span>
                    <button onClick={increaseMonth}>{">"}</button>
                </div>
            )}
        />
    );
};

export default CustomDatePicker;
