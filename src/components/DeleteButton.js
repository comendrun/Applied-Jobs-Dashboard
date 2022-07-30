import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DeleteButton({ id, btnClass, isInMenu }) {
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
      if (isInMenu) {
        setIsDeleted(false);
        navigate(0);
        return;
      }
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
      {isDeleted ? "Your entry deleted from database" : "Delete anyway"}
    </button>
  );
}
