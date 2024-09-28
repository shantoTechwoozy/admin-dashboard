import { TransactionFields } from "@/types/common/fields";
import { TransactionData } from "@/types/common/mockData";
import { KeepTable } from "../keep-react/KeepTable";

const TransactionForm = () => {
  return (
    <KeepTable
      tableTitle="Transactions"
      headerItems={TransactionFields}
      data={TransactionData}
    />
  );
};

export default TransactionForm;
