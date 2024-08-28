"use client";
import { useState } from "react";
import BankAccounts from "./BankAccounts";
import MyBankAcc from "./MyBankAcc";
import OnlineDeposit from "./OnlineDeposit";
import SubmitForm from "./submitForm";
import Tab from "./tab";
import TransactionForm from "./Transactions";

const TopupRequest = () => {
  const [tabName, setTabName] = useState("SubmitRequest");

  return (
    <div className="flex w-full items-center justify-center rounded-md">
      <div className="w-full max-w-6xl">
        <div className="rounded-sm bg-white p-4 shadow-lg">
          <Tab setTabName={setTabName} />

          <div className="max-h-[400px] overflow-x-auto overflow-y-auto lg:max-h-[600px]">
            {tabName === "SubmitRequest" && <SubmitForm />}
            {tabName === "Transaction" && <TransactionForm />}
            {tabName === "My Bank Accounts" && <MyBankAcc />}
            {tabName === "Bank Accounts" && <BankAccounts />}
            {tabName === "Online Deposit" && <OnlineDeposit />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopupRequest;
