import React from "react";
import data from "../../data";
import "./footer.css";

const Footer = () => {
	return (
		<div className="footer-wrapper">
			<div className="footer-container">
				<div className="title">{data.pageTitle}</div>
				<div className="social-links">Social Links Here!</div>
				<div className="contacts">{data.contactMail}</div>
			</div>
		</div>
	);
};

export default Footer;
