import Link from "next/link";
import Marquee from "react-fast-marquee";
import logo from "../public/IIITLlogo.png";
import Head from "./heading_transition";
import Department_dropdown from "./Department_dropdown";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import Heading from "./Heading";
import Image from "next/image";
const navLinkStyles = {
  display: "inline-block",
  padding: "0.5rem 1rem",
  backgroundColor: "#3490dc",
  color: "#fff",
  textDecoration: "underline",
  transition: "background-color 0.3s, color 0.3s",
  borderRadius: "3px"
};


// const hoverStyles = `
//   @apply bg-gray-200 text-gray-800
// `


const Navbarr = () => {
  return (
    <div>
      <div className="bg-white p-5 flex justify-items-center items-center">
        <div>
          <Link href="/">
          <Image
            src='/iiitlLogo.png'// Add the correct source for your image
            alt="IIITL"
            width={200}
            height={10}
          />
          </Link>

        </div>
      <Heading/>
      </div>
      <Navbar expand="lg" className=" px-2 py-2 bg-gray-100">
      <Container fluid>
        {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 gap-4"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/admissions">Admissions</Nav.Link>
            <Nav.Link href="/people">People</Nav.Link>


            <NavDropdown title="Student Life" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>


            <NavDropdown title="Courses" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">UG Courses</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                PG Courses
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>


            <Nav.Link href="/news">News</Nav.Link>
            <Nav.Link href="/events">Events</Nav.Link>
            <Nav.Link href="/placements">Placements</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            
            <Nav.Link href="#">
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      {/* <div className="bg-white p-5 flex-center justify-between items-cente w-70">
        <div className="bg-gray-200 p-3">
        <div className="flex gap-9 justify-center  items-center text-center ">
          <Link href="/" className="nav-link">
            <p className="bg-blue-500 hover:bg-white hover:text-black text-white p-2 rounded-md">Home</p>
          </Link>

          <Link href="/academics" className="nav-link">
            <p className="bg-blue-500 hover:bg-white hover:text-black text-white p-2 rounded-md">Academics</p>
          </Link>

          

          <Link href="/admissions">
            <p className="bg-blue-500 hover:bg-white hover:text-black text-white p-2 rounded-md">Admissions</p>
          </Link>

          <Link href="/departments" className="nav-link">
            <p className="bg-blue-500 hover:bg-white hover:text-black text-white p-2 rounded-md">Departments</p>
          </Link>

          <Link href="/campus-life" className="nav-link">
            <p className="bg-blue-500 hover:bg-white hover:text-black text-white p-2 rounded-md">Campus-Life</p>
          </Link>

          <Link href="/clubs" className="nav-link">
            <p className="bg-blue-500 hover:bg-white hover:text-black text-white p-2 rounded-md">Clubs</p>
          </Link>


          <Link href="/downloads" className="nav-link">
            <p className="bg-blue-500 hover:bg-white hover:text-black text-white p-2 rounded-md">Downloads</p>
          </Link>

          <Link href="/contact" className="nav-link">
            <p className="bg-blue-500 hover:bg-white hover:text-black text-white p-2 rounded-md">Contact Us</p>
          </Link>
          </div>

        </div> */}
        <div className="p-1 mt-2 mb-2 bg-blue-300">
          <Marquee  
          gradient={true}
          gradientColor={[26, 140, 184]}
          pauseOnHover={true}
          ><span className="inline-block h-6 w-9"><img src="https://www.lordbuddhagroup.com/wp-content/uploads/2018/08/NEW-GIF.gif" alt="" /></span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, eaque. <span className="inline-block h-6 w-9"><img src="https://www.lordbuddhagroup.com/wp-content/uploads/2018/08/NEW-GIF.gif" alt="" /></span></Marquee>
        </div>
      </div>
    
  );
};

export default Navbarr;
