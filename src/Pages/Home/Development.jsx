/* eslint-disable react/prop-types */
import "./Development.css";
const Development = () => {
  const data01 = [
    {
      title: "Instant Peer-to-Peer Transfers",
      body: "Send and receive money from friends, families or clients with ease.",
    },
    {
      title: "QR Code Payments",
      body: "Pay merchants effortlessly by scanning a unique QR code.",
    },
    {
      title: "Comprehensive Bill Payments",
      body: "Pay all your essential bills with ease from one digital wallet.",
    },
    {
      title: "Gift Cards",
      body: "Purchase gift cards from your favourite brands right from your wallet.",
    },
    {
      title: "Savings",
      body: "Take control of your savings with flexible options that offer interest.",
    },
    {
      title: "Real-Time Insights",
      body: "Keep track of your finances with real-time insights and budgeting tools.",
    },
  ];
  const data02 = [
    {
      title: "Automated Payments",
      body: "Take control of bulk payments through automated payments with ease.",
    },
    {
      title: "Multi-Currency Support",
      body: "Easily manage disbursements across different currencies for global beneficiaries.",
    },
    {
      title: "Customisable Payment Structures",
      body: "Manage payroll or vendor payments, scholarships, create disbursement schedules tailored to your organisation’s unique needs.",
    },
    {
      title: "Batch Upload and Processing",
      body: "Simplify large-scale disbursements by batch uploading data of thousands of recipients in just a few clicks.",
    },
    {
      title: "Compliance and Audit Trail",
      body: "Access reports and historical records to maintain transparency and accountability for compliance and audit purposes.",
    },
    {
      title: "Notifications and Receipts",
      body: "Automate notifications and receipts for beneficiaries to ensure trust in every transaction.",
    },
    {
      title: "API Integration",
      body: "Seamlessly integrate Monitag’s Bulk Disbursement platform into your systems with our API.",
    },
  ];

  return (
    <div className="lg:px-24 pb-8 lg:pb-16 overflow-hidden">
      <h1 className="  font-PoppinsSemiBold header2 mb-4 px-3 lg:px-0">
        IN DEVELOPMENT
      </h1>

      <div className=" image-height ">
        <div className=" h-full  relative">
          <div className="absolute lg:left-8 bottom-24 max-w-[600px] w-full px-3">
            <p className=" font-PoppinsSemiBold header2 text-white ">
              Monitag Digital Wallet
            </p>
            <p className=" font-PoppinsLight text1 text-white">
              A secure, all-in-one digital wallet empowering users to store
              funds, manage savings, make payments, and handle multiple
              currencies.
            </p>
          </div>
          <img
            className="w-full h-full object-cover  hidden md:block "
            src="https://res.cloudinary.com/dax11nwlt/image/upload/v1734476097/samples/woman-on-a-football-field.jpg"
            alt="development"
          />
          <img
            className="w-full h-full object-cover md:hidden"
            src="https://res.cloudinary.com/dax11nwlt/image/upload/v1734600306/samples/look-up.jpg"
            alt="coffeLady"
          />
        </div>
      </div>
      <div className=" ">
        <div className="grid grid-cols-1 lg:grid-cols-3  py-8 px-3 lg:px-10  gap-x-8  bg-[#F6F8FA]">
          {data01.map((data, index) => (
            <TextCard key={index} data={data} />
          ))}
        </div>
      </div>
      <div className="image-height ">
        <div className="w-full h-full relative">
          <div className="absolute lg:left-8 bottom-24 max-w-[600px] w-full px-3">
            <p className=" font-PoppinsSemiBold text-white header2">
              Bulk Disbursement
            </p>
            <p className=" font-PoppinsLight text-white text1">
              A platform designed to facilitate large-scale disbursements to
              multiple beneficiaries at once.
            </p>
          </div>
          <img
            className="w-full h-full hidden md:block object-cover"
            src="https://res.cloudinary.com/dax11nwlt/image/upload/v1734502040/samples/upscale-face-1.jpg"
            alt="girls image"
          />
          <img
            className="w-full h-full object-cover md:hidden"
            src="https://res.cloudinary.com/dax11nwlt/image/upload/v1734591077/samples/coffee.jpg"
            alt="girls image"
          />
        </div>
      </div>

      <div className=" ">
        <div className="grid grid-cols-1 lg:grid-cols-3 py-10 md:py-14 px-4 lg:px-10  gap-x-8  bg-[#F6F8FA]">
          {data02.map((data, index) => (
            <TextCard key={index} data={data} />
          ))}
        </div>
      </div>

      <div className=" py-16">
        <p className=" font-PoppinsRegular header2 text-center">
          Monitag Technologies Mission
        </p>
        <p className=" font-PoppinsLight text1 text-center mt-2 text-[#b9b9b9]">
          To create financial solutions that empower individuals and
          communities, and drive sustainable growth.
        </p>
      </div>

      <div className="">
        <p className=" font-PoppinsRegular header2 text-center">
          Monitag Technologies VISION
        </p>
        <p className=" font-PoppinsLight text1 text-center mt-2 text-[#b9b9b9]">
          To be the leading catalyst for financial innovation in Africa.
        </p>
      </div>
    </div>
  );
};

export default Development;

const TextCard = ({ data }) => {
  return (
    <div className=" py-4 lg:pb-12 max-w-[400px] w-full">
      <p className=" font-PoppinsRegular header2  fon  ">{data?.title}</p>
      <p className=" font-PoppinsLight text14 text-[#b9b9b9] font-light">
        {data?.body}
      </p>
    </div>
  );
};
