import { Image } from "../assets/index";
const ViewPort = () => {
  return (
    <div className="lg:pt-[220px] pt-[130px] md:pt-[220px] lg:px-36 lg:pb-16 md:px-36 md:pb-16 px-[20px] py-[20px]  grid md:items-center md:justify-center bg-[#FFFFFF] w-full lg:text-left md:text-center text-center" >
      <div className=" mx-auto grid xl:grid-cols-2 grid-cols-1 md:gap-24 gap-2" >
        <div className=" col-span-1 ">
       
            <h2 className=" text-[#000000] text-[33px] lg:text-[45px] font-bold lg:leading-[60px] leading-tight ">
            Unlock Africa's Potential with GetGlobal: Your Gateway to High-Quality BPO Support
            </h2>
            <h4 className="text-[#595959] lg:text-left text-center text-[18px] font-normal  mt-4 mb-8 md:mb-12 leading-loose lg:pr-12 mx-auto lg:mx-0">
            Leverage the power of Africa's emerging tech talent for your BPO operations. We provide custom workforce solutions that meet your business needs, driving efficiency and growth through expertly trained professionals.
     </h4>
            <div className="lg:flex lg:justify-start md:justify-center  flex-row gap-4 justify-center w-full">
              <div className="mb-2">
              <a href="https://calendly.com/telesoftas-nigeria" target="_blank">
                <button className="text-[14px] py-3 lg:px-6 w-full bg-black text-white border" >
                Explore Talent Solutions
                </button></a>
              </div>
              <div className="mb-2">
              <a href="www.telesoftas.com" >
                <button className="text-[14px] py-3 lg:px-6 w-full border border-black" >
                Schedule a Consultation
                </button></a>
              </div>
            </div>
         
        </div>

        <div className="col-span-1 items-center justify-center xl:flex">
        <img src={Image.hero} alt="logo"  className='lg:w-[85%] lg:mt-[-50px] md:mx-auto'/> 

        </div>
      </div>
    </div>
  );
};
export default ViewPort;
