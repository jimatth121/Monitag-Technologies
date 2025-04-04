import Banner from "./Banner";
import CoreValues from "./CoreValues";
import Leadership from "./Leadership";

const AboutUs = () => {
  return (
    <div>
      <Banner />
      <div className="py-16">
        <div className=" py-16">
          <p className=" font-PoppinsSemiBold header2 text-center">
            OUR MISSION
          </p>
          <p className=" font-PoppinsLight text1 text-center mt-2 text-[#b9b9b9]">
            To create financial solutions that empower individuals and
            communities, and drive sustainable growth.
          </p>
        </div>

        <div className="">
          <p className=" font-PoppinsSemiBold header2 text-center">
            OUR VISION
          </p>
          <p className=" font-PoppinsLight text1 text-center mt-2 text-[#b9b9b9]">
            To be the leading catalyst for financial innovation in Africa.
          </p>
        </div>
      </div>
      <Leadership />
      <CoreValues />
    </div>
  );
};

export default AboutUs;
