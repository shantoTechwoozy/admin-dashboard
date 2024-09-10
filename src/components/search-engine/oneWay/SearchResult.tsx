import Button from '@/components/common/buttons/Button';
import { IconSearchEngine } from '@/icons';
import { nanoid } from 'nanoid'
import React from 'react'


interface PropsTypes {
    icon: React.ReactNode;
    airlines: string;
    flightNo: string;
    from: string;
    to: string;
    departTime: string;
    returnTime: string;
    departDate: string;
    returnDate: string;
    travelTime: string;
    stop: string;
    seats: string;
    price: string;
    refund: boolean;
}

const FilterResult: PropsTypes[] = [
    {
        icon: <IconSearchEngine.Flight size={20} className="bg-red rounded-full p-1 text-white" />, airlines: "Biman Bangladesh Airlines",
        flightNo: "786", from: "Dhaka (DAC)", to: "Delhi (DEL)", departTime: "10:20", returnTime: "3:30", departDate: "Wednesday, 15 Sep 21", returnDate: "Wednesday, 15 Sep 21", travelTime: "10hrs 55mins",
        stop: "One Stop", seats: "9", price: "$600", refund: true
    },
    {
        icon: <IconSearchEngine.Flight size={20} className="bg-red rounded-full p-1 text-white" />, airlines: "Biman Bangladesh Airlines",
        flightNo: "786", from: "Dhaka (DAC)", to: "Delhi (DEL)", departTime: "10:20", returnTime: "3:30", departDate: "Wednesday, 15 Sep 21", returnDate: "Wednesday, 15 Sep 21", travelTime: "10hrs 55mins",
        stop: "One Stop", seats: "9", price: "$600", refund: true
    },
    {
        icon: <IconSearchEngine.Flight size={20} className="bg-red rounded-full p-1 text-white" />, airlines: "Biman Bangladesh Airlines",
        flightNo: "786", from: "Dhaka (DAC)", to: "Delhi (DEL)", departTime: "10:20", returnTime: "3:30", departDate: "Wednesday, 15 Sep 21", returnDate: "Wednesday, 15 Sep 21", travelTime: "10hrs 55mins",
        stop: "One Stop", seats: "9", price: "$600", refund: true
    },

]


const SearchResult = () => {
    return (
        <div className="flex flex-col gap-3">
            {FilterResult.map((item, index) => (
                <div key={nanoid()} className="bg-white p-5 border border-slate-300  shadow-lg rounded-3xl space-y-4">
                    <div className="flex justify-between items-center gap-2">
                        <SectionContainer>
                            <span>{item.icon}</span>
                            <span>{item.airlines}</span>
                            <span>{item.flightNo}</span>
                        </SectionContainer>
                        <SectionContainer>
                            <span>{item.from}</span>
                            <span>{item.departTime}</span>

                            <span>{item.departDate}</span>
                        </SectionContainer>
                        <SectionContainer>
                            <span>{item.to}</span>
                            <span>{item.returnTime}</span>

                            <span>{item.returnDate}</span>
                        </SectionContainer>
                        <SectionContainer>
                            <span>
                                {item.travelTime}
                            </span>
                            <span>
                                {item.stop}
                            </span>
                            <span>
                                Seats Left :{item.seats}
                            </span>
                        </SectionContainer>

                        <div className="flex flex-col gap-2">
                            <div className="text-xs text-center font-semibold">{item.price}</div>
                            <Button
                                text="Book Now"
                                onClick={() => { }}
                                className="text-xs rounded-full text-black text-center font-semibold px-6 py-2 whitespace-nowrap"
                            />

                            <p className="font-medium text-xs text-center">{item.refund ? "Refundable" : "Non-refundable"}</p>
                        </div>
                    </div>

                </div>))}
        </div>
    )
}

export default SearchResult

interface SectionTypes {
    children: React.ReactNode;
}
const SectionContainer: React.FC<SectionTypes> = ({ children }) => {
    return (
        <div className="flex flex-col font-medium text-black text-[10px] gap-2">
            {children}
        </div>
    )
}
