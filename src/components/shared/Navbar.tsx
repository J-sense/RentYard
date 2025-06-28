import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="mt-3 flex justify-between items-center">
      <h1 className="text-blue-600 font-bold text-2xl">RentYard</h1>
      <Button variant="outline" className="px-5 py-5">
        exit
      </Button>
    </div>
  );
};

export default Navbar;
