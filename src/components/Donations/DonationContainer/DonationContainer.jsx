import DonationCard from "../DonationCard/DonationCard";
import { useEffect, useState } from "react";

const DonationContainer = ({ donations, searchedCategory }) => {
  const [data, setData] = useState(donations);

  console.log(searchedCategory);

  useEffect(() => {
    if (searchedCategory) {
      const filteredData = donations.filter(
        (item) => item.category.toUpperCase() === searchedCategory.toUpperCase()
      );
      setData(filteredData);
    } else {
      setData(donations);
    }
  }, [searchedCategory, donations]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data?.map((donation) => (
        <DonationCard key={donation.id} donation={donation} />
      ))}
    </div>
  );
};

export default DonationContainer;
