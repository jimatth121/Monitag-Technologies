const Banner = () => {
  return (
    <div className="h-[70vh] relative">
      <p className="absolute bottom-[30%] left-1/2 transform -translate-x-1/2 font-PoppinsSemiBold header1 text-white text-center  w-full max-w-[800px] ">
        Terms and Conditions
      </p>
      <img
        className="h-full w-full object-cover hidden md:block fadeIn"
        src="https://res.cloudinary.com/dax11nwlt/image/upload/v1734643536/samples/people/jazz.jpg"
        alt="careersImage"
      />
      <img
        className="h-full w-full object-cover md:hidden fadeIn"
        src="https://res.cloudinary.com/dax11nwlt/image/upload/v1734643572/samples/people/boy-snow-hoodie.jpg"
        alt="careersImage"
      />
    </div>
  );
};

export default Banner;
