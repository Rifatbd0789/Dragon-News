import { Link } from "react-router-dom";

const Details = (data) => {
  const { _id, title, image_url, details } = data.data;
  // console.log(data);
  return (
    <div className="mb-6">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {details.length > 200 ? (
            <p>
              {details.slice(0, 100)}
              <Link to={`/news/${_id}`} className="text-blue-600  font-bold">
                {" Read more"}
              </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
