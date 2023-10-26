import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-bluel">
      <div className="flex flex-col sm:flex-row justify-center border-b border-dotted border-gray-400">
      <div className="w-full sm:w-1/4 p-4">
  <div className="bg-bluel p-4">
    <h2 className="text-lg font-semibold text-white relative">
      <div className="border-b-2 border-white absolute bottom-0 left-0 w-16"></div>
      Explore
    </h2>
    <div className="flex flex-col"> {/* Added a div to create a column */}
      <Link href="#" className="text-gray-300 hover:text-white">
        Campus life
      </Link>
      <Link href="#" className="text-gray-300 hover:text-white">
        Pricing & Plans
      </Link>
      <Link href="#" className="text-gray-300 hover:text-white">
        What's New
      </Link>
      <Link href="#" className="text-gray-300 hover:text-white">
        Customers
      </Link>
      <Link href="#" className="text-gray-300 hover:text-white">
        Terms of Use
      </Link>
      <Link href="#" className="text-gray-300 hover:text-white">
        Contact Centers
      </Link>
    </div>
  </div>
</div>

        <div className="w-full sm:w-1/4 p-4">
          <div className="bg-bluel p-4">
            <h2 className="text-lg font-semibold text-white relative">
              <div className="border-b-2 border-white absolute bottom-0 left-0 w-20"></div>
              Quick Links
            </h2>
            <Link href="#" className="text-gray-300 hover:text-white block">
              About Us
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white block">
              Careers
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white block">
              Departments
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white block">
              Right To Information
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white block">
              Blogs
            </Link>
          </div>
        </div>
        <div className="w-full sm:w-1/4 p-4 border-b sm:border-r border-dotted border-gray-400">
          <div className="bg-bluel p-4">
            <h2 className="text-lg font-semibold text-white relative">
              <div className="border-b-2 border-white absolute bottom-0 left-0 w-20"></div>
              Solutions
            </h2>
            <Link href="#" className="text-gray-300 hover:text-white block">
              Enterprise
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white block">
              Developers
            </Link>
          </div>
          <div className="bg-bluel p-4">
            <h2 className="text-lg font-semibold text-white relative">
              <div className="border-b-2 border-white absolute bottom-0 left-0 w-20"></div>
              Support
            </h2>
            <Link href="#" className="text-gray-300 hover:text-white block">
              Help Center
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white block">
              Contact Support
            </Link>
          </div>
        </div>
        <div className="w-full sm:w-2/6 p-4 text-white text-center sm:text-left">
          <Image src="/iiitlLogo.png" alt="Image" width={120} height={160} className="brightness-0 invert" />
          <p>Indian Institute of Information Technology, Lucknow</p>
          <p>R22F+8JR, Chak Ganjaria, C. G. City, Ahmamau, Uttar Pradesh 226002, IN.</p>
        </div>
      </div>
      <div className="container p-1 text-center  ">
  <p>&copy; 2023 Indian Institute of Information Technology Lucknow. All rights reserved.</p>
</div>


    </footer>
  );
};

export default Footer;
