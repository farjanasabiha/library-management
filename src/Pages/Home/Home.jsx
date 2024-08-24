import Banner from "./Banner/Banner";
import BookCetagories from "./BookCetagories/BookCetagories";

const Home = () => {
    return (
      <div className="bg-white dark:bg-black">
        <div className="container mx-auto">
            
          <Banner></Banner>
          <BookCetagories></BookCetagories>
        </div>
      </div>
    );
};

export default Home;