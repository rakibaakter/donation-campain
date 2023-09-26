import { getDataFromLocalStore } from "../../LocalStorage/localStore";
import Donate from "../../components/Donations/Donate/Donate";

const Donation = () => {
  const data = getDataFromLocalStore();
  console.log(data);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-16">
      {data.map((item) => (
        <Donate key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Donation;
