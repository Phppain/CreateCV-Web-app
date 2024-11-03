import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Link } from "react-router-dom";
import OpportonutiesPart from "./parallax_blocks/OpportonutiesPart";

export const MyParallax = () => {
    return (
        <>
            <Parallax pages={3} className="parallax_background">
                <ParallaxLayer offset={0} className="parallax_back_none">
                    <div className="meet_part__content __content">
                        <h1>CCV</h1>
                        <p>The web-site for create your CV</p>
                        <div className="button">
                            <Link to="/create">Create CV</Link>
                        </div>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={1} className="parallax">
                    <OpportonutiesPart />
                </ParallaxLayer>

                <ParallaxLayer offset={2} className="footer">
                    <div className="welcome_part__content __content">
                        <h1>Welcome User</h1>
                        <Link to="/create">Get Started</Link>
                    </div>
                    <footer>
                        <div className="contacts">
                            <h3>Contacts</h3>

                            <p>+7 700 658 1868</p>
                            <div className="social-networks-footer">
                                <a href="https://www.instagram.com/php.pain">
                                    <img
                                        id="instagram-logo-footer"
                                        src={`${process.env.PUBLIC_URL}/icons/instagram-logo-light.png`}
                                    />
                                </a>

                                <a href="https://github.com/Phppain">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/icons/github-logo-light.png`}
                                        id="github-logo-footer"
                                    />
                                </a>
                            </div>
                        </div>
                    </footer>
                </ParallaxLayer>
            </Parallax>
        </>
    );
};

export default MyParallax;
