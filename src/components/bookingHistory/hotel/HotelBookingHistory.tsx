import { KeepTable } from "@/components/keep-react/KeepTable";
import { HotelHistoryFields } from "@/types/common/fields";
import { HotelHistoryData } from "@/types/common/mockData";


const HotelBookingHistory = () => {
    return (
        <KeepTable
            tableTitle="Hotel Bookings"
            headerItems={HotelHistoryFields}
            data={HotelHistoryData}
        />
    );
};

export default HotelBookingHistory;

