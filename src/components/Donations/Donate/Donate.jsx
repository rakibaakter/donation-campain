import { Link } from "react-router-dom";

const Donate = ({ item }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_button_bg_color,
    price,
  } = item;
  const card = {
    backgroundColor: card_bg_color,
    color: text_button_bg_color,
  };

  return (
    <div style={card}>
      <div className="flex flex-col md:flex-row">
        <img src={picture} alt="" />
        <div className="p-6">
          <span
            className="font-medium p-2"
            style={{ backgroundColor: category_bg_color }}
          >
            {category}
          </span>
          <h2 className="text-2xl font-semibold mt-4 text-black">{title}</h2>
          <p className="font-semibold mb-3"> $ {price}</p>
          <Link to={`/donations/${id}`}>
            <button
              style={{ backgroundColor: text_button_bg_color }}
              className="py-2 px-3 text-white rounded-md font-medium"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
      {/* <a
        href="#"
        className="flex flex-col items-center rounded-lg md:flex-row md:max-w-xl"
      >
        <img
          className="object-fill w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={picture}
          alt=""
        />
        <div className="flex flex-col justify-between px-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </a> */}
    </div>
  );
};

export default Donate;
