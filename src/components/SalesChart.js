import React, { Component } from 'react'
import Chart from "chart.js";
import classes from "../assets/css/LineGraph.module.css";
import Card from "react-bootstrap/Card";
import { thisExpression } from '@babel/types';

export default class SalesChart extends Component {
    
    chartRef = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: ["Jan", "Feb", "March"],
                datasets: [
                    {
                        label: "Leads (Bill)",
                        data: [86, 67, 91],
                        backgroundColor: 'rgba(75, 192, 192, 0.6)',
                        borderColor: "#98B9AB"
                    },
                    {
                        label: "Leads (Joe)",
                        data: [132,67,88],
                        backgroundColor: 'rgba(255, 159, 64, .6)',
                        borderColor: 'rgba(255, 159, 64)'
                    }
                ]
            },
            options: {
                //Customize chart options
            }
        });

        
    }


    render() {
        return (
            <div className={classes.graphContainer}>
                <Card className="shadow sales-chart mt-4 p-4">
                    <canvas
                        id="myChart"
                        ref={this.chartRef}
                    />
                </Card>
            </div>
        )
    }
}