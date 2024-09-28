"use client";
import { useState } from "react";
import BankAccounts from "../paymentRequests/BankAccounts";
import MyBankAcc from "../paymentRequests/MyBankAcc";
import OnlineDeposit from "../paymentRequests/OnlineDeposit";
import SubmitForm from "../paymentRequests/PaymentRequest";
import Tab from "../paymentRequests/tab";
import TransactionForm from "../paymentRequests/Transactions";

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
