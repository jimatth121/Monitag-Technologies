/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

const FinancialInclusionNigeria = ({ setIsRead }) => {
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
        Understanding Financial Inclusion in Nigeria
      </h1>
      <p className=" font-PoppinsRegular text-[12px] my-3">
        Monitag Technologies Press - 10 December, 2024
      </p>

      <img
        className="w-full h-full object-cover mb-10"
        src="https://res.cloudinary.com/dax11nwlt/image/upload/v1743546764/Understanding_Financial_Inclusion_in_Nigeria_xrpgpe.jpg"
        alt="blog image"
      />
      <p className="text-gray-700 mb-4">
        Financial inclusion is a critical aspect of economic development,
        particularly in developing countries like Nigeria. It refers to a state
        where individuals and businesses have access to and use affordable
        financial products and services that meet their needs and are delivered
        responsibly and sustainably (World Bank, 2025). In Nigeria, where a
        significant portion of the population remains unbanked or underbanked,
        understanding the state of financial inclusion is essential for
        advancing effective financial technology and fostering economic growth.
      </p>
      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
        The State of Financial Inclusion in Nigeria
      </h2>
      <p className="text-gray-700 mb-4">
        Recent efforts by both the Nigerian government and financial
        institutions to promote financial inclusion have led to some notable
        progress. The Central Bank of Nigeria (CBN) launched the National
        Financial Inclusion Strategy (NFIS) in 2012, with a target to achieve
        80% financial inclusion by 2020. As of 2023, financial inclusion (formal
        and informal) had increased to 74%, up from 68% in 2020 (EFInA, 2023).
        This represents about 10 million Nigerian adults who have now been
        financially included. Essentially, this means almost 4 out of 5
        individuals in Nigeria are now financially included.
      </p>
      <p className="text-gray-700 mb-4">
        Formal financial inclusion increased from 57% in 2020 to 64% in 2023.
        This means 3 out of 5 adults in Nigeria are now formally financially
        included. This is largely due to the uptake of non-traditional bank
        financial products which saw a large increase from 32% in 2020 to 57% in
        2023. While traditional banks still make up a large part of the
        financial system with 52% using banking products, digital banking is
        rapidly increasing. As of 2023, about 45% of Nigerian adults use digital
        financial services or transact digitally.
      </p>
      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
        Financial Health
      </h2>
      <p className="text-gray-700 mb-4">
        Unfortunately, despite increased financial inclusion, financial health
        is still not ideal. Nigeria recorded an Annual GDP Growth of 2.9% in
        2023 (World Bank), compared to -1.8% in 2020. However, reports show that
        just 16% of adult Nigerians were financially healthy in 2023. This is
        down by 10% from 2020 as 26% of adults were reported financially healthy
        in 2020; able to spend, save and plan their finances properly. This
        could be said to be due to several factors, low access to credit,
        financial literacy, increased inflation and cost of living which means
        less disposable income for many.
      </p>
      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
        Demographic Trends
      </h2>
      <p className="text-gray-700 mb-4">
        The gender gap in financial inclusion persists, though there has been a
        slight increase in the number of women accessing financial products. In
        2023, 46.6 million Nigerian women were formally financially included,
        compared to 64.4 million men (eFinA, 2023). While men still outnumber
        women in financial inclusion, the growth in non-bank products has
        contributed to narrowing this gap. Yet, 39.5 million Nigerians are still
        formally excluded or underserved, with many of them facing significant
        barriers to financial access.
      </p>
      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
        Sustaining Progress
      </h2>
      <p className="text-gray-700 mb-4">
        Nigeria has made commendable progress in financial inclusion, reflecting
        a positive shift toward an inclusive financial system. However, access
        alone is not enough, it must lead to financial empowerment and stability
        for all. Addressing economic barriers and fostering trust in financial
        institutions will be crucial in ensuring long-term impact. With
        sustained efforts, financial inclusion can serve as a catalyst for
        economic growth and improved livelihoods across Nigeria.
      </p>
    </div>
  );
};

export default FinancialInclusionNigeria;
