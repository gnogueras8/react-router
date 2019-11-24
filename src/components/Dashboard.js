import React, {Component} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class Dashboard extends Component {

    render () {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Column lg={2}>
                            <h2>
                            Menu
                            </h2>    
                        </Column>
                        <Column lg={10}>
                            <div className="container">
                                <h2>Leads</h2>
                                <Table striped bordered hover variant="dark">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Phone</th>
                                            <th>Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td contenteditable="true">John</td>
                                            <td contenteditable="true">Doe</td>
                                            <td contenteditable="true">(801)555-5555</td>
                                            <td contenteditable="true">johndoe@gmail.com</td>    
                                        </tr>
                                    </tbody>
                                </Table>
                                <Button>
                                    Submit
                                </Button>
                                </div>
                            </Column>
                        </Row>
                    </Container>
                </div>
            
        )
    }
    
};

export default Dashboard;