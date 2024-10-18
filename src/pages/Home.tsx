import Contact from "../components/contact";
import Expertise from "../components/expertise";
import Footer from "../components/footer";
import Header from "../components/header";
import HowWeWork from "../components/how-we-work";
import Stacks from "../components/stacks";
import SubViewPort from "../components/sub-view-port";
import Technologies from "../components/technologies";
import ViewPort from "../components/view-port";
import WhyUs from "../components/why-us";
import Success from "./Success";



const Home = () => {
  return (
    <div className="grid w-full">
      
 <Header />
 <ViewPort/>
 <SubViewPort/>
 {/* <Expertise /> */}
 {/* <Stacks/> */}
 <HowWeWork />
 
  <Success/>
  <Contact />
  <WhyUs/>
  
  {/* <Technologies /> */}


 
  <Footer/>  

 


</div>
  );
};
export default Home;
