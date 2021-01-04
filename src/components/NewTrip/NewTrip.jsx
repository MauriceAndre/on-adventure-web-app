import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
                               <h1>Basics</h1>
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