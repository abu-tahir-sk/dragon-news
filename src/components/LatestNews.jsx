import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex items-center justify-center">
      <p className="bg-[#d72050] text-base-100 px-3 py-2">Latest</p>
      <Marquee pauseOnHover={true} speed={100} className="space-x-10 bg-gray-200 py-2">
        <Link to="/news">
          
            Match Highlights Germany vs Spain - as it happened ! Match
            Highlights: Germany vs Spain as
          
        </Link>
        <Link to="/news">
          
            Match Highlights Germany vs Spain - as it happened ! Match
            Highlights: Germany vs Spain as
          
        </Link>
        <Link to="/news">
          
            Match Highlights Germany vs Spain - as it happened ! Match
            Highlights: Germany vs Spain as
          
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
