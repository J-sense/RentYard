import { SquareCheck } from "lucide-react";
import React from "react";

const Check = () => {
  return (
    <div>
      <div className="flex gap-2">
        <SquareCheck />{" "}
        <span className="text-base font-semibold text-black">
          Accept RentYard property adding terms & condition
        </span>
      </div>
    </div>
  );
};

export default Check;
