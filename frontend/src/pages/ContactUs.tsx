import ContactusForm from "@/components/ContactusForm"


const ContactUs = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="shadow-2xl flex w-[900px] m-12">
        <div className="hidden md:flex bg-blue-900 w-2/5">
          FAQs
        </div>
        <div className="flex justify-center items-center w-full md:w-3/5 flex-col bg-[#E9F5ED]  p-10">
           <h2 className="text-3xl font-bold">Hi there !</h2>
           <p className="w-[400px] text-center">We are always here to help. If your have requirements/queries fill up the contact form
           </p>
           <ContactusForm/>
        </div>   
      </div>
    </div>
  )
}

export default ContactUs
