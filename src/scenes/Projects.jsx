import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const container = {
    hidden: {},
    visible: {
        transition:{ straggerChildren: 0.2}
    }
}

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
}


const Project = ({ title }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    const projectTitle = title.split(" ").join("-").toLowerCase();

    const project1 = 'https://othmanedendane.github.io/homeN/';

    return(
        <motion.div variant={projectVariant} className="relative">
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair">{title}</p>
                <p className="mt-7">
                Click here for more
                    

                </p>
                
            </div>
            <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
        </motion.div>
    )
}

const Projetcs = () => {
    return(
        <section id="projects" className="pt-48 pb-48">
            {/* Headings */}
            <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden" //hidden represant when we start
                whileInView="visible" //once this div is seen or shown on the screen then we can run our animation
                viewport={{ once: true, amount: 0.5 }} //this animation will run when you get to this point in the page
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50}, 
                    visible: { opacity: 1, y: 0} 
                }}>
                    <div >
                        <p className="font-playfair font-semibold text-4xl">
                            <span className="text-red">PRO</span>JECTS
                        </p>
                        <div className="flex justify-center mt-5">
                        <LineGradient width="w-1/3" />
                        </div>
                    </div>
                    
                    <p className="mt-10 mb-10">
                    Here is a collection of my work that demonstrates my expertise and passion for development.
                    </p>

        </motion.div>
        {/* Projects */}
        <div className="flex justify-center">
            <motion.div
                    className="sm:grid sm:grid-cols-3"
                    initial="hidden" //hidden represant when we start
                    whileInView="visible" //once this div is seen or shown on the screen then we can run our animation
                    viewport={{ once: true, amount: 0.5 }} //this animation will run when you get to this point in the page
                    variants={container}>
                        <div className="flex justify-center text-center items-center p-10 bg-red
                        max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
                            Beautiful User Interfaces
                        </div>
                        <a href='https://youtu.be/BDQizaOYRZQ'>
                        <Project title="Project 1"/>
                        </a>
                        <a href='https://othmanedendane.github.io/morocco/'>
                        <Project title="Project 2"/>
                        </a>
                        {/* Row 2 */}
                        <a href='https://youtu.be/_YONHX7SFik'>
                        <Project title="Project 3" />
                        </a>
                        <a href='https://othmanedendane.github.io/meteo'>
                        <Project title="Project 4" />
                        </a>
                        <a href='https://othmanedendane.github.io/chess'>
                        <Project title="Project 5" />
                        </a>
                        {/* Row 3 */}
                        <a href='https://othmanedendane.github.io/shop'>
                        <Project title="Project 6" />
                        </a>
                        <a href='https://othmanedendane.github.io/arcade'>
                        <Project title="Project 7" />
                        </a>
                        <div className="flex justify-center text-center items-center p-10 bg-blue
                        max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
                            Smooth User Experience
                        </div>

            </motion.div>
        </div>

        </section>
    )
}

export default Projetcs;