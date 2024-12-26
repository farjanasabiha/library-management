const SingleService = ({ Icon, name, title, des }) => {
  return (
    <div className="">
      <div className="text-center group px-0 lg:px-5  cursor-pointer">
        <Icon className="text-[#355c7d] dark:text-white mb-4 group-hover:rotate-45 transition duration-300 text-8xl font-semibold text-center mx-auto" />
        <h3 className="text-[#355c7d] dark:text-white group-hover:text-[#d95b43]  transition duration-200 font-crete uppercase font-medium text-xl my-2">
          {name}
        </h3>
        <h5 className="text-[#3f4944] dark:text-white text-base font-normal">{title}</h5>
        <p className="text-sm  text-[#86999b] dark:text-white mt-5">{des}</p>
      </div>
    </div>
  );
};

export default SingleService;
