/* eslint-disable react/prop-types */
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import "./CoreValues.css";
import { useNavigate } from "react-router-dom";
const CoreValues = () => {
  const data = [
    {
      image:
        "https://res.cloudinary.com/dax11nwlt/image/upload/v1734607565/samples/smile.jpg",
      title: "Integrity",
      body: "We uphold transparency and honesty as the foundation of everything we do.",
    },
    {
      image:
        "https://res.cloudinary.com/dax11nwlt/image/upload/v1734607788/samples/two-ladies.jpg",
      title: "Innovation",
      body: "We employ technological and financial innovation to create transformative solutions.",
    },
    {
      image:
        "https://res.cloudinary.com/dax11nwlt/image/upload/v1734607690/samples/shoe.jpg",
      title: "Sustainability",
      body: "We prioritise long-term growth, balancing profitability with meaningful social impact.",
    },
    {
      image:
        "https://res.cloudinary.com/dax11nwlt/image/upload/v1734607604/samples/balloons.jpg",
      title: "Empowerment",
      body: "We create products and services that empower individuals and communities in urban and rural areas.",
    },
  ];
  const navigate = useNavigate();
  return (
    <>
      <div className="lg:px-24 px-8 py-16">
        <p className=" font-PoppinsRegular header2 font-bold mb-2 lg:mb-6">
          CORE VALUES
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10  ">
          {data.map((data, index) => (
            <ValueCard key={index} data={data} />
          ))}
        </div>
      </div>

      <div className="relative h-52 lg:h-96 lg:my-14  lg:mb-32">
        <img
          className="w-full h-full object-cover" // Ensures the image covers the background
          src="https://res.cloudinary.com/dax11nwlt/image/upload/v1734608868/samples/animals/kitten-playing.jpg"
          alt="back"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-[800px]">
          <p className="font-PoppinsSemiBold text-white header-36">
            Join our team and shape the future of finance with us.
          </p>
          <p
            onClick={() => navigate("/careers")}
            className="mt-4 cursor-pointer font-PoppinsLight text-white text2 flex justify-center items-center gap-2"
          >
            EXPLORE CAREERS
            <FaRegArrowAltCircleRight color="white" size={25} />
          </p>
        </div>
      </div>
    </>
  );
};

export default CoreValues;

const ValueCard = ({ data }) => {
  return (
    <>
      <div className="bg-[#f3f9fc] pb-8">
        <img src={data.image} alt="valye image" className="w-full" />
        <div className="px-5 mt-4">
          <p className=" font-PoppinsRegular  mb-1 text1">{data.title}</p>
          <p className=" font-PoppinsLight text14 ">{data.body}</p>
        </div>
      </div>
    </>
  );
};
