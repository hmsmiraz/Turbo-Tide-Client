import {
  BsFillStarFill,
  BsFillTrashFill,
  BsCheckCircleFill,
} from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CartCard = ({ products, productAll, setProductAll}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    _id,
    email,
    productName,
    brandName,
    ProductType,
    Price,
    rating,
    picture,
  } = products;

  const handleBuy = () => {
    Swal.fire({
      title: "Success!",
      text: "Buy Successfully, Thank you",
      icon: "success",
      confirmButtonText: "Cool",
    });
    navigate(location?.state ? location.state : "/");
  };
  const handleDelete = (_id) => {
    // console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://turbo-tide-server-8fb5dss19-hmsmiraz.vercel.app/cart/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              const remaining = productAll.filter((item) => item._id !== _id);
              setProductAll(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={picture} alt="Album" className="h-48 w-56 rounded-lg" />
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
          <div className="card-actions">
            <button
              onClick={handleBuy}
              className="btn btn-info text-gray-700 text-sm"
            >
              Buy <BsCheckCircleFill />
            </button>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-info text-gray-700 text-sm"
            >
              Delete <BsFillTrashFill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
