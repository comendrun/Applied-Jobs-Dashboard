import React from "react";
import { useLocation } from "react-router-dom";
import CardList from "../../../components/CardList/CardList";
import "../../../components/CardList/CardList.css";

import { useFetch } from "../../../hooks/useFetch";

import { BounceLoader } from "react-spinners";

export default function Search() {
  const queryString = useLocation();
  const queryParams = new URLSearchParams(queryString.search);
  const query = queryParams.get("q");

  const url = "https://my-job-board-data.herokuapp.com/jobs?q=" + query;

  const { data, isPending, error } = useFetch(url);
  // console.log(data);

  return (
    <div className="cards-grid overflow-auto desktop:p-4 ">
      {isPending && (
        <div>
          <div className="w-96 h-full "></div>
          <div className="pending-message-home-page fixed top-[50%] left-[50%] desktop:left-[65%] -translate-x-[50%] -translate-y-[50%] p-[50px] z-[1000]">
            <BounceLoader color="white" size={72} loading />
          </div>
        </div>
      )}
      {error && <div>{error}</div>}
      {data && <CardList jobs={data} />}
    </div>
  );
}
