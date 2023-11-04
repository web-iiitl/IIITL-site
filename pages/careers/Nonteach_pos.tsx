import Layout from "../../components/Layout/index";
import Link from "next/link";

const Nonteach_pos = () => {
  return (
    <Layout>
      <div className="container mx-auto mt-10 p-5">
        <h2 className="text-5xl font-extrabold mb-5">Notices</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <Link legacyBehavior href="https:/a/iiitl.ac.in/wp-content/uploads/2023/10/Non-Teaching-Advt-06.10.2023.pdf">
              <a className="text-green-600 hover:text-green-700" target="_blank" rel="noopener noreferrer">
                Advertisement for the Non Teaching Positions
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="https://iiitl.ac.in/wp-content/uploads/2023/06/Notice-JE-JS.pdf">
              <a className="text-green-600 hover:text-green-700" target="_blank" rel="noopener noreferrer">
                Notice for the post of Junior Engineer & Junior Superintendent
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="https://iiitl.ac.in/wp-content/uploads/2022/08/Shortlisted-Candidate-DR.pdf">
              <a className="text-green-600 hover:text-green-700" target="_blank" rel="noopener noreferrer">
                The details of successful candidates in the written Examination for the position of Deputy Registrar held on 26.08.2022 are attached here. The candidates are requested to report for the Interview scheduled to be held on 27.08.2022 at 9.00 AM. (For the list please Click here)
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="https://iiitl.ac.in/wp-content/uploads/2022/06/Notice-for-DR-candidates.pdf">
              <a className="text-green-600 hover:text-green-700" target="_blank" rel="noopener noreferrer">
                List of Eligible/Not Eligible Candidates for the Post of Deputy Registrar
              </a>
            </Link>  
          </li>
          <li>
            <Link legacyBehavior href="https://iiitl.ac.in/wp-content/uploads/2022/06/Notice-for-applicants-Registrar.pdf">
              <a className="text-green-600 hover:text-green-700" target="_blank" rel="noopener noreferrer">
                List of Eligible/Not Eligible Candidates for the Post of Registrar
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="https://iiitl.ac.in/wp-content/uploads/2021/11/Non-Teaching-Advt..pdf">
              <a className="text-green-600 hover:text-green-700" target="_blank" rel="noopener noreferrer">
                Advertisement for the Non Faculty Positions
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="https://iiitl.ac.in/wp-content/uploads/2021/11/Application-form-for-the-post-of-Registrar-Deputy-Registrar.pdf">
              <a className="text-green-600 hover:text-green-700" target="_blank" rel="noopener noreferrer">
                Application form (doc / pdf)
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default Nonteach_pos;
