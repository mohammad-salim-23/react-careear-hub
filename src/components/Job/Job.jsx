import { Link } from "react-router-dom";

const Job = ({ job }) => {
  // eslint-disable-next-line react/prop-types
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    job_description,
  } = job;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={logo} alt="Shoes" />
        </figure>
        <h1 className="text-xl font-bold ml-5">{company_name}</h1>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{job_description}</p>
          <div className="flex gap-3">
            <button className="btn  border rounded-xl border-lime-400 text-[#7E90fE] font-bold ">
              {remote_or_onsite}
            </button>
            <button className="btn  border rounded-xl border-lime-400 text-[#7E90fE] font-bold ">
              {job_type}
            </button>
          </div>
          <div className="card-actions">
          <Link to={`/job/${id}`}>  <button className="btn btn-info">View Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
