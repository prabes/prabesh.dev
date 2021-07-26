import SocialLinks from "../Links/SocialLinks";
import data from "../../data";
import "./footer.css";

const Footer = () => {
	return (
		<div className="footer-wrapper">
			<div className="footer-container">
				<div className="title">{data.pageTitle}</div>
				<SocialLinks />
				<div className="contacts">{data.contactMail}</div>
			</div>
		</div>
	);
};

export default Footer;
