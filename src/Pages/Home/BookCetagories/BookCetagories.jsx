
import { Link } from "react-router-dom";


const BookCetagories = () => {
    return (
      <div>
        <section>
          <div className="container px-6 m-auto pb-24">
            <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12  gap-3">
              <div className="col-span-4 lg:col-span-3  text-center mx-auto">
                <div className="max-w-xs rounded-md shadow-md bg-white dark:bg-black text-black dark:text-gray-100">
                  <img
                    src="https://i.ibb.co/L5DMBWg/book-1769228-640.jpg"
                    alt=""
                    className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 dark:bg-gray-500"
                  />
                  <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                      <h2 className="text-xl text-[#0c3989] dark:text-white text-center font-bold tracking-wide">
                        Novel
                      </h2>
                      <p className="text-[#0c3989] text-center dark:text-white">
                        The Novel category in books is one of the most diverse
                        and popular genres in literature.
                      </p>
                    </div>
                    <Link
                      to="/NovelCategory"
                      type="button"
                      className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-[#0c3989] text-white "
                    >
                      See more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-span-4 lg:col-span-3  text-center mx-auto">
                {" "}
                <div className="max-w-xs rounded-md shadow-md bg-white dark:bg-black text-black dark:text-gray-100">
                  <img
                    src="https://i.ibb.co/4MYkMT2/7a075ae77e31249f5585f38cbeb77dd0.jpg"
                    alt=""
                    className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 dark:bg-gray-500"
                  />
                  <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                      <h2 className="text-xl text-[#0c3989] dark:text-white text-center font-bold tracking-wide">
                        Thriller
                      </h2>
                      <p className="text-[#0c3989] text-center dark:text-white">
                        Thriller novels often revolve around crime and they may
                        include elements of mystery and horror.
                      </p>
                    </div>
                    <Link
                      to="/ThrillerCategory"
                      type="button"
                      className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-[#0c3989] text-white "
                    >
                      See more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-span-4 lg:col-span-3  text-center mx-auto">
                {" "}
                <div className="max-w-xs rounded-md shadow-md bg-white dark:bg-black text-black dark:text-gray-100">
                  <img
                    src="https://i.ibb.co/S5VFKQj/depositphotos-54615585-stock-photo-old-books-on-wooden-table.webp"
                    alt=""
                    className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 dark:bg-gray-500"
                  />
                  <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                      <h2 className="text-xl text-[#0c3989] dark:text-white text-center font-bold tracking-wide">
                        History
                      </h2>
                      <p className="text-[#0c3989] text-center dark:text-white">
                        Nonfiction historical books often delve into specific
                        time periods and the lives of influential leaders,
                      </p>
                    </div>
                    <Link
                      to="/HistoryCategory"
                      type="button"
                      className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-[#0c3989] text-white "
                    >
                      See more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-span-4 lg:col-span-3  text-center mx-auto">
                {" "}
                <div className="max-w-xs rounded-md shadow-md bg-white dark:bg-black text-black dark:text-gray-100">
                  <img
                    src="https://i.ibb.co/34tnGsR/images-1.jpg"
                    alt=""
                    className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 dark:bg-gray-500"
                  />
                  <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                      <h2 className="text-xl text-[#0c3989] dark:text-white text-center font-bold tracking-wide">
                        Drama
                      </h2>
                      <p className="text-[#0c3989] text-center dark:text-white">
                        The Drama category in books is centered around stories
                        that emotionally intense experiences.
                      </p>
                    </div>

                    <Link
                      to="/DramaCategory"
                      type="button"
                      className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-[#0c3989] text-white "
                    >
                      See more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default BookCetagories;