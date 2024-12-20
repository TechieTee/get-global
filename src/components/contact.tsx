import React, { useState } from "react";
import Input from "./input";

// type ContactUsForm = {
//   FullName: string;
//   Email: string;

// };
const Contact = () => {
  // const {
  //   handleSubmit,
  //   formState: { errors },
  //   register,
  //   reset,
  // } = useForm({
  //   defaultValues: {
  //     FullName: "",
  //     Email: "",

  //   },
  // });

  //const [isSubmitting, setIsSubmitting] = useState(false);

  // const onSubmit: SubmitHandler<ContactUsForm> = async ({
  //   FullName,
  //   Email,

  // }) => {
  //   setIsSubmitting(true);
  //   try {
  //     if (!Email || !FullName) return;
  //     const response = await sendContactUsInfo({
  //       FullName,
  //       Email,

  //     });
  //     reset();
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };
  return (
    <div className=" grid items-center justify-center  lg:grid-cols-1  md:grid-cols-1 sm:grid-cols-1 lg:px-36 lg:py-16 md:px-24 md:py-16 px-[20px] py-[20px] block bg-[#F5F8FF] w-full" id="contact">

        <div className=" flex items-center justify-center flex-col gap-y-6  "
        // onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-black text-2xl  text-center lg:text-[40px] font-bold leading-[60px] ">
          Ready to Partner with Us?

          </h2>

          <h2 className="text-black text-[18px] text-center lg:text-[22px] font-bold leading-[30px] ">
          Take the First Step Towards Expanding Your BPO Operations in Africa

          </h2>

        

<h4 className="text-[#595959] text-center text-[18px] font-normal  leading-[30px]">We invite you to explore how GetGlobal can become your partner in talent acquisition and BPO expansion. Whether you're a global tech giant looking to scale or an NGO focused on job creation, our tailored solutions can meet your needs.</h4>

<div className="flex lg:flex-row md:flex-row flex-col gap-8 mt-8">    
<a href="https://calendly.com/gideon-ibeabuchi-telesoftas/30min" target="_blank">
          <button
            // isLoading={isSubmitting}
            className="lg:w-[100%] w-[100%] md:w-full sm:w-full bg-black text-white font-bold h-[45px] lg:text-[14px] text-[10px]  font-meduim px-4"
          >
          Request a Custom Proposal
          </button>
          </a>



          <a href="https://calendly.com/gideon-ibeabuchi-telesoftas/30min" target="_blank">
          <button
            // isLoading={isSubmitting}
            className="lg:w-[100%] w-[100%] md:w-full sm:w-full bg-black text-white font-bold h-[45px] lg:text-[14px] text-[10px]  font-meduim px-4"
          >
            Book a Virtual Tour of Our Office
          </button>
          </a>



          <a href="https://calendly.com/gideon-ibeabuchi-telesoftas/30min" target="_blank">
          <button
            // isLoading={isSubmitting}
            className="lg:w-[100%] w-[100%] md:w-full sm:w-full bg-black text-white font-bold h-[45px] lg:text-[14px] text-[10px]  font-meduim px-4"
          >
            Contact Us for More Information
          </button>
          </a>
        </div>    </div>

      </div>


  );
};

export default Contact;
