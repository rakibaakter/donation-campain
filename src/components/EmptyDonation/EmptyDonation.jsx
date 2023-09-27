import donate from "../../assets/Resources/donate.jpg";
const EmptyDonation = () => {
  return (
    <div className="my-16 text-center">
      <h2 className="text-2xl font-semibold my-4">You did not donate yet.</h2>
      <h1 className="text-3xl font-bold">Please donate</h1>
      <div className="h-56 w-56 rounded-full mx-auto">
        <img className="w-full rounded-full" src={donate} alt="" />
      </div>
      <h2 className="text-2xl font-semibold my-4">Your Mighty Our Pleasures</h2>
    </div>
  );
};

export default EmptyDonation;
