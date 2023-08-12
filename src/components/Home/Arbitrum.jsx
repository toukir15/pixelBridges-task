import arbitrumImg from "../../assets/images/Arbitrum.png";

export default function Arbitrum() {
  return (
    <div className="flex items-center gap-2 mt-10">
      {/* left side  */}
      <div className="flex-1">
        <img src={arbitrumImg} alt="" />
      </div>
      {/* right side  */}
      <div className="flex-1">
        <h1 className="text-4xl mt-24 ">
          UNLOCK A NEW FRONTIER WITH BUBBLE & ARBITRUM
        </h1>
        <p className="my-4 text-xl">
          Join the{" "}
          <span className="text-[#00D0AA]">cutting-edge DeFi movement</span> by
          bridging the gap between two thriving chains.
        </p>
        <p className="text-sm">
          Integrating the Arbitrum bridge, Bubble users now have the opportunity
          to trade their tokens on both the Ethereum and Arbitrum chains,
          unlocking a whole new realm of possibilities and potential rewards.
          Take advantage of this game-changing integration and be a part of the
          next evolution in DeFi.
        </p>
      </div>
    </div>
  );
}
