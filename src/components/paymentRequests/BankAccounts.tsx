import { BankListFields } from "@/types/common/fields";
import { BankListData } from "@/types/common/mockData";
import { KeepTable } from "../keep-react/KeepTable";

const BankAccounts = () => {
  return (
    <KeepTable
      tableTitle="Bank List"
      headerItems={BankListFields}
      data={BankListData}
    />
  );
};

export default BankAccounts;
