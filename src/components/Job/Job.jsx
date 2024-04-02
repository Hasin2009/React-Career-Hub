import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import './Job.css';
import { Link } from "react-router-dom";

const Job = ({job}) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div  className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p className='text-xl'>{company_name}</p>
    <div className="mt-2">
        <button className='px-4 py-2 font-bold border rounded border-[#7E90FE] text-[#7E90FE] mr-4'>{remote_or_onsite}</button>
        <button className='px-4 py-2 font-bold border rounded border-[#7E90FE] text-[#7E90FE] '>{job_type}</button>
    </div>
    <div className="my-2 flex gap-6">
        <h2 className="flex gap-2"><MdOutlineLocationOn className="text-2xl"></MdOutlineLocationOn>{location}</h2>
        <h2 className="flex gap-2"><AiOutlineDollar className="text-2xl"></AiOutlineDollar>{salary}</h2>
    </div>
    <div className="card-actions">
      <Link to={`/job/${id}`}>
      <button className="btn bg-indigo-600 text-white hover:text-black">View Details</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default Job;