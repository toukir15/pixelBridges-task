import tokenomicsImg from "../../assets/images/Tokenomics.png";
export default function Tokenomics() {
  return (
    <div className="relative">
      <p className="absolute z-10 top-20 text-3xl">Tokenomics</p>
      <img className="mt-8" src={tokenomicsImg} alt="" />
    </div>
  );
}
