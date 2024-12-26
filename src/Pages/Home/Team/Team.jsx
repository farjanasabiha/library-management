import team1 from "../../../../public/team1.jpg";
import team2 from "../../../../public/team2.jpg";
import team3 from "../../../../public/team3.jpg";
import team4 from "../../../../public/team4.jpg";
import SingleTeam from "../../../Components/SingleTeam/SingleTeam";
const Team = () => {
  return (
    <section className="bg-white text-white dark:bg-black dark:text-white pb-10 lg:pb-24 px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <SingleTeam
            teamImg={team1}
            personName="Mickey Rorey"
            potision="Founder"
          ></SingleTeam>
          <SingleTeam
            teamImg={team2}
            personName="Damie Glendell"
            potision="Co-Director"
          ></SingleTeam>
          <SingleTeam
            teamImg={team3}
            personName="Jenny Sheen"
            potision="Marketing Director"
          ></SingleTeam>
          <SingleTeam
            teamImg={team4}
            personName="James Catwin"
            potision="Art Director"
          ></SingleTeam>
        </div>
      </div>
    </section>
  );
};

export default Team;
