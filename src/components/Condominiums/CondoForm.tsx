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
import { Plus } from "lucide-react";
import SimplePhotoUploader from "../ui/Photo";

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
    <div>
      <div className="flex gap-5">
        {/* Left Column - 5 sections */}
        <div className="w-full space-y-3">
          {/* Property Address */}
          <div className="border border-gray-200 px-3 py-3 rounded-2xl bg-white shadow-sm">
            <div className="flex justify-between items-center pb-4">
              <h1 className="text-lg font-semibold text-gray-900">
                Property Address
                <span className="text-red-500 ml-1">(Required)</span>
              </h1>
              <AdressModal handleSubmit={handleSubmit} />
            </div>
            {property && (
              <>
                <Separator className="my-4" />
                <div className="mt-4 text-gray-800 space-y-1">
                  <p>
                    {property}, {website}, Total units: {unit}
                  </p>
                  <p>
                    {streetAddress}, {country}
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Leasing Info */}
          <div className="border border-gray-200 px-3 py-3 rounded-2xl bg-white shadow-sm">
            <div className="flex justify-between items-center pb-4">
              <h1 className="text-lg font-semibold text-gray-900">
                Leasing Info
                <span className="text-red-500 ml-1">(Required)</span>
              </h1>
              <ListingModal handleListing={handleListing} />
            </div>
            {list.length > 0 && (
              <>
                <Separator className="my-4" />
                <div className="mt-4 text-gray-800 space-y-1">
                  {list.map((item, index) => (
                    <div key={index}>
                      <p>
                        {item.managerName}, {item.email}, phone:{" "}
                        {item.phoneNumber}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Charges */}
          <div className="border border-gray-200 px-3 py-3 rounded-2xl bg-white shadow-sm">
            <div className="flex justify-between items-center pb-4">
              <h1 className="text-lg font-semibold text-gray-900">
                Charges
                <span className="text-red-500 ml-1">(Required)</span>
              </h1>
              <ChargeModel handleFee={handleFee} />
            </div>
            {chrg.length > 0 && (
              <>
                <Separator className="my-4" />
                <div className="mt-4 text-gray-800">
                  {/* Render charge data here */}
                  <p>Charges data will be displayed here</p>
                </div>
              </>
            )}
          </div>

          {/* Payment */}
          <div className="border border-gray-200 px-3 py-3 rounded-2xl bg-white shadow-sm">
            <div className="flex justify-between items-center pb-4">
              <h1 className="text-lg font-semibold text-gray-900">
                Payment
                <span className="text-red-500 ml-1">(Required)</span>
              </h1>
              <PaymentModel handlePayment={handlePayment} />
            </div>
            {payment.length > 0 && (
              <>
                <Separator className="my-4" />
                <div className="mt-4 text-gray-800">
                  {/* Render payment data here */}
                  <p>Payment data will be displayed here</p>
                </div>
              </>
            )}
          </div>

          {/* Application Agreement */}
          <div className="border border-gray-200 flex justify-between px-3 py-3 rounded-2xl bg-white shadow-sm">
            <h1 className="text-lg font-semibold text-gray-900">
              Application Agreement
              <span className="text-zinc-500">(optional)</span>
            </h1>
            <div className="flex items-center text-blue-600">
              <Plus />{" "}
              <span className="text-blue-600 underline">add skill</span>
            </div>
          </div>

          {/* About the property */}
          <div className="border border-gray-200 flex justify-between px-3 py-3 rounded-2xl bg-white shadow-sm">
            <h1 className="text-lg font-semibold text-gray-900">
              About the property
              <span className="text-zinc-500">(optional)</span>
            </h1>
            <div className="flex items-center text-blue-600">
              <Plus />{" "}
              <span className="text-blue-600 underline">add skill</span>
            </div>
          </div>

          {/* Community's amenity/features */}
          <div className="border border-gray-200 flex justify-between px-3 py-3 rounded-2xl bg-white shadow-sm">
            <h1 className="text-lg font-semibold text-gray-900">
              Community&#39;s amenity/features
              <span className="text-zinc-500">(optional but recommended)</span>
            </h1>
            <div className="flex items-center text-blue-600">
              <Plus />{" "}
              <span className="text-blue-600 underline">add skill</span>
            </div>
          </div>
        </div>

        {/* Right Column - 5 sections */}
        <div className="w-full space-y-3">
          {/* Property Preview */}
          <div className="border border-gray-200 flex justify-between px-3 py-3 rounded-2xl bg-white shadow-sm">
            <h1 className="text-lg font-semibold text-gray-900">
              Pet Fees
              <span className="text-zinc-500">(optional )</span>
            </h1>
            <div className="flex items-center text-blue-600">
              <Plus />{" "}
              <span className="text-blue-600 underline">add skill</span>
            </div>
          </div>

          {/* Documents */}
          <div className="border border-gray-200 flex justify-between px-3 py-3 rounded-2xl bg-white shadow-sm">
            <h1 className="text-lg font-semibold text-gray-900">
              Parking
              <span className="text-zinc-500">(Optional )</span>
            </h1>
            <div className="flex items-center text-blue-600">
              <Plus />{" "}
              <span className="text-blue-600 underline">add skill</span>
            </div>
          </div>
          <div className="border border-gray-200 flex justify-between px-3 py-3 rounded-2xl bg-white shadow-sm">
            <h1 className="text-lg font-semibold text-gray-900">
              Nearest educational institution
              <span className="text-zinc-500">(Optional but recommended)</span>
            </h1>
            <div className="flex items-center text-blue-600">
              <Plus />{" "}
              <span className="text-blue-600 underline">add skill</span>
            </div>
          </div>
          <div className="border border-gray-200 flex justify-between px-3 py-3 rounded-2xl bg-white shadow-sm">
            <h1 className="text-lg font-semibold text-gray-900">
              Nearest solution
              <span className="text-zinc-500">(Optional but recommended)</span>
            </h1>
            <div className="flex items-center text-blue-600">
              <Plus />{" "}
              <span className="text-blue-600 underline">add skill</span>
            </div>
          </div>
          <div className="border border-gray-200 flex justify-between px-3 py-3 rounded-2xl bg-white shadow-sm">
            <h1 className="text-lg font-semibold text-gray-900">
              Utilities Provider
              <span className="text-zinc-500">(Optional but recommended)</span>
            </h1>
            <div className="flex items-center text-blue-600">
              <Plus />{" "}
              <span className="text-blue-600 underline">add skill</span>
            </div>
          </div>
          {/*  */}
          {/* Amenities */}

          {/* Reviews */}
        </div>
      </div>
      <div className=" border p-5 rounded-2xl mt-4">
        <h1 className="text-xl  text-black font-semibold">Property Gallery</h1>
        <div className="w-full  flex gap-2">
          <SimplePhotoUploader centerText={"upload cover photo"} />
          <div className="flex gap-2 space-y-2">
            <div>
              <SimplePhotoUploader width="100px" height="100px" />
              <SimplePhotoUploader width="100px" height="100px" />
            </div>
            <div>
              <SimplePhotoUploader width="100px" height="100px" />
              <SimplePhotoUploader width="100px" height="100px" />
            </div>
          </div>
          <div className="flex gap-2 space-y-2 ml-10">
            <div>
              <SimplePhotoUploader width="100px" height="100px" />
              <SimplePhotoUploader width="100px" height="100px" />
            </div>
            <div>
              <SimplePhotoUploader width="100px" height="100px" />
              <SimplePhotoUploader width="100px" height="100px" />
            </div>
            <div>
              <SimplePhotoUploader width="100px" height="100px" />
              <SimplePhotoUploader width="100px" height="100px" />
            </div>
            <div>
              <SimplePhotoUploader width="100px" height="100px" />
              <SimplePhotoUploader width="100px" height="100px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CondoForm;
// Community’s amenity/features
