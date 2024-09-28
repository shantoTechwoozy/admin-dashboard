import { AddPassengerFields } from "@/types/common/fields";
import { AddPassengerData } from "@/types/common/mockData";
import { KeepTable } from "../keep-react/KeepTable";



const AddPassenger = () => {
  return (
    <KeepTable
      tableTitle="Add Passengers"
      headerItems={AddPassengerFields}
      data={AddPassengerData}
    />
  );
};

export default AddPassenger;
