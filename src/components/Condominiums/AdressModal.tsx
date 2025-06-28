/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Edit, Plus } from "lucide-react";
import { useState } from "react";

const countries = ["United States", "Canada", "United Kingdom", "Australia"];
const usStates = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  // Add all other states...
];

const AddressModal = ({ handleSubmit }: any) => {
  const [icon, setIcon] = useState(true);
  const form = useForm({
    defaultValues: {
      propertyName: "",
      unit: "",
      website: "",
      country: "",
      streetAddress: "",
      suite: "",
      town: "",
      state: "",
      zipCode: "",
    },
  });

  const onSubmit = (data: any) => {
    handleSubmit(data);
    setIcon(false);
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

      <DialogContent className="w-[95vw] max-w-[2000px] p-0">
        <DialogHeader className="p-6">
          <DialogTitle>Create Category</DialogTitle>
          <DialogDescription>
            Enter category information and submit.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 px-6"
          >
            {/* First Grid Row */}
            <div className="grid grid-cols-3 gap-6">
              <FormField
                control={form.control}
                name="propertyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Property Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter category"
                        className="h-11 rounded-lg border-gray-300 pl-3"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="unit"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Total apartment unit</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter unit count"
                        className="h-11 rounded-lg border-gray-300 pl-3"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Property website (optional)</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter website URL"
                        className="h-11 rounded-lg border-gray-300 pl-3"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* Second Grid Row - Address Fields */}
            <div className="grid grid-cols-3 gap-6">
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country/Region</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-11 rounded-lg border-gray-300 pl-3">
                          <SelectValue placeholder="Select a country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="streetAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Street Address</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter street address"
                        className="h-11 rounded-lg border-gray-300 pl-3"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="suite"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Suite/Apt (optional)</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter suite number"
                        className="h-11 rounded-lg border-gray-300 pl-3"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* Third Grid Row - Town, State, Zip */}
            <div className="grid grid-cols-3 gap-6">
              <FormField
                control={form.control}
                name="town"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Town/City</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter town or city"
                        className="h-11 rounded-lg border-gray-300 pl-3"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State/Province</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-11 rounded-lg border-gray-300 pl-3">
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {usStates.map((state) => (
                          <SelectItem key={state} value={state}>
                            {state}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="zipCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Zip/Postal Code</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter zip code"
                        className="h-11 rounded-lg border-gray-300 pl-3"
                      />
                    </FormControl>
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
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddressModal;
