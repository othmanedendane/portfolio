import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Image from "../assets/contact-image.jpeg";

const Contact = () => {
    const {
        register,
        trigger,
        formState: {errors}
    } = useForm();

    const onSubmit = async (e) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }

    function sendEmail(e) {
        
    }

    return (
        <section id="contact" className="py-48">
            {/* Heading */}
            <motion.div
                
                initial="hidden" //hidden represant when we start
                whileInView="visible" //once this div is seen or shown on the screen then we can run our animation
                viewport={{ once: true, amount: 0.5 }} //this animation will run when you get to this point in the page
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50}, //opacity:0=not visible, start -50 from x 
                    visible: { opacity: 1, x: 0} //goes to an opacity of 1=visible, and from a postion of -50 to 0
                }}>
                    <div>
                    <p className="font-playfair font-semibold text-4xl">
                        <span className="text-yellow">Contact me</span> to get started
                    </p>
                    <div className="flex md:justify-end my-5">
                    <LineGradient width="mx-auto w-2/4" />
                    </div>
                 
                    </div>

        </motion.div>
        {/* form & image */}
        <div className="md:flex md:justify-between gap-16 mt-5">
                <motion.div
                className="basis 1/2 flex justify-center"
                 initial="hidden" //hidden represant when we start
                 whileInView="visible" //once this div is seen or shown on the screen then we can run our animation
                 viewport={{ once: true, amount: 0.5 }} //this animation will run when you get to this point in the page
                 transition={{ duration: 0.5 }}
                 variants={{
                     hidden: { opacity: 0, y: -50}, //opacity:0=not visible, start -50 from x 
                     visible: { opacity: 1, y: 0} //goes to an opacity of 1=visible, and from a postion of -50 to 0
                 }}>
                    <img src={Image} alt="contact" />
                </motion.div>

                <motion.div
                className="basis 1/2 mt-10 md:mt-0"
                 initial="hidden" //hidden represant when we start
                 whileInView="visible" //once this div is seen or shown on the screen then we can run our animation
                 viewport={{ once: true, amount: 0.5 }} //this animation will run when you get to this point in the page
                 transition={{ delay: 0.2, duration: 0.5 }}
                 variants={{
                     hidden: { opacity: 0, y: -50}, //opacity:0=not visible, start -50 from x 
                     visible: { opacity: 1, y: 0} //goes to an opacity of 1=visible, and from a postion of -50 to 0
                 }}>

                    <form
                        target="_blank"
                        onSubmit={onSubmit}
                        action="https://formsubmit.co/othmanedendane99@gmail.com"
                        method="POST"
                    >
                        <input 
                            className="w-full bg-blue font-semibold placeholder-opaque-black p-3"
                            type="text"
                            placeholder="NAME"
                            {...register("name", {
                                required: true,
                                maxLength: 100,
                            })}
                        />
                        {errors.name && (
                            <p className="text-red mt-1">
                                {errors.name.type === "required" && "This field is required."}
                                {errors.name.type === "maxLength" && "Max length is 100 char."}
                            </p>

                        )}
                        <input 
                             className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
                             type="text"
                             placeholder="EMAIL"
                             {...register("email", {
                                 required: true,
                                 pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                             })}
                        />
                        {errors.email && (
                            <p className="text-red mt-1">
                                {errors.email.type === "required" && "This field is required."}
                                {errors.email.type === "pattern" && "Invalid email address."}
                            </p>

                        )}


                        <textarea
                             className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
                             type="text"
                             placeholder="MESSAGE"
                             rows="4"
                             cols="50"
                             {...register("message", {
                                 required: true,
                                 maxLength: 2000
                             })}
                        />
                        {errors.message && (
                            <p className="text-red mt-1">
                                {errors.message.type === "required" && "This field is required."}
                                {errors.message.type === "maxLength" && "Max length is 2000 char."}
                            </p>

                        )}


                        <button
                            type="submit"
                            className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red
                            hover:text-white transition duration-500"
                        >

                            SEND ME A MESSAGE
                        </button>


                    </form>

                </motion.div>

        </div>
        </section>
    )

}

export default Contact;