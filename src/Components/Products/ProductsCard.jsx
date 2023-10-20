import { BsFillStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const ProductsCard = ({ products }) => {
  const {
    _id,
    productName,
    brandName,
    ProductType,
    Price,
    description,
    rating,
    picture,
  } = products;

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={picture} alt="products" className="rounded-xl h-60" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{productName}</h2>

          <div className="flex gap-4 text-lg font-semibold">
            <div>
              <p>Brand: {brandName}</p>
            </div>
            <div>
              <p>Type: {ProductType}</p>
            </div>
          </div>
          <div className="flex gap-4 text-lg font-semibold">
            <div className="flex text-center items-center justify-center gap-1 text-emerald-700">
              <div>
              <p>{rating}</p>
              </div>
              <div>
              <BsFillStarFill />
              </div>
            </div>
            <div>
              <p>Price: ${Price}</p>
            </div>
          </div>
          <div className="card-actions flex gap-5">
            <Link to={`/products/${_id}`}>
            <button className="btn btn-neutral">Details</button>
            </Link>
            <Link to={`/product/${_id}`}>
            <button className="btn btn-accent">Update</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
