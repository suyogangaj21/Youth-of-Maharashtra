const JoinUs = () => {
    return (
      <div className="flex flex-col ">
        <div className="bg-[#E9F5ED] w-full h-[500px] flex justify-start p-3 flex-col items-center ">
          <img
            src="/images/JoinUs (1).png"
            alt="Join Us"
            className="min-w-[470px] w-1/4"
          />
          <h4>
            "The best way to find yourself is to lose yourself in the service of
            others."
          </h4>
          <h4 className="lg:w-[800px] text-center">
            The time has come for you to join with Spread Happiness Foundation as
            a Corporate Member. Please join our organization with a membership
            today. This fees will be utilized for different social activities.
          </h4>
        </div>
        <div className=" flex justify-evenly  w-full ">
          <div className=" w-[350px] flex justify-center items-center">
            <div className=""> Become a Member</div>
          </div>
          <div className=" w-[350px] flex justify-center items-center">
            <div className="">Register as a Organisation</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default JoinUs;