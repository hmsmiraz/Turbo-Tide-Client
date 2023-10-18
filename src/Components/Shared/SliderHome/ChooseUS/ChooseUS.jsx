import { MdImportantDevices, MdBuild, MdFavorite } from "react-icons/md";
const ChooseUS = () => {
  return (
    <div className="my-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Why Choose Us?</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 shadow-lg mt-8 mx-2">
        {/* 1st */}
        <div className="card ">
          <div className="flex items-center justify-center">
            <MdImportantDevices className="text-5xl text-lime-600"></MdImportantDevices>
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Insurance</h2>
            <p>
              Insurance provides financial protection for vehicles. It covers
              accidents, theft, and damage, ensuring legal compliance and peace
              of mind for owners, safeguarding against unexpected costs and
              liabilities.
            </p>
          </div>
        </div>

        {/* 2nd */}

        <div className="card">
          <div className="flex items-center justify-center">
            <MdBuild className="text-5xl text-cyan-600"></MdBuild>
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Unlimited Service</h2>
            <p>
              Service involves routine maintenance and repairs to ensure optimal
              performance and longevity. It includes oil changes, brake
              inspections, tire rotations, and other mechanical work for vehicle
              upkeep.
            </p>
          </div>
        </div>

        {/* 3rd */}

        <div className="card">
          <div className="flex items-center justify-center">
            <MdFavorite className="text-5xl text-pink-600"></MdFavorite>
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Support</h2>
            <p>
              Support encompasses assistance for vehicle owners, such as
              roadside aid, technical guidance, and parts replacement, ensuring
              smooth operation and addressing maintenance or breakdown issues.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUS;
