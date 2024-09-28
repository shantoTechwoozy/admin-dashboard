import { KeepTable } from "@/components/keep-react/KeepTable";
import { AllHistoryFields } from "@/types/common/fields";
import { AllHistoryData } from "@/types/common/mockData";


const AllHistory = () => {
    return (
        <KeepTable
            tableTitle="Booking Cancelled"
            headerItems={AllHistoryFields}
            data={AllHistoryData}
        />
    );
};

export default AllHistory;
