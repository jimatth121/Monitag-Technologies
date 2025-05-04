/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

const BarriersToFinancialInclusion = ({ setIsRead }) => {
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
        Barriers to Financial Inclusion in Nigeria and the Way Forward
      </h1>
      <p className=" font-PoppinsRegular text-[12px] my-3">
        Monitag Technologies Press - 17 November, 2024
      </p>

      <img
        className="w-full h-full object-cover mb-10"
        src="https://res.cloudinary.com/dax11nwlt/image/upload/v1743546679/Barriers_to_Financial_Inclusion_ymryeq.png"
        alt="blog image"
      />
      <p className="text-gray-700 mt-4">
        Despite notable progress in financial inclusion, millions of Nigerians
        still face challenges in accessing financial services. Several barriers
        hinder broader financial participation, requiring strategic
        interventions to bridge the gap.
      </p>
      <h2 className="text-xl font-semibold text-gray-900 mt-6">
        Key Barriers to Financial Inclusion
      </h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
        <li>
          <strong>Income Constraints:</strong> According to the Access to
          Finance Survey by eFInA (2023), nearly 50% of unbanked adults lack a
          financial account due to an absence of sustainable income. Without a
          steady income, maintaining an account or engaging with financial
          services becomes impractical.
        </li>
        <li>
          <strong>Geographical and Cost Barriers:</strong> Approximately 20% of
          financially excluded individuals cite distance and cost as primary
          obstacles to accessing banking services (eFInA, 2023). Many rural
          areas lack physical bank branches, and the cost of transportation or
          digital banking fees can deter potential users.
        </li>
        <li>
          <strong>Choice Exclusion:</strong> About 15% of unbanked individuals
          are unbanked by choice (eFInA, 2023). Some Nigerians prefer cash
          transactions and could not be bothered with traditional banking. They
          are likely to use a friend or family’s account to receive money when
          the need arises. Trust and perception issues also contribute to the
          choice to be financially excluded. Previous negative experiences with
          banks, or just a general perception that their money is safer with
          them than with banks, keep them intentionally unbanked.
        </li>
        <li>
          <strong>Institutional Exclusion:</strong> Lack of identification
          documents is a huge barrier to financial inclusion. However, this is
          improving as more financial companies have started offering Tier 1
          accounts without the need for any formal identification documents.
          While the balance and transaction limits are usually very low, they
          ensure that most people without access to formal accounts can still
          have access to finance in some forms.
        </li>
        <li>
          <strong>Gender Norms:</strong> Spousal influence still plays a
          significant role in financial access for a small segment of women in
          Nigeria. About 2% of financially excluded individuals are so because
          their husbands do not allow it (eFInA, 2023).
        </li>
      </ul>
      <h2 className="text-xl font-semibold text-gray-900 mt-6">
        Strategies for Strengthening Financial Inclusion in Nigeria
      </h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
        <li>
          <strong>Enhancing Financial Literacy:</strong> Expanding educational
          initiatives on personal finance can empower individuals to make more
          informed financial decisions.
        </li>
        <li>
          <strong>Expanding Digital Financial Services:</strong> Increasing
          access to mobile banking and fintech solutions by simplifying the
          systems further can bridge gaps.
        </li>
        <li>
          <strong>Fostering Trust in Financial Institutions:</strong> Addressing
          customer concerns and enhancing service delivery can build confidence
          in financial systems.
        </li>
      </ul>
      <p className="text-gray-700 mt-6">
        A truly inclusive financial ecosystem will not only empower individuals
        but also drive economic growth and resilience across Nigeria. While
        significant progress has been made, continued efforts are necessary to
        ensure that all Nigerians can benefit from financial inclusion.
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

export default BarriersToFinancialInclusion;
