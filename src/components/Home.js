import React, {Component} from 'react';
import InvoiceCard from './InvoiceCard'
import Container from 'react-bootstrap/Container';

class Home extends Component {

    render () {
        return (
            <div className="container-fluid bg-light">
            <InvoiceCard>
            </InvoiceCard>
            </div>
        )
    }
    
};

export default Home;