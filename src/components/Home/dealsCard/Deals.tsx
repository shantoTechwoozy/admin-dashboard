"use client";
import React from "react";
import Slider from "react-slick";
import dealsData from "./DealsData";
import { nanoid } from "nanoid";
import Image from "next/image";
import Button from "@/components/common/buttons/Button";

function Deals() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerPadding: '20px',
    };

    return (
        <div className="slider-container">
            <h3 className="flex flex-col text-center items-center px-5 py-5 font-bold text-black text-2xl">Find Great Deals, Only for you</h3>
            <Slider {...settings}>
                {dealsData.map((deal) => (
                    <div key={nanoid()} className="relative px-4"> {/* px-4 adds gap between the slides */}
                        <div className="relative flex justify-evenly gap-5 h-[250px] overflow-hidden rounded-3xl">
                            <Image
                                src={deal.imageUrl}
                                alt={deal.title}
                                layout="fill"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center items-start bg-black bg-opacity-30 text-white p-4 rounded-3xl">
                                <h3 className="text-lg font-bold">{deal.title}</h3>
                                <p className="text-sm">{deal.description}</p>
                                <div>
                                    <Button
                                        text="Book Now"
                                        className="mt-4 px-4 py-2 bg-primary text-white rounded-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Deals;
