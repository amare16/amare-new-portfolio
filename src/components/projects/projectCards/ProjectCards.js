import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { BiLinkExternal } from 'react-icons/bi';
import './projectCards.css';


const ProjectCards = (props) => {
    return (
        <Card className="projects-card">
            <Card.Img variant="top" src={props.imgPath} alt="card-img" />
            <Card.Body>
                <Card.Title style={{textAlign: "center", color: "#890636", fontSize: "24px", fontWeight: "bold"}}>{props.title}</Card.Title>
                <Card.Text style={{textAlign: "justify"}}>
                    {props.description}
                </Card.Text>
                <Button variant="primary" href={props.link} target="_blank">
                    <BiLinkExternal /> &nbsp;
                    {props.isBlog ? "View Blog" : "View Project"}
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProjectCards;