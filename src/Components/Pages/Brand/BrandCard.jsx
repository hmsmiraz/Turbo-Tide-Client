import { Link } from "react-router-dom";

const BrandCard = ({ brands }) => {
  const { _id, name, picture } = brands;
  return (
    <div className="card card-compact bg-slate-50 shadow-xl">
      <figure>
        <img src={picture} alt="brands" className="rounded-lg h-72" />
      </figure>
      <div className="card-body flex flex-col items-center justify-center text-center">
        <div>
          <h2 className="card-title ">{name}</h2>
        </div>
        <div className="card-actions">
          <Link to={`/brands/${name}`}>
            <button className="btn btn-primary">View Products</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
