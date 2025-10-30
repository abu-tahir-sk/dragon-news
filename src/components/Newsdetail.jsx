import { Link } from "react-router-dom";

const Newsdetail = (props = {}) => {
  const { news } = props || {};
 
  return (
    <div className="shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={news?.image_url}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body text-start">
        <h2 className="card-title text-start">{news.title}</h2>
        <p className="py-2 text-start">{news.details}</p>
        <div className="card-actions ">
          <Link to={`/category/${news?.category_id}`} className="btn-wide text-red-400 bg-none font-semibold">All News</Link>
        </div>
      </div>
    </div>
  );
};

export default Newsdetail;
