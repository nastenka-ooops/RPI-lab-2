import React, {Component, useState} from 'react';
import {useTranslation} from "react-i18next";
import data from "./triev.json";
import {Alert, Form, InputGroup, ListGroup, ListGroupItem} from "react-bootstrap";
import {Link} from "react-router-dom";

const Thieves = () => {
    const [value, setValue] = useState('');
    const {t} = useTranslation();
    let translated = []
    let keys = []
    Object.keys(data).map(name => {
            translated.push(`${t(`${name}.name`)}`);
            keys.push(`${name}`)
        }
    )
    const filtered = translated.filter(name => {
        return translated[translated.indexOf(name)].toLowerCase().includes(value.toLowerCase())
    })

    document.title = t("header.thieves")
    return (
        <div className="container mx-auto my-3">
            <div>
                <Alert variant="dark" >
                    <h2 className="text-center mt-2 mb-2">{t("search.thieves_list")}</h2>
                </Alert>
            </div>

            <div className="flex justify-center flex-col align-middle">
                <Form className="d-flex mt-3 mb-3">
                    <InputGroup>
                        <Form.Control
                            placeholder={t("search.Search")}
                            type="search"
                            className="search-field"
                            onChange={(event) => setValue(event.target.value)}/>
                    </InputGroup>
                </Form>

                <ListGroup className="mt-1">
                    {filtered.map(elem =>
                        <ListGroup.Item key={translated.indexOf(elem)} action variant="dark" as={Link}
                                        to={`/person/${keys[translated.indexOf(elem)]}`}>
                            <div className="d-flex">
                                <img className="w-25 my-auto"
                                     src={`./images/${keys[translated.indexOf(elem)]}/img1.jpg`}/>
                                <div className="text mx-3">
                                    <p className="fw-bold" style={{fontSize: "30px"}}>{t(`${elem}`)}</p>
                                    <p className="fw-semibold" style={{fontSize: "25px"}}>{t(`${keys[translated.indexOf(elem)]}.years`)}</p>
                                    <p className="fw-semibold" style={{fontSize: "20px"}}>
                                        {t("main.day_info.nickname")}
                                        {": "}
                                        {t(`${keys[translated.indexOf(elem)]}.nickname`)}
                                    </p>
                                    <p className="fw-semibold" style={{fontSize: "20px"}}>
                                        {t("main.day_info.region")}
                                        {": "}
                                        {t(`${keys[translated.indexOf(elem)]}.region`)}
                                    </p>
                                    <p style={{fontSize: "20px"}}>{t(`${keys[translated.indexOf(elem)]}.long_info`)}</p>
                                </div>
                            </div>
                        </ListGroup.Item>
                    )
                    }
                </ListGroup>
            </div>
        </div>
    )
}
export default Thieves;