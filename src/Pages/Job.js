import { Link, useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";
import { useEffect, useState } from "react";

import { BounceLoader } from "react-spinners";

import { randomStyle } from "../styles";

import "./Job.css";
import ButtonMailto from "../components/ButtonMailto";
import DeleteButton from "../components/DeleteButton";
import Modal from "../components/Modal";

export default function Job() {
  const [showModal, setShowModal] = useState(false);

  let navigate = useNavigate();
  const { id } = useParams();
  const url = "https://my-job-board-data.herokuapp.com/jobs/" + id;

  const { data: job, error, isPending } = useFetch(url);

  const jobContainerStyles = {
    background: `linear-gradient(to bottom, ${
      randomStyle().card.backgroundColor
    } 12%, #0f1424 12%)`,
  };

  return (
    <div
      className="job-container desktop:min-w-[25rem] max-w-[1000px] py-5 w-[100%] desktop:h-full  flex flex-col text-white rounded-2xl"
      style={job && jobContainerStyles}
    >
      {isPending && (
        <div className="pending-message-job-page fixed top-[50%] left-[50%] desktop:left-[65%] -translate-x-[50%] -translate-y-[50%] p-[50px] z-[1000]">
          <BounceLoader color="white" size={72} loading />
        </div>
      )}
      {error && (
        <div className="error-message-job-page text-white">{error}</div>
      )}

      {job && (
        <>
          <ul className="flex flex-col gap-4 overflow-auto px-2">
            <li>
              <h2 className="text-xl font-bold capitalize mb-2 p-2 rounded text-center">
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
            <div className="flex text-base font-bold gap-5 items-center ">
              <button
                className="border px-4 py-1 rounded-2xl hover:bg-red-500  duration-100 ease-in"
                onClick={() => setShowModal(true)}
              >
                Delete this entry
              </button>

              <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <div className="text-center flex flex-col gap-2 ">
                  <p className="text-xl font-bold  p-4">
                    {" "}
                    Are you sure you want to delete this entry?
                  </p>
                  <DeleteButton
                    id={job.id}
                    btnClass="border border-red-400 px-4 py-1 rounded-2xl"
                  />
                </div>
              </Modal>

              <Link
                className="border px-4 py-1 rounded-2xl hover:bg-white hover:text-[#0f1424] duration-100 ease-in"
                to={`/applied-jobs-dashboard/jobs/edit/${job.id}`}
              >
                Edit Page
              </Link>
            </div>
          </ul>
        </>
      )}
    </div>
  );
}
