const Banner = () => {
  return (
    <div className="h-dvh relative">
      <p className="absolute bottom-[20%] left-1/2 transform -translate-x-1/2 font-PoppinsSemiBold header1 text-white text-center  w-full max-w-[800px] ">
        Empowering Financial Journeys Everywhere
      </p>
      <img
        className="h-full w-full object-cover hidden md:block fadeIn"
        src="https://res.cloudinary.com/dax11nwlt/image/upload/v1734591707/samples/man-portrait.jpg"
        alt="aboutuse"
      />
      <img
        className="h-full w-full object-cover md:hidden fadeIn"
        src="https://res.cloudinary.com/dax11nwlt/image/upload/v1734600259/samples/man-on-a-escalator.jpg"
        alt="aboutus"
      />
    </div>
  );
};

export default Banner;
