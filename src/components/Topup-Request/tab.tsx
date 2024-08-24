import { AiFillAppstore, AiOutlineBank } from "react-icons/ai";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { BsBank, BsFillCreditCardFill } from "react-icons/bs";

type TabProps = {
  setTabName: (tabName: string) => void;
};

const Tab: React.FC<TabProps> = ({ setTabName }) => {
  return (
    <div className="mb-4 flex flex-wrap gap-2">
      <button
        className="flex items-center gap-2 rounded-md bg-blue-600 p-2 text-sm text-white shadow-md transition-colors hover:bg-blue-700"
        onClick={() => setTabName("SubmitRequest")}
      >
        <AiFillAppstore />
        Submit Request
      </button>
      <button
        className="flex items-center gap-2 rounded-md bg-green-600 p-2 text-sm text-white shadow-md transition-colors hover:bg-green-700"
        onClick={() => setTabName("Transaction")}
      >
        <RiMoneyDollarCircleFill />
        Transaction
      </button>
      <button
        className="flex items-center gap-2 rounded-md bg-yellow-600 p-2 text-sm text-white shadow-md transition-colors hover:bg-yellow-700"
        onClick={() => setTabName("MyBankAccounts")}
      >
        <BsBank />
        My Bank Accounts
      </button>
      <button
        className="flex items-center gap-2 rounded-md bg-slate-400 p-2 text-sm text-white shadow-md transition-colors hover:bg-gray-700"
        onClick={() => setTabName("TechwoozyBankAccounts")}
      >
        <AiOutlineBank />
        Techwoozy Bank Accounts
      </button>
      <button
        className="flex items-center gap-2 rounded-md bg-orange-600 p-2 text-sm text-white shadow-md transition-colors hover:bg-orange-700"
        onClick={() => setTabName("OnlineDeposit")}
      >
        <BsFillCreditCardFill />
        Online Deposit
      </button>
    </div>
  );
};

export default Tab;
