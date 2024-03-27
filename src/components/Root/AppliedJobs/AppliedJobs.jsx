import { useLoaderData } from "react-router-dom";
import { getStoredJob } from "../../../LocalStorage";
import { useEffect, useState } from "react";


const AppliedJobs = () => {
  const jobs = useLoaderData();
 const [appliedJobs , setAppliedJob] = useState([]);
 const [displayJobs , setDisplayJobs] = useState([]);
 const handleJobsFilter=filter=>{
  if(filter==='all'){
    setDisplayJobs(appliedJobs);
  }
  else if(filter==='remote'){
    const remoteJobs = appliedJobs.filter(job=>job.remote_or_onsite==='Remote');
    setDisplayJobs(remoteJobs);
  }else if(filter==='onsite'){
    const onsiteJobs = appliedJobs.filter(job=>job.remote_or_onsite==='Onsite');
    setDisplayJobs(onsiteJobs);
  }
 }
 useEffect(()=>{
  const storedJobIds =  getStoredJob();
  
  if(jobs.length>0){
    const jobsApplied = jobs.filter(job=>storedJobIds.includes(job.id));
   
    // console.log(jobs,storedJobIds,jobsApplied);
    setAppliedJob(jobsApplied);
    setDisplayJobs(jobsApplied);
  }
 },[jobs])
    return (
        <div>
          <h1> Applied  jobs:{appliedJobs.length}</h1> 
          <div className="dropdown mb-32">
  <div tabIndex={0} role="button" className="btn m-1">Click</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li onClick={()=>handleJobsFilter('all')}><a>All</a></li>
    <li onClick={()=>handleJobsFilter('remote')}><a>remote</a></li>
    <li onClick={()=>handleJobsFilter('onsite')}><a>onsite</a></li>
  </ul>
</div> 
          {
           displayJobs.map(job=><li key={job.id}><span>{job.job_title} {job.company_name}:{job.remote_or_onsite}</span></li>)
          }
        </div>
    );
};

export default AppliedJobs;