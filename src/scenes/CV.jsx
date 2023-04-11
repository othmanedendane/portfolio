import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import DownloadIcon from '@mui/icons-material/Download';
import cv from "../assets/Othmane Dendane.pdf";





const CV = () => {
    const testamonialStyles = `mx-auto relative max-w-[400px] h-[350px] flex flex-col
    justify-end p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`;

    

    return(
        <section id="cv" className="pt-32 pb-16">
            {/* Heading */}
            <motion.div
                className="md:w-1/3 text-center md:text-left"
                initial="hidden" //hidden represant when we start
                whileInView="visible" //once this div is seen or shown on the screen then we can run our animation
                viewport={{ once: true, amount: 0.5 }} //this animation will run when you get to this point in the page
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50}, //opacity:0=not visible, start -50 from x 
                    visible: { opacity: 1, x: 0} //goes to an opacity of 1=visible, and from a postion of -50 to 0
                }}>
                    <p className="font-playfair font-semibold text-4xl mb-5 text-red">
                    Curriculum vitæ
                    </p>
                    <LineGradient width="mx-auto w-2/4" />
                    <p className="mt-10">
                        Here is a resume about my work, skills and proficiencies
                    </p>

        </motion.div>
                    {/* TESTAMONIALS */}
                   

                        
<div className="w-full md:flex md:justify-between gap-8">
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
                <button 
                className="mx-auto relative text-center x:ml-[550px] x:mt-[300px] x:w-[500px] bg-gradient-rainblue items-center text-deep-blue rounded-sm py-3 px-7 font-semibold
                hover:bg-blue hover:text-white transition duration-500"
                >
                    <a href={cv}> Download CV </a>
                
                
                 

                   
                  
                  
                  
                </button>
            
               
                

            </motion.div>
</div>

                    

        </section>
    )
}

export default CV