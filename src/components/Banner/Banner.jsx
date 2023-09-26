import banner from "../../assets/Resources/banner.png";

const Banner = ({ handleCategories }) => {
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
            <form onSubmit={handleCategories}>
              <input
                className="w-1/4 p-3 border "
                type="text"
                name="categoryName"
                placeholder="search here..."
              />
              <input
                className="bg-[#FF444A] py-3 px-5 text-white font-bold"
                type="submit"
                value="Search"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
