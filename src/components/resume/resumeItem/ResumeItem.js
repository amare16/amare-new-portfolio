import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const ResumeItem = ({ year, title, subTitle, text }) => {
    return (
        <Row className="resume-item-row" style={{marginTop: "20px"}}>
            <ResumeItemStyled>
            <Col md={2} className="left-content">
                <p>{year}</p>
            </Col>
            <Col md={10} className="right-content">
                <h5>{title}</h5>
                <h6>{subTitle}</h6>
                <p>{text}</p>
            </Col>
            
            {/* <div className="left-content">
                <p>{year}</p>
            </div>
            <div className="right-content">
                <h5>{title}</h5>
                <h6>{subTitle}</h6>
                <p>{text}</p>
            </div> */}
            </ResumeItemStyled>
            </Row>
        
    );
};

const ResumeItemStyled = styled.div`
    display: flex;
    @media screen and (max-width: 421px) {
        p, h5, h6 {
            font-size: 80%;
        }
    }
    &:not(:last-child) {
        padding-bottom: 3rem;
    }
    .left-content {
        padding-left: 20px;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            left: -12px;
            top: 5px;
            height: 18px;
            width: 18px;
            border-radius: 50%;
            border: 4px solid #2e344e;
            background-color: green;
        }
        p{
            display: inline-block;
        }
    }
    .right-content{
        padding-left: 5rem;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 15px;
            height: 5px;
            width: 3rem;
            background-color: #4b1919;
        }
        h5{
            color: var(--primary-color);
            font-size: 2rem;
            padding-bottom: .4rem;
        }
        h6{
            padding-bottom: .6rem;
            font-size: 1.5rem;
        }
        p {
            text-align: justify;
        }
    }
`

export default ResumeItem;