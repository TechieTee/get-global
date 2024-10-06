
import { Image } from "../assets/index";

const Footer = () => {
  return (
    <>
      <div className="bg-white lg:px-36 lg:py-16 md:px-24 md:py-16 px-[20px] py-[20px] w-full">
        <div className="grid gap-6 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
          <div className="grid lg:grid-cols-1 ">
          <img src={Image.logo} width={170} alt="logo"/> 

            <p className="text-[#595959] text-[14px] font-normal  mt-2 lg:w-3/5 leading-[28px]">
              TeleSoftas Nigeria is a digital product engineering and
              consulting services company. We are a part of <span className="font-bold">Helmes
              group,</span> uniting over 1500 IT specialists in the Baltics.
            </p>

          </div>
          <div className="grid gap-6 lg:grid-cols-2 ">


            <div className="grid-cols-1">

              <div className="flex items-start justify-start mb-2 text-[14px] font-bold text-black">
                Stay Tuned:
              </div>
              <div className="flex items-start mb-4 gap-4 md:gap-4 sm:gap-4 flex-row lg:justify-start md:justify-start sm:justify-start">
              <img src={Image.facebook} alt="logo" width={20} className=''/> 
                <img src={Image.linkedin} alt="logo" width={20} className=''/> 

                <img src={Image.instagram} alt="logo" width={20} className=''/> 

              </div>

            </div>

            <div className="grid-cols-1">

              <div className="text-[#595959] text-[14px] mb-2 font-normal leading-[28px]">
                Privacy policy
              </div>
              <div className="text-[#595959] text-[14px] mb-2 font-normal leading-[28px]">
                Sustainability policy
              </div>
              <div className="px-2 bg-black lg:w-fit md:w-fit w-fit flex items-start mb-4 lg:gap-4 md:gap-4 gap-4 flex-row lg:justify-start md:justify-start justify-start">
              <img src={Image.iso1} alt="logo" width={120} className='' /> 
              <img src={Image.iso2} alt="logo"  width={120} className=''/> 


              </div>
            </div>

          </div>
        </div>

      </div>
      <div className="bg-white lg:gap-24 md:gap-16 gap-8 lg:px-36 lg:py-8 md:px-24 md:py-16 px-[20px] py-[20px] w-full  border-t border-t-1  grid lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 ">
      <span className="text-black text-left text-[12px]"><span className="font-bold">Nigeria</span><br/>57 Ebitu Ukiwe Street Jabi, Abuja,
              FCT Nigeria</span>
<span className="text-black text-left text-[12px]"><span className="font-bold">Kaunas</span> <br/> K. Donelaičio g. 60, A korpusas, Kaunas, Lithuania</span>
<span className="text-black text-left text-[12px]"> <span className="font-bold">Vilnius</span> <br/> Green Hall 1 Upės g. 21, Vilnius, Lithuania</span>
<span className="text-black text-left text-[12px]"> <span className="font-bold">Klaipėda</span>  <br/> Liepų g. 83A, Klaipėda, Lithuania</span>

</div>

      <div className="grid bg-black p-4">

        <span className="text-white text-center text-[12px]">© 2024 TeleSoftas Nigeria. All Rights Reserved.</span>

      </div>

    </>
  );
};

export default Footer;
