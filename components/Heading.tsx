import Head from "./Heading_transition";
import 'animate.css';


const Heading = () => {
  return (
    <div className="animate__bounce">
        <Head className=" text-center justify-center items-center"/>
        <span className="text-xl float-right animate__zoomOutRight">(An Institute of National Importance by the Act of Parliament)</span>
    </div>
  )
}

export default Heading
