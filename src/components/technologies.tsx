import { Image } from "../assets/index";
const Technologies = () => {
  return (
    <div className="lg:px-36 lg:py-16 md:px-24 md:py-16 px-[20px] py-[20px] block bg-[#FFFFFF] w-full lg:text-left  sm:text-center" >
 
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-2 relative">
          <div>
            <h2 className="sm:pt-4 text-black lg:text-left md:text-left text-center text-3xl lg:text-[50px] font-bold lg:leading-[60px] mb-4 mt-4">
              We comfortably build
              on these platforms:
            </h2>
            <h4 className="text-black lg:text-left md:text-left text-center lg:text-[18px] text-[18px] font-normal  mb-14 lg:leading-[33px]">
              At TeleSoftas, we specialize in leveraging a diverse array of technologies to
              build robust, scalable applications that meet the unique needs of your
              business. Our expertise spans:
            </h4>
          </div>
        </div>

        <div className="grid lg:gap-24 md:gap-24 gap-12">

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-center justify-between gap-12">
         <div className="flex items-start justify-between gap-4 ">
              <div>
              <img src={Image.aws}  alt="logo" className="h-[40px] w-[130px] object-fit" /> 
              </div>

              <div>
              <p className="text-black text-[22px] font-bold md:text-left">AWS</p>
              <div className="text-[#595959] text-[16px] leading-[25px] md:text-left" >
              Harness the power of Amazon Web
Services for cloud computing solutions
that scale with your business.      </div>
                </div>

           

            </div>
            <div className="flex items-start justify-between gap-4 ">
              <div>
              <img src={Image.java}  alt="logo"  className="h-[40px] w-[130px] object-fit"  /> 
       
              </div>

              <div>
              <p className="text-black text-[22px] font-bold md:text-left">JAVA</p>
              <div className="text-[#595959] text-[16px] leading-[25px] md:text-left" >
              Develop versatile applications using
Java, known for its portability and
extensive ecosystem.     </div>
                </div>

           

            </div>
            <div className="flex items-start justify-between gap-4 ">
              <div>
              <img src={Image.net}  alt="logo"  className="h-[40px] w-[130px] object-fit"  /> 
              </div>

              <div>
              <p className="text-black text-[22px] font-bold md:text-left">.NET</p> 
              <div className="text-[#595959] text-[16px] leading-[25px] md:text-left" >
              Utilise the .NET framework to create
high-performance applications across
various platforms.     </div>
                </div>

           

            </div>
         
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-center justify-between gap-12">
         <div className="flex items-start justify-between gap-4 ">
              <div>
              <img src={Image.polymer}  alt="logo"  className="h-[40px] w-[130px] object-fit"  /> 
              </div>

              <div>
              <p className="text-black text-[22px] font-bold md:text-left">POLYMERJS</p>
              <div className="text-[#595959] text-[16px] leading-[25px] md:text-left" >
              Utilise Polymer.js to create custom web
components that enhance your
application s functionality.     </div>
                </div>

           

            </div>
            <div className="flex items-start justify-between gap-4 ">
              <div>
              <img src={Image.azure}  alt="logo"  className="h-[40px] w-[130px] object-fit"  /> 
              </div>

              <div>
              <p className="text-black text-[22px] font-bold md:text-left">AZURE</p>
              <div className="text-[#595959] text-[16px] leading-[25px] md:text-left" >
              Leverage Microsoft Azure for
comprehensive cloud services that
enhance your application s capabilities.    </div>
                </div>

           

            </div>
            <div className="flex items-start justify-between gap-4 ">
              <div>
              <img src={Image.react}  alt="logo"  className="h-[40px] w-[130px] object-fit"  /> 
              </div>

              <div>
              <p className="text-black text-[22px] font-bold md:text-left">REACTJS</p>
              <div className="text-[#595959] text-[16px] leading-[25px] md:text-left" >
              Create dynamic user interfaces with
React.js, ensuring a seamless user
experience.     </div>
                </div>

           

            </div>
         
        </div>


        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-center justify-between gap-12">
         <div className="flex items-start justify-between gap-4 ">
              <div>
              <img src={Image.flutter}  alt="logo"  className="h-[40px] w-[130px] object-fit"  /> 
              </div>

              <div>
              <p className="text-black text-[22px] font-bold md:text-left">FLUTTER</p>
              <div className="text-[#595959] text-[16px] leading-[25px] md:text-left" >
              Build beautiful, natively compiled
applications for mobile, web, and
desktop from a single codebase.    </div>
                </div>

           

            </div>
            <div className="flex items-start justify-between gap-4 ">
              <div>
              <img src={Image.angular}  alt="logo"  className="h-[40px] w-[130px] object-fit"  /> 
       
              </div>

              <div>
              <p className="text-black text-[22px] font-bold md:text-left">ANGULAR</p>
              <div className="text-[#595959] text-[16px] leading-[25px] md:text-left" >
              Leverage Microsoft Azure for
comprehensive cloud services that
enhance your application s capabilities.    </div>
                </div>

           

            </div>
            <div className="flex items-start justify-between gap-4 ">
              <div>
              <img src={Image.node}  alt="logo"  className="h-[40px] w-[130px] object-fit"  /> 
              </div>

              <div>
              <p className="text-black text-[22px] font-bold md:text-left">NODEJS</p> 
              <div className="text-[#595959] text-[16px] leading-[25px] md:text-left" >
              Implement fast and scalable network
applications using Node.js for real-time
data processing.    </div>
                </div>

           

            </div>
         
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-center justify-between gap-12">
         <div className="flex items-start justify-between gap-4 ">
              <div>
              <img src={Image.html}  alt="logo"  className="h-[40px] w-[130px] object-fit"  /> 
              </div>

              <div>
              <p className="text-black text-[22px] font-bold md:text-left">HTML/CSS</p>
              <div className="text-[#595959] text-[16px] leading-[25px] md:text-left" >
              Design engaging and responsive web
layouts with HTML and CSS, the
backbone of web development.    </div>
                </div>

           

            </div>
            <div className="flex items-start justify-between gap-4 ">
              <div>
              <img src={Image.php}  alt="logo"  className="h-[40px] w-[130px] object-fit"  /> 
       
              </div>

              <div>
              <p className="text-black text-[22px] font-bold md:text-left">PHP</p>
              <div className="text-[#595959] text-[16px] leading-[25px] md:text-left " >
              Develop server-side applications
efficiently using PHP, a widely-used
scripting language.     </div>
                </div>

           

            </div>
            <div className="flex items-start justify-between gap-4 ">
              <div>
              <img src={Image.diverse}  alt="logo"  className="h-[40px] w-[130px] object-fit"  /> 
              </div>

              <div>
              <p className="text-black text-[22px] font-bold md:text-left  ">DIVERSE EXPERTISE</p> 
              <div className="text-[#595959] text-[16px] leading-[25px] md:text-left " >
              Leveraging various technologies to
meet unique business needs     </div>
                </div>

           

            </div>
         
        </div>
     
        </div>
    </div>
 
  );
};

export default Technologies;
