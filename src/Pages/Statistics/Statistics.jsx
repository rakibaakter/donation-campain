import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { useLoaderData } from "react-router-dom";
import { getDataFromLocalStore } from "../../LocalStorage/localStore";
import ProgressBar from "@ramonak/react-progress-bar";
import "./Statistics.css";

const Statistics = () => {
  // Get donations data using useLoaderData
  const { donations } = useLoaderData();

  // Get additional donation data from local store
  const getDonateData = getDataFromLocalStore();

  // Calculate the number of given and remaining donations
  const givenDonateLength = getDonateData.length;
  const remainingDonations = donations.length - givenDonateLength;

  // Calculate the percentage values with two decimal places
  const totalDonations = donations.length;
  const givenDonationsPercentage = (
    (givenDonateLength / totalDonations) *
    100
  ).toFixed(2);
  const remainingDonationsPercentage = (
    (remainingDonations / totalDonations) *
    100
  ).toFixed(2);

  // Create data for the pie chart
  const data = [
    { name: "Your Donations", value: parseFloat(givenDonationsPercentage) },
    {
      name: "Remaining Donations",
      value: parseFloat(remainingDonationsPercentage),
    },
  ];

  // Define colors for chart segments
  const colors = ["#00C49F", "#FF444A"];

  return (
    <div className="h-96 w-96 mx-auto my-10">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value}%`} />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex flex-col md:flex-row justify-around">
        <div>
          <span>Your Donation</span>
          <ProgressBar
            completedClassName="barCompleted"
            completed={parseFloat(givenDonationsPercentage)}
          />
        </div>
        <div>
          <span>Remaining Donation </span>
          <ProgressBar
            completedClassName="barRemainig"
            completed={parseFloat(remainingDonationsPercentage)}
          />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
