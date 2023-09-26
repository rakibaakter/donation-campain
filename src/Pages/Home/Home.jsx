import { useLoaderData } from "react-router-dom";
import DonationContainer from "../../components/Donations/DonationContainer/DonationCOntainer";
import Banner from "../../components/Banner/Banner";
import { useState } from "react";

const Home = () => {
  const [searchedCategory, setSearchedCategory] = useState("");
  const { donations } = useLoaderData();
  // console.log(donations);

  const handleCategories = (e) => {
    e.preventDefault();
    setSearchedCategory(e.target.categoryName.value);
  };

  return (
    <div>
      {/* <h2>Hello from home</h2> */}
      <Banner handleCategories={handleCategories} />
      <DonationContainer
        donations={donations}
        searchedCategory={searchedCategory}
      />
    </div>
  );
};

export default Home;
