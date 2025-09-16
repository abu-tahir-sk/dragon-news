import swimming from "../assets/swimming.png";
import playGround from "../assets/playground.png";
import Class from "../assets/class.png";
import ads from      "../assets/bg.png"

const QZone = () => {
  return (
    <div >
   <div className="p-2 bg-base-300 rounded-sm">
       <div>
        <img src={swimming} alt="" />
      </div>
     <div>
      <img src={playGround} alt="" />
     </div>
     <div>
      <img src={Class} alt="" />
     </div>
   </div>
     <div className="my-6">
      <img src={ads} alt="" />
     </div>
     
    </div>
  );
};

export default QZone;
