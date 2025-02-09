import Banner from "./Banner";
import Footer from "./Footer";

import Mood from "./Mood";
import People from "./People";
import SeeHow from "./SeeHow";
import Things from "./Things";
import WhyUse from "./WhyUse";

function Home() {
  return (
    <>
   
        <Banner />
        <Mood />
        <Things />
        <WhyUse/>
        <SeeHow/>
        <People/>
        <Footer/>
   
    </>
  );
}

export default Home;
