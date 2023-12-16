import React, {Component} from 'react';
import {useTranslation} from "react-i18next";
import data from "../i18n";
import {useParams} from "react-router-dom";
import {Card, CardBody, CardImg, CardSubtitle, CardTitle, Container} from "react-bootstrap";
import thieves from "./triev.json"

const Person = () => {
    const {t} = useTranslation();
    const {id} = {id:"name"}
  //  const thieve = thieves["thief list"][1];
    document.title = id;
    return (
        <div className="container mx-auto font-mono">
            <Container className="d-flex justify-content-center mt-5">
                <Card border="secondary" className="doer">
                    <CardImg src={require(`../images/${id}`)}/>
                    <CardBody>
                        <CardTitle className="text-center">{t(`${id}`)}</CardTitle>
                       {/* <CardSubtitle className="text-muted mb-3 text-center">{data[id]["yearsOfLive"]}</CardSubtitle>*/}
                    </CardBody>
                </Card>
            </Container>
        </div>
    );
}

export default Person;