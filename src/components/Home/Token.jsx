import whyBabbleImg from "../../assets/images/whybabble.png";
import { BsDiscord } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

export default function Token() {
  return (
    <div className="flex items-center">
      {/* left side  */}
      <div className="-mt-60 z-20">
        <img src={whyBabbleImg} alt="" />
      </div>
      {/* right side  */}
      <div className="z-50 -ml-20 mt-16">
        <h1 className="text-5xl font-medium">
          THE ULTIMATE GOVERNANCE & UTILITY TOKEN
        </h1>
        <div className="mt-8 ml-12 mx-32 text-justify ">
          <p>
            Join the revolution and take control of your financial future with
            Bubble's $BUB token.
            <span className="text-[#00D0AA]">
              With delegated community governance and stake-based earnings
            </span>
            , you can now vote on proposals and earn passive income from the
            protocol's generated revenue. Empower yourself and become a part of
            the decentralized financial movement with Bubble.
          </p>

          <p>
            Vote for the future of Bubble and submit your proposals. Together,
            the community has ownership over the treasury and on top of that
            passive income earnings based on generated revenue.
          </p>

          <div className="my-8 ">
            <button className="mr-4 py-3 px-4 rounded-lg bg-gradient-to-r from-pink-500 to-red-500 hover:to-pink-500 transition text-white border-none">
              <div className="flex items-center gap-2">
                <BsDiscord />
                <p> Join Discord</p>
              </div>
            </button>

            <button className="bg-red-500 py-3 px-4 rounded-lg bg-gradient-to-r from-pink-500 to-red-500 text-white  hover:to-pink-500 transition border-none">
              <div className="flex items-center gap-2">
                <FaTelegramPlane />
                <p> Join Telegram</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
