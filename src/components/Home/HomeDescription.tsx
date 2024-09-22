"use client";
import React from 'react';
import Button from '../common/buttons/Button';

const HomeDescription = () => {
    return (
        <div className="flex flex-col items-center text-center justify-center space-y-4">
            <p className="">
                Unlock the extraordinary with Trip Beyond, your passport to unparalleled adventures.
                From secluded beaches to majestic peaks, our expert team crafts tailor-made journeys
                that redefine travel. Immerse yourself in culture, savor unique experiences, and create
                memories that last a lifetime. Join us and journey beyond the ordinary with Trip Beyond.
            </p>

            <div className="flex justify-center">
                <Button
                    text="Read More"
                    isLoading={false}
                    onClick={() => { }}
                    className="w-32 h-10 rounded-full "
                />
            </div>
        </div>
    );
};

export default HomeDescription;
