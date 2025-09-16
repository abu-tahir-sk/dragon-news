import { CiBookmark } from "react-icons/ci";
import { IoMdShare } from "react-icons/io";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const NewsCard = (props = {}) => {
  const { news } = props || {};
  console.log(news);
  return (
    <div className="my-4 bg-white rounded-lg shadow-md">
     
      <div className="flex justify-between items-center bg-gray-100 p-4 rounded-md rounded-b-none">
        <div className="flex items-center  gap-3">
          <div className="avatar ">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={news.author.img}
                alt={news.author.name}
                className="w-10 h-10 rounded-full"
              />
            </div>
          </div>

          <div>
            <div className="font-bold">{news.author.name}</div>
            <div className="text-sm opacity-50">
              {news.author.published_date}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6">
          <div className="">
            <CiBookmark className="text-2xl"></CiBookmark>
          </div>
          <div>
            <IoMdShare className="text-2xl"></IoMdShare>
          </div>
        </div>
      </div>
      <div className="card bg-base-100  shadow-xl p-3 border-2 border-gray-300 border-t-0 rounded-t-none">
        <div className="card-body">
          <h2 className="card-title">{news.title}</h2>
        </div>

        <div className="w-full h-72 rounded-none my-3">
          <img
            src={news.thumbnail_url}
            alt={news.title}
            className="w-full h-full"
          />
        </div>

        <div className="p-4">
          <p className="pb-2">{news.details}</p>
          <button className="text-red-400 font-bold hover:btn hover:border-none hover:bg-none">
            Read More
          </button>
        </div>
        <div className="border-b-2"></div>
        <div className="p-2  flex items-center justify-between">
          
         <div className="flex items-center justify-center gap-4">
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
             
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            
          </div>
           <div className="">
              <p className="text-gray-500">{news.rating.number}</p>
            </div>
            
         </div>
         <div className="flex items-center gap-2">
          <MdOutlineRemoveRedEye className="text-3xl"></MdOutlineRemoveRedEye>
          <p className="text-gray-500">{news.total_view}</p>
         </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
