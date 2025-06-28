/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ApertureIcon, Building2Icon, House } from "lucide-react";

const roles = [
  {
    id: "single-house",
    icon: House,
    title: "Landlord",
    description: "Owner of the property",
    href: "/LandLord",
  },
  {
    id: "apartments",
    icon: ApertureIcon,
    title: "Realtor",
    description: "Manage property on behalf on owner",
    href: "/properties/apartments",
  },
  {
    id: "condominiums",
    icon: Building2Icon,
    title: "Property management company",
    description: "For management company",
    href: "/condominiums",
  },
];

const Role = ({ onSelect }: any) => {
  return (
    <div className="mt-12">
      <h1 className="text-[#272B35] text-2xl font-semibold">
        Select Your Role
      </h1>
      <div className="mt-4 flex gap-6 justify-center items-center w-full">
        {roles.map((role) => (
          <div
            key={role.id}
            onClick={() => onSelect(role)}
            className="flex gap-4 border p-5 rounded-xl items-center w-full hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="bg-[#F9FBFF] text-[#272B35] p-3 rounded">
              <role.icon className="text-[#272B35] size-5" />
            </div>
            <div>
              <h2 className="text-[#272B35] text-base font-semibold">
                {role.title}
              </h2>
              <p className="text-[#777980] text-base font-medium">
                {role.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Role;
