import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center gap-5 mt-10">
        <div>
          <h2 className="text-center text-slate-900 font-bold text-5xl">
            404!
            <br />
            PAge not found!
          </h2>
        </div>
        <div>
          <button className="btn btn-primary">
            <Link to="/">Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
