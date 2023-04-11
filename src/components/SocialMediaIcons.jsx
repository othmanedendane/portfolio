
import Image1 from "../assets/github.png";


const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
             className="hover:opacity-50 transition duration-500"
             href="https://www.linkedin.com/in/othmane-dendane-55a26815b/"
             target="_blank" //open a new tab
             rel="noreferrer" //to have no issues with older browsers
            >

                <img alt="linkedin-link" src="../assets/linkedin.png" />

            </a>

            <a
             className="hover:opacity-50 transition duration-500"
             href="https://github.com/othmanedendane"
             target="_blank" //open a new tab
             rel="noreferrer" //to have no issues with older browsers
            >

                <img alt="github-link" src={Image1} />

            </a>

            <a
             className="hover:opacity-50 transition duration-500"
             href="https://www.facebook.com/othmane.den"
             target="_blank" //open a new tab
             rel="noreferrer" //to have no issues with older browsers
            >

                <img alt="facebook-link" src="../assets/facebook.png" />

            </a>

            <a
             className="hover:opacity-50 transition duration-500"
             href="https://www.instagram.com/"
             target="_blank" //open a new tab
             rel="noreferrer" //to have no issues with older browsers
            >

                <img alt="instagram-link" src="../assets/instagram.png" />

            </a>

        </div>
    )

}


export default SocialMediaIcons;