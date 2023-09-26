import banner from "../../assets/Resources/banner.png";

const Banner = () => {
  const bannerStyle = {
    backgroundImage: `url(${banner})`,
    height: "70vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="relative mb-10 md:mb-32">
      <div style={bannerStyle} className="opacity-20"></div>
      <div className="absolute left-0 right-0 top-[20%] h-full">
        <div className="space-y-10 text-center">
          <h2 className="text-4xl font-bold">
            I Grow By Helping People In Need
          </h2>
          <div>
            <input
              className="w-1/4 p-3 border "
              type="text"
              placeholder="search here..."
            />
            <button className="bg-[#FF444A] py-3 px-5 text-white font-bold">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
    // <div className="relative">
    //   <div className="h-[70vh] py-10">
    //     <img className="opacity-30" src={banner} alt="" />
    //   </div>
    //   <div className=" absolute bottom-52 left-auto right-auto">
    //     <div className="space-y-10 text-center">
    //       <h2 className="text-4xl font-bold">
    //         I Grow By Helping People In Need
    //       </h2>
    //       <input type="text" placeholder="search here..." />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Banner;
