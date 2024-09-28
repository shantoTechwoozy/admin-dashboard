import { KeepTable } from "@/components/keep-react/KeepTable";
import { TourPackageHistoryFields } from "@/types/common/fields";
import { TourPackageHistoryData } from "@/types/common/mockData";


const TourPackageHistory = () => {

    return (
        <KeepTable
            tableTitle="Tour Packages"
            headerItems={TourPackageHistoryFields}
            data={TourPackageHistoryData}
        />
    );
};

export default TourPackageHistory;

