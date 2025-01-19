const Banner = () => {
  return (
    <div className="h-dvh relative">
      <p className="absolute bottom-[20%] left-1/2 transform -translate-x-1/2 font-PoppinsSemiBold header1 text-white text-center  w-full max-w-[800px] ">
        News About <br /> Monitag Technologies
      </p>
      <img
        className="h-full w-full object-cover hidden md:block fadeIn"
        src="https://res.cloudinary.com/dax11nwlt/image/upload/v1734612252/samples/cloudinary-group.jpg"
        alt="news"
      />
      <img
        className="h-full w-full object-cover md:hidden fadeIn"
        src="https://res.cloudinary.com/dax11nwlt/image/upload/v1734612294/samples/landscapes/nature-mountains.jpg"
        alt="news"
      />
    </div>
  );
};

export default Banner;
