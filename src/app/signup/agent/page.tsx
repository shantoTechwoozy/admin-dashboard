"use client";
import SignupContainer from "@/components/common/auth/SignupContainer";
import SignupLabel from "@/components/common/auth/SignupLabel";
import React, { useState } from "react";
import SignupInput from "@/components/common/auth/SignupInput";
import Link from "next/link";
import Select from "react-dropdown-select";
import Button from "@/components/common/buttons/Button";
import FormFooter from "@/components/common/auth/FormFooter";

const SignupForm = () => {
  const [options, setOptions] = useState<{ value: number; label: string }[]>(
    [],
  );

  const [formData, setFormData] = useState({
    type: "",
    name: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    zip: "",
    address: "",
    presenterFirstName: "",
    presenterLastName: "",
    presenterDesignation: "",
  });

  console.log("formData", formData);

  const organization = [
    { value: 1, label: "Non-Profit" },
    { value: 2, label: "For-Profit" },
  ];
  const tagName = [
    { value: 1, label: "Mr" },
    { value: 2, label: "Mrs" },
    { value: 3, label: "Ms" },
  ];
  const country = [
    { value: 1, label: "United States" },
    { value: 2, label: "United States" },
    { value: 3, label: "United States" },
  ];

  const state = [
    { value: 1, label: "United St" },
    { value: 2, label: "United Stats" },
    { value: 3, label: "Unied States" },
  ];

  const handleChange = (e: { target: { name: any; value: any } }) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSelectChange = (field: string, values: any[]) => {
    setFormData({ ...formData, [field]: values.length > 0 ? values[0].label : "", })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(formData);
  };

  return (
    <div className="bg-gray-100 flex min-h-screen items-center justify-center p-6">
      <form
        className="w-full max-w-4xl rounded-md bg-white p-8 shadow-md"
        onSubmit={handleSubmit}
      >
        <h2 className="mb-6 text-2xl font-semibold">Agency Registration:</h2>

        <SignupContainer>
          <div>
            <SignupLabel label="Type of organization" required />
            <Select
              options={organization}
              onChange={(values) => handleSelectChange("type", values)}
              searchable={true}
              placeholder="Select Type of Org."
              values={[]}
              required
              className="mt-3 w-full rounded-none !border-b !border-b-black !border-l-white !border-r-white !border-t-white p-2 outline-none"
              clearOnSelect={false}
              dropdownHeight="200px"
            />
          </div>
          <div>
            <SignupLabel label="Name of organization" required />

            <SignupInput
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name of Org."
            />
          </div>
        </SignupContainer>

        <h3 className="mb-4 text-xl font-semibold">Enter contact details:</h3>
        <div className="mb-6 grid grid-cols-2 gap-6">
          <div>
            <SignupLabel label="First Name" required />
            <div className="flex">
              {/* Dropdown for Title (Mr, Mrs, Ms) */}

              <SignupInput
                type="text"
                name="presenterDesignation"
                value={formData.presenterDesignation}
                onChange={handleChange}
                className="mr-2 mt-3.5 !w-[100px] rounded-none !border-b !border-b-black !border-l-white !border-r-white !border-t-white p-2 outline-none"
                placeholder="Designation"
              />

              {/* Input for First Name */}
              <SignupInput
                type="text"
                name="firstName"
                value={formData.presenterFirstName}
                onChange={handleChange}
                className="w-3/4 rounded-none border border-l-0 border-r-0 border-t-0 border-b-black p-2 outline-none"
                placeholder="Enter First name"
              />
            </div>
          </div>

          <div>
            <SignupLabel label="Last Name" required />
            <SignupInput
              type="text"
              name="lastName"
              value={formData.presenterLastName}
              onChange={handleChange}
              placeholder="Enter Last name"
            />
          </div>
        </div>
        <div className="mb-6 grid grid-cols-2 gap-6">
          <div>
            <SignupLabel label="Email Address" required />

            <SignupInput
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
            />
          </div>
          <div>
            <SignupLabel label="Phone Number" required />
            <div className="mt-0 flex">
              <SignupInput
                type="text"
                name="phoneCode"
                value={formData.phone}
                onChange={handleChange}
                className="mr-2 w-1/4 rounded-none border border-l-0 border-r-0 border-t-0 border-b-black p-2 outline-none"
                placeholder="Code"
              />
              <SignupInput
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-3/4 rounded-none border border-l-0 border-r-0 border-t-0 border-b-black p-2 outline-none"
                placeholder="Agency Ph. Number"
              />
            </div>
          </div>
        </div>
        <div className="mb-6 grid grid-cols-2 gap-6">
          <div>
            <SignupLabel label="Country" required />
            <Select
              options={country}
              onChange={(values) => handleSelectChange("country", values)}
              searchable={true}
              placeholder="Select Country"
              values={[]}
              className="mt-3 w-full rounded-none !border-b !border-b-black !border-l-white !border-r-white !border-t-white p-2 outline-none"
              clearOnSelect={false}
              dropdownHeight="200px"
            />
          </div>
          <div>
            <SignupLabel label="State" required />
            <Select
              options={state}
              onChange={(values) => handleSelectChange("state", values)}
              searchable={true}
              placeholder="Select State"
              values={[]}
              className="mt-3 w-full rounded-none !border-b !border-b-black !border-l-white !border-r-white !border-t-white p-2 outline-none"
              clearOnSelect={false}
              dropdownHeight="200px"
            />
          </div>
        </div>

        <div className="mb-6 grid grid-cols-2 gap-6">
          <div>
            <SignupLabel label="City/Town" required />

            <Select
              options={country}
              onChange={(values) => handleSelectChange("city", values)}
              searchable={true}
              placeholder="Select City/Town"
              values={[]}
              className="mt-3 w-full rounded-none !border-b !border-b-black !border-l-white !border-r-white !border-t-white p-2 outline-none"
              clearOnSelect={false}
              dropdownHeight="200px"
            />
          </div>
          <div>
            <SignupLabel label="Address line" required />
            <SignupInput
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Input Address"
            />
          </div>
        </div>

        <div className="mb-6 grid grid-cols-2 gap-6">
          <div>
            <SignupLabel label="Zip / Postal Code" required />
            <SignupInput
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              placeholder="Enter Zip / Postal Code"
            />
          </div>
        </div>

        <div className="mb-6 flex items-center justify-start">
          {/* <button
                        type="button"
                        className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                    >
                        Upload document
                    </button> */}
          <div className="text-gray-600 text-sm">
            By creating an account you are agreeing to our{" "}
            <Link href="#" className="text-blue-500">
              T & C
            </Link>
            <FormFooter name="Already have an account?" registration="Login" href="/signin/agent" />
          </div>
        </div>

        <div className="flex justify-start">
          <div>
            <Button
              text="Submit"
              onClick={() => { }}
              className="flex w-[300px] items-center justify-center rounded-full text-center"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
