
import { useState } from "react";
import { Image } from "../assets/index";

const Footer = () => {

  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Replace with your Google Form's FORM_ID and ENTRY_ID
  const FORM_ID = `https://docs.google.com/forms/d/e/1FAIpQLSdCVdnmRX0sLJZGN_YJu4xYK7XTFQJNTWCbCanznm8ecLm17A/formResponse`;
  const ENTRY_ID = 'entry.1045781291';


  const handleSubmit = (e:any) => {
    e.preventDefault();

    const formUrl = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`;
    const formData = new FormData();
    formData.append(`entry.${ENTRY_ID}`, email);

    fetch(formUrl, {
      method: 'POST',
      mode: 'no-cors',
      body: formData,
    })
      .then(() => {
        setSubmitted(true);
        setEmail('');  // Clear the form
      })
      .catch((error) => {
        console.error('Error submitting email:', error);
      });
  };


  return (
    <>
      <div className="bg-white lg:px-36 lg:py-16 md:px-24 md:py-16 px-[20px] py-[20px] w-full">
        <div className="grid gap-6 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
          <div className="grid lg:grid-cols-1">
          <img src={Image.logo} width={200} alt="logo"/> 

            <p className="text-[#595959] text-[14px] font-normal  ml-4 mt-2 lg:w-3/5 leading-[28px]">
            At GetGlobal, we are not just about business. We are committed to making a lasting social impact by providing meaningful employment to underserved communities.
            </p>

          </div>
          <div className="grid gap-6 lg:grid-cols-2 ">


            <div className="grid-cols-1">

              <div className="flex items-start justify-start mb-2 text-[14px] font-bold text-black">
                Stay Tuned:
              </div>
              <div className="flex items-start mb-4 gap-4 md:gap-4 sm:gap-4 flex-row lg:justify-start md:justify-start sm:justify-start">
             <a href="https://web.facebook.com/getglobalafrica " target='_blank'>
              <img src={Image.facebook} alt="logo" width={20} className=''/> </a>

              <a href="https://www.linkedin.com/company/get-global-by-telesoftas" target='_blank'>
                <img src={Image.linkedin} alt="logo" width={20} className=''/> 
</a>
<a href="https://www.instagram.com/getglobalafrica" target='_blank'>
                <img src={Image.instagram} alt="logo" width={20} className=''/> </a>

                <a href="https://twitter.com/GetGlobalAfrica" target='_blank'>
                <img src={Image.twitter} alt="logo" width={20} className=''/> </a>
              </div>

            </div>

            <div className="grid-cols-1">

              <div className="text-[#595959] text-[14px] mb-2 font-normal leading-[28px]">
         <span className="font-bold ">         Phone Number : </span>  <br/>  +2347010989296 , +234 802 965 1969
              </div>
              <div className="text-[#595959] text-[14px] mb-2 font-normal leading-[28px]">
              <span className="font-bold ">Email Address : </span>  <br/>  jane.odonwodo@telesoftas.com, gideon.ibeabuchi@telesoftas.com 
              </div>
            
            </div>

          </div>
        </div>

      </div>
      <div className="bg-white lg:gap-12 md:gap-8 gap-4 lg:px-12 lg:py-8 md:px-12 md:py-16 px-[10px] py-[20px] w-full  border-t border-t-1  items-center grid lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 ">
      <div></div>
      <span className="text-black text-left text-[12px]"><span className="font-bold">Newsletter Sign-Up:</span><br/>Stay Informed About Africa’s Tech Talent</span>
      <div>
  
      {submitted ? (
        <p className="text-[#ff0000] text-left text-[12px]">Thank you! Your email has been submitted!.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
           
         
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="email"
              className="text-black text-left text-[12px] border border-1 border-grey p-1 w-full"
           
            />
          </label>

          <p className="text-black text-left text-[12px] mt-2"> <button type="submit" className="text-white px-4 py-1 bg-black text-left text-[12px]">Submit</button></p>
         
        </form>
      )}
    </div>
      <div></div>

</div> 
       {/* 

       <div className="bg-white lg:gap-24 md:gap-16 gap-8 lg:px-36 lg:py-8 md:px-24 md:py-16 px-[20px] py-[20px] w-full  border-t border-t-1  grid lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 ">
      <span className="text-black text-left text-[12px]"><span className="font-bold">Nigeria</span><br/>57 Ebitu Ukiwe Street Jabi, Abuja,
              FCT Nigeria</span>
<span className="text-black text-left text-[12px]"><span className="font-bold">Kaunas</span> <br/> K. Donelaičio g. 60, A korpusas, Kaunas, Lithuania</span>
<span className="text-black text-left text-[12px]"> <span className="font-bold">Vilnius</span> <br/> Green Hall 1 Upės g. 21, Vilnius, Lithuania</span>
<span className="text-black text-left text-[12px]"> <span className="font-bold">Klaipėda</span>  <br/> Liepų g. 83A, Klaipėda, Lithuania</span>

</div>  */}

      <div className="grid bg-black p-4">

        <span className="text-white text-center text-[12px]">© 2024 Get Global Nigeria. All Rights Reserved.</span>

      </div>

    </>
  );
};

export default Footer;
