import React, {Component} from 'react';
import {useTranslation} from "react-i18next";
import {Alert, Button, Card, CardGroup, Col, Container, ListGroup, Row} from "react-bootstrap";
import data from "./triev.json";
import {Link} from "react-router-dom";

const Home = () => {
    const {t} = useTranslation();
    const id = Object.keys(data)[(new Date().getDate()) % 6];
    console.log("Id", id)
    document.title = t("header.title")
    return (
        <div>
            <Alert className="mt-3 mx-2" variant="dark">
                <h2 className="text-center">{t("main.welcome")}</h2>
                <hr/>
                <p className="text-center">{t("main.portal info")}</p>
            </Alert>

            <Container className="d-flex justify-content-center mt-5">
                <Card border="dark" className="doer">
                    <Card.Header className="text-center" style={{fontSize: "30px"}}>{t("main.day thief")}</Card.Header>
                    <Card.Img src={`/images/${id}/img1.jpg`}/>
                    <Card.Body>
                        <Card.Title style={{fontSize: "30px"}}>{t(`${id}.name`)}</Card.Title>
                        <Card.Subtitle className="text-muted mb-3" style={{fontSize: "25px"}}>
                            {data[id]["yearsOfLife"]}</Card.Subtitle>
                        <Card.Text>
                            {t("main.day info.nickname")}
                            {": "}
                            {t(`${id}.nickname`)}
                        </Card.Text>
                        <Card.Text>
                            {t("main.day info.region")}
                            {": "}
                            {t(`${id}.region`)}
                        </Card.Text>
                        <Card.Text>
                            {t(`${id}.short info`)}
                        </Card.Text>
                        <Button variant="dark" as={Link} to={`/Person/${id}`}>{t("main.day info.go_to_page")}</Button>
                    </Card.Body>
                </Card>
            </Container>
            <div>
            <Alert className="mt-3 mx-2" variant="dark">
                <h2 className="text-center mt-2 mb-2">{t("main.developers")}</h2>
            </Alert>
            </div>
            <div className="d-flex justify-content-center mb-2">
                <CardGroup className="mb-3 mx-2" variant="dark">
                    <Card className="mx-1" border="dark">
                        <Card.Img src={`/images/developers/anasty.jpg`}/>
                        <Card.Title>
                            {t("main.dev_info.0.name")}
                        </Card.Title>
                        <Card.Text>
                            {t("main.dev_info.0.telegram link")}
                            <Card.Text>
                            {t("main.dev_info.0.github link")}
                            </Card.Text>
                        </Card.Text>
                    </Card>
                    <Card className="mx-1" border="dark">
                        <Card.Img src={`/images/developers/dima.jpg`}/>
                        <Card.Title>
                            {t("main.dev_info.1.name")}
                        </Card.Title>
                        <Card.Text>
                            {t("main.dev_info.1.telegram link")}
                            <Card.Text>
                                {t("main.dev_info.1.github link")}
                            </Card.Text>
                        </Card.Text>
                    </Card>
                    <Card className="mx-1" border="dark">
                        <Card.Img src={`/images/developers/kate.jpg`}/>
                        <Card.Title>
                            {t("main.dev_info.2.name")}
                        </Card.Title>
                        <Card.Text>
                            {t("main.dev_info.2.telegram link")}
                            <Card.Text>
                                {t("main.dev_info.2.github link")}
                            </Card.Text>
                        </Card.Text>
                    </Card>
                    <Card className="mx-1" border="dark">
                        <Card.Img src={`/images/developers/mathew.jpg`}/>
                        <Card.Title>
                            {t("main.dev_info.3.name")}
                        </Card.Title>
                        <Card.Text>
                            {t("main.dev_info.3.telegram link")}
                            <Card.Text>
                                {t("main.dev_info.3.github link")}
                            </Card.Text>
                        </Card.Text>
                    </Card>
                </CardGroup>
            </div>
        </div>
    )
}
export default Home;