import Image from "next/image";
import Navbar from "@/components/Navbar";
import ControlledCarousel from "@/components/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { SSRProvider } from "react-bootstrap";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import { useState } from "react";
import Layout from  "@/components/Layout";
// const Content = () => {
//   return(
//       <div className="h-[80vh] flex flex-col justify-center gap-4 px-20">
//           <div className="flex flex-col gap-2 font-serif lg:text-6xl text-bluel md:text-5xl sm:text-4xl max-sm:text-2xl">
//               <div className="">VIDYA DADATI VINAYAM,</div>
//               <div className="">VINAYA DADATI PATRATAM</div>
//           </div>
//           <div className="text-2xl max-sm:text-lg text-bluedark">Knowledge gives you discipline, discipline makes you worthy.</div>
//       </div>
//   );
// }
const About = () => {
  return (
    <div className="relative min-h-[60vh] m-10 max-md:m-5 scrollAnim flex">
      <div className="w-[50%] max-lg:w-[75%] max-sm:w-[90%] max-md:text-xl text-2xl font-normal p-10 gap-10 pr-5">
        <h1>About IIIT Lucknow</h1>
        <p className="text-left text-lg">
          Indian Institute of Information Technology, Lucknow (IIIT Lucknow) is
          one of the 20 IIITs being set up by the Central Government in Public
          Private Partnership (PPP) mode.
        </p>
        <p className="text-left text-lg">
          IIIT Lucknow currently offers all the amenities, academic and
          non-academic to its students that can help them flourish and serve the
          nation with all their apprehension in the various fields of
          technology. The admission is made through central counseling of
          candidates who qualify in JEE (Mains).
        </p>
        {/* button */}
        <div>
          <a
            href="#_"
            className="group relative inline-flex items-center justify-center p-3 px-6 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-300 rounded-full shadow-md"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">
              Read More
            </span>
            <span className="relative invisible">Read More</span>
          </a>
        </div>
      </div>

      {/* Right side for image and YouTube video */}
      <div className="w-[50%] max-lg:w-[25%] max-sm:w-[20%] self-center relative top-[-10px]">
        <img
          src="\carousel2.jpeg"
          alt="Image"
          width="100%"
          height="auto"
          style={{ filter: "blur(2px)" }}
        />
        <iframe
          width="70%"
          height="300"
          src="https://www.youtube.com/embed/DmWWqogr_r8?si=dE-4fK_zz1Mvb0-O"
          title="YouTube Video"
          className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2"
        ></iframe>
      </div>
    </div>
  );
};
const InfoCard = ({ title, content }) => {
  return (
    <div className="relative m-10 max-md:m-5 scrollAnim">
      <div className="bg-gray-200 z-[-1] py-12">
        <div className="flex flex-row justify-center space-x-10">
          <div className="w-[28%] h-[60vh] max-lg:w-[30%] max-sm:w-[30%] max-md:text-xl flex flex-col text-center text-2xl font-normal bg-bluel text-white p-10 gap-10 transform hover:scale-110 transition-transform py-0 px-0 hover:border border-bluedark hover:shadow-lg">
            <p className="bg-white text-bluedark font-bold h-12 py-2">
              {title}
            </p>
            <p className="">{content}</p>
          </div>
          <div className="w-[28%] h-[60vh] max-lg:w-[30%] max-sm:w-[30%] max-md:text-xl flex flex-col text-center text-2xl font-normal bg-bluel text-white p-10 gap-10 transform hover:scale-110 transition-transform py-0 px-0 hover:border border-bluedark hover:shadow-lg">
            <p className="bg-white text-bluedark font-bold h-12 py-2">
              {title}
            </p>
            <p className="">{content}</p>
          </div>
          {/* <div className="w-[28%] h-[60vh] max-lg:w-[30%] max-sm:w-[30%] max-md:text-xl flex flex-col text-center text-2xl font-normal bg-bluel text-white p-10 gap-10 transform hover:scale-110 transition-transform py-0 px-0 hover:border border-bluedark hover:shadow-lg">
            <p className='bg-white text-bluedark font-bold h-12 py-2'>{title}</p>
            <p className=''>{content}</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

// work ends here

// work starts here

const InfoBoard = ({ title, content }) => {
  const [selectedContent, setSelectedContent] = useState(null);

  const handleButtonClick = (content) => {
    setSelectedContent(content);
  };

  return (
    <div className="relative m-10 max-md:m-5 scrollAnim">
      <div className="bg-white z-[-1] py-3">
        <div className="flex flex-row justify-center space-x-10">
          {/* <div className="w-[28%] h-[60vh] max-lg:w-[30%] max-sm:w-[30%] max-md:text-xl flex flex-col text-center text-2xl font-normal bg-bluel text-white p-10 gap-10 transform hover:scale-110 transition-transform py-0 px-0 hover:border border-bluedark">
              <p className="bg-gray-200 text-bluedark font-bold h-14 py-2">{title}</p>
              <p>{content}</p>
            </div> */}
          <div className="w-[59%] h-[60vh] max-lg:w-[30%] max-sm:w-[30%] max-md:text-xl flex flex-col text-center text-2xl font-normal bg-bluel text-white p-10 gap-10 py-0 px-0 hover:border border-bluedark hover:shadow-lg transform hover:scale-105 transition-transform">
            <div className="flex justify-between">
              <button
                className="bg-gray-200 text-bluedark font-bold h-12 w-[25%] py-2 mx-2 my-2 transform hover:scale-105 transition-transform hover:border border-bluedark hover:shadow-lg"
                onClick={() => handleButtonClick("-")}
              >
                -
              </button>
              <button
                className="bg-gray-200 text-bluedark font-bold h-12 w-[25%] py-2 mx-2 my-2 transform hover:scale-105 transition-transform hover:border border-bluedark hover:shadow-lg"
                onClick={() => handleButtonClick("--")}
              >
                --
              </button>
              <button
                className="bg-gray-200 text-bluedark font-bold h-12 w-[25%] py-2 mx-2 my-2 transform hover:scale-105 transition-transform hover:border border-bluedark hover:shadow-lg"
                onClick={() => handleButtonClick("---")}
              >
                ---
              </button>
              <button
                className="bg-gray-200 text-bluedark font-bold h-12 w-[25%] py-2 mx-2 my-2 transform hover:scale-105 transition-transform hover:border border-bluedark hover:shadow-lg"
                onClick={() => handleButtonClick("----")}
              >
                ----
              </button>
            </div>
            {selectedContent && <p>{selectedContent}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <Layout>
      <ControlledCarousel />
      {/* <Content/> */}
      <About />
      {
        /*
        <InfoBoard /> */
      } 
      {  /*  <InfoCard /> */}
      </Layout>
     
    </div>
  );
}
