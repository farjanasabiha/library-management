import { GiBusStop } from "react-icons/gi";
import { GiCatch } from "react-icons/gi";
import { GiCherish } from "react-icons/gi";
import { GiClick } from "react-icons/gi";
import SingleService from "../../../Components/SingleService/SingleService";

const Services = () => {
  return (
    <div className="bg-white text-white dark:bg-black dark:text-white px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <SingleService
            Icon={GiBusStop}
            name="We Coach Easy"
            title="Learn the best Way"
            des="Sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam."
          />
          <SingleService
            Icon={GiCatch}
            name="We Coach Easy"
            title="Learn the best Way"
            des="Sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam."
          />
          <SingleService
            Icon={GiClick}
            name="We Coach Easy"
            title="Learn the best Way"
            des="Sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam."
          />
          <SingleService
            Icon={GiCherish}
            name="We Coach Easy"
            title="Learn the best Way"
            des="Sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
