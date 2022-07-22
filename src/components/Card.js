import React from "react";
import threeDots from "../images/icon-ellipsis.svg";
import "./Card.css";

export default function Card({ jobTitle, cardStyle, headerStyle }) {
  return (
    <div className="card" style={cardStyle}>
      <div className="card-header flex px-4 " style={headerStyle}>
        <div className="category-placeholder flex flex-row gap-2 items-center w-full">
          <h2 className="text-lg">ّFrontend Developer</h2>
          <img
            alt=""
            src={threeDots}
            className="more cursor-pointer opacity-100 hover:opacity-70 duration-150 ease-in"
          />
        </div>
      </div>
      <div className="body">
        <div className="job-info overflow-auto flex flex-col  text-sm font-light ">
          <div className="flex flex-col gap-3">
            <ul className="flex flex-col gap-2">
              <li className="job-details flex items-center justify-between pr-1">
                <p className="text-sm">Date (Applied):</p>
                <p className="text-base"> 07-07-2022 </p>
              </li>

              <li className="job-details flex items-center justify-between pr-1">
                <p className="text-sm">Company:</p>
                <p className="text-base"> Audi GmbH </p>
              </li>

              <li className="job-details flex items-center justify-between pr-1">
                <p className="text-sm">Source:</p>
                <p className="text-base"> Indeed.com </p>
              </li>

              <li className="job-details flex items-center justify-between pr-1">
                <p className="text-sm">Location</p>
                <p className="text-base"> Munchen </p>
              </li>

              <li className="job-details flex items-center justify-between pr-1">
                <p className="text-sm">Working Condition</p>
                <p className="text-base"> Remote </p>
              </li>

              <li className="job-details flex items-center justify-between pr-1">
                <p className="text-sm">Email:</p>
                <p className="text-base"> indeed@indeed.com</p>
              </li>

              <li className="job-details flex items-center justify-between pr-1">
                <p className="text-sm">Contact Person</p>
                <p className="text-base"> Emmanuel </p>
              </li>

              <li className="job-details flex items-center justify-between pr-1">
                <p className="text-sm">Other Notes?</p>
                <p className="text-base"> No thanks </p>
              </li>

              <li className="job-details flex items-center justify-between pr-1">
                <p className="text-sm">Status:</p>
                <p className="text-base">Rejected </p>
              </li>
            </ul>
            <div>
              <p className="text-sm opacity-80 mb-2">Job Description:</p>
              <p className="leading-6 text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
