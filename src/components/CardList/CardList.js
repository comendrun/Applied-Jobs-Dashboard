import React from "react";
import threeDots from "../images/icon-ellipsis.svg";
import "./CardList.css";

import { randomStyle } from "../styles";
import { Link } from "react-router-dom";
import ThreeDotMenu from "./ThreeDotMenu";


export default function CardList({ jobs }) {
  if (jobs.length === 0) {
    return (
      <div className="error">
        Unfortunately, there's no job application to show.
      </div>
    );
  }

  return (
    <>
      {jobs.map((job) => {
        const random = randomStyle();
        const date = job.date;
        const shownDate = typeof date === "string" && date.split("T");

        return (
          <div key={job.id} className="card" style={random.card}>
            <div className="card-header flex px-4" style={random.cardHeader}>
              <div className="category-placeholder flex flex-row gap-4 items-center w-full">
                <Link to={`/applied-jobs-dashboard/jobs/${job.id}`}>
                  <h2 className="text-lg capitalize"> {job.title}</h2>
                </Link>

                {/* menu ==> */}
                <ThreeDotMenu
                  previousData={job.title}
                  selectedItemId={job.id}
                />
                {/* <== menu */}
              </div>
            </div>
            <div className="body">
              <div className="job-info overflow-auto flex flex-col  text-sm font-light desktop:pr-2 ">
                <div className="flex flex-col gap-3">
                  <ul className="flex flex-col gap-2">
                    <li className="job-details flex items-center justify-between pr-1">
                      <p className="text-sm">Date (Applied):</p>
                      <p className="text-base"> {job.date && shownDate[0]} </p>
                    </li>

                    <li className="job-details flex items-center justify-between pr-1">
                      <p className="text-sm">Company:</p>
                      <p className="text-base"> {job.company} </p>
                    </li>

                    <li className="job-details flex items-center justify-between pr-1">
                      <p className="text-sm">Location</p>
                      <p className="text-base"> {job.jobLoc} </p>
                    </li>

                    <li className="job-details flex items-center justify-between pr-1">
                      <p className="text-sm">Working Condition</p>
                      <p className="text-base"> {job.workCondition} </p>
                    </li>

                    <li className="job-details flex items-center justify-between pr-1">
                      <p className="text-sm">Status:</p>
                      <p className="text-base">{job.status} </p>
                    </li>
                  </ul>
                  <div>
                    <p className="text-sm opacity-80 mb-2">Job Description:</p>
                    <p className="leading-6 text-base">
                      {job.jobDescription.substring(0, 100)}
                      {job.jobDescription.length > 100 && "..."}
                    </p>
                    <Link
                      className="text-base font-bold text-blue-500 hover:text-white duration-200 ease-in flex justify-end pr-2"
                      to={`/applied-jobs-dashboard/jobs/${job.id}`}
                    >
                      More Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
