import Check from "@/components/ui/Check";
import { Input } from "@/components/ui/input";
import UploadPDF from "@/components/ui/UploadPdf";

const RealtorComponent = () => {
  return (
    <div className="mb-10">
      <div className="border rounded-2xl mb-5">
        <div className="bg-[#F4F4F4] py-5 rounded-2xl">
          <h1 className="text-[#6F6C6A] pl-3">Retailor Verification</h1>
        </div>
        <div className="grid grid-cols-3 gap-3 items-center">
          <div className="p-5">
            <h3 className="text-base font-semibold text-black mb-3">
              Ownership doc*
            </h3>
            <div className="py-5 px-2">
              <Input placeholder="0000000000" />
            </div>
          </div>
          <div className="p-5">
            <h3 className="text-base font-semibold text-black mb-3">
              Additional documents for relator*
            </h3>
            <UploadPDF />
          </div>
          <div className="p-5">
            <h3 className="text-base font-semibold text-black mb-3">
              Agreement with landlord*
            </h3>
            <UploadPDF />
          </div>
        </div>
      </div>
      <Check />
    </div>
  );
};

export default RealtorComponent;
