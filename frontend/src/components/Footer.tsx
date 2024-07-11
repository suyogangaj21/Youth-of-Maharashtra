import { AiFillYoutube } from "react-icons/ai"
import { FaFacebook, FaInstagramSquare, FaLinkedin, } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { IoIosMail } from "react-icons/io"
import { PiLineVerticalBold } from "react-icons/pi"
const FooterC = () => {
  return (
    <div className="w-full  bg-[#3B3A63] h-[250px] flex items-center flex-col">
      <div className="flex w-full  h-4/6  m-2 pl-3 justify-center">
      <img src="/images/Footer (1).svg" alt="Footer Image"  className="h-full "/>
      <div className="flex items-center justify-center w-full h-full max-w-[700px] ">
        <div className="flex justify-evenly items-center w-full p-10 m-6 pl-0 ml-2">
        <FaFacebook className="object-contain w-[45px] h-[45px] rounded-full"/>
        <FaSquareXTwitter className="object-contain w-[45px] h-[45px] rounded-full"/>
        <AiFillYoutube className="object-contain w-[45px] h-[45px] rounded-full"/>
        <FaLinkedin className="object-contain w-[45px] h-[45px] rounded-full"/>
        <FaInstagramSquare className="object-contain w-[45px] h-[45px] rounded-full"/>
        <IoIosMail className="object-contain w-[45px] h-[45px] rounded-full"/>
        </div>
      </div>
      </div>
      <div className="text-white flex justify-center w-full text-2xl/4">
        <h3>YoM©2024</h3>
        <PiLineVerticalBold className="text-white  h-full" />
        <h3>Privacy Policy</h3>
        <PiLineVerticalBold className="text-white  h-full" />
        <h3> Terms of Use </h3>
        <PiLineVerticalBold className="text-white  h-full" />
        <h3>Contact Us</h3>
      </div>
    </div>
  )
}

export default FooterC