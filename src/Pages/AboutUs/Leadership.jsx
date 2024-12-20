/* eslint-disable react/prop-types */

const Leadership = () => {
  const data = [
    {
      name: "Bidemi Fahm",
      role: "Founder ",
      image:
        "https://res.cloudinary.com/dax11nwlt/image/upload/v1734604830/samples/breakfast.jpg",
    },
    {
      name: "Gboyega Awelewa",
      role: "Chief Operations Officer",
      image:
        "https://res.cloudinary.com/dax11nwlt/image/upload/v1734604830/samples/breakfast.jpg",
    },
    {
      name: "Fauzi Fahm",
      role: "Chief Commercial Officer",
      image:
        "https://res.cloudinary.com/dax11nwlt/image/upload/v1734604830/samples/breakfast.jpg",
    },
    {
      name: "Boluwatife Bamigboye",
      role: "Products & Technology",
      image:
        "https://res.cloudinary.com/dax11nwlt/image/upload/v1734604830/samples/breakfast.jpg",
    },
  ];

  return (
    <div className="lg:px-24 px-8 py-16">
      <p className=" font-PoppinsRegular header2 font-bold mb-2 lg:mb-6">
        LEADERSHIP
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10  ">
        {data.map((data, index) => (
          <ProfileCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Leadership;

const ProfileCard = ({ data }) => {
  return (
    <>
      <div className="">
        <img src={data.image} alt="image" className="w-full " />
        <p className="  font-PoppinsRegular text1 mt-3">{data.name}</p>
        <p className=" font-PoppinsLight text2">{data.role}</p>
      </div>
    </>
  );
};
