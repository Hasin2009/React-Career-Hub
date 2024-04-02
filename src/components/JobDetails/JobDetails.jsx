import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find(job => job.id === idInt);
  console.log(job);

  const handleApplyJob = () => {
    saveJobApplication(idInt);
    toast('You have applied successfully')
  }

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="border md:col-span-3 space-y-6">
          <h2>
            <span className="font-bold">Job-Description:</span>{" "}
            {job.job_description}
          </h2>
          <h2>
            <span className="font-bold">Job-Responsibility:</span>{" "}
            {job.job_responsibility}
          </h2>
          <h2>
            <span className="font-bold">Educational Requirements: </span>
            <br />
            {job.educational_requirements}
          </h2>
          <h2>
            <span className="font-bold">Experiences:</span>
            <br />
            {job.experiences}
          </h2>
        </div>
        <div className="border bg-[#7e90fe1A]">
          <h2 className="font-bold text-center my-3">Job Details</h2>
          <hr />
          <div className="p-2 space-y-2">
            <p>
              <span className="font-bold">Job Title:</span> {job.job_title}
            </p>
            <p>
              <span className="font-bold">Salary:</span> {job.salary}
            </p>
          </div>
          <h2 className="font-bold text-center my-4">Contact Information</h2>
          <hr />
          <div className="p-2 space-y-2">
            <p>
              <span className="font-bold">Phone:</span>{" "}
              {job.contact_information.phone}
            </p>
            <p>
              <span className="font-bold">Email:</span>{" "}
              {job.contact_information.email}
            </p>
            <p>
              <span className="font-bold">Address:</span>{" "}
              {job.contact_information.address}
            </p>
          </div>
          <button onClick={handleApplyJob} className="btn btn-primary w-full text-xl text-white my-4">Apply Now</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
