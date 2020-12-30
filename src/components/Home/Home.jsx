import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "./../../store/actions/index";
import { Col, Container, Row } from 'react-bootstrap';
import { join } from './../../utils/arrayUtils';
import TripCard from './../common/TripCard';

function Home({
    loadTrips,
    trips
}) {
    const history = useHistory();

    useEffect(() => {
        loadTrips();
    }, [loadTrips])

    const handleClick = () => {
        history.push("/trip");
    }

    return (
        <Container fluid className="section-content">
            <Row className={join("section", "scrollbar-y")}>
                <Col className={join(["section-wrapper", "p-4"])}>
                    <h1>Your Adventures</h1>
                    <Container fluid>
                        <Row >
                            {trips.map((trip) => (
                                <Col key={trip._id} md={6} lg={4} className={join(["p-2"])}>
                                    <TripCard
                                        {...trip}
                                        onClick={handleClick}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = ({ adventure }) => {
    return {
        trips: adventure.trips
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadTrips: () => dispatch(actionCreators.getTrips())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
