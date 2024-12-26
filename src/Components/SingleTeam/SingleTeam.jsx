import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const SingleTeam = ({ teamImg, personName, potision }) => {
  return (
    <div className="dark:bg-white">
      <div className="text-center rounded-md shadow-lg group hover:cursor-pointer ">
        <div className="relative transition duration-500 group">
          <img
            src={teamImg}
            className="w-full h-auto group-hover:opacity-70 transition-opacity duration-500 rounded-md"
          />
          <div className="absolute inset-0 bg-[#355c7d] opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
          <div className=" items-center justify-center absolute top-2/4 left-0 h-full w-full invisible group-hover:visible group-hover:transition opacity-0 group-hover:opacity-100 group-hover:duration-500 transition duration-500">
            <div className="flex items-center justify-center gap-5">
              <FaTwitter className="text-[#355c7d] text-[33px] bg-white p-2 rounded-full hover:bg-[#d95b43] hover:text-white transition duration-300" />
              <FaInstagramSquare className="text-[#355c7d] text-[33px] bg-white p-2 rounded-full hover:bg-[#d95b43] hover:text-white transition duration-300" />
              <FaLinkedinIn className="text-[#355c7d] text-[33px] bg-white p-2 rounded-full hover:bg-[#d95b43] hover:text-white transition duration-300" />
            </div>
          </div>
        </div>
        <h3 className="text-[#355c7d] group-hover:text-[#d95b43] mt-4 mb-1 transition duration-200 font-crete uppercase font-medium text-base md:text-lg">
          {personName}
        </h3>
        <p className="text-sm text-[#86999b] pb-5">{potision}</p>
      </div>
    </div>
  );
};

export default SingleTeam;
