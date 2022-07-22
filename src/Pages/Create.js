import React, { useState } from "react";

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

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(
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
      jobDescription
    );
  };

  return (
    <div>
      <form
        onSubmit={formSubmitHandler}
        className="text-white flex flex-col gap-2"
      >
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

        <label>
          <span className="mr-2">Date</span>
          <input
            required
            placeholder="Enter date of application"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
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

        <label className="flex gap-5">
          <span className="mr-2">Is Remote option possible?</span>
          <div
            className="flex  gap-4"
            onChange={(e) => setWorkCondition(e.target.value)}
          >
            <label>
              Remote{" "}
              <input
                name="workCondition"
                checked={workCondition === "Remote"}
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
                checked={workCondition === "Hybrid"}
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
                checked={workCondition === "on-site"}
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
                checked={workCondition === "not-mentioned"}
                required
                placeholder="Not-mentioned"
                type="radio"
                value="not-mentioned"
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

        <label className="flex gap-6">
          <span className="mr-2">status:</span>

          <div
            className="flex  gap-4"
            onChange={(e) => setStatus(e.target.value)}
          >
            <label>
              Applied{" "}
              <input
                name="status"
                checked={status === "Applied"}
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
                checked={status === "Saved"}
                placeholder="Saved"
                type="radio"
                value="Saved"
              />
            </label>
            <label>
              Rejected{" "}
              <input
                name="status"
                checked={status === "Rejected"}
                placeholder="Rejected"
                type="radio"
                value="Rejected"
              />
            </label>
          </div>
        </label>

        <label>
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

        <button className="border-2 py-2 px-5 w-max mx-auto hover:bg-white hover:text-black duration-150 ease-in rounded-[15px]">
          add to database
        </button>
      </form>
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
