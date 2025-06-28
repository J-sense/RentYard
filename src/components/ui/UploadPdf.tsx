"use client";
import { useState } from "react";
import { File, Upload } from "lucide-react";

const UploadPDF = () => {
  const [pdfFile, setPdfFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
    } else {
      alert("Please select a valid PDF file");
    }
  };

  return (
    <div className=" border rounded-xl shadow-sm w-[300px]">
      <label
        htmlFor="pdf-upload"
        className="flex items-center justify-center gap-2 cursor-pointer
          bg-blue-50 text-slate-400 font-semibold py-3 px-4  rounded-2xl
          hover:bg-blue-100 transition"
      >
        <Upload className="w-5 h-5" />
        PDF Only
      </label>
      <input
        id="pdf-upload"
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        className="hidden"
      />

      {pdfFile && (
        <div className="mt-4">
          <p className="text-green-600 font-medium">
            Selected file: {pdfFile.name}
          </p>
        </div>
      )}
    </div>
  );
};

export default UploadPDF;
