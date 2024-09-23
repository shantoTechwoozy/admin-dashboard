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
        responsive: [
            {
                breakpoint: 1024, // Tablets and larger devices
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600, // Mobile devices
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="w-full max-w-screen-lg mx-auto mt-24 mb-5">
            <h3 className="flex flex-col text-center items-center px-5 py-5 font-bold text-black text-2xl sm:text-xl">Find Great Deals, Only for you</h3>
            <Slider {...settings}>
                {dealsData.map((deal) => (
                    <div key={nanoid()} className="relative px-4">
                        <div className="relative flex justify-evenly gap-5 h-[250px] sm:h-[200px] overflow-hidden rounded-3xl">
                            <Image
                                src={deal.image}
                                alt={deal.title}
                                layout="fill"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center items-start bg-black bg-opacity-30 text-white p-4 rounded-3xl">
                                <h3 className="text-lg font-bold sm:text-base">{deal.title}</h3>
                                <p className="text-sm sm:text-xs">{deal.description}</p>
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
