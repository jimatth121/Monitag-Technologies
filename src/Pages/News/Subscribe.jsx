const Subscribe = () => {
  return (
    <div className="relative h-52 lg:h-96 lg:my-14  lg:mb-32">
      <img
        className="w-full h-full object-cover" // Ensures the image covers the background
        src="https://res.cloudinary.com/dax11nwlt/image/upload/v1734608868/samples/animals/kitten-playing.jpg"
        alt="back"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-[800px]">
        <p className="font-PoppinsSemiBold text-white header-36">
          Get more stories like this
        </p>
        <p className="mt-2 font-PoppinsLight text-white text2 flex justify-center items-center gap-2">
          Enter your email to get news about Monitag
        </p>

        <div className="max-w-[412px] w-full mx-auto h-[48px] flex gap-2 mt-4 lg:mt-6 px-3 lg:px-0">
          <input
            type="email"
            placeholder="Enter email"
            className="w-full h-full px-4 py-1"
          />
          <button className="h-full border-[2px] border-white p-2 text-white">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
