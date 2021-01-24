import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Form from '../common/Form/Form';
import { join } from './../../utils/arrayUtils';
import ProgressAssistant from './../ProgressAssistant';


function NewTrip() {

    return (
        <Container fluid className="section-content">
            <Row className={join("section", "scrollbar-y")}>
                <Col className="section-wrapper">
                    <div className="section-content overflow-hidden p-2">
                        <ProgressAssistant>
                            <ProgressAssistant.Page>
                                <Form className={join("w-75", "m-auto")}>
                                    <h1>Basics</h1>
                                    <Form.Row>
                                        <Form.Input name="title" label="Titel" />
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Input name="startDate" label="Start Date" type="date" width={{ md: "6" }} />
                                        <Form.Input name="endDate" label="End Date" type="date" width={{ md: "6" }} />
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Input as="textarea" rows="5" name="summary" label="Summary" />
                                    </Form.Row>
                                </Form>
                            </ProgressAssistant.Page>
                            <ProgressAssistant.Page>
                                <h1>Participants</h1>
                            </ProgressAssistant.Page>
                            <ProgressAssistant.Page>
                                <h1>Requirements</h1>
                            </ProgressAssistant.Page>
                            <ProgressAssistant.Page>
                                <h1>Equipment</h1>
                            </ProgressAssistant.Page>
                        </ProgressAssistant>
                    </div>
                </Col>
            </Row>
        </Container>)
}

export default NewTrip;