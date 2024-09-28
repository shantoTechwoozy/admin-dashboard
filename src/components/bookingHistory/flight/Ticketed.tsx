import { KeepTable } from "@/components/keep-react/KeepTable";
import { TicketedFields } from "@/types/common/fields";
import { TicketedData } from "@/types/common/mockData";


const Ticketed = () => {
    return (
        <KeepTable
            tableTitle="Ticketed"
            headerItems={TicketedFields}
            data={TicketedData}
        />
    );
};

export default Ticketed;
