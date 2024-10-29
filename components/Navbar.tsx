import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";
import Heading from "./Heading";
import styles from "./Navbarr.module.css";
import React from "react";

const Navbarr = () => {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("Home");
  const [showPeopleDropdown, setShowPeopleDropdown] = useState(false);
  const [showCareersDropdown, setShowCareersDropdown] = useState(false);
  const [showCoursesDropdown, setShowCoursesDropdown] = useState(false);
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
    } else if (router.pathname === "/news") {
      setActiveTab("News");
    } else if (router.pathname.startsWith("/course")) {
      setActiveTab("Courses");
    } else if (router.pathname.startsWith("/studentLife")) {
      setActiveTab("studentLife");
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
    } else if (router.pathname === "/news") {
      setActiveTab("News");
    } else if (router.pathname.startsWith("/course")) {
      setActiveTab("Courses");
    } else if (router.pathname.startsWith("/studentLife")) {
      setActiveTab("studentLife");
    }

    // Add similar conditions for other pages
  }, [router.pathname]);

  return (

    <div className="sticky top-0 z-10 ">
      <Navbar expand="lg" className=" py-1 sm:py-5 bg-[#e6e6e6]  text-bluel text-xl font-semibold text-center">
        <Container>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse>
            <Nav
              className="mx-auto my-2 my-lg-0 gap-3"
              style={{ maxHeight: "100px" }}
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
              <NavDropdown
                title="People"
                id="navbarScrollingDropdown"
                onMouseEnter={() => {
                  handleTabHover("People");
                  setShowPeopleDropdown(true);
                }}
                onMouseLeave={() => {
                  handleTabLeave();
                  setShowPeopleDropdown(false);
                }}
                show={showPeopleDropdown}
                className={activeTab === "People" ? styles.active : ""}
                
              >
                <NavDropdown.Item href="/people?department=Director">
                  Director
                </NavDropdown.Item>
                <NavDropdown.Item href="/people?department=Faculty">
                  Faculty
                </NavDropdown.Item>
                <NavDropdown.Item href="/people?department=Visiting Faculty">
                  Visiting Faculty
                </NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link
                href="/course"
                onMouseEnter={() => handleTabHover("Courses")}
                onMouseLeave={handleTabLeave}
                className={activeTab === "Courses" ? styles.active : ""}
              >
                Courses
              </Nav.Link> */}
              <NavDropdown
                title="Courses"
                id="navbarScrollingDropdown"
                onMouseEnter={() => {
                  handleTabHover("Courses");
                  setShowCoursesDropdown(true);
                }}
                onMouseLeave={() => {
                  handleTabLeave();
                  setShowCoursesDropdown(false);
                }}
                show={showCoursesDropdown}
                className={activeTab === "Courses" ? styles.active : ""}
              >
                <NavDropdown.Item href="/course?department=BTech">
                  B.Tech
                </NavDropdown.Item>
                <NavDropdown.Item href="/course?department=MTech">
                  M.Tech
                </NavDropdown.Item>
                <NavDropdown.Item href="/course?department=Phd">
                  Ph.D
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
                href="/clubs"
                onMouseEnter={() => handleTabHover("Clubs")}
                onMouseLeave={handleTabLeave}
                className={activeTab === "Clubs" ? styles.active : ""}
              >
                Clubs
              </Nav.Link>
              <Nav.Link
                href="/contact"
                onMouseEnter={() => handleTabHover("Contact Us")}
                onMouseLeave={handleTabLeave}
                className={activeTab === "Contact Us" ? styles.active : ""}
              >
                Contact Us
              </Nav.Link>
              <Nav.Link
                href="https://placements.iiitl.ac.in/"
                onMouseEnter={() => handleTabHover("Placements")}
                onMouseLeave={handleTabLeave}
                className={activeTab === "Placements" ? styles.active : ""}
              >
                Placements
              </Nav.Link>
              <NavDropdown
                title="Careers@IIITL"
                id="navbarScrollingDropdown"
                onMouseEnter={() => {
                  handleTabHover("careers@iiitl");
                  setShowCareersDropdown(true);
                }}
                onMouseLeave={() => {
                  handleTabLeave();
                  setShowCareersDropdown(false);
                }}
                show={showCareersDropdown}
                className={activeTab === "careers@iiitl" ? styles.active : ""}
              >
                <NavDropdown.Item href="/careers/Nonteach_pos">
                  Non Teaching Positions
                </NavDropdown.Item>
                <NavDropdown.Item href="/careers/Faculty_pos">
                  Faculty Positions
                </NavDropdown.Item>
                <NavDropdown.Item href="https://iiitl.ac.in/wp-content/uploads/2023/05/Ramp-project2.pdf">
                  Project Vacancy
                </NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link
                href="/"
                onMouseEnter={() => handleTabHover("Additional")}
                onMouseLeave={handleTabLeave}
              >
                Additional
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarr;
