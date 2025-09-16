import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { data: news } = useLoaderData();

  return <div>
       <h2 className="font-semibold">Dragon News Home</h2>
      {
            news.map((newS) =>(
                  <NewsCard key={newS._id} news={newS}></NewsCard>
            ))
      }
  </div>;
};

export default CategoryNews;
