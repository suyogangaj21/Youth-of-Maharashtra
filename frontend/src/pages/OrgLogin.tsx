import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
const formSchema = z.object({
  Orgname: z.string().min(2).max(50),
  contactname: z.string().min(2),
  contactmobileno: z
    .number()
    .gte(1000000000, { message: "Must contain atleast 10 digits" })
    .lte(9999999999, { message: "should not contain More than 10 digits" }),
  address: z.string().min(10),
  email: z.string().email(),
  DateOfRegistration: z.string().date(),
  areaofwork: z.string().min(2),
  noteoforg: z
    .string()
    .min(50, { message: "Note must contain atleast 50 words" })
    .max(300, { message: "It should contain less than 300 words" }),
});
const OrgLogin = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Orgname: "",
      contactmobileno: undefined,
      contactname: "",
      address: "",
      email: "",
      DateOfRegistration: undefined,
      areaofwork: "",
      noteoforg: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="flex justify-evenly items-center w-full ">
      <img
        src="./images/OrganizationLogin (1).png "
        alt="Images"
        className="hidden md:flex w-1/2 m-5 "
      />
      <div className="max-w-[500px] shadow-2xl w-full mt-10 rounded-lg mb-10">
        <h2 className="text-4xl p-5 font-bold ">Become a Member</h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 m-8 p-1"
          >
            <FormField
              control={form.control}
              name="Orgname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl ">Name of NGO</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Name of NGO" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="DateOfRegistration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl ">
                    Date of Registration (YYYY-MM-DD)
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your date of Registration of NGO in (YYYY-MM-DD)"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl ">Postal address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter you Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl ">Email ID</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contactname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl ">Contact Person</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Contact Person Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contactmobileno"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl ">Contact Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your Whatsapp no to Contact NGO"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="areaofwork"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl ">
                    Area of Work
                  </FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter were Activities in which NGO participate" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="noteoforg"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl ">
                    Brife Note about Organisation
                  </FormLabel>
                  <FormControl>
                    <Textarea placeholder="Write a beife note about the NGO in 50 to 300 Words.)" {...field}  />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="max-w-[120px] w-full ">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default OrgLogin;