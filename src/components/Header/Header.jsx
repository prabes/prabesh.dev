import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import data from "../../data";
import "./header.css";

const useStyles = makeStyles({
	grid: {
		height: "40vh",
		alignItems: "flex-end",
	},
	gridItem: {
		display: "flex",
		justifyContent: "center",
	},
	name: {
		fontVariantCaps: "all-petite-caps",
		fontSize: "3.5rem",
		fontFamily: "system-ui",
		fontWeight: "bold",
	},
});

const Header = () => {
	const classes = useStyles();
	return (
		<div className="mask">
			<div className="header-wrapper">
				<Grid container className={classes.grid}>
					<Grid item lg={4} md={5} xs={10} className={classes.gridItem}>
						<div className="main-info">
							<h2 className={classes.name}>
								<b>{data.fullName}</b>
							</h2>
							<h5>{data.description}</h5>
						</div>
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

export default Header;
