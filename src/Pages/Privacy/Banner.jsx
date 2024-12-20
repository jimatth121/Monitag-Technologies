const Banner = () => {
  return (
    <div className="h-dvh relative">
      <p className="absolute bottom-[20%] left-1/2 transform -translate-x-1/2 font-PoppinsSemiBold header1 text-white text-center  w-full max-w-[800px] ">
        Privacy Policy
      </p>
      <img
        className="h-full w-full object-cover hidden md:block fadeIn"
        src="https://res.cloudinary.com/dax11nwlt/image/upload/v1734639762/samples/landscapes/landscape-panorama.jpg"
        alt="careersImage"
      />
      <img
        className="h-full w-full object-cover md:hidden fadeIn"
        src="https://res.cloudinary.com/dax11nwlt/image/upload/v1734639814/samples/bike.jpg"
        alt="careersImage"
      />
    </div>
  );
};

export default Banner;
