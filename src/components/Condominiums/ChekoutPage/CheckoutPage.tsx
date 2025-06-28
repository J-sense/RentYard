import { Separator } from "@/components/ui/separator";
import { CheckSquare } from "lucide-react";
import { AddNewCardModal } from "./AddNewCardModel";

export const membershipPlans = [
  {
    id: "regular",
    title: "Regular",
    price: "$99.99",
    autoPlay: true,
  },
  {
    id: "premium",
    title: "Premium",
    price: "$99.99",
    autoPlay: false,
  },
  {
    id: "enterprise",
    title: "Enterprise",
    price: "$199.99",
    autoPlay: false,
  },
];

const CheckoutPage = () => {
  return (
    <div className="mt-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Separator />

      {/* Header Section */}
      <div className="mt-6 mb-8">
        <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
          Choose a plan for after 30-days free trial
        </h1>

        {/* Toggle Switch */}
        <div className="border w-full sm:w-[300px] rounded-lg p-[2px] flex mt-4 bg-gray-50">
          <button className="bg-blue-100 px-4 sm:px-6 py-2 rounded-lg text-gray-600 font-semibold flex-1 text-sm sm:text-base">
            Monthly
          </button>
          <button className="px-4 py-2 text-gray-800 font-semibold flex-1 text-sm sm:text-base">
            Annual <span className="text-blue-600">(save 57%)</span>
          </button>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10">
        {membershipPlans.map((plan) => (
          <div
            key={plan.id}
            className={`border rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow ${
              plan.autoPlay
                ? "border-blue-600 ring-1 ring-blue-500"
                : "border-gray-200"
            }`}
          >
            {/* Plan Header */}
            <div className="flex flex-col sm:flex-row justify-between gap-2 mb-4">
              <button className="text-lg border px-4 rounded-lg py-2 font-semibold text-gray-800 bg-gray-50 w-full sm:w-auto">
                {plan.title}
              </button>

              {plan.autoPlay && (
                <button className="flex items-center justify-center gap-1 text-sm border px-4 rounded-lg py-2 font-medium text-blue-600 bg-blue-50 w-full sm:w-auto">
                  <CheckSquare className="h-4 w-4" />
                  AutoPlay
                </button>
              )}
            </div>

            {/* Price Section */}
            <div className="mb-4">
              <p className="text-2xl font-semibold text-gray-900">
                {plan.price}
                <span className="text-sm font-normal text-gray-500 ml-1">
                  /mo
                </span>
              </p>
              <p className="text-gray-600 text-sm mt-1">Price for 1-50 units</p>
            </div>

            {/* Features List - Add your features here */}

            {/* Select Button */}
          </div>
        ))}
      </div>
      <div className="border p-3">
        <div className="flex justify-between">
          <h1 className="text-sm font-semibold text-black">Payment Option</h1>
          <AddNewCardModal />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
