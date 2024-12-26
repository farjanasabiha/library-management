import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "../../Pages/Home/Counter/counter.css";

const SingleCounter = ({ title, start, end, Icon }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <div>
      <div className="group hover:cursor-pointer">
        <div className="group mb-5 ">
          <Icon className="text-[#355c7d] transition text-center mx-auto bg-white text-[65px] p-5 rounded-full group-hover:animate-spin360 group-hover-out:animate-spin360Reverse" />
        </div>
        <div ref={ref} className=" text-center mb-3">
          {inView && (
            <CountUp
              className="text-white dark:text-white text-3xl lg:text-6xl font-bold"
              start={start}
              end={end}
              duration={4.75}
              suffix="+"
            />
          )}
        </div>
        <div>
          <h2 className="text-[#739cbf] dark:text-white  text-base font-normal font-anton text-center">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SingleCounter;
