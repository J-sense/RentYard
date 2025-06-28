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
import { Edit, Plus } from "lucide-react";
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
import { useState } from "react";

interface PaymentFormData {
  month: string;
  reminderDate: string;
  dueDate: string;
}

interface ListingModalProps {
  handlePayment: (data: PaymentFormData) => void;
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const PaymentModel = ({ handlePayment }: ListingModalProps) => {
  const [icon, setIcon] = useState(true);
  const form = useForm<PaymentFormData>({
    defaultValues: {
      month: "",
      reminderDate: "",
      dueDate: "",
    },
  });

  const onSubmit = (data: PaymentFormData) => {
    handlePayment(data);
    setIcon(!icon);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className=" text-blue-500 flex cursor-pointer">
          {icon ? (
            <>
              {" "}
              <Plus /> <span>Add skill</span>
            </>
          ) : (
            <>
              <Edit /> <span>edit</span>
            </>
          )}
        </div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader className="p-6">
          <DialogTitle> Rent Frequency and payment required</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 px-6"
          >
            {/* Three fields in flex container */}
            <div className="flex gap-4">
              {/* Month Select */}
              <FormField
                control={form.control}
                name="month"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Month</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-11">
                          <SelectValue placeholder="Select month" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {months.map((month) => (
                          <SelectItem key={month} value={month}>
                            {month}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Reminder Date */}
              <FormField
                control={form.control}
                name="reminderDate"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Reminder Date</FormLabel>
                    <FormControl>
                      <Input {...field} type="date" className="h-11" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Due Date */}
              <FormField
                control={form.control}
                name="dueDate"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Due Date</FormLabel>
                    <FormControl>
                      <Input {...field} type="date" className="h-11" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter className="gap-3 p-6">
              <DialogClose asChild>
                <Button variant="outline" type="button">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit">Save Schedule</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModel;
