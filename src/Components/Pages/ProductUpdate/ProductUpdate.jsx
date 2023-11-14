import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ProductUpdate = () => {
    const location = useLocation();
  const navigate = useNavigate();
  const productSingle = useLoaderData();
  const {
    _id,
    productName,
    brandName,
    ProductType,
    Price,
    rating,
    picture,
  } = productSingle;

  const handleUpdateProduct = (event) => {
    event.preventDefault();

    const form = event.target;

    const productName = form.productName.value;
    const brandName = form.brandName.value;
    const ProductType = form.ProductType.value;
    const Price = form.Price.value;
    const rating = form.rating.value;
    const picture = form.picture.value;

    const updateProduct = {
      productName,
      brandName,
      ProductType,
      Price,
      rating,
      picture,
    };
    console.log(updateProduct);
     // send data to the server
     fetch(`https://turbo-tide-server-oijo0zt6m-hmsmiraz.vercel.app/products/${_id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updateProduct)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Product Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                navigate(location?.state ? location.state : "/");
            }
        })
  };
  return (
    <div>
      <h2 className="text-center text-2xl font-bold text-teal-600 mb-2">
        Update Products Here: {productSingle.productName}
      </h2>
      <div className="hero bg-base-200 ">
        <div className="hero-content">
          <div className="card shadow-xl bg-base-100">
            <form onSubmit={handleUpdateProduct} className="card-body">
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
                      defaultValue={productName}
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
                      defaultValue={brandName}
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
                      defaultValue={ProductType}
                      placeholder="Product Type"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
                {/* 2nd col */}
                <div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Product Price</span>
                    </label>
                    <input
                      type="text"
                      name="Price"
                      defaultValue={Price}
                      placeholder="Product Price"
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
                      defaultValue={rating}
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
                      defaultValue={picture}
                      placeholder="Product Picture"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center text-center mt-2">
                    <input
                      type="submit"
                      value="Update Product"
                      className="btn btn-neutral"
                    />
                  </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductUpdate;
