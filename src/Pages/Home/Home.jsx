import { useLoaderData } from "react-router-dom";
import DonationContainer from "../../components/Donations/DonationContainer/DonationCOntainer";

const Home = () => {
  const { donations } = useLoaderData();
  console.log(donations);
  return (
    <div>
      {/* <h2>Hello from home</h2> */}
      <DonationContainer donations={donations} />
    </div>
  );
};

export default Home;
