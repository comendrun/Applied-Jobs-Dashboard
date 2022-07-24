import React from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";

export default function DeleteButton({ id }) {
  const url = "https://my-job-board-data.herokuapp.com/jobs/" + id;

  const navigate = useNavigate();

  function handleDeleteButton() {
    console.log(url);
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json()) // or res.json()
      .then((res) => console.log(res));

    setTimeout(() => {
      navigate("/Applied-jobs-Dashboard");
    }, 3000);
  }

  return (
    <button
      className="text-base text-red-600 font-bold flex justify-end w-full"
      onClick={handleDeleteButton}
    >
      Delete Entry
    </button>
  );
}
