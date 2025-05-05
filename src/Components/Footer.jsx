import Minilogo2 from "../../src/assets/minilogo02.png";
import Twitter from "../../src/assets/twitter.png";
import LinkedIn from "../../src/assets/linkedIn.png";
import Facebook from "../../src/assets/facebook.png";
import Instagram from "../../src/assets/instagram.png";
// import Threads from "../../src/assets/threads.png";
// import Tiktok from "../../src/assets/tiktok.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-20 pb-8 bg-[#fafbfd]">
      <div className="flex justify-center  items-center">
        <img src={Minilogo2} alt="minlogo" className="w-[200px]" />
      </div>
      <div className="flex   lg:flex-row flex-col justify-center gap-3 lg:gap-10 mt-5">
        <button
          onClick={() => navigate("/aboutus")}
          className="text2  font-PoppinsRegular text-[#b9b9b9]"
        >
          ABOUT
        </button>
        <button
          onClick={() => navigate("/careers")}
          className="text2 font-PoppinsRegular text-[#b9b9b9] "
        >
          CAREERS
        </button>
        <button
          onClick={() => navigate("/news")}
          className="text2 font-PoppinsRegular text-[#b9b9b9]"
        >
          NEWS & RESOURCES
        </button>
        <button
          onClick={() => navigate("/privacypolicy")}
          className="text2 font-PoppinsRegular text-[#b9b9b9]"
        >
          PRIVACY POLICY
        </button>
        <button
          onClick={() => navigate("/termsconditions")}
          className="text2 font-PoppinsRegular text-[#b9b9b9]"
        >
          TERMS
        </button>
      </div>
      <div className="mt-2">
        <p className=" font-PoppinsRegular text2 text-center text-[#b9b9b9] mb-2">
          help@monitagtechnologies.com
        </p>
        <p className=" font-PoppinsRegular text2 text-center text-[#b9b9b9]">
          +234 700 933 9339
        </p>
      </div>

      <div className="my-14">
        <div className="flex justify-center items-center gap-2 lg:gap-5">
          <a
            href="https://x.com/Monitagtech?t=Dq05WA62DjRgcOV5fQKCCg&s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Twitter} alt="Twitter icon" />
          </a>
          <a
            href="https://www.linkedin.com/company/monitag-technologies/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedIn} alt="LinkedIn icon" />
          </a>
          <a
            href="https://web.facebook.com/monitagtechnologies?_rdc=1&_rdr#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Facebook} alt="Facebook icon" />
          </a>
          <a
            href="https://www.instagram.com/monitagtechnologies/?igsh=MTdneWUxcWh6ZDR6b
 w%3D%3D#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="Instagram icon" />
          </a>
          {/* <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Tiktok} alt="TikTok icon" />
          </a>
          <a
            href="https://threads.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Threads} alt="Threads icon" />
          </a> */}
        </div>
        <p className=" font-PoppinsRegular text-[#b9b9b9] text-center mt-2 ">
          ©2024 Monitag Technologies
        </p>
      </div>
    </div>
  );
};

export default Footer;
