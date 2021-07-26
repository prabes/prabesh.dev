import "./navbar.css";
import data from "../../data";
import SocialLinks from "../Links/SocialLinks";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-color">
			<div className="container">
				<div className="navbar-brand page-title">{data.pageTitle}</div>
				<SocialLinks />
			</div>
		</nav>
	);
};

export default Navbar;
