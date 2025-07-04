/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Property from "@/components/Property/Property";
import Role from "@/components/Property/Role";
import { useState } from "react";
import LandlordComponent from "./Landlord/LandlordComponent";
import RealtorComponent from "./Landlord/RealtorComponent";
import PropertyManagerComponent from "./Landlord/PropertyManagerComponent";

type TRole = {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
};

const page = () => {
  const [selectedRole, setSelectedRole] = useState<TRole | null>(null);
  return (
    <div>
      <main>
        <Property />
        <Role onSelect={setSelectedRole} />
        <div>
          {selectedRole && (
            <div className="mt-8">
              {selectedRole.id === "single-house" && <LandlordComponent />}
              {selectedRole.id === "apartments" && <RealtorComponent />}
              {selectedRole.id === "condominiums" && (
                <PropertyManagerComponent />
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default page;
