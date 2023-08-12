import Container from "../Container";
import Banner from "./Banner";
import Farming from "./Farming";
import Token from "./Token";

export default function Home() {
  return (
    <div className="bg-[#0D141B] text-white h-full w-full max-w-[100vw] overflow-hidden">
      <Banner />
      <Token />
      <Container>
        <Farming />
      </Container>
    </div>
  );
}
