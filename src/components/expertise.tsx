
const Expertise = () => {

  

 

  return (
    <>
     <div className="lg:px-36 lg:py-12  md:px-24 md:py-16 px-[10px] py-[20px] flex flex-col gap-2 bg-[#15161E]" id="expertise">
          <h2 className="sm:pt-4 text-[#FFFFFF] text-3xl text-center lg:text-5xl font-semibold leading-normal">
            Our Expertise
          </h2>
          <h4 className="text-[#FFFFFF] text-[18px] text-center font-normal m-auto my-4 mb-8 lg:w-[70%]  leading-loose">
            We deliver a wide range of services customized to meet the specific needs of non-tech founders
            and organizations. Our expertise encompasses:
          </h4>
    </div>
    <div className="h-[700px] lg:h-[700px] md:h-[700px] w-full"></div>
    <div className="fixed inset-0 w-full h-full overflow-hidden z-[-1]">
      <video 
        autoPlay 
        muted 
        loop 
        className="lg:object-cover md:object-cover  object-contain h-full w-auto  lg:h-full lg:w-full md:h-full md:w-full"
     
      >
        <source src="./telesoftas.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    </>
   
  );
};
export default Expertise;