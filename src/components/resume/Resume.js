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
            <Row>
                <Col md={12} className="col-year">
                <div className="resume-content" style={{borderLeft: "5px solid #4b1919"}}>
                 <ResumeItem
                    year={'2021'}
                    title={'MOBILE APPLICATION DEVELOPER'} 
                    subTitle={'Beagle Society'}
                    text={'Creation of mobile application with React Native, Redux, Node js technology and the Mongodb database'}
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