import { MdEmojiPeople } from "react-icons/md";
import { FaTrophy } from "react-icons/fa6";
import { FaFlagCheckered } from "react-icons/fa";
import { FaAccessibleIcon } from "react-icons/fa";
import SingleCounter from "./../../../Components/SingleCounter/SingleCounter";
const Counter = () => {
  return (
    <section className="bg-[#355c7d] text-white dark:bg-black dark:text-white py-24  px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <SingleCounter
            Icon={MdEmojiPeople}
            end={50}
            start={0}
            title="Learners Educated"
          />
          <SingleCounter
            Icon={FaTrophy}
            end={70}
            start={0}
            title="Courses Available"
          />
          <SingleCounter
            Icon={FaFlagCheckered}
            end={90}
            start={0}
            title="Categories Listed"
          />
          <SingleCounter
            Icon={FaAccessibleIcon}
            end={90}
            start={0}
            title="Languages Available"
          />
        </div>
      </div>
    </section>
  );
};

export default Counter;
