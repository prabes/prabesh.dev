import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles({
	social: {
		width: "15%",
		display: "flex",
		justifyContent: "space-evenly",
    alignSelf: "flex-start"
	},
});

const TechLinks = () => {
	const classes = useStyles();

	return (
		<div className={classes.social}>
			<IconButton
				aria-label="Twitter"
				style={{ height: "12px", width: "12px", color: "white" }}
			>
				<FontAwesomeIcon icon={faCoffee} />
			</IconButton>
		</div>
	);
};

export default TechLinks;
