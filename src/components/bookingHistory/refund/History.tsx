import { KeepTable } from "@/components/keep-react/KeepTable";
import { RefundHistoryFields } from "@/types/common/fields";
import { RefundHistoryData } from '../../../types/common/mockData';


const RefundHistory = () => {


    return (
        <KeepTable
            tableTitle="Refunds"
            headerItems={RefundHistoryFields}
            data={RefundHistoryData}
        />
    );
};

export default RefundHistory;
