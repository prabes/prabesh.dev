import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TelegramIcon from "@material-ui/icons/Telegram";

const useStyles = makeStyles({
	social: {
		width: "15%",
		display: "flex",
		justifyContent: "space-evenly",
	},
});

const SocialLink = () => {
	const classes = useStyles();
	let url;
	const handleClick = (link) => {
		switch (link) {
			case "twitter":
				url = "https://twitter.com/_prabes";
				break;
			case "linkedIn":
				url = "https://www.linkedin.com/in/prabesh-dahal-64109814b/";
				break;
			case "telegram":
				url = "https://t.me/prabessh";
				break;
			case "github":
				url = "https://github.com/prabes";
				break;
			default:
				url = "#";
				break;
		}
		// #TODO Use select case here if linkedin is added
		window.open(url);
	};

	return (
		<div className={classes.social}>
			<IconButton
				aria-label="Twitter"
				onClick={() => handleClick("twitter")}
				style={{
					height: "12px",
					width: "12px",
					color: "ghostwhite",
				}}
			>
				<TwitterIcon />
			</IconButton>
			<IconButton
				aria-label="LinkedIn"
				onClick={() => handleClick("linkedIn")}
				style={{ height: "12px", width: "12px", color: "white" }}
			>
				<LinkedInIcon />
			</IconButton>
			<IconButton
				aria-label="Telegram"
				onClick={() => handleClick("telegram")}
				style={{ height: "12px", width: "12px", color: "white" }}
			>
				<TelegramIcon />
			</IconButton>
			<IconButton
				aria-label="Github"
				onClick={() => handleClick("github")}
				style={{ height: "12px", width: "12px", color: "white" }}
			>
				<GitHubIcon />
			</IconButton>
		</div>
	);
};

export default SocialLink;
