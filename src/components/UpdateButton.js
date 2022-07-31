import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";

export default function UpdateButton({ id, previousData }) {
  const [isUpdated, setIsUpdated] = useState(false);
  const [datum, setDatum] = useState(previousData);

  const updateTitleUrl = `https://my-job-board-data.herokuapp.com/jobs/${id}/`;

  const navigate = useNavigate();

  const { isPending, error, patchRequest } = useFetch(updateTitleUrl, "PATCH");

  function patchRequestSubmitHandler(e) {
    e.preventDefault();
    setIsUpdated(true);

    patchRequest({ title: datum });

    setTimeout(() => {
      navigate(0);
      setIsUpdated(false);
    }, 3000);
  }

  return (
    <form
      onSubmit={patchRequestSubmitHandler}
      className="flex text-center flex-col py-4 px-10 gap-2"
    >
      <input
        className="text-black border border-black border-dotted rounded-xl p-2 "
        value={datum}
        placeholder="update input "
        onChange={(e) => setDatum(e.target.value)}
      />
      <button className="text-xl font-bold text-green-500">Update data</button>
      {isUpdated && (
        <div className="text-sm text-purple-500 ">
          Title is updated. <br /> the page will refresh now.
        </div>
      )}
    </form>
  );
}
