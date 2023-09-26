import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {
  getDataFromLocalStore,
  saveDataToLocalStore,
} from "../../LocalStorage/localStore";
import swal from "sweetalert";

const DonationDetails = () => {
  // for set item
  const [item, setItem] = useState({});
  // selected id
  const { id } = useParams();
  // fetch all data
  const { donations } = useLoaderData();

  useEffect(() => {
    const selectedItem = donations?.find((donation) => donation?.id == id);
    setItem(selectedItem);
  }, [donations, id]);

  const { picture, title, description, price, text_button_bg_color } = item;

  // handle doantions btn
  const handleDonation = (item) => {
    const prevDonate = getDataFromLocalStore();
    const isExist = prevDonate.find((prev) => prev.id === item.id);
    if (!isExist) {
      saveDataToLocalStore(item);
      swal(
        "Thank you for your Donation!",
        "Your mighty our pleasures!",
        "success"
      );
    } else {
      swal(
        "Oops! you already donate in this field",
        "Please Donate in another field",
        "error"
      );
    }
  };

  return (
    <div className="w-4/5 mx-auto mt-12">
      <img className="w-full md:h-[500px] " src={picture} alt="" />
      <div className="bg-black opacity-80 w-full p-2 md:p-6 -mt-[56px] md:-mt-[86px]">
        <button
          onClick={() => handleDonation(item)}
          style={{ backgroundColor: text_button_bg_color }}
          className="text-white font-bold py-2 px-6"
        >
          $ {price}
        </button>
      </div>
      <div className="py-12">
        <h2 className="font-bold text-4xl">{title}</h2>
        <p className="mt-4">{description}</p>
      </div>
    </div>
  );
};

export default DonationDetails;
