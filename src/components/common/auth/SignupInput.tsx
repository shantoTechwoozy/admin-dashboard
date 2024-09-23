"use client"
import cn from '@/utils/cn';
import React from 'react';

interface InputProps {
    type: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
}

const Input: React.FC<InputProps> = ({ type, name, value, onChange, placeholder, className }) => {
    return (
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={cn("mt-2 w-full border border-gray-300 p-2 outline-none rounded-none border-l-0 border-r-0 border-t-0", className)}
        />
    );
};

export default Input;
