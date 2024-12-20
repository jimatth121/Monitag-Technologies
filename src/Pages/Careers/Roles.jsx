/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Roles = () => {
  const data = [
    {
      title: "Accounting Manager",
      role: "Financial Control Remote (Nigeria)",
    },
    {
      title: "Accounting Manager",
      role: "Financial Control Remote (Nigeria)",
    },
    {
      title: "Accounting Manager",
      role: "Financial Control Remote (Nigeria)",
    },
    {
      title: "Accounting Manager",
      role: "Financial Control Remote (Nigeria)",
    },
    {
      title: "Accounting Manager",
      role: "Financial Control Remote (Nigeria)",
    },
    {
      title: "Accounting Manager",
      role: "Financial Control Remote (Nigeria)",
    },
    {
      title: "Accounting Manager",
      role: "Financial Control Remote (Nigeria)",
    },
    {
      title: "Accounting Manager",
      role: "Financial Control Remote (Nigeria)",
    },
  ];
  return (
    <div className="max-w-[900px] w-full mx-auto px-6 md:px-0">
      <div>
        <div className=" w-full mx-auto h-[48px] flex gap-2 mt-10 lg:mt-24  lg:px-0">
          <input
            type="email"
            placeholder="Search open roles"
            className="w-full h-full px-4 py-1  border-gray-400 border-[2px]"
          />
          <button className="h-full border-[2px] border-gray-400 p-2 md:px-6 text-gray-400">
            <small className=" hidden md:block ">SEARCH</small>
            <CiSearch size={30} className=" md:hidden " />
          </button>
        </div>
      </div>

      <p className=" font-PoppinsRegular header2 mt-10">AVAILABLE ROLES</p>
      <div className="">
        {data.map((data, index) => (
          <RoleCard key={index} data={data} />
        ))}
      </div>

      <div className="mb-10 flex justify-center items-center gap-2 mt-24">
        <button className=" bg-[#f3f9ff] text-[#008cff] p-4 rounded px-5">
          1
        </button>
        <button className="px-5">2</button>
        <button className="px-5">3</button>
        <button className="px-5">Prev</button>
        <button className="px-5">Next</button>
      </div>
    </div>
  );
};

export default Roles;

const RoleCard = ({ data }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between border border-gray-400 p-4 my-6 md:mb-10 mditems-center">
        <div>
          <p className=" font-PoppinsSemiBold text2 ">{data.title}</p>
          <p className=" font-PoppinsLight text2">{data.role}</p>
        </div>
        <div className="flex items-center gap-2 justify-end  ">
          <button className=" font-PoppinsLight text-[#b9b9b9]">APPLY</button>
          <FaArrowRight color="#b9b9b9" />
        </div>
      </div>
    </>
  );
};
