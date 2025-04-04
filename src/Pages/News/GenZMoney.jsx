/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
const GenZMoney = ({ setIsRead }) => {
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
        Gen Zs and Their Money
      </h1>
      <p className=" font-PoppinsRegular text-[12px] my-3">
        Monitag Technologies Press - 15 March, 2025
      </p>
      <img
        className="w-full h-full object-cover mb-10"
        src="https://res.cloudinary.com/dax11nwlt/image/upload/v1743546696/Gen_Zs_and_Their_Money_eborvd.png"
        alt="blog image"
      />
      <p className="text-gray-800 mb-4">
        Individuals born between 1997 and 2012 are classified as Generation Z
        (also called Gen Z) and are increasingly becoming significant in terms
        of economic influence and consumer behaviour. In Nigeria, Gen Zs make up
        about 30% of the Nigerian population which amounts to 60 million people
        (Statista, 2023). Understanding their financial habits is crucial for
        building products, services and infrastructure for a significant part of
        the Nigerian populace. This article examines the financial habits of
        this demographic.
      </p>
      <h2 className="text-xl font-semibold text-gray-900 mb-2">
        Understanding the Financial Habits of Gen Zs
      </h2>
      <h3 className="text-lg font-medium text-gray-900 mb-2">
        Adoption of Digital Platforms
      </h3>
      <p className="text-gray-800 mb-4">
        64% of Nigerians aged 18–25 use digital financial services, compared to
        45% of the general population (eFinA, 2023). Digital financial platforms
        have gained popularity among this demographic, offering convenient and
        low-cost alternatives to traditional banking.
      </p>
      <h3 className="text-lg font-medium text-gray-900 mb-2">
        Cryptocurrency Adoption
      </h3>
      <p className="text-gray-800 mb-4">
        The rise of cryptocurrency has particularly resonated with this
        demographic. According to data from the Chainalysis Global Crypto
        Adoption Index, Nigeria ranks second in global adoption of
        cryptocurrency adoption globally, with approximately 35% of young
        Nigerians having engaged in cryptocurrency transactions as of late 2022.
      </p>
      <h3 className="text-lg font-medium text-gray-900 mb-2">
        Saving and Investing
      </h3>
      <p className="text-gray-800 mb-4">
        A 2023 study by Nigerian digital savings platform, Cowrywise found that
        60% of Gen Z users save for short-term goals, such as buying gadgets or
        funding education, rather than long-term goals like retirement.
      </p>
      <h3 className="text-lg font-medium text-gray-900 mb-2">Spending</h3>
      <p className="text-gray-800 mb-4">
        In Sub-Saharan Africa, Gen Z's spending power matches that of
        Millennials, with each group accounting for approximately 30% of total
        spending in 2024. By 2030, Gen Z will be the highest-spending generation
        in much of Sub-Saharan Africa (Statista Research). This comes as a
        result of increased and more flexible earning opportunities as well as a
        growing number of dependents and responsibilities.
      </p>
      <h3 className="text-lg font-medium text-gray-900 mb-2">Earning</h3>
      <p className="text-gray-800 mb-4">
        According to Pierre Consulting (Feb, 2025), the traditional categories
        of working, middle and upper class are being expanded to include a
        purely digital category. The new earning categories now include:
      </p>
      <ul className="list-disc list-inside text-gray-800 mb-4">
        <li>
          <strong>DYNES (Digitally-Native Earners):</strong> Individuals aged
          16-30 who generate income primarily through digital platforms. These
          include influencers, content creators, video editors, fx traders, etc.
        </li>
        <li>
          <strong>FlexPreneurs:</strong> These are flexible entrepreneurs—young
          entrepreneurs with multiple income streams from both online and
          offline ventures. These include freelancers, social commerce vendors,
          digital marketers, etc.
        </li>
        <li>
          <strong>High-Income Youths:</strong> Just like High Net Worth
          Individuals, High Income Youths often earn up to $100,000 annually.
          These sources of income are often volatile and might not be
          sustainable. Professions include crypto trading, viral content
          creation, etc.
        </li>
      </ul>
      <p className="text-gray-800">
        In conclusion, Nigerian Gen Zs are redefining financial habits in a
        rapidly changing economic landscape. Their adoption of digital tools,
        entrepreneurial spirit, and resilience in the face of challenges offer
        valuable lessons. By understanding and supporting this demographic,
        stakeholders can harness the power of Gen Zs to drive sustainable
        economic growth.
      </p>
    </div>
  );
};

export default GenZMoney;
