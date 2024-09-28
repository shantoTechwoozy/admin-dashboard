import { TicketCancelData } from "@/types/common/mockData";
import { KeepTable } from "../keep-react/KeepTable";
import { TicketCancelFields } from "@/types/common/fields";


const TicketCancelled = () => {
    return (
        <KeepTable
            tableTitle="Void/History"
            headerItems={TicketCancelFields}
            data={TicketCancelData}
        />
    );
};

export default TicketCancelled;
