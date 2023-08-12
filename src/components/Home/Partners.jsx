import pinkSaleImg from "../../assets/images/pinksale.png";
import dexViewImg from "../../assets/images/dexview.png";
import gotBitImg from "../../assets/images/gotbit.png";
import catPultImg from "../../assets/images/catapult.svg";
export default function Partners() {
  return (
    <div>
      <h1 className="text-4xl mb-10 text-[#C3C9DA] text-center uppercase">
        Our Partners
      </h1>
      <div className="grid grid-cols-4 items-center justify-center gap-4 ">
        <div className="bg-[#192128] h-20 flex justify-center items-center rounded-xl">
          <img className="w-52" src={pinkSaleImg} alt="" />
        </div>
        <div className="bg-[#192128] h-20 flex justify-center items-center rounded-xl">
          <img className="w-52" src={dexViewImg} alt="" />
        </div>
        <div className="bg-[#192128] h-20 flex justify-center items-center rounded-xl">
          <img src={gotBitImg} alt="" />
        </div>
        <div className="bg-[#192128] h-20 flex justify-center items-center rounded-xl">
          <img src={catPultImg} alt="" />
        </div>
      </div>
    </div>
  );
}
