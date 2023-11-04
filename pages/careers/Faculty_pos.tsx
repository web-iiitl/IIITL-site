import Link from "next/link";
import Layout from "../../components/Layout/index";

const FacultyPos = () => {
  return (
    <>
      <Layout>
        <div className="container mx-auto mt-10 p-5">
          <h2 className="text-5xl font-extrabold  mb-5">Faculty Positions</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <Link legacyBehavior href="/">
                <a className="text-green-600 hover:text-green-700">
                  Advertisement for Walk-In-Interview for the Adhoc Faculty CS/IT
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/">
                <a className="text-green-600 hover:text-green-700">
                  Notice Interview dates for CS&IT on August 2-3, 2023.
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/">
                <a className="text-green-600 hover:text-green-700">
                  Details of Interview schedule
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/">
                <a className="text-green-600 hover:text-green-700">
                  Details of Redressal Grievance
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/">
                <a className="text-green-600 hover:text-green-700">
                  Details of Shortlisting of Applications for the Faculty positions (Mathematics – Interview Date- 18.07.2023, Management & Humanities- Interview Date- 21.07.2023 & CS/IT Deptt- Interview Date(s)- 22.07.2023 & 23.07.2023)
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/">
                <a className="text-green-600 hover:text-green-700">
                  Walk In Interview for Temporary Faculty in Department of Mathematics
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/">
                <a className="text-green-600 hover:text-green-700">
                  Closure of Rolling Advertisement No. IIITL/Recruitment/2021/RA-02 dt. 24.11.2021 with effect from 11.59 pm of 10.01.2023.
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/">
                <a className="text-green-600 hover:text-green-700">
                  List of Shortlisted & Not Shortlisted candidates for Faculty Positions in CS/IT Department
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/">
                <a className="text-green-600 hover:text-green-700">
                  List of Shortlisted Candidates for Teaching Positions in Department of Mathematics
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/">
                <a className="text-green-600 hover:text-green-700">
                  Notice Advertisement for the Faculty
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/">
                <a className="text-green-600 hover:text-green-700">
                  Apply Now
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </Layout>
    </>
  );
}

export default FacultyPos;
