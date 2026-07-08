import { FaAddressBook, FaBalanceScale, FaCompass, FaHandHolding } from "react-icons/fa";
import FeaturesField from "../common/FeaturesField";

const Features = () => {
  return (
    <div>
      <div className=" justify-items-start px-10">
        <h2 className=" font-semibold text-xl pt-5">
          Why{" "}
          <span className=" text-violet-500 text-xl font-semibold">
            Travelore?
          </span>
        </h2>
        <p>Everything you need for the perfect journey</p>
      </div>

      <div className=" grid grid-cols-1 gap-2 md:grid-cols-4 lg:grid-cols-4 mx-10 rounded-full ">
        <FeaturesField
          icon={<FaCompass />}
          title="AI Recommendations"
          children="Personified suggestions just for you"
  
        />

        <FeaturesField
          icon={<FaBalanceScale />}
          title="Smart Trip Planning"
          children="Plan,organise and manage your trips yearly"
        />

        <FeaturesField
          icon={<FaAddressBook />}
          title="Connect & Share"
          children="Connect with trainers across the globe"
        />

        <FeaturesField
         icon={<FaHandHolding/>}
         title="Best Price Guarantee"
         children="Get the best deals on hotels and experiences"
        />
      </div>
    </div>
  );
};

export default Features;
