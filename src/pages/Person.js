import React, {Component} from 'react';
import {useTranslation} from "react-i18next";
import data from "./triev.json";
import {useParams} from "react-router-dom";
import {Card, CardBody, CardImg, CardSubtitle, CardTitle, Container} from "react-bootstrap";
import * as PropTypes from "prop-types";
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

const Person = () => {
    const {t} = useTranslation();
    const {id} = useParams()
    document.title = t(`${id}.name`)
    return (
        <div className="container mx-auto font-mono">
            <Container className="d-flex justify-content-center mt-5">
                <Card border="secondary" className="doer">
                    <CardImg src={require(`../images/${id}`)}/>
                    <CardBody>
                        <Card.Title className="text-center">{t(`${id}.name`)}</Card.Title>
                        <Card.Subtitle className="text-muted mb-3 text-center">{data[id]["yearsOfLife"]}</Card.Subtitle>
                        <Card.Text>{t(`${id}.description`)} </Card.Text>
                    </CardBody>
                </Card>
            </Container>
            <Timeline lineColor={'#dddddd'}>
                {
                    data[id]["timelineYears"].map((years, index) =>
                        <TimelineItem key={index} dateText={years} dateInnerStyle={{ background: '#488ffa' }} bodyContainerStyle={{ background: '#1dc3f5', borderRadius: '5px', padding: '10px' }}>
                            <p>{t(`${id}.timeText${index}`)}</p>
                        </TimelineItem>
                    )
                }
            </Timeline>
        </div>
    );
}

export default Person;