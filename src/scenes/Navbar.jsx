import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll"; //will allow us to navigate to certain parts of the page
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page, selectedPage, setSelectedPage }) => { //page-selecte... = parameters
    const lowerCasePage = page.toLowerCase();  //arrow functions
    return (
        <AnchorLink //create a link that will take us to specific parts of the page
            className={`${selectedPage === lowerCasePage ? "text-yellow" : ""} 
            hover:text-yellow transition duration-500`}    //properties / li mselectionya(Selected page) tkon b sfar(Yellow)
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}

const Navbar = ({ isTop, selectedPage, setSelectedPage}) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)"); //ila kant kbar mn 768px = desktop
    const navbarBackground = isTop ? "" :"bg-red"

    return (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-playfair text-3xl font-bold">OD</h4>

                {/* Desktop NAV */}
                {isAboveSmallScreens ? (  //call l const using mediaquery to set at min 768px
                    <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
                        <Link //properties bellow
                            page ="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}

                        />
                        <Link
                            page ="Skills"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page ="Projects"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page ="CV"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page ="Contact"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        </div>
                ) : (
                <button
                    className="rounded-full bg-chibi p-2"
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                    <img alt="menu" src="../assets/menu-icon.svg" />
                </button>
                )}

                {/* Mobile Menu PopUp */}
                {!isAboveSmallScreens && isMenuToggled && (
                    <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
                        {/* Close Icon */}
                        <div className="flex justify-end p-12">
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <img alt="close" src="../assets/close-icon.svg" />
                            </button>
                        </div>

                        {/* Menu Items */}
                        <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue"> {/* we7da te7t we7da, gap:pixels between each one, ml: margin left..*/}
                        <Link //properties bellow
                            page ="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}

                        />
                        <Link
                            page ="Skills"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page ="Projects"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page ="CV"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page ="Contact"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        </div>
                    </div>
                )}

            </div>

        </nav>
    );

};

export default Navbar;