import bubbleImg from "../../assets/images/bubble.png";
import twiterImg from "../../assets/images/twitter.png";
import getbookImg from "../../assets/images/getbook.png";
import discardImg from "../../assets/images/discard.png";
import mediumImg from "../../assets/images/medium.png";
import telegramImg from "../../assets/images/telegram.png";
export default function Contact() {
  return (
    <div className="relative">
      <img src={bubbleImg} alt="" />
      <img
        className="w-52 absolute bottom-44 hover:shadow-2xl"
        src={getbookImg}
        alt=""
      />
      <img
        className="w-52 absolute top-20 right-[30rem] "
        src={discardImg}
        alt=""
      />
      <img className="w-52 absolute top-52 right-8 " src={mediumImg} alt="" />
      <img
        className="w-52 absolute top-80 right-[40rem] "
        src={telegramImg}
        alt=""
      />
      <img
        className="w-52 absolute top-80 right-[22rem] "
        src={twiterImg}
        alt=""
      />

      <button className="bg-red-500 py-3 px-4 rounded-lg bg-gradient-to-r from-pink-500 to-red-500 text-white  hover:to-pink-500 transition border-none absolute bottom-32 right-40 uppercase">
        Pitch Deck
      </button>
    </div>
  );
}
