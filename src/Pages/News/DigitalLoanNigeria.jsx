/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

const DigitalLoansNigeria = ({ setIsRead }) => {
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
        Digital Loans: Boosting Well-Being and Access to Credit in Nigeria
      </h1>
      <p className=" font-PoppinsRegular text-[12px] my-3">
        Monitag Technologies Press - 22 February, 2025
      </p>
      <img
        className="w-full h-full object-cover mb-10"
        src="https://res.cloudinary.com/dax11nwlt/image/upload/v1743547122/blog02picture_vhr8xu.jpg"
        alt="blog image"
      />
      <p className="text-gray-800 mb-4">
        Digital loans have rapidly transformed the financial landscape in
        developing countries, offering small loans via mobile phones to
        individuals with little or no formal financial history. In Kenya, for
        example, a 2018 survey found that 27% of adults had outstanding digital
        loans, far exceeding the number with traditional microfinance loans. In
        Nigeria, over 50 companies now offer similar digital credit products,
        despite the low penetration of formal financial services.
      </p>
      <p className="text-gray-800 mb-4">
        A recent study in partnership with a major financial service provider in
        Nigeria explored the welfare impact of these digital loans. The findings
        suggest that access to credit notably increases borrowing from formal
        sources. On average, loan uptake rose by $30, with some borrowers
        receiving larger initial loans, resulting in a $1.24 increase in
        borrowing for every $1 increase in the loan offer.
      </p>
      <p className="text-gray-800 mb-4">
        One of the most significant findings was that being approved for a
        digital loan improved subjective well-being by 0.281 standard
        deviations. This effect, driven largely by reduced depression, was
        notable, especially when compared to cash transfers or larger
        anti-poverty programs. However, offering larger loans had minimal impact
        on subjective well-being.
      </p>
      <p className="text-gray-800 mb-4">
        In terms of broader welfare, the study found no significant effects on
        income, expenditures, or resilience to shocks, suggesting that the
        loans' small size — typically ranging from $3 to $35 — may not
        substantially change overall economic conditions. Nevertheless, there
        were no negative effects, countering concerns about the predatory nature
        of these loans.
      </p>
      <p className="text-gray-800 mb-4">
        The study also found that respondents mainly used the loans for
        short-term needs, with the largest effects seen in unemployed
        individuals and those with low credit scores. This highlights how
        providing small, on-demand loans can have a significant positive impact
        on mental health and well-being, especially for vulnerable groups.
      </p>
      <p className="text-gray-800">
        Overall, the study suggests that digital loans in Nigeria are helping
        improve financial access and well-being, with few negative consequences
        for borrowers.
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

export default DigitalLoansNigeria;
