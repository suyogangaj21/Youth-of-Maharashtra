import { Tables } from "@/components/Tables";

const Resources = () => {
  return (
    <div>
      <div className="w-full bg-cover  h-[470px] flex justify-center items-center flex-col text-white background">
        <h2 className="text-5xl font-bold">Resources</h2>
        <p className="text-center font-medium m-4 w-[500px] px-7">
          If you want to join for such below event you can surely{" "}
        </p>
        <p>
          <a href="/MemberLogin" className="text-green-500 font-medium">
            Join Us
          </a>{" "}
          by providing necessary information.
        </p>
      </div>
      <div className="w-full ">
        <div className="w-full py-4 my-6 ">
          <h2 className="text-center text-4xl font-bold">JOBS</h2>
          <Tables />
        </div>
        <div className="w-full py-4 my-4">
          <h2 className="text-center text-4xl font-bold">INTERNSHIPS</h2>
          <Tables />
        </div>
        <div className="w-full py-4 my-4">
          <h2 className="text-center text-4xl font-bold">SCHOLARSHIPS</h2>
          <Tables />
        </div>
        <div className="w-full py-4 my-4">
          <h2 className="text-center text-4xl font-bold">
            EXPERIENTIAL LEARNING
          </h2>
          <Tables />
        </div>
      </div>
    </div>
  );
};

export default Resources;
