/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { Separator } from "@/components/ui/separator";
import { ReactNode, SetStateAction, useState } from "react";
import AdressModal from "./AdressModal";
import { Breadcrumb } from "../ui/breadcrumb";
import ListingModal from "./ListingInfo/ListingModal";
import ChargeModel from "./Charges/ChargeModel";
import PaymentModel from "./Payment/PaymentModel";

interface PropertyAddress {
  propertyName: string;
  unit: string | number;
  website?: string; // Optional as it's marked (optional) in the UI
  streetAddress: string;
  suite?: string; // Optional as it's marked (optional) in the UI
  country: string;
  town: string;
  state: string;
  zipCode: string;
}
interface Listing {
  [x: string]: ReactNode;
  propertyName: string;
  unit: string | number;
  website?: string; // Optional
  streetAddress: string;
  country: string;
  town?: string; // Optional
  state?: string; // Optional
  zipCode?: string; // Optional
}
const CondoForm = () => {
  const [address, setAddress] = useState("");
  const [property, setProperty] = useState("");
  const [website, setWebsite] = useState("");
  const [state, setState] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [suite, setSuite] = useState("");
  const [town, setTown] = useState("");
  const [unit, setUnite] = useState("");
  const [zipCode, setZipcode] = useState("");
  const [country, setCountry] = useState("");
  const [list, setList] = useState<Listing[]>([]);
  const [chrg, setChrg] = useState([]);
  const [payment, setPayment] = useState([]);
  console.log(list);
  const handleSubmit = (data: {
    address: SetStateAction<string>;
    propertyName: SetStateAction<string>;
    website: SetStateAction<string>;
    suite: SetStateAction<string>;
    town: SetStateAction<string>;
    zipCode: SetStateAction<string>;
    streetAddress: SetStateAction<string>;
    unit: SetStateAction<string>;
    setState: SetStateAction<string>;
    country: SetStateAction<string>;
  }) => {
    setAddress(data.address);
    setProperty(data.propertyName);
    setWebsite(data.website);
    setSuite(data.suite);
    setTown(data.town);
    setZipcode(data.zipCode);
    setStreetAddress(data.streetAddress);
    setUnite(data.unit);
    setState(data.setState);
    setCountry(data?.country);
  };
  const handleListing = async (data: any) => {
    setList((prev) => [...prev, data]);
  };
  const handleFee = (data: any) => {
    setChrg(data);
  };
  const handlePayment = (data: any) => {
    setPayment(data);
  };
  return (
    <div className="flex gap-5">
      <div className="w-full">
        <div className="border border-gray-200 px-3 py-3 rounded-2xl bg-white shadow-sm">
          <div className="flex justify-between items-center pb-4">
            <h1 className="text-lg font-semibold text-gray-900">
              Property Address
              <span className="text-red-500 ml-1">(Required)</span>
            </h1>
            <div className="text-blue-600">
              <AdressModal handleSubmit={handleSubmit} />
            </div>
          </div>

          {/* ShadCN Separator after modal div */}
          {property || address || country ? (
            <>
              <Separator className="my-4" />

              <Breadcrumb className="text-gray-700" />
            </>
          ) : null}

          <div className="mt-4 text-gray-800">
            {property || address || country ? (
              <div className="space-y-1">
                <p>
                  {property}, {website}, Total units: {unit}
                </p>
                <p>
                  {streetAddress}, {country}
                </p>
              </div>
            ) : null}
          </div>
        </div>
        <div className="border border-gray-200 px-3 py-3 rounded-2xl bg-white shadow-sm mt-3">
          <div className="flex justify-between items-center pb-4">
            <h1 className="text-lg font-semibold text-gray-900">
              Leasing Info
              <span className="text-red-500 ml-1">(Required)</span>
            </h1>
            <div className="text-blue-600">
              <ListingModal handleListing={handleListing} />
            </div>
          </div>

          {/* ShadCN Separator after modal div */}
          {list.length > 0 ? (
            <>
              <Separator className="my-4" />

              <Breadcrumb className="text-gray-700" />
            </>
          ) : null}

          <div className="mt-4 text-gray-800">
            {list.length > 0 ? (
              <div className="space-y-1">
                {list.map((item, index) => (
                  <div key={index}>
                    <p>
                      {item.managerName}, {item.email},phone:
                      {item.phoneNumber}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
        <div className="border border-gray-200 px-3 py-3 rounded-2xl bg-white shadow-sm mt-3">
          <div className="flex justify-between items-center pb-4">
            <h1 className="text-lg font-semibold text-gray-900">
              Charges
              <span className="text-red-500 ml-1">(Required)</span>
            </h1>
            <div className="text-blue-600">
              <ChargeModel handleFee={handleFee} />
            </div>
          </div>

          {/* ShadCN Separator after modal div */}
          {list.length > 0 ? (
            <>
              <Separator className="my-4" />

              <Breadcrumb className="text-gray-700" />
            </>
          ) : null}

          <div className="mt-4 text-gray-800">
            {list.length > 0 ? (
              <div className="space-y-1">
                {list.map((item, index) => (
                  <div key={index}>
                    <p>
                      {item.managerName}, {item.email},phone:
                      {item.phoneNumber}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
        <div className="border border-gray-200 px-3 py-3 rounded-2xl bg-white shadow-sm mt-3">
          <div className="flex justify-between items-center pb-4">
            <h1 className="text-lg font-semibold text-gray-900">
              Rent Frequency and payment required
              <span className="text-red-500 ml-1">(Required)</span>
            </h1>
            <div className="text-blue-600">
              <PaymentModel handlePayment={handlePayment} />
            </div>
          </div>

          {/* ShadCN Separator after modal div */}
          {list.length > 0 ? (
            <>
              <Separator className="my-4" />

              <Breadcrumb className="text-gray-700" />
            </>
          ) : null}

          <div className="mt-4 text-gray-800">
            {list.length > 0 ? (
              <div className="space-y-1">
                {list.map((item, index) => (
                  <div key={index}>
                    <p>
                      {item.managerName}, {item.email},phone:
                      {item.phoneNumber}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="w-full">
        {/* task one */}
        <div className="border px-3 py-5 rounded">
          <h1 className="text-[18px] text-black font-semibold">
            Property address <span className="text-[#FF6A62]">(Required)</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CondoForm;
