/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
const ReadScreen = ({ setIsRead }) => {
  const handleGoBack = () => {
    setIsRead(false);
  };
  const scrollToRef = useRef(null);

  useEffect(() => {
    if (scrollToRef.current) {
      const topOffset =
        scrollToRef.current.getBoundingClientRect().top +
        window.pageYOffset -
        50; // Adjust the offset value as needed
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  }, []);

  return (
    <div
      ref={scrollToRef}
      className="max-w-[900px] w-full mx-auto px-6 md:px-0"
    >
      <div>
        <div
          onClick={handleGoBack}
          className="flex items-center mt-10 lg:mt-14 gap-2 cursor-pointer"
        >
          <FaRegArrowAltCircleLeft />

          <button>BACK</button>
        </div>
        <p className=" font-PoppinsSemiBold header-36 mt-7 lg:mt-10 ">
          Some news on Transfers and Spend and Digital Banking in Nigeria
        </p>
        <p className=" font-PoppinsRegular herder2 my-3">DECEMBER 5TH, 2024</p>

        <div className="relative  h-96 lg:my-14  lg:mb-10">
          <img
            className="w-full h-full object-cover"
            src="https://res.cloudinary.com/dax11nwlt/image/upload/v1734619047/samples/people/bicycle.jpg"
            alt="back"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex  justify-center items-center w-full max-w-[800px] ">
            <img
              className=""
              src="https://res.cloudinary.com/dax11nwlt/image/upload/v1734438614/cld-sample-4.png"
              alt="logo"
            />
          </div>
        </div>

        <div className=" mt-4">
          <p className="font-PoppinsLight text14  break-words text-justify mb-4 text-[#979797]">
            At mymonitag.com and monitagtechnologies.com, we respect your
            privacy and are committed to protecting your personal data. This
            Privacy Policy explains how we collect, use, and safeguard
            information in compliance with the Nigeria Data Protection
            Regulation NDPR and applicable global standards like GDPR.
          </p>
          <p className="font-PoppinsLight text14  break-words text-justify mb-4 text-[#979797]">
            At mymonitag.com and monitagtechnologies.com, we respect your
            privacy and are committed to protecting your personal data. This
            Privacy Policy explains how we collect, use, and safeguard
            information in compliance with the Nigeria Data Protection
            Regulation NDPR and applicable global standards like GDPR.
          </p>
          <p className="font-PoppinsLight text14  break-words text-justify mb-4 text-[#979797]">
            At mymonitag.com and monitagtechnologies.com, we respect your
            privacy and are committed to protecting your personal data. This
            Privacy Policy explains how we collect, use, and safeguard
            information in compliance with the Nigeria Data Protection
            Regulation NDPR and applicable global standards like GDPR.
          </p>
          <p className="font-PoppinsLight text14  break-words text-justify mb-4 text-[#979797]">
            At mymonitag.com and monitagtechnologies.com, we respect your
            privacy and are committed to protecting your personal data. This
            Privacy Policy explains how we collect, use, and safeguard
            information in compliance with the Nigeria Data Protection
            Regulation NDPR and applicable global standards like GDPR.
          </p>
          <p className="font-PoppinsLight text14  break-words text-justify mb-4 text-[#979797]">
            At mymonitag.com and monitagtechnologies.com, we respect your
            privacy and are committed to protecting your personal data. This
            Privacy Policy explains how we collect, use, and safeguard
            information in compliance with the Nigeria Data Protection
            Regulation NDPR and applicable global standards like GDPR.
          </p>
          <p className="font-PoppinsLight text14  break-words text-justify mb-4 text-[#979797]">
            At mymonitag.com and monitagtechnologies.com, we respect your
            privacy and are committed to protecting your personal data. This
            Privacy Policy explains how we collect, use, and safeguard
            information in compliance with the Nigeria Data Protection
            Regulation NDPR and applicable global standards like GDPR.
          </p>
          <p className="font-PoppinsLight text14  break-words text-justify mb-4 text-[#979797]">
            At mymonitag.com and monitagtechnologies.com, we respect your
            privacy and are committed to protecting your personal data. This
            Privacy Policy explains how we collect, use, and safeguard
            information in compliance with the Nigeria Data Protection
            Regulation NDPR and applicable global standards like GDPR.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReadScreen;
