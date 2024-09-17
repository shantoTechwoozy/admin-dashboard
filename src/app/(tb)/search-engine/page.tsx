"use client";
import React, { useState } from "react";
import SearchEngine from "@/components/search-engine/search-engine";
import travelport from "@/utils/axios";
import axios from "axios";

const SearchEnginePage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState(null);

  const postData = async () => {
    setLoading(true);
    setError(null); // Reset any previous errors
    try {
      const res = await travelport.post(
        "/catalog/search/catalogproductofferings",
        {
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
                  departureDate: "2024-09-20",
                  From: {
                    value: "ORD",
                  },
                  To: {
                    value: "DEN",
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
        },
      );
      console.log(res.data);
      setResponse(res.data); // Set response data
    } catch (err: any) {
      setError(
        err.response?.data?.message || "An error occurred while searching",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Search Engine</h1>
      <SearchEngine />

      <button onClick={postData} disabled={loading}>
        {loading ? "Searching..." : "Search Flights"}
      </button>

      {error && <div style={{ color: "red" }}>Error: {error}</div>}

      {response && (
        <div>
          <h2>Search Results</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>{" "}
          {/* Display response data */}
        </div>
      )}
    </div>
  );
};

export default SearchEnginePage;
