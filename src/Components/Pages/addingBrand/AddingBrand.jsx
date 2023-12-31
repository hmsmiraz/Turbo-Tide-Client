
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const AddingBrand = () => {
  const location = useLocation();
  const navigate = useNavigate();
    const handleAddBrand = (event) =>{
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const picture = form.picture.value;

        const newBrand = { name, picture }

        console.log(newBrand);

        fetch('https://turbo-tide-server-oijo0zt6m-hmsmiraz.vercel.app/brand', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBrand)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Brand Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                }
        })
        navigate(location?.state ? location.state : "/");
    }
  return (
    <div>
      <h2 className="text-center text-2xl font-bold text-teal-600">
        Add Brand Here:
      </h2>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-xl bg-base-100">
            <form onSubmit={handleAddBrand} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Brand Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Brand Name"
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
                  placeholder="Brand Picture"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className='w-full flex items-center justify-center'>
              <input type="submit" value="Add Product" className="btn btn-neutral" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddingBrand;
