import { useLoaderData, useParams } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SaveJob } from "../../LocalStorage";
const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    // console.log(id,jobs);
    const idInt = parseInt(id);
    const job = jobs.find(job=>job.id===idInt);
    // console.log(job);
    const handleJobs=()=>{
        SaveJob(idInt);
        toast("You have Applied Successfully")
    }
    return (
        <div>
          
            <div className="grid md:grid-cols-4 gap-4">
                <div className="border md:col-span-3">
                    <h2 className="text-2xl">Details Coming here</h2>
                    <h2>Job Details of:{job.job_title}</h2>
                    <h2 className="text-xl text-cyan font-bold">{job.company_name}</h2>
                    <img src={job.logo} alt="" />
                    <h2 className="text-xl font-semibold">{}</h2>
                </div>
                <div className="border">
                  <h3 className="text-2xl">Side bar</h3>
                  <button onClick={handleJobs} className="btn btn-success">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;