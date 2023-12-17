import React from 'react';
import {useTranslation} from "react-i18next";
import data from "./triev.json";
import {useParams} from "react-router-dom";
import {Alert, Card, CardBody, CardImg, Carousel, Container} from "react-bootstrap";
import {Timeline, TimelineItem} from 'vertical-timeline-component-for-react';

import "./Person.css"

const Person = () => {
    const {t} = useTranslation();
    const {id} = useParams()
    document.title = t(`${id}.name`)
    return (
        <div className="container mx-auto font-mono">
            <Container className="d-flex justify-content-center mt-5">
                <Card border="secondary" className="doer">
                    <CardImg className={"person-avatar"} src={`/images/${id}/img1.jpg`}/>
                    <CardBody>
                        <Card.Title className="text-center" style={{fontSize: "40px"}}>{t(`${id}.name`)}</Card.Title>
                        <Card.Subtitle className="text-muted mb-3 text-center"
                                       style={{fontSize: "30px"}}>{data[id]["yearsOfLife"]}</Card.Subtitle>
                        <Card.Text className="text-center"
                                   style={{fontSize: "20px"}}>{t(`${id}.long_info`)} </Card.Text>
                    </CardBody>
                </Card>
            </Container>
            <Timeline lineColor={'#828282'}>
                {
                    data[id]["timelineYears"].map((years, index) =>
                        <TimelineItem key={index} dateText={years} dateInnerStyle={{background: '#212529'}}
                                      bodyContainerStyle={{
                                          background: '#ced4da',
                                          borderRadius: '5px',
                                          padding: '10px'
                                      }}>
                            <p>{t(`${id}.timeInfo${index}`)}</p>
                        </TimelineItem>
                    )
                }
            </Timeline>

            <Alert variant="dark">
                <h2 className="text-center mt-2 mb-2">{t("thief_info.gallery")}</h2>
            </Alert>

            <Carousel className="carousel mb-3">
                {
                    data[id]["photos"].map((text, index) =>
                        <Carousel.Item key={index} className="">
                            <div>
                                <img className="d-block image" src={(`/images/${id}/img${index + 1}.jpg`)}/>
                            </div>
                        </Carousel.Item>
                    )
                }
            </Carousel>

            <Alert variant="dark">
                <h2 className="text-center mt-2 mb-2">{t("thief_info.video")}</h2>
            </Alert>

            <div className="my-3 text-center">
                <iframe width="700" height="400"
                        src={data[id]["youtube"]}
                        allowFullScreen
                />
            </div>

            <Alert variant="dark">
                <h2 className="text-center mt-2 mb-2">{t("thief_info.map")}</h2>
            </Alert>

            <div className="text-center">
                <iframe
                    src={data[id]["map"]}
                    width="700" height="450" allowFullScreen="" loading="lazy">
                </iframe>
            </div>
        </div>

    );
}

export default Person;