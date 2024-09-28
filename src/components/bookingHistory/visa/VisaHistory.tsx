import { KeepTable } from "@/components/keep-react/KeepTable";
import { VisaHistoryData } from "@/types/common/mockData";
import { VisaHistoryFields } from '@/types/common/fields';


const VisaHistory = () => {

    return (
        <KeepTable
            tableTitle="Visa"
            headerItems={VisaHistoryFields}
            data={VisaHistoryData}
        />
    );
};

export default VisaHistory;

