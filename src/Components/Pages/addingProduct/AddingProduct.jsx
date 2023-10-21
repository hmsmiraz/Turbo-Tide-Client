import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddingProduct = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;

    const productName = form.productName.value;
    const brandName = form.brandName.value;
    const ProductType = form.ProductType.value;
    const Price = form.Price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const picture = form.picture.value;

    const newProduct = {
      productName,
      brandName,
      ProductType,
      Price,
      description,
      rating,
      picture,
    };

    console.log(newProduct);

    fetch("https://turbo-tide-server-8fb5dss19-hmsmiraz.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Product Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
      navigate(location?.state ? location.state : "/");
  };
  return (
    <div>
      <h2 className="text-center text-2xl font-bold text-teal-600">
        Add Products Here:
      </h2>
      <div className="hero bg-base-200 ">
        <div className="hero-content">
          <div className="card shadow-xl bg-base-100">
            <form onSubmit={handleAddProduct} className="card-body">
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 1st */}
                <div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Product Name</span>
                    </label>
                    <input
                      type="text"
                      name="productName"
                      placeholder="Product Name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Brand Name</span>
                    </label>
                    <input
                      type="text"
                      name="brandName"
                      id="brandName"
                      placeholder="Brand Name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Product Type</span>
                    </label>
                    <input
                      type="text"
                      name="ProductType"
                      placeholder="Product Type"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Product Price</span>
                    </label>
                    <input
                      type="text"
                      name="Price"
                      placeholder="Product Price"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
                {/* 2nd col */}
                <div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Description</span>
                    </label>
                    <input
                      type="text"
                      name="description"
                      placeholder="Description"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Rating</span>
                    </label>
                    <input
                      type="text"
                      name="rating"
                      placeholder="Rating"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Picture</span>
                    </label>
                    <input
                      type="text"
                      name="picture"
                      placeholder="Product Picture"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="mt-9">
                    <input
                      type="submit"
                      value="Add Product"
                      className="btn btn-neutral w-full"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddingProduct;
