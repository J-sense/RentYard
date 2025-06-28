import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, CreditCard } from "lucide-react";

export function AddNewCardModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Plus className="h-4 w-4" />
          <span className="text-blue-600 underline">Add New Card</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Add Payment Card
          </DialogTitle>
          <DialogDescription>
            Enter your card details securely.
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-4">
          {/* First two inputs in flex container */}
          <div className="flex  space-y-4 gap-1">
            <div className="">
              <Label htmlFor="cardName">Cardholder Name</Label>
              <Input
                id="cardName"
                name="cardName"
                placeholder="John Doe"
                type="text"
                required
              />
            </div>
            <div className="">
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input
                id="cardNumber"
                name="cardNumber"
                placeholder="4242 4242 4242 4242"
                type="text"
                inputMode="numeric"
                pattern="[0-9\s]{16,19}"
                maxLength={19}
                required
              />
            </div>
          </div>

          {/* Second two inputs in flex container */}
          <div className="flex space-x-4">
            <div className="">
              <Label htmlFor="expiryDate">Expiry Date</Label>
              <Input
                id="expiryDate"
                name="expiryDate"
                placeholder="MM/YY"
                type="text"
                inputMode="numeric"
                pattern="(0[1-9]|1[0-2])\/?([0-9]{2})"
                maxLength={5}
                required
              />
            </div>
            <div className="">
              <Label htmlFor="cvc">CVC</Label>
              <Input
                id="cvc"
                name="cvc"
                placeholder="123"
                type="text"
                inputMode="numeric"
                pattern="\d{3,4}"
                maxLength={4}
                required
              />
            </div>
          </div>

          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Save Card</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
