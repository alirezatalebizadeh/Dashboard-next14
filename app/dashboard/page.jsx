import React from "react";
import Card from "../ui/dashboard/card/card";
import Rightbar from "../ui/dashboard/rightbar/Rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";
import Chart from "../ui/dashboard/chart/chart";

export default function Dashboard() {
  return (
    <div className="flex gap-5 mt-5">
      <div className="w-[65%] flex flex-col gap-5">
        <div className="flex gap-5 justify-between">
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className="w-[35%]">
        <Rightbar />
      </div>
    </div>
  );
}
