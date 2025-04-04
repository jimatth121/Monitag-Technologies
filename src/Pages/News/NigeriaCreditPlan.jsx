/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

const NigeriaCreditPlan = ({ setIsRead }) => {
  const handleGoBack = () => {
    setIsRead("0");
  };
  const scrollToRef = useRef(null);

  useEffect(() => {
    if (scrollToRef.current) {
      const topOffset =
        scrollToRef.current.getBoundingClientRect().top +
        window.pageYOffset -
        40; // Adjust the offset value as needed
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  }, []);
  return (
    <div
      ref={scrollToRef}
      className="max-w-[900px] w-full mx-auto px-6 md:px-0 "
    >
      <div
        onClick={handleGoBack}
        className="flex items-center mt-10 lg:mt-16 gap-2 cursor-pointer"
      >
        <FaRegArrowAltCircleLeft size={30} />

        <button>BACK</button>
      </div>
      <h1 className=" font-PoppinsSemiBold header-36 mt-7 lg:mt-10 ">
        Nigeria Unveils Ambitious Plan to Unlock Credit for All
      </h1>
      <p className=" font-PoppinsRegular text-[12px] my-3">
        Monitag Technologies Press - 1 February, 2025
      </p>
      <img
        className="w-full h-full object-cover mb-10"
        src="https://res.cloudinary.com/dax11nwlt/image/upload/v1743546661/President-Bola-Ahmed-Tinubu_ybsb3g.png"
        alt="blog image"
      />
      <p className="text-gray-800 mb-4">
        In a bid to stimulate economic growth, Nigeria's President Bola Tinubu
        announced plans to establish a National Credit Guarantee Company in May
        2025. This new initiative is part of a broader economic reform agenda
        that aims to improve access to credit for businesses and individuals, a
        key promise Tinubu made during his campaign.
      </p>
      <p className="text-gray-800 mb-4">
        The National Credit Guarantee Company will focus on providing
        risk-sharing solutions between financial institutions and enterprises.
        It is set to collaborate with key government bodies, including the Bank
        of Industry, Nigerian Consumer Credit Corporation (NC3), the Nigerian
        Sovereign Investment Authority, and Ministry of Finance Incorporated.
        Additionally, private sector players and international organisations
        will join forces to make this initiative successful.
      </p>
      <p className="text-gray-800 mb-4">
        This strategic move is designed to foster greater financial stability
        and broaden access to credit for underserved communities, including
        women and young people. Tinubu emphasised that this project is part of
        Nigeria's larger push to re-industrialize the economy, create jobs, and
        improve living standards for its citizens.
      </p>
      <p className="text-gray-800 mb-4">
        The creation of this new credit company follows Tinubu's earlier efforts
        to improve credit access, including the launch of the Nigerian Consumer
        Credit Corporation in mid-2024. Initially aimed at civil service
        employees, the programme has since expanded to cover the broader public,
        providing affordable credit to Nigerians across various sectors.
      </p>
      <p className="text-gray-800">
        International support for Nigeria’s financial ambitions has been
        steadily growing. Countries like the United States and the United
        Kingdom have expressed interest in supporting Nigeria's economic reform
        programs, particularly in enhancing financial inclusivity. Additionally,
        multilateral organisations such as the World Bank have shown a
        willingness to assist Nigeria with technical and financial resources,
        recognising the country’s strategic importance in the West African
        region.
      </p>
    </div>
  );
};

export default NigeriaCreditPlan;
