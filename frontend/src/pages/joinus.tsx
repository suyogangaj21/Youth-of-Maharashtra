import Joinin from "@/components/Joinin";
import { Button } from "@/components/ui/button";


const JoinUs = () => {

 
  return (
    <div className="flex flex-col relative h-[1000px]">
      <div className="bg-[#E9F5ED] w-full h-[500px] flex justify-start p-3 flex-col items-center ">
        <img
          src="/images/JoinUs (1).png"
          alt="Join Us"
          className="min-w-[470px] w-1/4"
        />
        <h4 className="font-[600]">
          "The best way to find yourself is to lose yourself in the service of
          others."
        </h4>
        <h4 className="lg:w-[800px] text-center font-[600]">
          The time has come for you to join with Spread Happiness Foundation as
          a Corporate Member. Please join our organization with a membership
          today. This fees will be utilized for different social activities.
        </h4>
      </div>
      <div className=" flex justify-evenly  w-full relative bottom-[40px]">
        <div className=" w-[320px] flex justify-center items-center bg-white px-2 py-8 m-4 shadow-2xl rounded-2xl">
          <div className="m-3 ">
            <h2 className="text-3xl font-bold text-center ">Become a Member</h2>
            <div className="m-1 p-3 space-y-2">
              <h4 className="text-xl font-semibold text-neutral-500 p-1">Benifits</h4>
              <Joinin sentence={"Enhance Corporate Social Responsibility"}/>
              <Joinin sentence={"Networking and Collaboration"}/>
              <Joinin sentence={"Brand Reputation and Visibility"}/>
              <Joinin sentence={"Exclusive Access and Insights"}/>
              <Joinin sentence={"Philanthropic Impact"}/>
              <Joinin sentence={"Contributing to Global Good"}/>
              <Joinin sentence={"Employee Engagement and Pride"}/>
              </div>
              <div className="flex justify-center items-center">
              <Button className="text-center "><a href="MemberLogin">Join us</a></Button>
              </div>
          </div>
          
        </div>
        <div className=" w-[320px] flex justify-center items-center bg-white px-2 py-8 m-4 shadow-2xl rounded-2xl">
          <div className="m-3 ">
            <h2 className="text-3xl font-bold text-center ">Register your organistion</h2>
            <div className="m-1 p-3 space-y-2">
              <h4 className="text-xl font-semibold text-neutral-500 p-1">Benifits</h4>
              <Joinin sentence={"Enhance Corporate Social Responsibility"}/>
              <Joinin sentence={"Networking and Collaboration"}/>
              <Joinin sentence={"Brand Reputation and Visibility"}/>
              <Joinin sentence={"Exclusive Access and Insights"}/>
              <Joinin sentence={"Philanthropic Impact"}/>
              <Joinin sentence={"Contributing to Global Good"}/>
              <Joinin sentence={"Employee Engagement and Pride"}/>
              </div>
              <div className="flex justify-center items-center">
              <Button className="text-center "><a href="OrgLogin">Join us</a></Button>
              </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
