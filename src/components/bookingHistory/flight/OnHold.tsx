import { KeepTable } from "@/components/keep-react/KeepTable";
import { OnHoldFields } from "@/types/common/fields";
import { OnHoldData } from "@/types/common/mockData";



const OnHold = () => {
    return (
        <KeepTable
            tableTitle="On Hold"
            headerItems={OnHoldFields}
            data={OnHoldData}
        />
    );
};

export default OnHold;
