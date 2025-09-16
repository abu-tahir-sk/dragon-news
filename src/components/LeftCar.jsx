
import { FaRegCalendarAlt } from "react-icons/fa";

const LeftCar = (props = {}) => {
       const { card } = props || {};
      return (
            <div className="card card-compact bg-base-100  rounded-none">
  <figure>
    <img
      src={card.img}
      alt="Shoes"
      className="rounded-md"
      />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{card.title}</h2>
   
    <div className="card-actions justify-between">
      <div><h4 className="font-bold">spots</h4></div>
      <div className="flex gap-2 items-center">
            <FaRegCalendarAlt className="text-xl text-gray-500"></FaRegCalendarAlt>
            <p className="text-gray-500">  {card.date}</p>
      </div>
    </div>
  </div>
</div>
      );
};

export default LeftCar;