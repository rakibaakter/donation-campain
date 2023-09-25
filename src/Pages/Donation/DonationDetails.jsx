import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {
  // for set item
  const [item, setItem] = useState({});

  // selected id
  const { id } = useParams();
  //   console.log(id);

  const { donations } = useLoaderData();
  console.log(donations);

  useEffect(() => {
    const selectedItem = donations?.find((donation) => donation?.id == id);
    // console.log(selectedItem);
    setItem(selectedItem);
  }, [donations, id]);

  const { picture, title, description, price } = item;
  console.log(item);
  return (
    <div className="w-4/5 mx-auto mt-12">
      <img className="w-full md:h-[500px] " src={picture} alt="" />
      <div className="bg-black opacity-80 w-full p-2 md:p-6 -mt-[56px] md:-mt-[86px]">
        <button className="bg-[#FF444A] text-white font-bold py-2 px-6">
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
