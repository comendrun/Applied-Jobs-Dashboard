import React from "react";
import CardList from "../components/CardList/CardList";
import { useFetch } from "../../../Hooks/useFetch";
import { BounceLoader } from "react-spinners";

export default function Home() {
  const { data, isPending, error } = useFetch(
    "https://my-job-board-data.herokuapp.com/jobs"
  );
  // console.log(data);
  return (
    <div className="cards-grid overflow-auto desktop:p-4 ">
      {error && <p className="error">{error}</p>}
      {isPending && (
        <div>
          <div className="w-96 h-full "></div>
          <div className="pending-message-home-page fixed top-[50%] left-[50%] desktop:left-[65%] -translate-x-[50%] -translate-y-[50%] p-[50px] z-[1000]">
            <BounceLoader color="white" size={72} loading />
          </div>
        </div>
      )}
      {data && <CardList jobs={data} />}
    </div>
  );
}
