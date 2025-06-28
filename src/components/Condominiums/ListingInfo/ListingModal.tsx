"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { Edit, Plus } from "lucide-react";
import { useState } from "react";
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
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface ListingManagerFormData {
  managerName: string;
  phoneNumber: string;
  email: string;
  isPrimaryContact: boolean;
}

interface ListingModalProps {
  handleListing: (data: ListingManagerFormData) => void;
}

const ListingModal = ({ handleListing }: ListingModalProps) => {
  const [icon, setIcon] = useState(true);
  const form = useForm<ListingManagerFormData>({
    defaultValues: {
      managerName: "",
      phoneNumber: "",
      email: "",
      isPrimaryContact: false,
    },
  });

  const onSubmit = (data: ListingManagerFormData) => {
    handleListing(data);
    setIcon(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="text-blue-500 flex cursor-pointer items-center gap-1">
          {icon ? (
            <>
              <Plus size={16} /> <span>Add skill</span>
            </>
          ) : (
            <>
              <Edit size={16} /> <span>Edit </span>
            </>
          )}
        </div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader className="p-6">
          <DialogTitle>Listing Manager Information</DialogTitle>
          <DialogDescription>
            Enter the manager&#39;s details and contact information.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 px-6"
          >
            {/* First Row - Name and Phone */}
            <div className="grid grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="managerName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Manager Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="John Doe"
                        className="h-11"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <PhoneInput
                        international
                        defaultCountry="US"
                        value={field.value}
                        onChange={field.onChange}
                        className="h-11 [&>input]:h-11 [&>input]:pl-14"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Second Row - Email and Checkbox */}
            <div className="grid grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="manager@example.com"
                        className="h-11"
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isPrimaryContact"
                render={({ field }) => (
                  <FormItem className="flex flex-col justify-end h-full">
                    <div className="flex items-center space-x-2 h-11">
                      <Checkbox
                        id="isPrimaryContact"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <FormLabel htmlFor="isPrimaryContact" className="!mt-0">
                        Primary Contact
                      </FormLabel>
                    </div>
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
              <Button type="submit">Save Manager</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ListingModal;
