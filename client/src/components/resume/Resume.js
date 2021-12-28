import React from 'react';
import styled from 'styled-components';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SmallTitle from './smallTitle/SmallTitle';
import Title from './title/Title';
import ResumeItem from './resumeItem/ResumeItem';
import { Container, Row, Col } from 'react-bootstrap';

const Resume = () => {
    return (
        <Container>
            <Title title={'Resume'} />
            <Row>
                <Col md={7}>
                    <div className="small-title">
                        <SmallTitle icon={<BusinessCenterIcon />} title={'Working Experience'} />
                    </div>
                </Col>
            </Row>
            <Row style={{marginBottom: '100px'}}>
                <Col md={12} className="col-year">
                <div className="resume-content" style={{borderLeft: "5px solid #007bff"}}>
                 <ResumeItem
                    year={'Mars 2021 - Jul 2021'}
                    title={'Mobile Application Developer'} 
                    subTitle={'Beagle Society'}
                    text1={'Creation of mobile dating application with React Native, Redux, Node js technology and the Mongodb database'}
                    text2={'Creation of API in Node js with its framework Express js and test it using POSTMAN software'}
                    text3={'Create the registration feature with phone number using of the Amazon Simple Notification Service (SNS) service to create confirmation code'}
                    text4={'Design and develop data persistence with MongoDB. In addition, use of CRUDs (Create, Read, Update and Delete)'}
                 />
                 <ResumeItem
                    year={'Oct 2020 - Dec 2020'}
                    title={'Freelance'} 
                    subTitle={'Mobilier Startup'}
                    text1={'Modification and debugging of the Woocommerce web site'}
                    text2={'Addition of a payment functionality, Credit Card and Paypal'}
                    text3={'Securing the web site via HTTPS'}
                    text4={'https://www.mobilier-de-startup.com/'}
                 />
                 <ResumeItem
                    year={'July 2020 - Aug 2020'}
                    title={'Freelance'} 
                    subTitle={'Joka Jobs'}
                    text1={'Creation of a showcase site for the company JokaJobs with Wordpress'}
                    text2={'Implementation of Elementor plugin and modification with CSS'}
                    text3={'Creation and modification of the database, MYSQL'}
                    text4={'https://jokajobs.com/'}
                 />
                 <ResumeItem
                    year={'Jan 2019 - Apr 2020'}
                    title={'Junior Developer - Internship'} 
                    subTitle={'BNP Paribas'}
                    text1={'Improvement and management of existing Zend (PHP framework) Application functionalities'}
                    text2={'Creation of the Generic Box functionality to distribute the management of emails received via the team email between the Application Managers (AR). This functionality is managed by an admin. He assigns each RA each week to the responsibility of classifying all emails received in the generic box. To create this functionality, applied the MVC architecture and CRUD operations with the Zend framework.'}
                    text3={'Creation of the Skills Management application. This application should allow the manager for a given sector to analyze the skills of his team and ensure that the skills covered are in line with the needs. In addition, it allows the manager to establish and formalize the training plan for employees in his sector.'}
                    text4={'Database design'}
                 />
                 <ResumeItem
                    year={'Nov 2017 - Dec 2017'}
                    title={'Junior Developer'} 
                    subTitle={'XPANS'}
                    text1={'Improvement of MYSQL database (inserting, modifying and deleting queries)'}
                    text2={'Creation of a search bar with PHP and AJAX by addind fields in tables and removing unnecessary fields'}
                 />
                 <ResumeItem
                    year={'Dec 2007 - Aug 2012'}
                    title={'Assistant Researcher'} 
                    subTitle={'Ethiopian Institute of Agricultural Research (EIAR) '}
                    text1={`Use of statistical software to analyze data from
                    laboratory and field experiments`}
                    text2={`Horticultural research: creation of seeds adapted to
                    Ethiopian environments (vegetables and fruits)`}
                    text3={`Work in collaboration with farms from different regions
                    from Ethiopia`}
                 />
                 <ResumeItem
                    year={'July 2020 - Aug 2020'}
                    title={'Freelance'} 
                    subTitle={'Joka Jobs'}
                    text1={'Team management: two teams of 15 people'}
                    text2={'Establishment of objectives, team monitoring and quality control'}
                    text3={'Flower treatment: biology, disease protection'}
                 />
               </div>
                </Col>
            </Row>
        </Container>
        // <ResumeStyled>
        //     <Title title={'Resume'} />
        //     <InnerLayout>
        //       <div className="small-title">
        //            <SmallTitle icon={<BusinessCenterIcon />} title={'Working Experience'} />
        //       </div>
        //       <div className="resume-content">
        //          <ResumeItem
        //             year={'2021'}
        //             title={'MOBILE APPLICATION DEVELOPER'} 
        //             subTitle={'Beagle Society'}
        //             text={'Creation of mobile application with React Native, Redux, Node js technology and the Mongodb database'}
        //          />
        //        </div>
        //      </InnerLayout>
        // </ResumeStyled>
    );
};

// const ResumeStyled = styled.section`
//     .small-title {
//         padding-bottom: 3rem;
//     }
//     .u-small-title-margin {
//         margin-top: 4rem;
//     }
//     .resume-content {
//         border-left: 1px solid #2e344e;
//     }
// `;

// const InnerLayout = styled.div`
//     padding: 5rem 0;
//     margin-left: 100px;
// `

export default Resume;