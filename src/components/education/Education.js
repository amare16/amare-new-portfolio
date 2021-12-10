import React from "react";
import { Typography, Paper, Box } from "@material-ui/core";
import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
} from "@material-ui/lab";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import CastForEducationIcon from "@material-ui/icons/CastForEducation";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainTimeLine: {
    background: "#053b0a",
    [theme.breakpoints.up(996)]: {
        marginBottom: "30px !important",
    },
    [theme.breakpoints.between(768, 996)]: {
        marginBottom: "70px !important",
        height: "auto"
    },
    [theme.breakpoints.between(506, 768)]: {
        marginBottom: "130px !important",
    },
    [theme.breakpoints.down(506)]: {
        marginBottom: "150px !important",
    },
  },
  paper: {
    padding: "6px 16px",
  },
  heading: {
    paddingTop: "120px",
    marginBottom: "30px",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "white",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  educationYear: {
    margin: "10px 0 0 10px",
    color: "white", 
    fontSize: "20px",
    fontWeight: "bold",
  }
}));
const Education = () => {
  const classes = useStyles();
  return (
    <>
      <Box component="header" className={classes.mainTimeLine}>
      <Typography variant="h4" align="center" className={classes.heading} style={{marginBottom: "20px"}}>
          Education
        </Typography>
        <Timeline align="alternate">
          <TimelineItem style={{minHeight: "160px"}}>
            <TimelineOppositeContent>
              <Typography
                variant="body2"
                color="textSecondary"
                className={classes.educationYear}
              >
                2019-2020
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot style={{backgroundColor: "#000080"}} >
                <CastForEducationIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h5" component="h1" style={{color: "green", fontWeight: "bold"}}>
                  Application Designer Developer / Bachelor Degree
                </Typography>
                <Typography variant="h6" component="h1" style={{color: "#333399", fontWeight: "bold"}}>School of Simplon.co, Montreuil, France</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem style={{minHeight: "160px"}}>
            <TimelineOppositeContent>
              <Typography
                variant="body2"
                color="textSecondary"
                className={classes.educationYear}
              >
                2017-2017
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot style={{backgroundColor: "#99003d"}} >
                <CastForEducationIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h5" component="h1" style={{color: "green", fontWeight: "bold"}}>
                PHP Web Developer 3 months training (Certificate)
                </Typography>
                <Typography variant="h6" component="h1" style={{color: "#333399", fontWeight: "bold"}}>ASTON School of IT, France</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem style={{minHeight: "160px"}}>
            <TimelineOppositeContent>
              <Typography
                variant="body2"
                color="textSecondary"
                className={classes.educationYear}
              >
                2016-2016
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot style={{backgroundColor: "#ff6600"}} >
                <CastForEducationIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h5" component="h1" style={{color: "green", fontWeight: "bold"}}>
                Intensive Training in Web Development (Certificate)
                </Typography>
                <Typography variant="h6" component="h1" style={{color: "#333399", fontWeight: "bold"}}>Simplon.co School of IT, Montreuil, France</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem style={{minHeight: "160px"}}>
            <TimelineOppositeContent>
              <Typography
                variant="body2"
                color="textSecondary"
                className={classes.educationYear}
              >
                2002-2006
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot style={{backgroundColor: "#ffcc00"}} >
                <CastForEducationIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h5" component="h1" style={{color: "green", fontWeight: "bold"}}>
                  Horticulture / Bachelor Degree (4 years)
                </Typography>
                <Typography variant="h6" component="h1" style={{color: "#333399", fontWeight: "bold"}}>Jimma University, Jimma, Ethiopia</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </>
  );
};

export default Education;
