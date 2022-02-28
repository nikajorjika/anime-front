import MovieList from "../components/Movie/MovieList";

export default function Home() {
  return (
    <>
      <div className="mx-6">
        <h1 className="my-6 text-3xl">All Courses</h1>
        <div className="md:flex  space-y-3 md:space-y-0 md:space-x-4 mt-6">
          <div className="h-90 bg-gradient-to-r rounded-md from-indigo-600 to-purple-600 p-10">
            <p className="text-3xl font-thin text-indigo-50 cursor-pointer">
              How to do Basic Jumping and how to landing safely
            </p>
            <div className="flex items-center mt-4 space-x-4">
              <img
                className="w-10 h-10 rounded-full cursor-pointer"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80"
                alt=""
              />
              <div>
                <h3 className="text-indigo-50 font-semibold cursor-pointer">
                  Thomas Hope
                </h3>
                <p className="text-indigo-50 text-sm font-thin">
                  53K views • 2 weeks ago
                </p>
              </div>
            </div>
          </div>
          <div className="h-90 bg-gradient-to-r rounded-md from-indigo-600 to-purple-600 p-10">
            <p className="text-3xl font-thin text-indigo-50 cursor-pointer">
              How to do Basic Jumping and how to landing safely
            </p>
            <div className="flex items-center mt-4 space-x-4">
              <img
                className="w-10 h-10 rounded-full cursor-pointer"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80"
                alt=""
              />
              <div>
                <h3 className="text-indigo-50 font-semibold cursor-pointer">
                  Thomas Hope
                </h3>
                <p className="text-indigo-50 text-sm font-thin">
                  53K views • 2 weeks ago
                </p>
              </div>
            </div>
          </div>
        </div>
        <MovieList />
      </div>
    </>
  );
}
