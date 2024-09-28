import { QuickPassengerFields } from "@/types/common/fields";
import { QuickPassengerData } from "@/types/common/mockData";
import { KeepTable } from "../keep-react/KeepTable";

const QuickPassenger = () => {
    return (
        <KeepTable
            tableTitle="Add Passengers"
            headerItems={QuickPassengerFields}
            data={QuickPassengerData}
        />
    );
};

export default QuickPassenger;
