/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";

const Press = ({ setIsRead }) => {
  const data = [
    {
      image:
        "https://res.cloudinary.com/dax11nwlt/image/upload/v1743546661/President-Bola-Ahmed-Tinubu_ybsb3g.png",
      date: `Monitag Technologies Press - 1 February, 2025`,
      title: "Nigeria Unveils Ambitious Plan to Unlock Credit for All",
      read: "1",
    },
    {
      image:
        "https://res.cloudinary.com/dax11nwlt/image/upload/v1743547122/blog02picture_vhr8xu.jpg",
      date: `Monitag Technologies Press - 22 February. 2025`,
      title:
        "Digital Loans: Boosting Well-Being and Access to Credit in Nigeria",
      read: "2",
    },
    {
      image:
        "https://res.cloudinary.com/dax11nwlt/image/upload/v1743546696/Gen_Zs_and_Their_Money_eborvd.png",
      date: `Monitag Technologies Press - 15 March, 2025`,
      title: "Gen Zs and Their Money",
      read: "3",
    },
    {
      image:
        "https://res.cloudinary.com/dax11nwlt/image/upload/v1743546764/Understanding_Financial_Inclusion_in_Nigeria_xrpgpe.jpg",
      date: "Monitag Technologies Press - 10 December, 2024",
      title: "Understanding Financial Inclusion in Nigeria",
      read: "4",
    },
    {
      image:
        "https://res.cloudinary.com/dax11nwlt/image/upload/v1743546679/Barriers_to_Financial_Inclusion_ymryeq.png",
      date: "Monitag Technologies Press - 17 November, 2024",
      title: "Barriers to Financial Inclusion in Nigeria and the Way Forward",
      read: "5",
    },
    {
      image:
        "https://res.cloudinary.com/dax11nwlt/image/upload/v1743546744/The_State_of_Access_to_Credit_in_Nigeria_cjx5iq.png",
      date: "Monitag Technologies Press - 22 July, 2024",
      title: "Exploring the State of Access to Credit in Nigeria",
      read: "6",
    },
    {
      image:
        "https://res.cloudinary.com/dax11nwlt/image/upload/v1743546718/The_Evolution_of_Informal_Credit_Systems_in_Nigeria_lihtbz.png",
      date: "Monitag Technologies Press - 10 June, 2024",
      title: "The Evolution of Informal Credit Systems in Nigeria",
      read: "7",
    },
  ];

  // Keeps track of the current slice of the array being shown
  const [displayData, setDisplayData] = useState(data.slice(0, 6)); // Initially, first 6 items
  const [currentIndex, setCurrentIndex] = useState(0); // Tracks the index for the first item in the slice

  // Function to show the next set of 6 items (shift window)
  const loadMore = () => {
    if (currentIndex + 6 < data.length) {
      setCurrentIndex(currentIndex + 1);
      setDisplayData(data.slice(currentIndex + 1, currentIndex + 7)); // Slide the window
    }
  };

  // Function to show the first 6 items again (reset to the start)
  const loadLess = () => {
    setCurrentIndex(0);
    setDisplayData(data.slice(0, 6)); // Reset to the first 6 items
  };

  return (
    <div className="lg:px-24 px-8 py-16">
      <p className="font-PoppinsRegular header2 font-bold mb-2 lg:mb-6">
        IN THE PRESS
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
        {displayData.map((data, index) => (
          <PressCard key={index} data={data} setIsRead={setIsRead} />
        ))}
      </div>

      <div className="lg:pt-28 pt-10">
        {currentIndex + 6 < data.length ? (
          <p
            onClick={loadMore}
            className="flex justify-center items-center gap-2 font-PoppinsRegular cursor-pointer"
          >
            LOAD MORE <FaRegArrowAltCircleRight size={30} />
          </p>
        ) : (
          <p
            onClick={loadLess}
            className="flex justify-center items-center gap-2 font-PoppinsRegular cursor-pointer"
          >
            Previous Load <FaRegArrowAltCircleLeft size={30} />
          </p>
        )}
      </div>
    </div>
  );
};

export default Press;

const PressCard = ({ data, setIsRead }) => {
  const handleReadClick = () => {
    setIsRead(data.read);
  };

  return (
    <div onClick={handleReadClick} className="cursor-pointer">
      <img
        src={data.image}
        alt="image"
        className="w-[550px] h-[350px] object-cover"
      />
      <p className="font-PoppinsLight text2 mt-4">{data.date}</p>
      <p className="font-PoppinsMedium font-normal text1 mt-2">{data.title}</p>
    </div>
  );
};
