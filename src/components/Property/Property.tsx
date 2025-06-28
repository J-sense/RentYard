import { ApertureIcon, Building2Icon, House } from "lucide-react";
import Link from "next/link";

const propertyTypes = [
  {
    id: "single-house",
    icon: House,
    title: "Single House Property",
    description: "Single unit house for single family",
    href: "/properties/single-house", // Add your actual route
  },
  {
    id: "apartments",
    icon: ApertureIcon,
    title: "Apartments complex",
    description: "Multiple unit house for families",
    href: "/properties/apartments", // Add your actual route
  },
  {
    id: "condominiums",
    icon: Building2Icon,
    title: "Condominiums",
    description: "Multiple unit house for families",
    href: "/condominiums", // Add your actual route
  },
];

const Property = () => {
  return (
    <div className="mt-12">
      <div>
        <h1 className="text-[#272B35] text-2xl font-semibold">Property Type</h1>
        <div className="mt-4 flex">
          <div className="flex gap-6 justify-center items-center w-full">
            {propertyTypes.map((property) => (
              <Link
                key={property.id}
                href={property.href}
                passHref
                className="flex gap-4 border p-5 rounded-xl items-center w-full hover:shadow-md transition-shadow"
              >
                <div className="bg-[#F9FBFF] text-[#272B35] p-3 rounded">
                  <property.icon className="text-[#272B35] size-5" />
                </div>
                <div>
                  <h2 className="text-[#272B35] text-base font-semibold">
                    {property.title}
                  </h2>
                  <p className="text-[#777980] text-base font-medium">
                    {property.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
