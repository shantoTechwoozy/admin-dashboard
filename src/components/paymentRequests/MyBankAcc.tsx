import { MyBankAccountFields } from "@/types/common/fields";
import { MyBankAccountData } from "@/types/common/mockData";
import { KeepTable } from "../keep-react/KeepTable";

const MyBankAcc = () => {
  return (
    <KeepTable
      tableTitle="My Bank Account"
      headerItems={MyBankAccountFields}
      data={MyBankAccountData}
    />
  );
};

export default MyBankAcc;