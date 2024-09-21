"use client";
import React from 'react';

interface PopupProps {
    show: boolean;
    onclose: () => void;
    children: React.ReactNode;
}

const PopupModal: React.FC<PopupProps> = ({ show, onclose, children }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">

            {/* Close button */}
            <div className="relative bg-tranparent max-h-full">
                <button
                    onClick={onclose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
                >
                    &times;
                </button>
                <div>{children}</div>

            </div>

        </div>
    );
};

export default PopupModal;
