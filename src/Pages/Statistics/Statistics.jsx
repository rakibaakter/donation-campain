// import PieChart from "react-simple-pie-chart";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useLoaderData } from "react-router-dom";
import { getDataFromLocalStore } from "../../LocalStorage/localStore";

const Statistics = () => {
  const { donations } = useLoaderData();
  const getDonateData = getDataFromLocalStore();

  const totalDonateLength = donations.length;
  const givenDonateLength = getDonateData.length;

  console.log(totalDonateLength, givenDonateLength);

  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    datasets: [
      {
        label: "% of Donates",
        data: [givenDonateLength, totalDonateLength],
        backgroundColor: ["#00C49F", "#FF444A"],
        borderColor: "white",
        borderWidth: 2,
      },
    ],
    labels: ["Your Donations", "Remaining Donations"],
  };

  return (
    <div className="h-96 w-96 mx-auto my-16">
      <Pie data={data} />
    </div>
  );
};

export default Statistics;
