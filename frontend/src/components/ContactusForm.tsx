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
import { IoPerson } from "react-icons/io5";
import { Textarea } from "./ui/textarea";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineSegment } from "react-icons/md";
const formSchema = z.object({
  fullName: z.string().min(2).max(50),
  email: z.string().email(),
  contactNo: z
    .number()
    .gte(1000000000, { message: "Must contain atleast 10 digits" })
    .lte(9999999999, { message: "should not contain More than 10 digits" }),
  district: z.string().min(2),
  state: z.string().min(2),
  subject: z
    .string()
    .min(20, { message: "Subject must contain more than 5 words " })
    .max(200),
});

const ContactusForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      contactNo: undefined,
      district: "",
      state: "Maharashtar",
      subject: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="m-10  p-6 w-full max-w-[400px] ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 ">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem className="">
                <div className="flex justify-between m-1">
                  <FormLabel>Full Name</FormLabel>
                  <IoPerson />
                </div>

                <FormControl>
                  <Input
                    placeholder="John Charlie Doe"
                    {...field}
                    className="rounded-lg "
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
                <div className="flex justify-between m-1">
                  <FormLabel>Email Address</FormLabel>
                  <IoIosMail /> 
                </div>

                <FormControl>
                  <Input
                    placeholder="JohnCharlieDoe@gmail.com"
                    {...field}
                    className="rounded-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="contactNo"
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-between m-1">
                  <FormLabel>Contact Number</FormLabel>
                  <FaPhoneAlt />
                </div>

                <FormControl>
                  <Input
                    placeholder="1234567890"
                    {...field}
                    className="rounded-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="district"
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-between m-1">
                  <FormLabel>District</FormLabel>
                  <FaLocationDot />
                </div>

                <FormControl>
                  <Input
                    placeholder=""
                    {...field}
                    className="rounded-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-between m-1">
                  <FormLabel>State</FormLabel>
                  <FaLocationDot />
                </div>

                <FormControl>
                  <Input
                    placeholder="Maharashtra"
                    {...field}
                    className="rounded-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-between m-1">
                  <FormLabel>Subject</FormLabel>
                  <MdOutlineSegment />
                </div>

                <FormControl>
                  <Textarea
                    placeholder="Write about question you want to ask..."
                    {...field}
                    className="rounded-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           
          <div className="flex justify-center items-center">
           <Button type="submit" className="bg-green-600">Send Message</Button>
          </div>
          
        </form>
      </Form>
    </div>
  );
};

export default ContactusForm;
