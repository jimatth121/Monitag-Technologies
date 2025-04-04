/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

const AccessToCreditNigeria = ({ setIsRead }) => {
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
        Exploring the State of Access to Credit in Nigeria
      </h1>
      <p className=" font-PoppinsRegular text-[12px] my-3">
        Monitag Technologies Press - 22 July, 2024
      </p>
      <img
        className="w-full h-full object-cover mb-10"
        src="https://res.cloudinary.com/dax11nwlt/image/upload/v1743546744/The_State_of_Access_to_Credit_in_Nigeria_cjx5iq.png"
        alt="blog image"
      />
      <p className="text-gray-700 mt-4">
        Access to credit is a critical factor in economic growth and financial
        empowerment. In a country where only 6% of adults access formal credit,
        millions of Nigerians are left without the financial resources they need
        to thrive. It is evident that this is not due to a lack of need, as
        inflation hit 28.92% in 2023 (Nigeria Bureau of Statistics).
        Additionally, the Nigeria GeoPoll Survey found that most respondents (3
        in 4) express a desire to take out a loan in the next 5 years, yet only
        1 in 4 have attempted to do so. Most respondents have been in business
        for 2 years or less and are seeking modest loans, with 40% needing only
        100,000 Naira or less.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6">
        Traditional Credit Access in Nigeria
      </h2>
      <p className="text-gray-700 mt-2">
        Although the proportion of adult Nigerians borrowing from banks nearly
        doubled in 2023, the ratio of borrowers to savers at 1:13 implies that
        for every 13 adults saving with the bank, just one can access credit
        (eFinA, 2023). Addressing barriers to credit access and promoting
        responsible lending practices are essential in fostering greater
        financial inclusion and economic empowerment across diverse segments of
        society.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6">
        Barriers to Traditional Credit Access
      </h2>
      <ul className="list-disc list-inside text-gray-700 mt-2">
        <li>
          <strong>Lack of Collateral:</strong> Many individuals do not possess
          assets that can be used as collateral for loans.
        </li>
        <li>
          <strong>High-Interest Rates:</strong> Banks often charge high interest
          rates unaffordable for low-income earners.
        </li>
        <li>
          <strong>Complex Application Processes:</strong> The red tape in
          traditional banking deters potential borrowers.
        </li>
        <li>
          <strong>Limited Financial Literacy:</strong> Many people lack the
          knowledge to navigate the loan application process.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mt-6">
        The Rise of Loan Apps
      </h2>
      <p className="text-gray-700 mt-2">
        More recently, the rise of loan apps has filled the wide gap left by
        traditional financial institutions, especially for the underbanked,
        financially illiterate/semi-literate individuals. There is a
        proliferation of loan apps offering easy access to credit, without most
        of the above-listed barriers. By September 2024, Nairametrics reported
        that there were 320 approved loan apps in operation in Nigeria.
      </p>
      <p className="text-gray-700 mt-2">
        However, this convenience does not come without its disadvantages. A
        significant number of loan apps offer excessively high interest rates
        and often employ unethical means of loan recovery. This leaves the
        borrowers in a worse financial state than before they obtained those
        loans.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6">
        Expanding Credit Access for Economic Growth
      </h2>
      <p className="text-gray-700 mt-2">
        Nigeria must address these barriers to ensure more people can access
        credit. Simplifying application processes, offering alternative
        collateral options, and expanding financial literacy programs can help
        bridge the gap. Improving access to credit is essential for fostering
        entrepreneurship, economic growth, and financial stability.
      </p>
    </div>
  );
};

export default AccessToCreditNigeria;
