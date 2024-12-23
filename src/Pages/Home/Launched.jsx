import MiniLogo from "../../assets/miniLogo.png";
import AppleStore from "../../assets/applestore.png";
import PlayStore from "../../assets/playstore.png";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

import "./Launched.css";
const Launched = () => {
  return (
    <div className=" lg:px-24 py-8 lg:py-16 overflow-hidden">
      <h1 className="  font-PoppinsSemiBold header2 mb-4 px-3 lg:px-0">
        LAUNCHED
      </h1>

      <div className="image-height relative overflow-hidden">
        <div className="absolute max-w-[600px]  w-full mt-10  lg:bottom-[30%] left-[5%]">
          <img src={MiniLogo} alt="image" className="mb-5" />
          <p className=" font-PoppinsLight text1 text-white  pr-10">
            Make social payments, choose standard or confidential transfers,
            grow your savings and purchase e-Vouchers.
          </p>
          <p className="flex gap-3 text-white text2 my-6">
            LEARN MORE
            <FaRegArrowAltCircleRight color="white" size={20} />
          </p>

          <div className="flex gap-6 mt-4">
            <img src={AppleStore} alt="image" />
            <img src={PlayStore} alt="image" />
          </div>
        </div>
        <img
          className="absolute bottom-0 overflow-hidden right-0 "
          src="https://res.cloudinary.com/dax11nwlt/image/upload/v1734518766/samples/dessert-on-a-plate.png"
          alt="handphone"
        />
        <img
          src="https://res.cloudinary.com/dax11nwlt/image/upload/v1734518788/samples/cup-on-a-table.jpg"
          alt="image"
          className="w-full h-full  object-cover"
        />
      </div>
    </div>
  );
};

export default Launched;
