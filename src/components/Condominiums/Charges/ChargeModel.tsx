"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { Plus } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ChargesFormData {
  applicantType: string;
  adminFee: number;
}

interface ListingModalProps {
  handleFee: (data: ChargesFormData) => void;
}

const feeOptions = [
  "$50",
  "$100",
  "$150",
  "$200",
  "$250",
  "$300",
  "$350",
  "$400",
  "$450",
  "$500",
];
const total = feeOptions.reduce((sum, fee) => {
  // Remove $ sign and parse to number
  return sum + parseFloat(fee.replace("$", ""));
}, 0);

const ChargeModel = ({ handleFee }: ListingModalProps) => {
  const form = useForm<ChargesFormData>({
    defaultValues: {
      applicantType: "",
    },
  });

  const onSubmit = (data: ChargesFormData) => {
    handleFee(data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Plus size={16} />
          <span>Add Charges</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader className="p-6">
          <DialogTitle>Manage Charges</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 px-6"
          >
            <div className="grid grid-cols-2 gap-6">
              {/* Applicant Type Select */}
              <FormField
                control={form.control}
                name="applicantType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Applicant Type</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-11">
                          <SelectValue
                            placeholder={`${total} all applicant ${feeOptions.length}`}
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {feeOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            <div>{option}</div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Admin Fee Input */}
              <FormField
                control={form.control}
                name="adminFee"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Admin Fee ($)</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        placeholder="0.00"
                        className="h-11"
                        onChange={(e) =>
                          field.onChange(parseFloat(e.target.value) || 0)
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter className="gap-3 p-0 pt-4">
              <DialogClose asChild>
                <Button variant="outline" type="button">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit">Save Charges</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ChargeModel;
