import { useState } from "react";
import { getDataFromLocalStore } from "../../LocalStorage/localStore";
import Donate from "../../components/Donations/Donate/Donate";
import EmptyDonation from "../../components/EmptyDonation/EmptyDonation";
import { useEffect } from "react";
import StoreDonation from "../../components/StoredDonation/StoreDonation";

const Donation = () => {
  const [isTrue, setIsTrue] = useState(false);

  const data = getDataFromLocalStore();

  useEffect(() => {
    if (data.length > 0) {
      setIsTrue(true);
    }
  }, []);

  return (
    <div>{isTrue ? <StoreDonation data={data} /> : <EmptyDonation />}</div>
  );
};

export default Donation;
