import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Box,
  ListItem,
  ListItemSecondaryAction,
  Card,
  CardActionArea,
  CardContent,
} from "@material-ui/core/";
//import NavbarComponent from "../partials/NavbarComponent";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#053b0a",
    [theme.breakpoints.up(996)]: {
        marginBottom: "30px !important",
    },
    [theme.breakpoints.up(768)]: {
        marginBottom: "70px",
    },
    [theme.breakpoints.down(768)]: {
        marginBottom: "130px",
    },
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "max-content",
    margin: "0 3rem 0 auto",
    fontSize: "1.5rem",
    background: "#4b1919",
    borderRadius: "25px",
    color: "white",
    lineHeight: 1,
    padding: "0.5 rem 0 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):befor": {
        display: "none",
      },
    },
  },
  heading: {
    paddingTop: "120px",
    marginBottom: "30px",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "white",
  },
  subHeading: {
    color: "#009900",
    padding: "0",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  companyName: {
    color: "#5708e7",
    fontSize: "24px",
    fontWeight: "bold"
  },
  experienceContent: {
      boxShadow: '0 4px 6px 5px #81448f',
      "&:hover": {
        transform: "scale(1.10) !important",
      }
  },
  list: {
    listStyle: "none",
    fontFamily: "Comic Sans MS",
  }
}));
const Experiences = () => {
  const classes = useStyles();
  return (
    <>
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          Experiences
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            Mars 2021 - Jul 2021
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Card className={classes.experienceContent}>
              <CardActionArea>
                <CardContent>
                  <Typography
                    variant="h5"
                    align="center"
                    className={classes.subHeading}
                  >
                    Mobile Application Developer
                  </Typography>
                  <Typography
                    variant="body1"
                    align="center"
                    className={classes.companyName}
                  >
                    Beagle Society
                  </Typography>
                  <Typography variant="subtitle1" align="justify">
                    <ul>
                      <li className={classes.list}>
                        ⏹ Creation of mobile dating application with React Native,
                        Redux, Node js technology and the Mongodb database
                      </li>
                      <li className={classes.list}>
                        ⏹ Creation of API in Node js with its framework Express js
                        and test it using POSTMAN software
                      </li>
                      <li className={classes.list}>
                        ⏹ Create the registration feature with phone number using
                        of the Amazon Simple Notification Service (SNS) service
                        to create confirmation code
                      </li>
                      <li className={classes.list}>
                        ⏹ Design and develop data persistence with MongoDB. In
                        addition, use of CRUDs (Create, Read, Update and Delete)
                      </li>
                    </ul>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            Oct 2020 - Dec 2020
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Card className={classes.experienceContent}>
              <CardActionArea>
                <CardContent>
                  <Typography
                    variant="h5"
                    align="center"
                    className={classes.subHeading}
                  >
                    Freelancer
                  </Typography>
                  <Typography
                    variant="body1"
                    align="center"
                    className={classes.companyName}
                  >
                    Mobilier Startup
                  </Typography>
                  <Typography variant="subtitle1" align="justify">
                    <ul>
                      <li className={classes.list}>
                      ⏹ Modification and debugging of the Woocommerce web site
                      </li>
                      <li className={classes.list}>
                      ⏹ Addition of a payment functionality, Credit Card and Paypal
                      </li>
                      <li className={classes.list}>
                      ⏹ Securing the web site via HTTPS
                      </li>
                      <li className={classes.list}>
                      <a href="https://www.mobilier-de-startup.com/" target="_blank">See the website</a>
                      </li>
                    </ul>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            July 2020 - Aug 2020
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Card className={classes.experienceContent}>
              <CardActionArea>
                <CardContent>
                  <Typography
                    variant="h5"
                    align="center"
                    className={classes.subHeading}
                  >
                    Freelancer
                  </Typography>
                  <Typography
                    variant="body1"
                    align="center"
                    className={classes.companyName}
                  >
                    Joka Jobs
                  </Typography>
                  <Typography variant="subtitle1" align="justify">
                    <ul>
                      <li className={classes.list}>
                      ⏹ Creation of a showcase site for the company JokaJobs with Wordpress
                      </li>
                      <li className={classes.list}>
                      ⏹ Implementation of Elementor plugin and modification with CSS
                      </li>
                      <li className={classes.list}>
                      ⏹ Creation and modification of the database, MYSQL
                      </li>
                      <li className={classes.list}>
                      <a href="https://jokajobs.com/" target="_blank">See the website</a>
                      </li>
                    </ul>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            Jan 2019 - Apr 2020
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Card className={classes.experienceContent}>
              <CardActionArea>
                <CardContent>
                  <Typography
                    variant="h5"
                    align="center"
                    className={classes.subHeading}
                  >
                    Junior Developer - Internship
                  </Typography>
                  <Typography
                    variant="body1"
                    align="center"
                    className={classes.companyName}
                  >
                    Bnp Paribas
                  </Typography>
                  <Typography variant="subtitle1" align="justify">
                    <ul>
                      <li className={classes.list}>
                      ⏹ Improvement and management of existing Zend (PHP
                        framework) Application functionalities
                      </li>
                      <li className={classes.list}>
                      ⏹ Creation of the Generic Box functionality to distribute
                        the management of emails received via the team email
                        between the Application Managers (AR). This
                        functionality is managed by an admin. He assigns each RA
                        each week to the responsibility of classifying all
                        emails received in the generic box. To create this
                        functionality, applied the MVC architecture and CRUD
                        operations with the Zend framework.
                      </li>
                      <li className={classes.list}>
                      ⏹ Creation of the Skills Management application. This
                        application should allow the manager for a given sector
                        to analyze the skills of his team and ensure that the
                        skills covered are in line with the needs. In addition,
                        it allows the manager to establish and formalize the
                        training plan for employees in his sector.
                      </li>
                      <li className={classes.list}>
                      ⏹ Database design
                      </li>
                    </ul>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            Nov 2017 - Dec 2017
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Card className={classes.experienceContent}>
              <CardActionArea>
                <CardContent>
                  <Typography
                    variant="h5"
                    align="center"
                    className={classes.subHeading}
                  >
                    Junior Developer
                  </Typography>
                  <Typography
                    variant="body1"
                    align="center"
                    className={classes.companyName}
                  >
                    XPANS
                  </Typography>
                  <Typography variant="subtitle1" align="justify">
                    <ul>
                      <li className={classes.list}>
                      ⏹ Improvement of MYSQL database (inserting, modifying and deleting queries
                      </li>
                      <li className={classes.list}>
                      ⏹ Creation of a search bar with PHP and AJAX by addind fields in tables and removing unnecessary fields
                      </li>
                    </ul>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            Dec 2007 - Aug 2012
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Card className={classes.experienceContent}>
              <CardActionArea>
                <CardContent>
                  <Typography
                    variant="h5"
                    align="center"
                    className={classes.subHeading}
                  >
                    Assistant Researcher
                  </Typography>
                  <Typography
                    variant="body1"
                    align="center"
                    className={classes.companyName}
                  >
                    Ethiopian Institute of Agricultural Research (EIAR)
                  </Typography>
                  <Typography variant="subtitle1" align="justify">
                    <ul>
                      <li className={classes.list}>
                      ⏹ Use of statistical software to analyze data from laboratory and field experiments
                      </li>
                      <li className={classes.list}>
                      ⏹ Horticultural research: creation of seeds adapted to Ethiopian environments (vegetables and fruits)
                      </li>
                      <li className={classes.list}>
                      ⏹ Work in collaboration with farms from different regions from Ethiopia
                      </li>
                    </ul>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            Jan 2007- Oct 2007
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Card className={classes.experienceContent}>
              <CardActionArea>
                <CardContent>
                  <Typography
                    variant="h5"
                    align="center"
                    className={classes.subHeading}
                  >
                    Supervisor
                  </Typography>
                  <Typography
                    variant="body1"
                    align="center"
                    className={classes.companyName}
                  >
                    ODA Flower Farm
                  </Typography>
                  <Typography variant="subtitle1" align="justify">
                    <ul>
                      <li className={classes.list}>
                      ⏹ Team management: two teams of 15 people
                      </li>
                      <li className={classes.list}>
                      ⏹ Creation of a search bar with PHP and AJAX by addind fields in tables and removing unnecessary fields
                      </li>
                    </ul>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Experiences;
