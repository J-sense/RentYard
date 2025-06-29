"use client";
import { Upload } from "lucide-react";
import { useRef } from "react";

interface SimplePhotoUploaderProps {
  centerText?: string;
  subText?: string;
  width?: string;
  height?: string;
  className?: string;
}

const SimplePhotoUploader = ({
  centerText = "",
  subText = "or click to browse files",
  width = "400px",
  height = "200px",
  className = "",
}: SimplePhotoUploaderProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      className={`border-2 border-dashed border-blue-400 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-blue-400 transition-colors bg-gray-50 ${className}`}
      style={{ width, height }}
      onClick={triggerFileInput}
    >
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
      />

      <Upload className="h-8 w-8 text-gray-400 mb-2" />
      <p className="font-medium text-gray-700 text-center">{centerText}</p>
      <p className="text-sm text-gray-500 mt-1 text-center">{subText}</p>
    </div>
  );
};

export default SimplePhotoUploader;
