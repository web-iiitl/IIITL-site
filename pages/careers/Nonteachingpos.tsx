
import Navbarr from "@/components/Navbar";
import Footer from "@/components/Footer";


const Nonteachingpos = () => {
  return (
    <>
    <Navbarr/>
    <div className="container mx-auto mt-10 p-5">
      <h2 className="text-2xl font-semibold mb-5">Notices</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          <a href="https://iiitl.ac.in/wp-content/uploads/2023/10/Non-Teaching-Advt-06.10.2023.pdf" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">
            <p>Advertisement for the Non Teaching Positions</p>
          </a>
        </li>
        <li>
          <a href="https://iiitl.ac.in/wp-content/uploads/2023/06/Notice-JE-JS.pdf" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">
            <p>Notice for the post of Junior Engineer & Junior Superintendent</p>
          </a>
        </li>
        <li>
          <a href="https://iiitl.ac.in/wp-content/uploads/2022/08/Shortlisted-Candidate-DR.pdf" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">
            <p>The details of successful candidates in the written Examination for the position of Deputy Registrar held on 26.08.2022 are attached here. The candidates are requested to report for the Interview scheduled to be held on 27.08.2022 at 9.00 AM.</p>
          </a>
        </li>
        <li>
          <a href="https://iiitl.ac.in/wp-content/uploads/2022/06/Notice-for-DR-candidates.pdf" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">
           <p>List of Eligible/Not Eligible Candidates for the Post of Deputy Registrar</p> 
          </a>  
        </li>
        <li>
          <a href="https://iiitl.ac.in/wp-content/uploads/2022/06/Notice-for-applicants-Registrar.pdf" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">
            <p>List of Eligible/Not Eligible Candidates for the Post of Registrar</p>
          </a>
        </li>
        <li>
          <a href="https://iiitl.ac.in/wp-content/uploads/2021/11/Non-Teaching-Advt..pdf" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">
            <p>Advertisement for the Non Faculty Positions</p>
          </a>
        </li>
        <li>
          <a href="https://iiitl.ac.in/wp-content/uploads/2021/11/Application-form-for-the-post-of-Registrar-Deputy-Registrar.pdf" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">
           <p>Application form (doc / pdf)</p> 
          </a>
        </li>
      </ul>
    </div>
    <Footer/>
    </>
  )
}

export default Nonteachingpos;
