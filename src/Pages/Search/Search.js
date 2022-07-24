import React from "react";
import { useLocation } from "react-router-dom";
import CardList from "../../components/CardList";
import "../../components/CardList.css";

import { useFetch } from "../../Hooks/useFetch";

export default function Search() {
  const queryString = useLocation();
  const queryParams = new URLSearchParams(queryString.search);
  const query = queryParams.get("q");

  const url = "https://my-job-board-data.herokuapp.com/jobs?q=" + query;

  const { data, isPending, error } = useFetch(url);
  // console.log(data);

  return (
    <div className="text-white card ">
      {isPending && <div>Your results are being loaded. Please wait...</div>}
      {error && <div>{error}</div>}
      {data && <CardList jobs={data} />}
    </div>
  );
}
