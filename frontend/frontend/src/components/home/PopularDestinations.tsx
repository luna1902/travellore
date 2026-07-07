import Buttons from "../common/Button";

const PopularDestination = () => {
  return (
    <div className="">
      <div className="flex px-10 transition-all duration-300  justify-between">
        <div>
          <h2 className=" font-semibold text-xl  ">Popular Destinations</h2>
          <p>Explore some of the most loved places around the world</p>
        </div>

        <Buttons content="View All"/>
      </div>
    </div>
  );
};

export default PopularDestination;
