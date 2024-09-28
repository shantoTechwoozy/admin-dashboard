import { KeepTable } from "@/components/keep-react/KeepTable";
import { BookingCancelFields } from "@/types/common/fields";
import { BookingCancelData } from "@/types/common/mockData";

const BookingCancelled = () => {

    return (
        <KeepTable
            tableTitle="Booking Cancelled"
            headerItems={BookingCancelFields}
            data={BookingCancelData}
        />
    );
};

export default BookingCancelled;
