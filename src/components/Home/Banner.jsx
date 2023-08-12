import logo from "../../assets/images/logo.png";
import collectWallet from "../../assets/images/collectwallat.png";
import header_gradient from "../../assets/images/header_grdient.png";
import hero_bg from "../../assets/images/hero-bg.png";
import header from "../../assets/images/header.png";
import Container from "../Container";
export default function Banner() {
  return (
    <header className=" h-[100vh]  overflow-hidden">
      {/* navbar  */}
      <nav className="flex justify-between items-center px-4 z-20 relative">
        {/* logo */}
        <div>
          <img className="h-16" src={logo} alt="" />
        </div>
        <div>
          {/*nav routes  */}
          <ul className="flex gap-10 text-sm">
            <li>Home</li>
            <li>BubbleSwap</li>
            <li>Farming</li>
            <li>Arbitrum</li>
            <li>Protocol</li>
            <li>Contract</li>
            <li>Tokenomics</li>
            <li>Partners</li>
          </ul>
        </div>
        {/* nav button  */}
        <div>
          <button>Launch Testnet</button>
        </div>
      </nav>

      {/* banner  */}
      <div className="relative z-20">
        <Container>
          <div className="flex items-center ">
            {/* banner left  */}
            <div>
              <h1 className="text-5xl ml-8">UNLEASH THE POWER</h1>
              <h1 className="text-5xl mt-3">OF LIQUID TRADING</h1>
              <h4 className="ml-14 mt-3 mb-10 text-2xl tracking-wider text-[#C3C9DA]">
                with Bubble DeFi!
              </h4>
              <p className="ml-14 text-lg">
                Get ready to experience the future of decentralized trading with
                Bubble DeFi.
              </p>
              <p className="ml-14 text-sm text-[#C3C9DA]">
                Our revolutionary Liquid DEX Trading platform offers deeper
                liquidity, smarter trades, and higher rewards. Say goodbye to
                suboptimal trades and hello to efficient, secure, and profitable
                market activity.
              </p>
            </div>
            {/* banner right  */}
            <div className="mt-20 z-20">
              <img className="w-[80rem]" src={collectWallet} alt="" />
            </div>
          </div>
        </Container>
      </div>

      {/* nav right bg  */}
      <img
        className="absolute -top-10 right-0 z-10"
        src={header_gradient}
        alt=""
      />

      {/* banner right bg */}
      <img
        className="w-[45rem] absolute top-0 right-0 z-10"
        src={header}
        alt=""
      />

      {/* hero bg  */}
      <img className="absolute top-0" src={hero_bg} alt="" />
    </header>
  );
}
