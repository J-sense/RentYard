import { Separator } from "@/components/ui/separator";
import { CardSim, CheckSquare } from "lucide-react";
import { AddNewCardModal } from "./AddNewCardModel";
import { Button } from "@/components/ui/button";

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

const testCards = [
  {
    cardName: "John Doe",
    cardNumber: "4242 4242 4242 4242", // Visa test card
    expiryDate: "12/25",
    cvc: "123",
  },
  {
    cardName: "Jane Smith",
    cardNumber: "5555 5555 5555 4444", // Mastercard test card
    expiryDate: "05/26",
    cvc: "456",
  },
  // ... other test cards
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

        {/* Toggle Switch - Improved for mobile */}
        <div className="border w-full sm:w-[300px] rounded-lg p-[2px] flex mt-4 bg-gray-50">
          <button className="bg-blue-100 px-4 sm:px-6 py-2 rounded-lg text-gray-600 font-semibold flex-1 text-sm sm:text-base">
            Monthly
          </button>
          <button className="px-4 py-2 text-gray-800 font-semibold flex-1 text-sm sm:text-base">
            Annual <span className="text-blue-600">(save 57%)</span>
          </button>
        </div>
      </div>

      {/* Plans Grid - Improved responsiveness */}
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
            {/* Plan Header - Improved for mobile */}
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
          </div>
        ))}
      </div>

      {/* Payment Options - Improved responsiveness */}
      <div className="border rounded-lg p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
          <h1 className="text-lg font-semibold text-gray-900">
            Payment Options
          </h1>
          <AddNewCardModal />
        </div>

        <div className="space-y-4 pb-20">
          {testCards.map((plan) => (
            <div
              key={plan.cvc}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-3">
                <CardSim className="h-5 w-5 text-gray-400" />
                <div className="md:flex items-center">
                  <p className="font-medium text-gray-900">{plan.cardName}</p>
                  <p className="text-sm text-gray-500">
                    •••• •••• ••••{" "}
                    {plan.cardNumber.replace(/\s/g, "").slice(-4)}
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                className="w-full sm:w-auto border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Select
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
