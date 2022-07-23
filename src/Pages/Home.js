import React from "react";
import CardList from "../components/CardList";
import { useFetch } from "../Hooks/useFetch";

export default function Home() {
  const { data, isPending, error } = useFetch(
    "https://my-job-board-data.herokuapp.com/jobs"
  );
  // console.log(data);
  return (
    <div className="cards-grid overflow-auto desktop:p-4">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <CardList jobs={data} />}
    </div>
  );
}
