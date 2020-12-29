import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { join } from './../../utils/arrayUtils';
import Card from './../common/Card';

function Home() {
    return (
        <Container fluid className="section-content">
            <Row className={join("section", "scrollbar-y")}>
                <Col className={join(["section-wrapper", "p-4"])}>
                    <h1>Your Adventures</h1>
                    <Container fluid>
                        <Row >
                            <Col md={6} lg={4} className={join(["p-2"])}>
                                <Card title="Switzerland Trip" bgColor="var(--primary)" header="starting soon" />
                            </Col>
                            <Col md={6} lg={4} className={join(["p-2"])}>
                                <Card title="Rockies Trip" bgColor="var(--secondary)" />
                            </Col>
                            <Col md={6} lg={4} className={join(["p-2"])}>
                                <Card title="Vancouver Trip" bgColor="var(--success)" />
                            </Col>
                            <Col md={6} lg={4} className={join(["p-2"])}>
                                <Card title="Norway Trip" bgColor="var(--danger)" />
                            </Col>
                            <Col md={6} lg={4} className={join(["p-2"])}>
                                <Card title="Finnland Trip" bgColor="var(--info)" />
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;
