import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";

export default function DeleteButton({ id, btnClass }) {
  const [isDeleted, setIsDeleted] = useState(false);

  const url = "https://my-job-board-data.herokuapp.com/jobs/" + id;

  const navigate = useNavigate();

  function handleDeleteButton() {
    setIsDeleted(true);

    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json()) // or res.json()
      .then((res) => console.log(res));

    setTimeout(() => {
      navigate("/applied-jobs-dashboard/");
      setIsDeleted(false);
    }, 3000);
  }

  return (
    <button
      className={
        " text-red-600 font-bold hover:bg-red-600 hover:text-white duration-200 ease-in  " +
        btnClass
      }
      onClick={handleDeleteButton}
    >
      {isDeleted ? "Your entry deleted from database" : "Delete Entry"}
    </button>
  );
}
