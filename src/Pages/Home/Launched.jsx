import MiniLogo from "../../assets/minilogo2.svg";
import AppleStore from "../../assets/applestore.png";
import PlayStore from "../../assets/playstore.png";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import AppleStoreSVG from "../../assets/applestore.svg";
import PlayStoreSVG from "../../assets/googlePlay.svg";

import "./Launched.css";
const Launched = () => {
  return (
    <div className=" lg:px-24 py-8 lg:py-16 overflow-hidden">
      <h1 className="  font-PoppinsSemiBold header2 mb-4 px-3 lg:px-0">
        LAUNCHING SOON
      </h1>

      <div className="image-height relative overflow-hidden">
        <div className="absolute w-full flex flex-col h-full items-center justify-center  z-10 px-14">
          <img src={MiniLogo} alt="image" className="mb-3 w-[420px]"  />

          <div className=" gap-6  flex">
            <img src={AppleStoreSVG} alt="image" className="my-2" />
            <img src={PlayStoreSVG} alt="image" className="my-2"/>
          </div>
        </div>
       
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
