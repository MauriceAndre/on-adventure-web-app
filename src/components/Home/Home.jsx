import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { join } from './../../utils/arrayUtils';
import TripCard from './../common/TripCard';

import cover1 from './cover1.png';
import cover2 from './cover2.jpg';
import cover3 from './cover3.jpg';
import cover4 from './cover4.jpg';
import cover5 from './cover5.jpg';

function Home() {
    return (
        <Container fluid className="section-content">
            <Row className={join("section", "scrollbar-y")}>
                <Col className={join(["section-wrapper", "p-4"])}>
                    <h1>Your Adventures</h1>
                    <Container fluid>
                        <Row >
                            <Col key="1" md={6} lg={4} className={join(["p-2"])}>
                                <TripCard
                                    color="var(--primary)"
                                    title="Switzerland Trip"
                                    startDate={new Date("12.29.2020 19:00")}
                                    endDate={new Date("12.30.2020 19:00")}
                                    labels={["Road Trip", "Hike", "Nature"]}
                                    participants={4}
                                    seats={5}
                                    coverImg={cover1}
                                />
                            </Col>
                            <Col key="2" md={6} lg={4} className={join(["p-2"])}>
                                <TripCard
                                    color="var(--secondary)"
                                    title="Rockies Trip"
                                    startDate={new Date("01.01.2021")}
                                    endDate={new Date("01.01.2021")}
                                    labels={["Road Trip", "Mountains", "Nature"]}
                                    participants={7}
                                    seats={10}
                                    coverImg={cover2}
                                />
                            </Col>
                            <Col key="2" md={6} lg={4} className={join(["p-2"])}>
                                <TripCard
                                    color="var(--info)"
                                    title="Vancouver Island Trip"
                                    startDate={new Date("01.17.2021")}
                                    endDate={new Date("01.01.2021")}
                                    labels={["Road Trip", "Island", "Mountains", "Nature"]}
                                    participants={5}
                                    seats={5}
                                    coverImg={cover3}
                                />
                            </Col>
                            <Col key="2" md={6} lg={4} className={join(["p-2"])}>
                                <TripCard
                                    color="var(--danger)"
                                    title="Norway Trip"
                                    startDate={new Date("02.01.2021")}
                                    endDate={new Date("01.01.2021")}
                                    labels={["Road Trip", "Forrest", "Nature"]}
                                    participants={7}
                                    seats={10}
                                    coverImg={cover4}
                                />
                            </Col>
                            <Col key="2" md={6} lg={4} className={join(["p-2"])}>
                                <TripCard
                                    color="var(--success)"
                                    title="Sweden Trip"
                                    startDate={new Date("01.01.2030")}
                                    endDate={new Date("01.01.2021")}
                                    labels={["Road Trip", "Sweden", "Nature", "Culture"]}
                                    participants={15}
                                    seats={20}
                                    coverImg={cover5}
                                />
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;
