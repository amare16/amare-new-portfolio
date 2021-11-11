import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MyProgrammingStack from './myProgrammingStack/MyProgrammingStack';
import OtherSkills from './otherSkills/OtherSkills';
import './skills.css';

const Skills = () => {
    return (
        <Container fluid className="skills-container">
            <Row className="skills-programme-stack-row">
                <Col md={8} className="skills-programme-stack-col">
                    <h1 className="area-expertise-heading">
                         Area of <strong className="purple">Expertise </strong>
                    </h1>
                    <MyProgrammingStack />
                </Col>
            </Row>
            <Row className="skills-other-skills-row">
                <Col md={9} className="skills-other-skills-col">
                    <h1 className="area-expertise-heading">
                         Other <strong className="purple">Skills </strong>
                    </h1>
                    <OtherSkills />
                </Col>
            </Row>
        </Container>
    );
};

export default Skills;