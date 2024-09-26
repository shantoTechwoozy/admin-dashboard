"use client";
import SignupLabel from "@/components/common/auth/SignupLabel";
import Button from "@/components/common/buttons/Button";
import Link from "next/link";
import React, { useState } from "react";
import Select from "react-select";
import {
  allCities,
  allCountries,
  allStates,
} from "../../../../resources/csc/csc";
import cn from "@/utils/cn";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useRouter } from "next/navigation";
import { toast } from "keep-react";

const AgentSignup = () => {
  const { register } = useStoreActions((actions: any) => actions.auth);
  const { isLoading } = useStoreState((state: any) => state.auth);
  const router = useRouter();

  const [agent, setAgent] = useState({
    orgType: "",
    orgName: "",
    orgAddress: "",
    country: "",
    state: "",
    city: "",
    phoneNumber: "",
    zipCode: "",
    docs: "",
  });

  const [user, setUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    avatar: "",
  });

  const [helper, setHelper] = useState({
    country: null,
    state: null,
    city: null,
    allStates: [],
    allCities: [],
    orgType: null,
    isoCode: "",
    stateCode: "",
    phoneCode: "",
  });

  const organization: any[] = [
    { value: "non-profit", label: "Non-Profit" },
    { value: "for-profit", label: "For-Profit" },
  ];

  const handleSubmit = (e: any) => {
    e.preventDefault();
    toast.success("WOW");
    register({ credentials: { ...agent, user }, router });
  };

  return (
    <form
      className="flex w-[600px] flex-col gap-6 rounded-md"
      onSubmit={handleSubmit}
    >
      <button
        onClick={() => toast.success("Keep React success toast")}
        className="text-2xl font-semibold"
      >
        Agency Registration:
      </button>

      <Flex>
        <SelectInput
          label="Type of organization"
          required
          options={organization}
          value={helper.orgType}
          onChange={(value: any) => {
            setAgent((prev) => ({ ...prev, orgType: value.value }));
            setHelper((prev) => ({ ...prev, orgType: value }));
          }}
        />

        <Input
          label="Name of organization"
          placeholder="Name of Org."
          required
          value={agent.orgName}
          onChange={(value) => {
            setAgent((prev: any) => ({ ...prev, orgName: value }));
          }}
        />
      </Flex>

      <h3 className="-mb-2 text-lg font-semibold">Enter contact details:</h3>

      <Flex>
        <Input
          label="First Name"
          placeholder="Enter First name"
          required
          value={user.firstName}
          onChange={(value) => {
            setUser((prev: any) => ({ ...prev, firstName: value }));
          }}
        />
        <Input
          label="Last Name"
          placeholder="Enter Last name"
          required
          value={user.lastName}
          onChange={(value) => {
            setUser((prev: any) => ({ ...prev, lastName: value }));
          }}
        />
      </Flex>

      <Flex>
        <Input
          label="Email Address"
          type="email"
          placeholder="Enter your Email"
          required
          value={user.email}
          onChange={(value) => {
            setUser((prev: any) => ({ ...prev, email: value }));
          }}
        />

        <Input
          label="Phone Number"
          placeholder="Your phone Number"
          required
          value={agent.phoneNumber}
          onChange={(value) => {
            setAgent((prev: any) => ({ ...prev, phoneNumber: value }));
          }}
        />
      </Flex>

      <Flex>
        <SelectInput
          label="Country"
          required
          options={allCountries}
          onChange={(value: any) => {
            setAgent((prev) => ({ ...prev, country: value.value }));

            setHelper((prev: any) => ({
              ...prev,
              country: value,
              state: null,
              city: null,
              allStates: allStates(value.isoCode),
              isoCode: value.isoCode,
              phoneCode: "+" + value.phoneCode,
            }));
          }}
          value={helper.country}
          placeholder="Select Country"
        />

        <SelectInput
          label="State"
          required
          options={helper.allStates}
          onChange={(value: any) => {
            setAgent((prev) => ({ ...prev, state: value.value }));
            setHelper((prev: any) => ({
              ...prev,
              state: value,
              city: null,
              stateCode: value.stateCode,
              allCities: allCities(helper.isoCode, value.stateCode),
            }));
          }}
          value={helper.state}
          placeholder="Select Country"
        />
      </Flex>

      <Flex>
        <SelectInput
          label="City/Town"
          required
          options={allStates(helper.isoCode)}
          onChange={(value: any) => {
            setAgent((prev) => ({ ...prev, city: value.value }));
            setHelper((prev) => ({
              ...prev,
              city: value,
            }));
          }}
          value={helper.city}
          placeholder="Select Country"
        />

        <Input
          label="Address"
          placeholder="Your address.."
          required
          value={agent.orgAddress}
          onChange={(value) => {
            setAgent((prev: any) => ({ ...prev, orgAddress: value }));
          }}
        />
      </Flex>

      <Flex className="w-1/2">
        <Input
          label="Zip / Postal Code"
          placeholder="Enter Zip / Postal Code"
          required
          value={agent.zipCode}
          onChange={(value) => {
            setAgent((prev: any) => ({ ...prev, zipCode: value }));
          }}
        />
      </Flex>

      <div className="text-sm text-gray-600">
        By creating an account you are agreeing to our
        <Link href="/terms-condition" className="ml-2 text-blue-500">
          T & C
        </Link>
      </div>

      <div className="flex justify-start">
        <div>
          <Button
            text="Submit"
            type="submit"
            isLoading={isLoading}
            className="flex w-[300px] items-center justify-center rounded-full text-center"
          />
        </div>
      </div>
    </form>
  );
};

export default AgentSignup;

/**===================HELPING COMPONENTS======================== */

interface Inputs {
  label: string;
  value: string;
  type?: string;
  placeholder: string;
  onChange: (value: string) => void;
  required?: boolean;
}

const Input: React.FC<Inputs> = ({
  placeholder,
  label,
  onChange,
  value,
  required,
  type = "text",
}) => {
  return (
    <div>
      <SignupLabel label={label} required={required} />
      <input
        type={type}
        value={value}
        onChange={(e: any) => onChange(e.target.value)}
        className="mt-1 w-full rounded-none border border-l-0 border-r-0 border-t-0 border-black px-2 py-1 placeholder:text-base focus:outline-none"
        required={required}
        placeholder={placeholder}
        autoComplete="off"
      />
    </div>
  );
};

const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    border: "none",
    borderBottom: "1px solid",
    borderRadius: "0px",
    boxShadow: "none", // Remove shadow on focus
    "&:hover": {
      border: "none",
      borderBottom: "1px solid",
    },
  }),
  indicatorSeparator: () => ({
    display: "none", // Remove the right border line
  }),
  dropdownIndicator: () => ({
    display: "none", // Hide the dropdown arrow
  }),
};

const SelectInput: React.FC<any> = ({
  options,
  onChange,
  label,
  value,
  placeholder,
  required,
}) => {
  return (
    <div className="w-full">
      <SignupLabel label={label} required={required} />
      <Select
        options={options}
        onChange={onChange}
        value={value}
        required={required}
        placeholder={placeholder}
        styles={customStyles}
      />
    </div>
  );
};

interface Flexs {
  children: React.ReactNode;
  className?: string;
}
const Flex: React.FC<Flexs> = ({ className, children }) => {
  return (
    <div className={cn("flex items-center gap-6 *:flex-1", className)}>
      {children}
    </div>
  );
};
