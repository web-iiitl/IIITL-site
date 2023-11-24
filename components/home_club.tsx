import Zoom from "react-reveal/Zoom";

const HomeClub: React.FC = () => {
  return (
    <>
      <Zoom>
        <div className="container mx-auto mt-10 p-5">
          <h2 className="text-3xl font-semibold mb-5 items-center">
            Clubs
          </h2>
          <div className="flex gap-4 py-3">
            {/* Original divs line 1*/}
            <div className="w-1/3 p-10 bg-white rounded-lg shadow-lg h-[300px] transform transition-transform hover:scale-110"></div>
            <div className="w-1/3 p-10 bg-white rounded-lg shadow-lg h-[300px] transform transition-transform hover:scale-110"></div>
            <div className="w-1/3 p-10 bg-white rounded-lg shadow-lg h-[300px] transform transition-transform hover:scale-110"></div>
            <div className="w-1/3 p-10 bg-white rounded-lg shadow-lg h-[300px] transform transition-transform hover:scale-110"></div>
          </div>
          {/* code for line 2 */}
          <div className="flex gap-4 flex-row align-middle items-center justify-center p-3">
            <div className="w-1/4 p-10 bg-white rounded-lg shadow-lg h-[200px] transform transition-transform hover:scale-110"></div>
            <div className="w-1/4 p-10 bg-white rounded-lg shadow-lg h-[200px] transform transition-transform hover:scale-110"></div>
            <div className="w-1/4 p-10 bg-white rounded-lg shadow-lg h-[200px] transform transition-transform hover:scale-110"></div>
            <div className="w-1/4 p-10 bg-white rounded-lg shadow-lg h-[200px] transform transition-transform hover:scale-110"></div>
          </div>
          {/* code for line 3 */}
           <div className="flex gap-4 flex-row align-middle items-center justify-center p-3">
            <div className="w-1/4 p-10 bg-white rounded-lg shadow-lg h-[200px] transform transition-transform hover:scale-110"></div>
            <div className="w-1/4 p-10 bg-white rounded-lg shadow-lg h-[200px] transform transition-transform hover:scale-110"></div>
            <div className="w-1/4 p-10 bg-white rounded-lg shadow-lg h-[200px] transform transition-transform hover:scale-110"></div>
          </div>
        </div>
      </Zoom>
    </>
  );
};

export default HomeClub;