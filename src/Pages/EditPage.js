import React, { useState, useEffect } from "react";

import "./Create.css";

import { useNavigate, useParams } from "react-router-dom";

import { useFetch } from "../Hooks/useFetch";
import ReactDatePicker from "react-datepicker";

export default function Create() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [date, setDate] = useState("");
  const [jobSource, setJobSource] = useState("");
  const [adLink, setAdLink] = useState("");
  const [email, setEmail] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [jobLoc, setJobLoc] = useState("");
  const [workCondition, setWorkCondition] = useState("not-mentioned");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  const [isFinished, setIsFinished] = useState(false);

  const { id } = useParams();

  const { data: currentEntry, isPending } = useFetch(
    `https://my-job-board-data.herokuapp.com/jobs/${id}`
  );

  //   !isPending && currentEntry &&

  useEffect(() => {
    if (!isPending && currentEntry) {
      setTitle(currentEntry.title);
      setCompany(currentEntry.company);
      //   setDate(currentEntry.date);
      setJobSource(currentEntry.jobSource);
      setAdLink(currentEntry.adLink);
      setEmail(currentEntry.email);
      setContactPerson(currentEntry.contactPerson);
      setJobLoc(currentEntry.jobLoc);
      setWorkCondition(currentEntry.workCondition);
      setNote(currentEntry.note);
      setStatus(currentEntry.status);
      setJobDescription(currentEntry.jobDescription);
    }
  }, [isPending, currentEntry]);

  const { updateData, data, error } = useFetch(
    `https://my-job-board-data.herokuapp.com/jobs/${id}`,
    "PUT"
  );

  let navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setIsFinished(true);
      setTimeout(() => {
        navigate("/Applied-Jobs-Dashboard").then(setIsFinished(false));
      }, 3000);
    }
  }, [data, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateData({
      title,
      company,
      date,
      jobSource,
      adLink,
      email,
      contactPerson,
      jobLoc,
      workCondition,
      note,
      status,
      jobDescription,
    });
  };

  return (
    <div className="create-page ">
      <form onSubmit={handleSubmit} className="create-form flex flex-col ">
        <label>
          <span className="mr-2">Job Title</span>
          <input
            required
            placeholder="Enter Job Title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label>
          <span className="mr-2">Company</span>
          <input
            required
            placeholder="Enter company name"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </label>

        <label className=" flex justify-between ">
          <span className="mr-2">Date</span>
          {/* <input
            required
            placeholder="Enter date of application"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          /> */}
          <ReactDatePicker
            className="date-input flex desktop:block desktop:ml-auto"
            selected={date}
            onChange={(date) => setDate(date)}
            dateFormat="dd/MM/yyy"
            placeholderText="dd/mm/yyyy"
          />
        </label>

        <label>
          <span className="mr-2">Job Source</span>
          <input
            required
            placeholder="job platform"
            type="text"
            value={jobSource}
            onChange={(e) => setJobSource(e.target.value)}
          />
        </label>

        <label>
          <span className="mr-2">Job Posting Link</span>
          <input
            required
            placeholder="Job ad url"
            type="text"
            value={adLink}
            onChange={(e) => setAdLink(e.target.value)}
          />
        </label>

        <label>
          <span className="mr-2">Email</span>
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          <span className="mr-2">Contact Person</span>
          <input
            placeholder="Contact Person"
            type="text"
            value={contactPerson}
            onChange={(e) => setContactPerson(e.target.value)}
          />
        </label>

        <label>
          <span className="mr-2">Where is the company based?</span>
          <input
            required
            placeholder="job location"
            type="text"
            value={jobLoc}
            onChange={(e) => setJobLoc(e.target.value)}
          />
        </label>

        <label className="radio-inputs-label flex gap-5 flex-col desktop:flex-row items-start">
          <span className="mr-2">Is Remote option possible?</span>
          <div
            className="flex gap-1 w-full items-center flex-wrap justify-between "
            onChange={(e) => setWorkCondition(e.target.value)}
          >
            <label className="">
              Remote{" "}
              <input
                name="workCondition"
                defaultChecked={workCondition === "Remote"}
                required
                placeholder="Remote"
                type="radio"
                value="Remote"
              />
            </label>

            <label>
              {" "}
              Hybrid{" "}
              <input
                name="workCondition"
                defaultChecked={workCondition === "Hybrid"}
                required
                placeholder="Hybrid"
                type="radio"
                value="Hybrid"
              />
            </label>
            <label>
              on-site{" "}
              <input
                name="workCondition"
                defaultChecked={workCondition === "on-site"}
                required
                placeholder="on-site"
                type="radio"
                value="on-site"
              />
            </label>
            <label>
              not-mentioned
              <input
                name="workCondition"
                defaultChecked={workCondition === "not-mentioned"}
                required
                placeholder="Not-mentioned"
                type="radio"
                value="not-mentioned"
              />
            </label>
          </div>
        </label>

        <label className="radio-inputs-label flex gap-6 flex-col desktop:flex-row items-start">
          <span className="mr-2">status:</span>

          <div
            className="flex gap-5 w-max items-center flex-wrap justify-between"
            onChange={(e) => setStatus(e.target.value)}
          >
            <label>
              Applied{" "}
              <input
                name="status"
                defaultChecked={status === "Applied"}
                placeholder="Applied"
                type="radio"
                value="Applied"
              />
            </label>
            <label>
              {" "}
              Saved{" "}
              <input
                name="status"
                defaultChecked={status === "Saved"}
                placeholder="Saved"
                type="radio"
                value="Saved"
              />
            </label>
            <label>
              Rejected{" "}
              <input
                name="status"
                defaultChecked={status === "Rejected"}
                placeholder="Rejected"
                type="radio"
                value="Rejected"
              />
            </label>
          </div>
        </label>

        <label>
          <span className="mr-2">Note:</span>
          <input
            placeholder="Additional Notes"
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </label>

        <label className="text-area-label flex flex-col justify-start items-start">
          <span className="mr-2">Job Description</span>
          <textarea
            placeholder="Ad summary"
            type="text"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            cols="50"
            rows="3"
          />
        </label>

        <button className="border-2 py-2 px-5 w-max mx-auto bg-white hover:text-white hover:bg-transparent duration-150 ease-in rounded">
          Update this Entry
        </button>
      </form>
      <div className={`finished-message ${!isFinished && "hidden"}`}>
        <p className="green">
          Your Recipe was added to your database. you can access it on your
          homepage.
        </p>
        <p className="blue">We are redirecting you to your homepage now ...</p>
      </div>
    </div>
  );
}

// id
// jobTitle
// company
// date
// jobSource
// link
// loc
// remote
// email
// contactPerson
// additionalNotes
// status
// jobSummary
