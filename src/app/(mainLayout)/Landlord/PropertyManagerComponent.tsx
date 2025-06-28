/* eslint-disable @typescript-eslint/no-unused-vars */
import Check from "@/components/ui/Check";
import { Input } from "@/components/ui/input";
import UploadPDF from "@/components/ui/UploadPdf";
import PhoneInput, { Value } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
  "France",
  "Japan",
  "India",
  "Brazil",
  "South Africa",
];

const usStates = [
  "California",
  "Texas",
  "Florida",
  "New York",
  "Illinois",
  "Pennsylvania",
  "Ohio",
  "Georgia",
  "North Carolina",
  "Michigan",
  //... add others if needed
];

const PropertyManagerComponent = () => {
  return (
    <div className="mb-8">
      <div className="rounded-2xl border">
        {/* Header */}
        <div className="bg-[#F4F4F4] px-4 py-3 rounded-t-2xl">
          <h1 className="text-[#6F6C6A] font-medium">Company & Office Info</h1>
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-4 gap-4 p-4">
          {/* Company Name */}
          <div>
            <h3 className="text-sm font-semibold text-black mb-2">
              Company Name*
            </h3>
            <Input
              placeholder="Runyan Trade Center"
              className="w-full h-11 py-2 px-3"
            />
          </div>

          {/* Company Identifier */}
          <div>
            <h3 className="text-sm font-semibold text-black mb-2">
              Company Identifier (EIN/TIN)*
            </h3>
            <Input
              placeholder="Enter EIN/TIN"
              className="w-full h-11 py-2 px-3"
            />
          </div>

          {/* Job Title */}
          <div>
            <h3 className="text-sm font-semibold text-black mb-2">
              Your Job Title*
            </h3>
            <Input placeholder="Manager" className="w-full h-11 py-2 px-3" />
          </div>

          {/* Agreement Upload */}
          <div>
            <h3 className="text-sm font-semibold text-black mb-2">
              Agreement with landlord/owner*
            </h3>
            <UploadPDF />
          </div>

          {/* Country */}
          <div>
            <h3 className="text-sm font-semibold text-black mb-2">Country*</h3>
            <Select>
              <SelectTrigger className="w-full h-11 py-2 px-3">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Street Address */}
          <div>
            <h3 className="text-sm font-semibold text-black mb-2">
              Street Address*
            </h3>
            <Input
              placeholder="123 Main St"
              className="w-full h-11 py-2 px-3"
            />
          </div>

          {/* Apartment/Suite */}
          <div>
            <h3 className="text-sm font-semibold text-black mb-2">
              Apartment/Suite
            </h3>
            <Input placeholder="Apt 4B" className="w-full h-11 py-2 px-3" />
          </div>

          {/* Phone Number */}
          <div>
            <h3 className="text-sm font-semibold text-black mb-2">
              Phone Number*
            </h3>
            <PhoneInput
              international
              defaultCountry="US"
              placeholder="Enter phone number"
              className="w-full [&>input]:h-11 [&>input]:py-2 [&>input]:px-3"
              onChange={function (value?: Value): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>

          {/* Email */}
          <div>
            <h3 className="text-sm font-semibold text-black mb-2">Email*</h3>
            <Input
              type="email"
              placeholder="example@company.com"
              className="w-full h-11 py-2 px-3"
            />
          </div>

          {/* Town/City */}
          <div>
            <h3 className="text-sm font-semibold text-black mb-2">
              Town/City*
            </h3>
            <Input placeholder="New York" className="w-full h-11 py-2 px-3" />
          </div>

          {/* State */}
          <div>
            <h3 className="text-sm font-semibold text-black mb-2">
              State/Province*
            </h3>
            <Select>
              <SelectTrigger className="w-full h-11 py-2 px-3">
                <SelectValue placeholder="Select state" />
              </SelectTrigger>
              <SelectContent>
                {usStates.map((state) => (
                  <SelectItem key={state} value={state}>
                    {state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Zip/Postal Code */}
          <div>
            <h3 className="text-sm font-semibold text-black mb-2">
              Zip/Postal Code*
            </h3>
            <Input placeholder="10001" className="w-full h-11 py-2 px-3" />
          </div>
        </div>

        {/* Checkbox Section */}
        <div className="px-4 py-3">
          <Check />
        </div>
      </div>
    </div>
  );
};

export default PropertyManagerComponent;
