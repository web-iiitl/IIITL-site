import Link from "next/link";
import { useRouter } from "next/router"; // Import useRouter
import Marquee from "react-fast-marquee";
import Marque from "./Marque";
import { useState, useEffect } from "react"; // Import useEffect
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from "next/image";

import Heading from "./Heading";

import styles from "./Navbarr.module.css"; // Create a CSS module for styling
import React from "react";

const Navbarr = () => {
  const router = useRouter(); // Initialize the router

  const [activeTab, setActiveTab] = useState("Home"); // Initialize with the default tab name

  const handleTabHover = (tabName) => {
    setActiveTab(tabName);
  };

  const handleTabLeave = () => {
    if (router.pathname === "/") {
      setActiveTab("Home");
    } else if (router.pathname === "/admissions") {
      setActiveTab("Admissions");
    } else if (router.pathname === "/people") {
      setActiveTab("People");
    }else if (router.pathname === "/news") {
      setActiveTab("News");
    }
  };

  useEffect(() => {
    // Update the active tab based on the current route
    if (router.pathname === "/") {
      setActiveTab("Home");
    } else if (router.pathname === "/admissions") {
      setActiveTab("Admissions");
    } else if (router.pathname === "/people") {
      setActiveTab("People");
    }else if (router.pathname === "/news") {
      setActiveTab("News");
    }
    // Add similar conditions for other pages
  }, [router.pathname]);

  return (
    <div>
      <div className="p-5 flex justify-items-center items-center">
        <div>
          <Link href="/">
            <Image
              src='/iiitlLogo.png'
              alt="IIITL"
              width={200}
              height={10}
            />
          </Link>
          
        </div>
        <Heading />
      </div>
      <Navbar expand="lg" className="px-2 py-2 bg-gray-100">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 gap-4"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link
                href="/"
                onMouseEnter={() => handleTabHover("Home")}
                onMouseLeave={handleTabLeave}
                className={activeTab === "Home" ? styles.active : ""}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="/admissions"
                onMouseEnter={() => handleTabHover("Admissions")}
                onMouseLeave={handleTabLeave}
                className={activeTab === "Admissions" ? styles.active : ""}
              >
                Admissions
              </Nav.Link>
              <Nav.Link
                href="/people"
                onMouseEnter={() => handleTabHover("People")}
                onMouseLeave={handleTabLeave}
                className={activeTab === "People" ? styles.active : ""}
              >
                People
              </Nav.Link>
              <NavDropdown title="Student Life" id="navbarScrollingDropdown">

                
                <NavDropdown.Item href="/campus">Action</NavDropdown.Item>
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
              <Nav.Link
                href="/news"
                onMouseEnter={() => handleTabHover("News")}
                onMouseLeave={handleTabLeave}
                className={activeTab === "News" ? styles.active : ""}
              >
                News
              </Nav.Link>
              <Nav.Link
                href="/events"
                onMouseEnter={() => handleTabHover("Events")}
                onMouseLeave={handleTabLeave}
                className={activeTab === "Events" ? styles.active : ""}
              >
                Events
              </Nav.Link>
              <Nav.Link
                href="/placements"
                onMouseEnter={() => handleTabHover("Placements")}
                onMouseLeave={handleTabLeave}
                className={activeTab === "Placements" ? styles.active : ""}
              >
                Placements
              </Nav.Link>
              <Nav.Link
                href="/contact"
                onMouseEnter={() => handleTabHover("Contact Us")}
                onMouseLeave={handleTabLeave}
                className={activeTab === "Contact Us" ? styles.active : ""}
              >
                Contact Us
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
      <div className={`p-1 mt-2 mb-2 `}>
          <Marque/>
      </div>
    </div>
  );
};

export default Navbarr;
