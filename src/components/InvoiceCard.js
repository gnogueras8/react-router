import React, {Comment, Component} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Column from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class InvoiceCard extends Component {
    
    render () {
        return (
            <Container>
                <Row>
                    <Column className ="lg-6 md-6 sm-6">
                        <Container>
                            <Card className="p-0 mt-4 mb-4 shadow">
                                <div className="bg-dark m-0 p-0"></div>
                                <Row>
                                    <Column className="lg-6 md-6 sm-6 h-100 ml-2">
                                        <Button className="btn-large btn-primary text-white mb-2 mt-2">Start</Button>
                                        <h6>Current Status:<span className="text-success"> Active</span></h6>
                                        <h6>Last Lead Delivered: 11/22/2019</h6>
                                        <h6>Leads Remaining:<span className="text-primary"> 12</span></h6>
                                    </Column>
                                    <Column className="lg-6 md-6 sm-6">
                                        <Button className="btn-success btn-danger text-white mb-2 mt-2">Stop</Button>
                                    </Column>
                                </Row>
                            </Card>
                        </Container>
                    </Column>
                    <Column className="lg-6">
                    </Column>
                </Row>
            </Container>
        )
    }
    

};
export default InvoiceCard;