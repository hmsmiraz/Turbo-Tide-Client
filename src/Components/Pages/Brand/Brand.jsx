import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";

const Brand = () => {
    const brandsAll = useLoaderData();
    return (
        <div className="my-10">
            <h2 className="text-center text-3xl font-bold my-5 ">Choose Your Future Companion</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-2">
                {
                    brandsAll.map(brands=> <BrandCard
                    key={brands._id}
                    brands={brands}
                    brandsAll={brandsAll}
                    ></BrandCard>)
                }
            </div>
        </div>
    );
};

export default Brand;