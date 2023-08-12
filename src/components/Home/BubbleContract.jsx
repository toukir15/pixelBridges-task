import contractLight from "../../assets/images/contrctlight.png";
import contractImg from "../../assets/images/contract.png";
export default function BubbleContract() {
  return (
    <div className="relative">
      <div className="relative z-10">
        <div className="mt-4 text-sm">
          <p>Maximize Liquidity & Earn</p>
          <p>Passive Rewards with BubbleSwap</p>
        </div>

        {/* bubble contract img  */}
        <div>
          <img src={contractImg} alt="" />
        </div>
        {/* contract text  */}
        <div className="flex ">
          <div className="w-[40%]"></div>
          <div className="w-[60%]">
            <p className="text-sm">
              BubbleSwap is a revolutionary DeFi protocol that offers a unique
              liquidity tax of 5% — increasing your LP tokens' value with every
              trade. The LP tokens collected are burned forever, guaranteeing
              maximum liquidity and 100% safety. Join the new era of yield
              farming and earn passive rewards with BubbleSwap's liquidity
              crunch-proof technology.
            </p>
          </div>
        </div>

        {/* contract info  */}
        <div className="grid grid-cols-4 text-black">
          <div className="bg-white rounded-3xl flex flex-col justify-center px-16  h-44">
            <h1 className="text-5xl text-pink-500 font-medium mb-2">5%</h1>{" "}
            <p>on all $BUB pairs</p>
          </div>
          <div className="bg-white mt-8 rounded-3xl flex flex-col justify-center px-16 h-44">
            <h1 className="text-5xl text-pink-500 font-medium mb-2">All</h1>{" "}
            <p>LP tokens burned forever</p>
          </div>
          <div className="bg-white mt-16 rounded-3xl flex flex-col justify-center px-16 h-44">
            <h1 className="text-5xl text-pink-500 font-medium mb-2">100%</h1>{" "}
            <p>LP tokens burned forever</p>
          </div>
          <div className="bg-white mt-24 rounded-3xl flex flex-col justify-center px-16 h-44">
            <h1 className="text-5xl text-pink-500 font-medium mb-2">5%</h1>{" "}
            <p>SAFU</p>
          </div>
        </div>
      </div>
      <div>
        <img className="absolute top-0" src={contractLight} alt="" />
      </div>
    </div>
  );
}
