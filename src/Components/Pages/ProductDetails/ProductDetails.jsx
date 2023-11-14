import { useLoaderData } from "react-router-dom";
import { BsFillStarFill, BsFillCartPlusFill } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const productSingle = useLoaderData();
  const {
    _id,
    productName,
    brandName,
    ProductType,
    Price,
    description,
    rating,
    picture,
  } = productSingle;

  const handleCart = () => {
    const addProductCart = {
      email,
      productName,
      brandName,
      ProductType,
      Price,
      rating,
      picture,
    };
    fetch("https://turbo-tide-server-oijo0zt6m-hmsmiraz.vercel.app/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addProductCart),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Product Add to cart Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <h2 className="text-center text-3xl font-bold my-5 text-stone-500 ">
        Here is your Product Details:
      </h2>
      <div className="mx-auto md:max-w-7xl my-10">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src={picture} alt="Album" />
          </figure>
          <div className="card-body">
            <h1 className="card-title text-stone-500 font-bold">
              Model: {productName}
            </h1>
            <h3 className="text-sm font-bold">Brand:{brandName}</h3>
            <h3 className="text-sm font-bold">Type:{ProductType}</h3>
            <h3 className="text-sm font-bold">Price: ${Price}</h3>
            <div className="flex items-center  gap-1">
              <div>
                <p className="text-sm font-bold">Rating: {rating}</p>
              </div>
              <div>
                <BsFillStarFill />
              </div>
            </div>
            <p>
              <span className="text-sm font-bold">Details:</span> {description}
            </p>
            <div className="card-actions justify-center">
              <button
                onClick={handleCart}
                className="btn btn-info text-gray-700 text-sm"
              >
                Add to cart <BsFillCartPlusFill />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
