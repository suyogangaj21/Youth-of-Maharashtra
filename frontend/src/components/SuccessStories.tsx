import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { GoDotFill } from "react-icons/go";

export function SuccessStories() {
  return (
    <Carousel className="w-full md:max-w-[1000px]  h-[550px] m-5 flex  justify-center items-center">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex  items-center justify-center p-2 bg-[#DCF5E5] h-full relative">
                  <img
                    src="/images/Frame 223.png"
                    alt="images"
                    className="w-[420px] h-[450px] absolute left-2 top-2"
                  />

                  <div className="flex flex-col h-[450px] ml-[430px]">
                    <h2 className="md:text-3xl text-3xl font-bold text-center text-nowrap">
                      Success Stories
                    </h2>

                    <div className="flex justify-center m-3 mt-6">
                      <div className="mx-4">
                        <h4 className="text-xl font-semibold">
                          Event Information
                        </h4>
                        <div className="mt-3 flex  ">
                          <GoDotFill className="w-10  " />
                          The State Republic Day Parade is one of the event
                          organized by NSS Maharashtra.
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold">Tasks</h4>
                        <div className="flex flex-col">
                          <p className="flex ">
                            <GoDotFill className="w-10 h-10 pb-4" />
                            We would donate the food items which the team had
                            brought from the fundings.
                          </p>

                          <p className="flex ">
                            <GoDotFill className="w-10 h-10 pb-4" /> Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
