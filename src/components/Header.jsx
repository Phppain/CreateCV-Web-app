import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div className="content">
            <header className="header">
                <div className="logo_part__header flex">
                    <div>Designed by SAB</div>
                </div>
                <div className="menu_part__header flex">
                    <Link to="/">Welcome</Link>
                    <Link to="/create">Create</Link>
                </div>
                <div className="other_part__header flex">
                    <a
                        href="https://github.com/Phppain/CreateCV"
                        className="a_github"
                    ></a>
                </div>
            </header>
        </div>
    );
};

export default Header;
