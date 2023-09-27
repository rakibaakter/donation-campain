import { useState } from "react";
import Donate from "../Donations/Donate/Donate";

const StoreDonation = ({ data }) => {
  const [dataLength, setDataLength] = useState(4);
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-16">
        {data.slice(0, dataLength).map((item) => (
          <Donate key={item.id} item={item} />
        ))}
      </div>
      {data.length > dataLength && (
        <div className={`flex justify-center`}>
          <button
            onClick={() => {
              setDataLength(data.length);
            }}
            className="bg-[#FF444A] py-3 px-5 text-white font-bold"
          >
            Show All
          </button>
        </div>
      )}
    </div>
  );
};

export default StoreDonation;
