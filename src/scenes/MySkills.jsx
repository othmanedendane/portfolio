import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Image from "../assets/skills-image.png";

const MySkills = () => {

        const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
        
return (
    <section id="skills" className="pt-10 pb-24">
        {/* Header and image section */}
    <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
        className="md:w-1/3"
        initial="hidden" //hidden represant when we start
                whileInView="visible" //once this div is seen or shown on the screen then we can run our animation
                viewport={{ once: true, amount: 0.5 }} //this animation will run when you get to this point in the page
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50}, //opacity:0=not visible, start -50 from x 
                    visible: { opacity: 1, x: 0} //goes to an opacity of 1=visible, and from a postion of -50 to 0
                }}>
                    <p className="font-playfair font-semibold text-4xl mb-5">
                        MY <span className="text-red">SKILLS</span>
                    </p>
                    <LineGradient width="w-1/3" />
                    <p className="mt-10 mb-7">
                    Technical proficiency, Problem-solving abilities, Attention to detail & Continuous learning
                    </p>

        </motion.div>

        <div className="mt-16 md:mt-0">
            {isAboveMediumScreens ? (
                    <div
                    className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                    before:w-full before:h-full
                    before:border-2 before:border-blue before:z-[-1]"
                    >
                        <img 
                        alt="skills"
                        className="z-10" //so that it pops up
                        src={Image}
                        
                        />
                    </div>
                    
            ) : (
                <img alt="skills"
                className="z-10" //so that it pops up
                src={Image}
                
                />
            )}
        </div>
    </div>
                {/* Skills */}
                <div className="md:flex md:justify-between mt-16 gap-32">
                {/* Experience */}
                <motion.div
                className="md:w-1/3 mt-10" 
                initial="hidden" //hidden represant when we start
                        whileInView="visible" //once this div is seen or shown on the screen then we can run our animation
                        viewport={{ once: true, amount: 0.5 }} //this animation will run when you get to this point in the page
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50}, //y so it comes from the bottom
                            visible: { opacity: 1, y: 0} //goes to an opacity of 1=visible, and from a postion of 50 to 0
                        }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">01</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">Experience</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5 text-s" >
                    My career started in 2019 I worked on several freelance projects and I have more than 25 functional, innovative and creative projects.
                    During this time I worked on several projects and became proficient in software development practices such as version control, debugging and testing.
                    </p>


                </motion.div>

                {/* Innovative */}
                <motion.div
                className="md:w-1/3 mt-10"
                initial="hidden" //hidden represant when we start
                        whileInView="visible" //once this div is seen or shown on the screen then we can run our animation
                        viewport={{ once: true, amount: 0.5 }} //this animation will run when you get to this point in the page
                        transition={{ delay:0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50}, //y so it comes from the bottom
                            visible: { opacity: 1, y: 0} //goes to an opacity of 1=visible, and from a postion of 50 to 0
                        }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">02</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">Innovative</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5 text-s">
                    I am a programming trailblazer, constantly pushing the boundaries of what's possible with my innovative coding solutions. 
                    My programming prowess is matched only by my endless curiosity and hunger for learning.

                    </p>


                </motion.div>



                 {/* Imaginative */}
                 <motion.div
                className="md:w-1/3 mt-10"
                initial="hidden" //hidden represant when we start
                        whileInView="visible" //once this div is seen or shown on the screen then we can run our animation
                        viewport={{ once: true, amount: 0.5 }} //this animation will run when you get to this point in the page
                        transition={{ delay:0.4, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50}, //y so it comes from the bottom
                            visible: { opacity: 1, y: 0} //goes to an opacity of 1=visible, and from a postion of 50 to 0
                        }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">03</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">Imaginative</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5 text-s">
                    I am a programming visionary, combining my technical expertise with a boundless imagination to create cutting-edge software solutions. 
                    My imaginative approach to programming consistently delivers products that exceed expectations and set new industry standards.

                    </p>


                </motion.div>

                </div>

                
    </section>

    

)

};

export default MySkills;