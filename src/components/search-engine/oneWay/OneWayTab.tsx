"use client";
import InputLabel from "@/components/common/inputs/InputLabel";
import { IconSearchEngine } from "@/icons";
import formatDate from "@/utils/formatDate";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import Button from "../../common/buttons/Button";

import FlightInput from "../FlightInput";
import FlightInputsSearch from "../FlightInputsSearch";

const OneWayTab = () => {
  const [flightSearchData, setFlightSearchData] = useState<any>({
    origin: "",
    destination: "",
    departureDate: new Date(),
  });

  /**===================redux start========================= */
  const { isLoading } = useStoreState((state: any) => state.searchFlight);

  const { oneWaySearch } = useStoreActions(
    (actions: any) => actions.searchFlight,
  );
  /**===================redux end========================= */

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
    <div className="flex w-full items-center gap-2 p-5">
      <FlightInputsSearch />

      <div className="h-20 min-w-[2px] max-w-[2px] bg-slate-500" />

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
            text="Search"
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
