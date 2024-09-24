import React from "react";
import Button from "../../common/buttons/Button";

interface TravellerCountProps {
    counts: number;
    title: string;
    subTitle: string;
    onClickIncrement: () => void;
    onClickDecrement: () => void;
}

const TravellerCount: React.FC<TravellerCountProps> = ({
    counts,
    title,
    subTitle,
    onClickIncrement,
    onClickDecrement,
}) => {
    return (
        <div className="flex justify-between items-center gap-10">
            <div>
                <div className="font-semibold mb-1">{title}</div>
                <div className="text-sm text-gray-500 w-[120px]">{subTitle}</div>
            </div>
            <div className="flex items-center space-x-2">
                <Button
                    text="-"
                    className="px-3 py-1 bg-gray-200 rounded-md text-white bg-secondary"
                    onClick={onClickDecrement}
                />
                <span className="text-lg w-5">{counts}</span>
                <Button
                    text="+"
                    className="px-3 py-1 bg-gray-200 rounded-md text-white bg-secondary"
                    onClick={onClickIncrement}
                />
            </div>
        </div>
    );
};

export default TravellerCount;
