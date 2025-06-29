"use client";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation"; // Updated import

const Footer = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back(); // Goes back one step in history
  };

  const handleGetStarted = () => {
    router.push("/checkout"); // Navigates to checkout
  };

  return (
    <div className="flex justify-between items-center my-10">
      <Button
        variant="link"
        onClick={handleBack}
        className="text-xl text-black underline p-0 hover:no-underline"
      >
        Back
      </Button>

      <Button onClick={handleGetStarted}>Get Started</Button>
    </div>
  );
};

export default Footer;
