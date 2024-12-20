/* eslint-disable react/prop-types */
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Press = ({ setIsRead }) => {
  const handleReadClick = () => {
    setIsRead(true);
  };
  const data = [
    {
      image:
        "https://res.cloudinary.com/dax11nwlt/image/upload/v1734612998/samples/food/spices.jpg",
      date: "August 26, 2024",
      title: "Some news on Transfers and Spend and Digital Banking in Nigeria",
    },
    {
      image:
        "https://res.cloudinary.com/dax11nwlt/image/upload/v1734613029/samples/imagecon-group.jpg",
      date: "August 26, 2024",
      title: "Some news on Transfers and Spend and Digital Banking in Nigeria",
    },
    {
      image:
        "https://res.cloudinary.com/dax11nwlt/image/upload/v1734613072/samples/ecommerce/leather-bag-gray.jpg",
      date: "August 26, 2024",
      title: "Some news on Transfers and Spend and Digital Banking in Nigeria",
    },
    {
      image:
        "https://res.cloudinary.com/dax11nwlt/image/upload/v1734613103/samples/ecommerce/accessories-bag.jpg",
      date: "August 26, 2024",
      title: "Some news on Transfers and Spend and Digital Banking in Nigeria",
    },
    {
      image:
        "https://res.cloudinary.com/dax11nwlt/image/upload/v1734613128/samples/landscapes/beach-boat.jpg",
      date: "August 26, 2024",
      title: "Some news on Transfers and Spend and Digital Banking in Nigeria",
    },
    {
      image:
        "https://res.cloudinary.com/dax11nwlt/image/upload/v1734613174/samples/ecommerce/car-interior-design.jpg",
      date: "August 26, 2024",
      title: "Some news on Transfers and Spend and Digital Banking in Nigeria",
    },
  ];
  return (
    <>
      <div className="lg:px-24 px-8 py-16">
        <p className=" font-PoppinsRegular header2 font-bold mb-2 lg:mb-6">
          IN THE PRESS
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16  ">
          {data.map((data, index) => (
            <PressCard
              key={index}
              data={data}
              handleReadClick={handleReadClick}
            />
          ))}
        </div>

        <div className="lg:pt-28 pt-10">
          <p className="flex  justify-center items-center gap-2 font-PoppinsRegular  ">
            LOAD MORE <FaRegArrowAltCircleRight size={20} />
          </p>
        </div>
      </div>
    </>
  );
};

export default Press;

const PressCard = ({ data, handleReadClick }) => {
  return (
    <>
      <div onClick={handleReadClick} className=" cursor-pointer">
        <img src={data.image} alt="image" className="w-full " />
        <p className=" font-PoppinsLight text2 mt-4">{data.date}</p>
        <p className=" font-PoppinsMedium font-normal text1 mt-2 ">
          {data.title}
        </p>
      </div>
    </>
  );
};
