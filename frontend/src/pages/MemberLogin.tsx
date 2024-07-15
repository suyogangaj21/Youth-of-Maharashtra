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
const formSchema = z.object({
  name: z.string().min(2).max(50),
  mobileno: z.coerce
    .number()
    .gte(1000000000, { message: "Must contain atleast 10 digits" })
    .lte(9999999999, { message: "should not contain More than 10 digits" }),
  address: z.string().min(10),
  email: z.string().email(),
  Dob: z.string().date(),
  qualification: z.string().min(2),
});

const MemberLogin = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      mobileno: undefined,
      address: "",
      email: "",
      Dob: undefined,
      qualification: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="flex justify-center items-center w-full relative">
      <img
        src="./images/MemberLogin (1).png"
        alt="Image"
        className="hidden md:flex w-1/2 "
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
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl ">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mobileno"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl ">Contact No</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your Whatsapp no to Contact you"
                      {...field}
                    />
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
              name="Dob"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl ">
                    Date of Birth (YYYY-MM-DD)
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your date of birth in (YYYY-MM-DD)"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="qualification"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl ">
                    Educational Qualification
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
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

export default MemberLogin;
