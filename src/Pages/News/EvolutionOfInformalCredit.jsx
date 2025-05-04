/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

const EvolutionOfInformalCredit = ({ setIsRead }) => {
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
        The Evolution of Informal Credit Systems in Nigeria
      </h1>
      <p className=" font-PoppinsRegular text-[12px] my-3">
        Monitag Technologies Press - 10 June, 2024
      </p>
      <img
        className="w-full h-full object-cover mb-10"
        src="https://res.cloudinary.com/dax11nwlt/image/upload/v1743546718/The_Evolution_of_Informal_Credit_Systems_in_Nigeria_lihtbz.png"
        alt="blog image"
      />
      <p className="mt-4 text-gray-700">
        Ajo, also known as Esusu, is a trust-based savings system that has been
        used by Nigerians for generations. It involves a group of individuals
        pooling money together regularly (daily, weekly, or monthly). At the end
        of each cycle, one member of the group receives the total contributions.
        This can be used for personal endeavors such as paying rent or school
        fees or for business ventures such as stocking a new shop, starting a
        business, etc. Participants often know each other personally, making
        this an informal source of credit and an alternative to formal loans
        from traditional financial institutions.
      </p>

      <p className="mt-4 text-gray-700">
        Unfortunately, because Ajo is informal, there is often a risk of
        default, lack of regulation, limited scalability for credit access, and
        a complicated calculation system, which erodes trust in the entire
        system. Disputes often arise based on whose turn it is to receive the
        general contribution in the cycle, who has not paid, and similar issues.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-gray-800">
        Taking Informal Credit Online: Digital Ajo
      </h2>
      <p className="mt-2 text-gray-700">
        With advancements in technology and increased internet penetration in
        Nigeria, estimated at around 50% (Internet World Stats, 2023), digital
        Ajo platforms are emerging as modern alternatives to traditional Ajo
        systems. By combining the best aspects of Ajo with digital platforms,
        these systems ensure that individuals and small businesses continue to
        have access to finance.
      </p>

      <p className="mt-4 text-gray-700">
        Automating the Ajo process allows digital platforms to address many of
        the shortcomings of the traditional Ajo system:
      </p>
      <ul className="mt-2 list-disc list-inside text-gray-700">
        <li>
          <strong>Transparency:</strong> Participants can track contributions,
          identify defaulters, and determine whose turn it is to receive funds,
          reducing disputes and fostering trust.
        </li>
        <li>
          <strong>Accessibility:</strong> Digital Ajo platforms can scale beyond
          friend groups, enabling more Nigerians to access credit.
        </li>
        <li>
          <strong>Security:</strong> With digital records, the risk of
          mismanagement is significantly reduced.
        </li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold text-gray-800">
        The Future of Informal Credit Systems
      </h2>
      <p className="mt-2 text-gray-700">
        As Nigeria continues to face limited access to formal credit,
        alternative systems like Ajo offer a lifeline to many individuals and
        small businesses. By modernizing informal credit, communal trust is not
        only retained but access is also extended to a broader audience. With
        greater adoption of this system by Nigerians and proper regulation by
        authorities, more individuals will be empowered, contributing to the
        growth of the Nigerian economy.
      </p>
      <div
        onClick={handleGoBack}
        className="flex items-center mt-10 lg:mt-8 gap-2 cursor-pointer"
      >
        <FaRegArrowAltCircleLeft size={30} />

        <button>BACK</button>
      </div>
    </div>
  );
};

export default EvolutionOfInformalCredit;
