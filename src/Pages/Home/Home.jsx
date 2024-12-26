import Banner from "./Banner/Banner";
import BookCetagories from "./BookCetagories/BookCetagories";
import Counter from "./Counter/Counter";
import Services from "./Services/Services";
import Team from "./Team/Team";

const Home = () => {
  document.title = "Library Management - Home";
  return (
    <div className="bg-white dark:bg-black">
      <div className="space-y-10 lg:space-y-24">
        <Banner />
        <BookCetagories />
        <Services />
        <Counter />
        <Team />
        
      </div>
    </div>
  );
};

export default Home;
