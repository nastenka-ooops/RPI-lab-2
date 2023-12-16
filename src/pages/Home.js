import React, {Component} from 'react';
import {useTranslation} from "react-i18next";
import {Alert, Button, Card, Container, ListGroup} from "react-bootstrap";
import data from "./triev.json";
import {Link} from "react-router-dom";
import Developer from "../components/Developer";
import kate from "../images/kate.jpg"

const Home = () => {
    const {t} = useTranslation();
    const id = Object.keys(data)[(new Date().getDate()) % 5];
    document.title = t("header.title")
    return (
        <div>
        <Alert className="mt-3 mx-1" variant="dark">
            <h2 className="text-center">{t("main.welcome")}</h2>
            <p className="text-center">{t("main.portal info")}</p>
        </Alert>

            <Container className="d-flex justify-content-center mt-5">
                <Card border="secondary" className = "doer">
                    <Card.Header className="text-center" style={{ fontSize: "30px" }}>{t("main.day thief")}</Card.Header>
                    <Card.Img src={require(`../images/${id}/img1.jpg`)} />
                    <Card.Body>
                        <Card.Title>{t(`${id}.name`)}</Card.Title>
                        <Card.Subtitle className="text-muted mb-3">{data[id]["yearsOfLife"]}</Card.Subtitle>
                        <Card.Text>
                            {t(`${id}.short info`)}
                        </Card.Text>
                        <Button variant="dark" as={Link} to={`/Person/${id}`}>{t("main.go_to_page")}</Button>
                    </Card.Body>
                </Card>
            </Container>

            <h2 className="text-center mt-5 mb-3">{t("main.developers")}</h2>
            <div className="d-flex justify-content-center mb-2">
                <ListGroup horizontal="xxl">
                    <ListGroup.Item variant="dark">
                        <Developer src={kate} name={t("main.dev info[0]")}
                                   link="https://github.com/ChuritMaklan"
                                   mail="cuklinmarat@gmail.com" />
                    </ListGroup.Item>
                    <ListGroup.Item variant="dark">
                        <Developer src={kate} name={t("main.dev info[1]")}
                                   link="https://github.com/AlexeyRyabov04"
                                   mail="ryabovalexey04@gmail.com" />
                    </ListGroup.Item>
                    <ListGroup.Item variant="dark">
                        <Developer src={kate} name={t("main.dev info[2]")}
                                   link="https://github.com/dkrumkachev"
                                   mail="dkrumkachev@gmail.com" />
                    </ListGroup.Item>
                        <ListGroup.Item variant="dark">
                        <Developer src={kate} name={t("main.dev info[3]")}
                                   link="https://github.com/dkrumkachev"
                                   mail="dkrumkachev@gmail.com" />
                    </ListGroup.Item>
                </ListGroup>
            </div>

        </div>
    )
}
export default Home;