import { KeepTable } from "@/components/keep-react/KeepTable";
import { ReissueHistoryFields } from "@/types/common/fields";
import { ReissueHistoryData } from '../../../types/common/mockData';


const ReissueHistory = () => {
    return (
        <KeepTable
            tableTitle="Reissues"
            headerItems={ReissueHistoryFields}
            data={ReissueHistoryData}
        />
    );
};

export default ReissueHistory;
