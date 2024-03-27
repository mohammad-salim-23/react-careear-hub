const getStoredJob = ()=>{
    const storedJob = localStorage.getItem('job-application');
    if(storedJob){
        return JSON.parse(storedJob);
    }
    return [];
}
const SaveJob = id=>{
    const storedApplication = getStoredJob();
    const exist = storedApplication.find(jobId=>jobId===id);
    if(!exist){
        storedApplication.push(id);
        localStorage.setItem('job-application',JSON.stringify(storedApplication));
    }
}


export{getStoredJob,SaveJob}