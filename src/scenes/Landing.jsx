import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

import Image1 from "../assets/p2.jpg";
import Image2 from "../assets/pictic.jpg";
import Image3 from "../assets/pictic2.jpg";
import Image4 from "../assets/pictic3.jpg";



const Landing = ({setSelectedPage}) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");

    return (
        <section 
        id="home" 
        className="md:scale-90 md:flex md:justify-between md:items-center md:h-full  py-10 ">
        {/* Image section */}
            <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
            {isAboveMediumScreens ? (
                <div
                className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20
                before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full
                before:border-2 before:border-blue before:z-[-1]"
                >
                    <img 
                    alt="profil"
                    className="hover: filter hover:saturate-200 transition duration-500 z-10 w-full
                    max-w-[400px] md:max-w-[300px] rounded-t-[400px]" // j'ai remplacé 300 par 600, et ajouter le rounded (good)
                    src={Image2}
                    
                    />
                </div>
            ) : (
                <img
                alt="profil"
                    className="hover: filter hover:saturate-200 transition duration-500 z-10 w-full
                    max-w-[250px] md:max-w-[600px] rounded-t-[400px]" // j'ai remplacé 400 par 250, et ajouter le rounded (good)
                    src={Image2}
                />
            )}
            </div>

            {/* Main section (text) */}
            <div className="z-30 basis-2/5 mt-12 md:mt-32">
            {/* Headings */}
            {/* motion is part of framer motion: allows us to use ready animations (fade in) */}
            <motion.div 
                initial="hidden" //hidden represant when we start
                whileInView="visible" //once this div is seen or shown on the screen then we can run our animation
                viewport={{ once: true, amount: 0.5 }} //this animation will run when you get to this point in the page
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50}, //opacity:0=not visible, start -50 from x 
                    visible: { opacity: 1, x: 0} //goes to an opacity of 1=visible, and from a postion of -50 to 0
                }}
            > 
                <p className="text-5xl font-playfair z-10 text-center md:text-start">
                    Othmane{""} {/* l3ayba for space */}
                    {/* xs: (means) if it's really above small screens */}
                    <span 
                    className="xl:relative xl:text-deep-blue xl:font-semibold z-20
                    xl:before:content-brush before:absolute before:-left-[25px]
                    before:-top-[80px] before:z-[-1]" 
                    >Dendane</span> {/*look into the tailwind.config.js for the brush / z-[-1]: behind everything*/}
                <p className="mt-10 mb-7 text-sm text-center md:text-start">
                    Every single day is a day where I become a tiny bit better, and as that 
                    compounds across my life I am going to die as a great human.
                </p>

                </p>

            </motion.div>
            {/* Call to actions*/}
            <motion.div
            className="flex mt-5 justify-center md:justify-start"
            initial="hidden" //hidden represant when we start
            whileInView="visible" //once this div is seen or shown on the screen then we can run our animation
            viewport={{ once: true, amount: 0.5 }} //this animation will run when you get to this point in the page
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: -50}, //opacity:0=not visible, start -50 from x 
                visible: { opacity: 1, x: 0} //goes to an opacity of 1=visible, and from a postion of -50 to 0
            }}
            >
                <AnchorLink 
                className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
                hover:bg-blue hover:text-white transition duration-500"
                onClick={() => setSelectedPage("contact")}
                href="#contact"
                >
                    Contact Me
                </AnchorLink>
                <AnchorLink 
                className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
                onClick={() => setSelectedPage("contact")}
                href="#contact"
                >
                    <div
                    className="bg-deep-blue hover:text-red transition duration-500w-full h-full flex items-center
                    justify-center font-playfair px-10">
                        Let's talk
                        </div>
                </AnchorLink>

            </motion.div>

            <motion.div
            className="flex mt-5 justify-center md:justify-start"
            initial="hidden" //hidden represant when we start
            whileInView="visible" //once this div is seen or shown on the screen then we can run our animation
            viewport={{ once: true, amount: 0.5 }} //this animation will run when you get to this point in the page
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: -50}, //opacity:0=not visible, start -50 from x 
                visible: { opacity: 1, x: 0} //goes to an opacity of 1=visible, and from a postion of -50 to 0
            }}
            >
                <SocialMediaIcons />
            </motion.div>

            </div>

        </section>
    )

}



export default Landing;