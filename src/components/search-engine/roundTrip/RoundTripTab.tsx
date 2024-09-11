import React from 'react'
import { IconSearchEngine } from '@/icons'
import FlightPlaceInput from '../FlightPlaceInput'
import Button from '@/components/common/buttons/Button'

const RoundTripTab = () => {
    return (
        <div className="flex gap-5 w-full p-5">
            <div className="flex flex-1 items-center gap-5">
                <FlightPlaceInput label='from' placeholder="Type city name" value="" required />

                <button className="rounded-full bg-slate-300 p-1 ">
                    <IconSearchEngine.Swap className="text-xl" />
                </button>


                <FlightPlaceInput label='to' placeholder="Type city name" value="" required />
            </div>
            <div className="min-w-[2px] max-w-[2px] h-[50px] bg-slate-500" />
            <div className="flex flex-1 gap-2">
                <FlightPlaceInput label='Depart' placeholder="Select Date" value="" required />
                <FlightPlaceInput label='Return' placeholder="Select Date" value="" />
                <div className="w-25 flex h-12 items-center justify-center">
                    <Button
                        text="Search"
                        onClick={() => { }}
                        className="rounded-full"
                    />
                </div>
            </div>
        </div>
    )
}

export default RoundTripTab