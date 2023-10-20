import { useLoaderData, useParams } from "react-router-dom";
import ProductsCard from "./ProductsCard";
import { useEffect } from "react";

const Products = () => {
  const productsAll = useLoaderData();
  const { name } = useParams();
  const filtered = productsAll.filter((product) => product.brandName == name);
  return (
    <div className="my-10">
      <h2 className="text-center text-3xl font-bold my-5 ">
        Choose Your Future Companion: {productsAll.length}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-2">
        {filtered.map((products) => (
          <ProductsCard
            key={products._id}
            products={products}
            productsAll={productsAll}
          ></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
