import ContactusForm from "@/components/ContactusForm";
import { FaInstagram } from "react-icons/fa";
import { TbBrandLinkedin } from "react-icons/tb";
import { TiSocialFacebookCircular } from "react-icons/ti";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ContactUs = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="shadow-2xl flex w-[900px] m-12">
        <div className="hidden md:flex bg-[#3B3A63] w-6/12  flex-col justify-center items-center space-y-10">
          <div className="text-white w-full m-2 p-2 px-4">
            <h2 className="text-2xl ">Frequently Asked Questions?</h2>
            (FAQs)
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is YoM?</AccordionTrigger>
                <AccordionContent>
                  YoM ( Youth of Maharashtra) is a Webpage dedicatedly developed
                  for the youth of Maharashtra in the Age group of 19 to 29
                  years for Connecting Youth of Maharashtra for A Better Future
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  What are benefits of becoming the member of YoM?
                </AccordionTrigger>
                <AccordionContent>
                  At YoM, you have the chance to access outstanding internship
                  and job opportunities while developing valuable social skills.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Who can enroll?</AccordionTrigger>
                <AccordionContent>
                  The youth in the age group of 19 to 29 years and NGOs, and
                  Organizations can enroll with us by filling out the join us
                  forms available.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="lg:text-2xl font-medium text-white w-full justify-center items-center flex flex-col space-y-9 ">
            <div>
              <p className="text-center ">Follow us on our</p> Social media
              handles
            </div>
            <div className="flex w-full  justify-center  space-x-2 ">
              <FaInstagram className="h-[50px] w-[50px]" />
              <TiSocialFacebookCircular className="h-[50px] w-[50px]" />
              <TbBrandLinkedin className="h-[50px] w-[50px]" />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full md:w-3/5 flex-col bg-[#E9F5ED]  p-10">
          <h2 className="text-3xl font-bold">Hi there !</h2>
          <p className="w-[400px] text-center">
            We are always here to help. If your have requirements/queries fill
            up the contact form
          </p>
          <ContactusForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
