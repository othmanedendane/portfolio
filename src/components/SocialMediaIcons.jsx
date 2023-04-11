
import Image1 from "../assets/github.png";
import Image2 from '../assets/linkedin.png';
import Image3 from "../assets/facebook.png";
import Image4 from "../assets/instagram.png";


const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
             className="hover:opacity-50 transition duration-500"
             href="https://www.linkedin.com/in/othmane-dendane-55a26815b/"
             target="_blank" //open a new tab
             rel="noreferrer" //to have no issues with older browsers
            >

                <img alt="linkedin-link" src={Image2} />

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

                <img alt="facebook-link" src={Image3} />

            </a>

            <a
             className="hover:opacity-50 transition duration-500"
             href="https://www.instagram.com/"
             target="_blank" //open a new tab
             rel="noreferrer" //to have no issues with older browsers
            >

                <img alt="instagram-link" src={Image4} />

            </a>

        </div>
    )

}


export default SocialMediaIcons;