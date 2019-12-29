import React from 'react'
import {Container, Row, Col} from "../Grid"

export function BookList ({children}) {
    return <ul className="list-group">{children}</ul>
}

export function BookListItem({
    title,
    author,
    description,
    image,
    link,
    date
}) {
    return (
        <li className="list-group-item">
            <Container>
                <Row>
                    <Col size="xs-4 sm-2">
                        {image}
                    </Col>
                    <Col size="xs-8 sm-9">
                        <h1>{title}</h1>
                        <h2>{author}</h2>
                        <p>{description}</p>
                        <p>{date}</p>
                        <a href={link}>Click This Link</a>
                    </Col>
                </Row>
            </Container>
        </li>
    )
}