import cn from '@/utils/cn';
import React from 'react'

interface PropsTypes {
    text: string;
    onClick: () => void;
    prevIcon?: React.ReactNode;
    nextIcon?: React.ReactNode;
    className?: string;
}
const Button: React.FC<PropsTypes> = ({ text, onClick, prevIcon, nextIcon, className }) => {
    return (
        <button
            className={cn("flex items-center justify-center capitalize flex-1 px-3 py-2 gap-1 rounded-md bg-primary text-white w-fit", className)}
            onClick={onClick}
        >
            {prevIcon && <span>{prevIcon}</span>}
            <span>{text}</span>
            {nextIcon && <span>{nextIcon}</span>}
        </button>
    )
}

export default Button
