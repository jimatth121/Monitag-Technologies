import Slider from "react-slick";

function Banner2() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 9000,
  };
  return (
    <div className="slider-container relative  h-[100vh]  overflow-hidden">
      <Slider {...settings}>
        <div className="h-[100vh] relative">
          <div className="absolute bottom-[60px]  lg:left-20  pl-4 lg:pl-0  max-w-[638px] w-full">
            <p className=" font-PoppinsSemiBold text-white text-[24px] sm:ml-[20px] md:ml-[20px] header2">
              Empowering Financial Journeys Everywhere
            </p>
            <p className=" font-PoppinsLight text-[24px] text-white sm:ml-[20px] md:ml-[20px] text1">
              We are committed to empowering individuals and communities in
              their financial journeys whether in urban or rural landscapes.
            </p>
          </div>
          <img
            className=" w-full  object-cover h-full hidden md:block fadeIn"
            src="https://res.cloudinary.com/dax11nwlt/image/upload/v1734454110/cld-sample-5.jpg"
            alt="slider01"
          />
          <img
            className=" w-full  object-cover h-full  md:hidden fadeIn"
            src="https://res.cloudinary.com/dax11nwlt/image/upload/v1734600863/samples/outdoor-woman.jpg"
            alt="slider01"
          />
        </div>
        <div className="h-[100vh] relative">
          <div className="absolute bottom-[60px]  lg:left-20  pl-4 lg:pl-0  max-w-[638px] w-full">
            <p className=" font-PoppinsSemiBold text-white text-[24px] sm:ml-[20px] md:ml-[20px] header2">
              Building a Financially Empowered Africa
            </p>
            <p className=" font-PoppinsLight text-[24px] text-white sm:ml-[20px] md:ml-[20px] text1">
              We are building an African future where financial empowerment
              powers a flourishing existence for all.
            </p>
          </div>
          <img
            className=" w-full  object-cover h-full hidden md:block fadeIn"
            src="https://res.cloudinary.com/dax11nwlt/image/upload/v1734454158/cld-sample-2.jpg"
            alt="slider01"
          />
          <img
            className=" w-full  object-cover h-full  md:hidden fadeIn"
            src="https://res.cloudinary.com/dax11nwlt/image/upload/v1734600141/samples/chair-and-coffee-table.jpg"
            alt="slider01"
          />
        </div>
        <div className="h-[100vh] relative">
          <div className="absolute bottom-[60px]  lg:left-20  pl-4 lg:pl-0  max-w-[638px] w-full">
            <p className=" font-PoppinsSemiBold text-white text-[24px] sm:ml-[20px] md:ml-[20px] header2">
              Uplifting Africa through Technological Innovation
            </p>
            <p className=" font-PoppinsLight text-[24px] text-white sm:ml-[20px] md:ml-[20px] text1">
              We provide innovative products, services and resources that uplift
              Africa and drive sustainable growth.
            </p>
          </div>
          <img
            className="  w-full  object-cover h-full hidden md:block fadeIn"
            src="https://res.cloudinary.com/dax11nwlt/image/upload/v1734454197/cld-sample-3.jpg"
            alt="slider01"
          />

          <img
            className="  w-full  object-cover h-full  md:hidden fadeIn"
            src="https://res.cloudinary.com/dax11nwlt/image/upload/v1734600214/samples/man-on-a-street.jpg"
            alt="slider01"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Banner2;
