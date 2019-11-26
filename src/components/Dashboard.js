import React, {Component} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import axios from "axios";
import { thisExpression } from '@babel/types';
import SalesChart from './SalesChart';
import Card from 'react-bootstrap/Card';


async function getTable () {
    const headers = {
        api_key:""
    }
    const client = axios.create({
        baseURL: "google.com",
        timeout: 2000,
        headers : headers
    })
    

    client.get().then(

    )

}

class Dashboard extends Component {
    constructor (props) {
        super(props)
        this.state = {
            title: props.title
        }
    }

    tableHead = () => {
        return(                                    
        <thead>
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th>Email</th>
            </tr>
        </thead>
        )
    };

    dummyRecord = () => {
        return(
            <tr>
            <td>1</td>
            <td contenteditable="true">John</td>
            <td contenteditable="true">Doe</td>
            <td contenteditable="true">(801)555-5555</td>
            <td contenteditable="true">johndoe@gmail.com</td>    
        </tr>
        )
    }


    render () {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Column lg={2} className="shadow" >
                            <h2 className="mt-4">
                            Menu
                            </h2>    
                        </Column>
                        <Column lg={10} className="bg-light">
                            <Container>
                                <Card className="mt-4 p-4 shadow">
                                    <h2>{this.props.title}</h2>
                                    <Table striped bordered hover variant="dark">
                                        <this.tableHead></this.tableHead>
                                        <tbody>
                                            <this.dummyRecord></this.dummyRecord>
                                        </tbody>
                                    </Table>
                                </Card>
                                <Button className="mt-4 shadow">
                                        Save Lead Info
                                </Button>
                            </Container>
                            <Container className="mt-4 mb-4">
                                <h1>Leads Delivered (2018 VS. 2017)</h1>
                                <SalesChart>
                                </SalesChart>
                            </Container>
                            </Column>
                        </Row>
                    </Container>
                </div>
        )
    }
    
};

export default Dashboard;