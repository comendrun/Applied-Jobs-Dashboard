import { Link, useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";
import { useEffect } from "react";

import { randomStyle } from "../styles";

import "./Job.css";
import ButtonMailto from "../components/ButtonMailto";
import DeleteButton from "../components/DeleteButton";

export default function Job() {
  let navigate = useNavigate();
  const { id } = useParams();
  const url = "https://my-job-board-data.herokuapp.com/jobs/" + id;

  const { data: job, error, isPending } = useFetch(url);

  //   useEffect(() => {
  //     if (error) {
  //       setTimeout(() => {
  //         navigate("/Applied-Jobs-Dashboard");
  //       }, 3000);
  //     }
  //   }, [error, navigate]);

  return (
    <div className="job-container desktop:min-w-[25rem] max-w-[1000px] px-10 py-5 w-[100%] desktop:h-full  flex flex-col text-white ">
      {isPending && <div className="pending-message-job-page">Loading...</div>}
      {error && <div className="error-message-job-page">{error}</div>}

      {job && (
        <>
          <ul className="flex flex-col gap-4 overflow-auto px-2">
            <li>
              <h2
                style={randomStyle().card}
                className="text-xl font-bold capitalize mb-2 border-2 p-2 rounded text-center"
              >
                {job.title}
              </h2>
            </li>
            <li className="job-page-list-item flex justify-between">
              <p className="text-sm">Date</p>
              <p>{job.date}</p>
            </li>

            <li className="job-page-list-item flex justify-between">
              <p className="text-sm">Company</p>
              <p>{job.company}</p>
            </li>

            <li className="job-page-list-item flex justify-between">
              <p className="text-sm">Source</p>
              <p>
                {job.jobSource}
                {"  "}-{"  "}
                {job.adLink.length > 1 && <a href={job.adLink}>Link</a>}
              </p>
            </li>

            <li className="job-page-list-item flex justify-between">
              <p className="text-sm">Job Location</p>
              {<p>{job.jobLoc}</p>}
            </li>

            <li className="job-page-list-item flex justify-between">
              <p className="text-sm">Contact Person</p>
              <div>
                <p>{job.contactPerson}</p>
                <ButtonMailto mailto={job.email} label="Send an Email" />
              </div>
            </li>

            <li className="job-page-list-item flex justify-between">
              <p className="text-sm">Additional Notes</p>
              <p>{job.note}</p>
            </li>

            <li className="job-page-list-item flex justify-between">
              <p className="text-sm">status</p>
              <p>{job.status}</p>
            </li>

            <li className="job-page-list-item job-description flex flex-col text-justify m-0 items-start gap-2  justify-start">
              <p className="text-sm">Job Description</p>
              <p>{job.jobDescription}</p>
            </li>
            <li>
              <DeleteButton id={job.id} />
            </li>
            <li>
              <Link to={`/Applied-Jobs-Dashboard/jobs/edit/${job.id}`}>
                Edit Page
              </Link>
            </li>
          </ul>
        </>
      )}
    </div>
  );
}
