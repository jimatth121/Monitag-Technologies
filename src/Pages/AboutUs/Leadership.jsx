/* eslint-disable react/prop-types */

const Leadership = () => {
  const data = [
    {
      name: "Bidemi Fahm",
      role: "Founder ",
      image:
        "https://res.cloudinary.com/dax11nwlt/image/upload/v1743526558/bidemi_xsevk4.jpg",
    },
    {
      name: "Gboyega Awelewa",
      role: "Chief Operations Officer",
      image:
        "https://res.cloudinary.com/dax11nwlt/image/upload/v1743526531/gboyega_fg0l2q.jpg",
    },
    {
      name: "Fauzi Fahm",
      role: "Chief Commercial Officer",
      image:
        "https://res.cloudinary.com/dax11nwlt/image/upload/v1743526451/fauzi_pghdg6.jpg",
    },
    {
      name: "Boluwatife Bamigboye",
      role: "Products & Technology",
      image:
        "https://res.cloudinary.com/dax11nwlt/image/upload/v1743526464/bolu_cot2co.jpg",
    },
    {
      name: "Damilola Opaniyan ",
      role: "Brand & Communications Manager",
      image:
        "https://res.cloudinary.com/dax11nwlt/image/upload/v1743526517/dami_xkejlo.jpg",
    },
  ];

  return (
    <div className="lg:px-24 px-8 py-16">
      <p className=" font-PoppinsRegular header2 font-bold mb-2 lg:mb-6">
        LEADERSHIP
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 lg:gap-2 ">
        {data.slice(0, 3).map((data, index) => (
          <ProfileCard key={index} data={data} index={index} />
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-center it gap-10 lg:gap-20 mt-24 md:mt-[120px] ">
        {data.slice(3, 5).map((data, index) => (
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
      <div>
        <img
          src={data.image}
          alt="image"
          className="w-[500px] h-full object-cover  "
        />
        <p className="  font-PoppinsRegular text1 mt-3">{data.name}</p>
        <p className=" font-PoppinsLight text14">{data.role}</p>
      </div>
    </>
  );
};
