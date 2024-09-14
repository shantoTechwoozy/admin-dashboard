"use client";
import { useState } from "react";
import BankAccounts from "../Topup-Request/BankAccounts";
import MyBankAcc from "../Topup-Request/MyBankAcc";
import OnlineDeposit from "../Topup-Request/OnlineDeposit";
import SubmitForm from "../Topup-Request/submitForm";
import Tab from "../Topup-Request/tab";
import TransactionForm from "../Topup-Request/Transactions";

const BankList = () => {
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

export default BankList;
