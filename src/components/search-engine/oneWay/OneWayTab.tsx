"use client";
import { IconSearchEngine } from "@/icons";
import { useState } from "react";
import Select from "react-dropdown-select";
import Datepicker from "react-tailwindcss-datepicker";
import Button from "../../common/buttons/Button";
import InputLabel from "@/components/common/inputs/InputLabel";
import { useStoreActions, useStoreState } from "easy-peasy";
import formatDate from "@/utils/formatDate";

const OneWayTab = () => {
  const [flightSearchData, setFlightSearchData] = useState<any>({
    origin: "",
    destination: "",
    departureDate: new Date(),
  });

  /**===================redux start========================= */
  const { isLoading, error, response } = useStoreState(
    (state: any) => state.searchFlight,
  );

  const { oneWaySearch } = useStoreActions(
    (actions: any) => actions.searchFlight,
  );
  /**===================redux end========================= */

  const originArray = [
    { value: "ORD", label: "American(ORD)" },
    { value: 2, label: "Cox's Bazar (COX)" },
    { value: 3, label: "Co's Bazar (COX)" },
  ];

  const destinationArray = [
    { value: "DEN", label: "American(DEN)" },
    { value: 2, label: "Cox Bazar (COX)" },
  ];

  const handleSelectChange = (field: string, value: any) => {
    setFlightSearchData({
      ...flightSearchData,
      [field]: value,
    });
  };

  // associated with server
  const handleSubmission = () => {
    oneWaySearch({
      CatalogProductOfferingsQueryRequest: {
        CatalogProductOfferingsRequest: {
          "@type": "CatalogProductOfferingsRequestAir",
          maxNumberOfUpsellsToReturn: 4,
          contentSourceList: ["GDS"],
          PassengerCriteria: [
            {
              "@type": "PassengerCriteria",
              number: 1,
              passengerTypeCode: "ADT",
            },
          ],
          SearchCriteriaFlight: [
            {
              "@type": "SearchCriteriaFlight",
              departureDate: formatDate(
                flightSearchData.departureDate.startDate,
              ),
              From: {
                value: flightSearchData.origin,
              },
              To: {
                value: flightSearchData.destination,
              },
            },
          ],
          SearchModifiersAir: {
            "@type": "SearchModifiersAir",
            CarrierPreference: [
              {
                "@type": "CarrierPreference",
                preferenceType: "Preferred",
                carriers: ["AA"],
              },
            ],
          },
        },
      },
    });
  };

  return (
    <div className="flex w-full gap-24 p-5">
      <div className="flex flex-1 items-center gap-8">
        <div className="flex flex-col">
          <InputLabel label="From" required />
          <Select
            options={originArray}
            onChange={(values: any) =>
              handleSelectChange("origin", values[0].value)
            }
            searchable
            placeholder="Type city name"
            className="foucs:outline-none min-w-[150px] !border-none !shadow-none"
            values={[]}
            required
            clearOnSelect={true}
            dropdownHeight="200px"
          />
        </div>

        <button className="rounded-full bg-slate-300 p-1 ">
          <IconSearchEngine.Swap className="text-xl" />
        </button>
        <div className="flex flex-col">
          <InputLabel label="To" required />
          <Select
            options={destinationArray}
            onChange={(values: any) =>
              handleSelectChange("destination", values[0].value)
            }
            searchable
            placeholder="Type city name"
            className="foucs:outline-none min-w-[150px] !border-none !shadow-none"
            values={[]}
            required
          />
        </div>
      </div>
      <div className="h-[50px] min-w-[2px] max-w-[2px] bg-slate-500" />
      <div className="flex flex-1 gap-2">
        <div className="flex w-full flex-col">
          <InputLabel label="Depart" required />
          <Datepicker
            asSingle={true}
            primaryColor={"blue"}
            value={flightSearchData.departureDate}
            onChange={(newDate) => {
              setFlightSearchData({
                ...flightSearchData,
                departureDate: newDate,
              });
            }}
            showShortcuts={true}
            useRange={false}
            toggleClassName="hidden"
            containerClassName="w-full text-xs"
            inputClassName="w-full focus:outline-none px-2 py-2"
          />
        </div>
        <div className="flex h-12 w-25 items-center justify-center">
          <Button
            text="Searchhhhh"
            isLoading={isLoading}
            onClick={handleSubmission}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default OneWayTab;
