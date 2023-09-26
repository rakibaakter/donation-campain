import PropTypes from "prop-types";
import DonationCard from "../DonationCard/DonationCard";

const DonationContainer = ({ donations }) => {
  //   console.log(donations);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {donations?.map((donation) => (
        <DonationCard key={donation.id} donation={donation} />
      ))}
    </div>
  );
};

DonationCard.propTypes = {
  donations: PropTypes.array,
};
export default DonationContainer;
