"use client"
import Button from '@/components/common/buttons/Button'
import { images } from '@/images/images'
import Image from 'next/image'
import React from 'react'

const ExclusivePartners = () => {
    return (
        <div className="w-full max-w-screen-lg mx-auto mt-24 mb-5">
            <h3 className="flex flex-col text-center items-center px-5 py-5 font-bold text-black text-2xl">Find Exclusives from our partners

            </h3>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5 p-5">
                {/* banner images */}
                <div className="h-64 rounded-[35px] relative bg-gray-200 lg:col-span-2">
                    <Image
                        src={images.exclusive1}
                        alt="Exclusive 1"
                        fill
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: "cover" }}
                        className="rounded-[35px]"
                    />
                </div>
                <div className="h-64 rounded-[35px] relative bg-gray-200">
                    <Image
                        src={images.exclusive2}
                        alt="Exclusive 2"
                        fill
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: "cover" }}
                        className="rounded-[35px]"
                    />
                </div>
                {/* banner descriptions */}
                <div className="w-full h-full relative lg:col-span-2 flex items-start p-4">
                    <div className="flex gap-2 justify-between">
                        <div>
                            <h3 className="text-xl font-bold mb-2">
                                Last minute Summer Trip
                            </h3>
                            <p className="text-sm">
                                It is a long established fact that a reader will be distracted
                                by the readable content of a page when looking at its layout.
                            </p>
                        </div>
                        <div>
                            <Button
                                text='Let&apos;s Go'
                                isLoading={false}
                                onClick={() => { }}
                                className="bg-primary rounded-xl font-bold text-xs min-w-[100px] p-2"
                            />
                        </div>
                    </div>
                </div>

                <div className="h-48 relative flex p-4">
                    <div className="flex item-start justify-between w-full">
                        <div>
                            <h3 className="text-xl font-bold mb-2">
                                Flying from Delhi-London?
                            </h3>
                            <p className="text-sm">
                                It is a long established fact that a reader will be distracted
                                by the readable content of a page when looking at its layout.
                            </p>
                        </div>
                        <div>
                            <Button
                                text='Book Now'
                                isLoading={false}
                                onClick={() => { }}
                                className="bg-primary rounded-xl font-bold text-xs min-w-[100px] p-2"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExclusivePartners
