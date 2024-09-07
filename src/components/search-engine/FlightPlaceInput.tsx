import cn from '@/utils/cn';
import React from 'react'

interface PropsTypes {
    label: string;
    required?: boolean;
    placeholder: string;
    value: string;
    onChange?: (arg: any) => void;
    parentClass?: string
    labelClass?: string
    inputClass?: string
}

const FlightPlaceInput: React.FC<PropsTypes> = ({ label, required, placeholder, value, onChange, parentClass, labelClass, inputClass }) => {
    return (
        <div className={cn("flex-1 flex flex-col h-12", parentClass)}>
            <label htmlFor="Return" className={cn("text-primary flex capitalize  ", labelClass)}>
                <span>{label}</span>
                {required && <span className='text-red'>*</span>}
            </label>
            <input type="text" placeholder={placeholder} value={value} className={cn("font-medium text-black px-1", inputClass)} />
        </div>
    )
}

export default FlightPlaceInput
