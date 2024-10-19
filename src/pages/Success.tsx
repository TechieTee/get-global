import { Image } from "../assets/index";
const Success = () => {
    const cards = [
        {

            title: "12 Artists Trained ",
            description: "and ready for CGI roles"
        },
        {

            title: "Client-Specific Training ",
            description: "for seamless integration"
        },
        {

            title: "Paid Internships ",
            description: "underway for all graduates"

        },


    ];
    const hoverColors = [
        "hover:bg-blue-500",
        "hover:bg-orange-500",
        "hover:bg-blue-500",


    ];
    return (

        <div className="lg:px-36 lg:py-16 md:px-24 md:py-16 px-[20px] py-[20px] bg-black grid gap-8 pb-16" >
            <h2 className="sm:pt-4 text-white  text-3xl text-center lg:text-5xl  font-bold leading-normal">
                Success Stories
            </h2>
            <h2 className="sm:pt-4 text-white  text-2xl text-center lg:text-3xl  font-bold leading-normal">
                Proven Results with International BPOs
            </h2>
            <h4 className="text-white text-center text-[18px] mb-4 font-normal leading-[28px] lg:leading-[33px] md:leading-[33px]">
                In partnership with a leading CGI BPO company, GetGlobal successfully trained 12 Junior 3D artists to meet the client’s specific needs. Through a tailored program, these artists gained the technical and practical skills required in the fast-paced CGI industry. <br/> They are now transitioning into paid internships, ready to contribute directly to the client’s projects.
                This marks a significant success in our Talent Refinery model, showcasing our ability to source, train, and deliver job-ready talent to global markets.
            </h4>
            <div className="">
                <div className="grid items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-[40px]">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`bg-black-500 bg-opacity-50 p-[3px] lg:p-[20px] md:p-[20px] value-Container   relative  md:w-[360px] cursor-pointer overflow-hidden h-[150px] md:h-[150px] rounded-3xl  card group transition duration-800 ease-in-out ${hoverColors[index % hoverColors.length]}`}
                        >

                            <p className="text-white  font-bold  text-[20px] lg:text-[24px] md:text-[24px]  duration-[350ms] text-nowrap font-openSans mx-2 lg:mx-0 absolute top-[50%] group-hover:top-[50%]   sm:group-hover:top-[50%] sm:group-hover:left-[50%] left-[50%] group-hover:translate-y-[-80%] group-hover:translate-x-[-50%] translate-y-[-50%] translate-x-[-50%]">
                                {card.title}
                            </p>
                            <p className="text-white font-bold text-[14px] lg:text-[18px] md:text-[18px]  duration-[350ms] text-nowrap font-openSans mx-2 lg:mx-0 absolute top-[72%] group-hover:top-[72%] sm:group-hover:top-[70%] sm:group-hover:left-[50%] left-[50%] group-hover:translate-y-[-80%] group-hover:translate-x-[-50%] translate-y-[-50%] translate-x-[-50%]">
                                {card.description}
                            </p>

                        </div>
                    ))}
                </div>
            </div>
            <h4 className="text-white lg:text-left text-center md:text-left text-[18px] mb-6 font-normal ">
                Find Out What Others Are Saying: Testimonials From Our Community</h4>
            <div className=" flex flex-col md:flex-col lg:flex-row  items-center gap-4">
                <div className="bg-[#E9EAEC] border border-[#E2E7ED] rounded-3xl p-7">
                    <p className="mb-8 leading-8 text-[#6C7275] text-[16px] font-normal">
                        {`Thanks to GetGlobal, we seamlessly sourced, onboarded, trained and now placed junior 3D Artists from Africa. The integration was smooth, and the results have exceeded our expectations.`}
                    </p>

                    <span className="block text-sm text-[#6C7275] font-semibold">
                        – Maria, ArchiCGI
                    </span>

                </div>
                <div className="bg-[#E9EAEC] border border-[#E2E7ED] rounded-3xl p-7">
                    <p className="mb-8 leading-8 text-[#6C7275] text-[16px] font-normal">
                        {`Our Digital Explorers team had a wonderful time in Lagos, or as the locals call it - Eko! Kristijanas Kaminskis, Egle Dmukauskaite, Aušrinė Vilčinskaitė, Berk Erdem, and Ieva Felman - our Baltic team, had a genuine and fun witted time with participants, throughout the DE II selection bootcamp, mixed with the local businesses and got the chance to experience Lagos from many different angles. 💻 🏖️🎨
<br/>All of this couldn’t have happened without our trusty partner GetGlobal by TeleSoftas, who not only guided us through the busy streets of Lagos but made sure that the official kick-off of the Digital Explorers II journey in Nigeria went perfectly well! Kudos to Jane Odonwodo, Emmanuel Mimshach Obioha, Sandra Edeh, Ibeabuchi Gideon CSM®, Sharon-Rose Banjo-Ogunleye!`}
                    </p>
                    <span className="block text-sm text-[#6C7275] font-semibold">
                        – Digital Explorers Team - OSMOS
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Success;
