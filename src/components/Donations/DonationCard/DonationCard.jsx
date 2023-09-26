import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DonationCard = ({ donation }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_button_bg_color,
  } = donation;

  const card = {
    backgroundColor: card_bg_color,
    color: text_button_bg_color,
    borderRedius: "8px 8px 0px 0px",
    cursor: "pointer",
  };

  return (
    <div style={card}>
      <Link to={`/donations/${id}`}>
        <img className="w-full" src={picture} alt="" />

        <div className="p-6">
          <span
            className="font-medium p-2 rounded-md"
            style={{ backgroundColor: category_bg_color }}
          >
            {category}
          </span>
          <h2 className="text-xl font-semibold mt-4">{title}</h2>
        </div>
      </Link>
    </div>
  );
};

DonationCard.propTypes = {
  donation: PropTypes.object,
};
export default DonationCard;
