import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { makeStyles } from "@material-ui/core/styles";
import Image from "./assets/images/homePage1.jpeg";

const useStyles = makeStyles({
	appWrapper: {
		backgroundImage: `url(${Image})`,
		height: "100vh",
		backgroundSize: "cover",
		backgroundPosition: "center",
	},
});

const App = () => {
	const classes = useStyles();
	return (
		<div className={classes.appWrapper}>
			<Navbar />
			<Header />
			<Footer />
		</div>
	);
};

export default App;
