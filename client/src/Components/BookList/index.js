import React from 'react'
import {Container, Row, Col} from "../Grid"
import { PromiseProvider } from 'mongoose'

export function BookList ({children}) {
    return <ul className="list-group">{children}</ul>
}

export function BookListItem({
    title,
    author,
    description,
    image,
    date
}) {
    return (
        <li className="list-group-item">
            <Container>
                <Row>
                    <Col size="xs-4 sm-2">
                        <img src={image}/>
                    </Col>
                    <Col size="xs-8 sm-9">
                        <h1>{title}</h1>
                        <h2>{author}</h2>
                        <p>{description}</p>
                        <p>{date}</p>
                    </Col>
                </Row>
            </Container>
        </li>
    )
}