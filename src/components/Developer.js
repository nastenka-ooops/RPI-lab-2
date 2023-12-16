import React, { Component } from 'react';

const Developer = ({ src, name, link, mail }) => {
    return (
        <div className="d-flex align-items-center">
            <img
                src={src}
                alt="Developer's photo"
                style={{ width: "80px" }}
                className="rounded-circle" />
            <div className="ms-4">
                <p className="fw-bold mb-1">{name}</p>
                <p className="mb-0">{mail}</p>
                <a style={{ textDecoration: "none" }} href={link}>{link}</a>
            </div>
        </div>
    );
}

export default Developer;