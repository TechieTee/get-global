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



const Home = () => {
  return (
    <div className="grid w-full">
      
 <Header />
 <ViewPort/>
 <SubViewPort/>
 {/* <Expertise /> */}
 {/* <Stacks/> */}
 <HowWeWork />
 
  <WhyUs/> 
  {/* <Technologies /> */}

 <Contact />
 
  {/* <Footer/>  */}

 


</div>
  );
};
export default Home;
