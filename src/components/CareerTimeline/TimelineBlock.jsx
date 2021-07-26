import {
	Timeline,
	TimelineItem,
	TimelineSeparator,
	TimelineDot,
	TimelineConnector,
	TimelineContent,
	TimelineOppositeContent,
} from "@material-ui/lab";

import FastfoodIcon from "@material-ui/icons/Fastfood";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const TimelineBlock = () => {
	return (
		<>
			<div
				style={{
					paddingTop: "8%",
					height: "92vh",
					backgroundColor: "black",
					display: "flex",
					justifyContent: "space-evenly",
				}}
			>
				<div
					style={{
						width: "40%",
					}}
				>
					{/* #TODO: Make this timeline dynamic - one block for each experience - also handle multiple roles on same Org. */}
					<Timeline align="left">
						<TimelineItem>
							<TimelineOppositeContent>
								<Typography variant="body2" color="textSecondary">
									Date: Jan 2020 - Nov 2020 . 11 mos
								</Typography>
							</TimelineOppositeContent>
							<TimelineSeparator>
								<TimelineDot>
									<FastfoodIcon />
								</TimelineDot>
								<TimelineConnector />
							</TimelineSeparator>
							<TimelineContent>
								<Paper elevation={3}>
									<Typography variant="h6" component="h1">
										Eat
									</Typography>
									<Typography>
										Because you need strength lastai dherai content here this
										goes as we add so no worries we can get the required size
									</Typography>
								</Paper>
							</TimelineContent>
						</TimelineItem>
					</Timeline>
				</div>
				<div style={{ width: "50%" }}>
					# TODO yha Typography ma rakhera styles haru add garna paryo ! 1.
					Heading ma Org ko namm 2. Job Title 3. Description Baaki Episode Here
				</div>
			</div>
		</>
	);
};

export default TimelineBlock;
