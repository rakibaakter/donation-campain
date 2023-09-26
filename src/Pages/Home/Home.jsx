import { useLoaderData } from "react-router-dom";
import DonationContainer from "../../components/Donations/DonationContainer/DonationCOntainer";
import Banner from "../../components/Banner/Banner";

const Home = () => {
  const { donations } = useLoaderData();
  // console.log(donations);

  return (
    <div>
      {/* <h2>Hello from home</h2> */}
      <Banner />
      <DonationContainer donations={donations} />
    </div>
  );
};

export default Home;
