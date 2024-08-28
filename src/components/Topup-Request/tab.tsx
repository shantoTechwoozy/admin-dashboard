import { AiFillAppstore, AiOutlineBank } from "react-icons/ai";
import { BsBank, BsFillCreditCardFill } from "react-icons/bs";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

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
        onClick={() => setTabName("My Bank Accounts")}
      >
        <BsBank />
        My Bank Accounts
      </button>
      <button
        className="flex items-center gap-2 rounded-md bg-slate-400 p-2 text-sm text-white shadow-md transition-colors hover:bg-gray-700"
        onClick={() => setTabName("Bank Accounts")}
      >
        <AiOutlineBank />
        Bank Accounts
      </button>
      <button
        className="flex items-center gap-2 rounded-md bg-orange-600 p-2 text-sm text-white shadow-md transition-colors hover:bg-orange-700"
        onClick={() => setTabName("Online Deposit")}
      >
        <BsFillCreditCardFill />
        Online Deposit
      </button>
    </div>
  );
};

export default Tab;
