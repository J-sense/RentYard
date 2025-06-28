import Check from "@/components/ui/Check";
import UploadPDF from "@/components/ui/UploadPdf";

const LandlordComponent = () => {
  return (
    <div className="mb-10">
      <div className="border rounded-2xl mb-10">
        <div className="bg-[#F4F4F4] py-5 rounded-2xl">
          <h1 className="text-[#6F6C6A] pl-3">Prof of Ownership</h1>
        </div>
        <div className="p-5">
          <h3 className="text-base font-semibold text-black mb-3">
            Ownership doc*
          </h3>
          <UploadPDF />
        </div>
      </div>
      <Check />
    </div>
  );
};

export default LandlordComponent;
