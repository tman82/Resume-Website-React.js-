import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';


class Chart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chartData: {
                labels: ['Medical Billing', 'Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint', 'Microsoft Outlook' ],

                datasets: [
                    {
                        label: 'Skills',
                        data: [80, 55, 40, 25, 65 ],
                        backgroundColor: [
                            '#198bcc',
                            '#198bcc',
                            '#198bcc',
                            '#198bcc',
                            '#198bcc'
                        ]
                    }
                ],

            }
        };
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right',
        type: 'horizontalBar'
    };

    render() {


        return (
            <div  className="chart chart-bottom">
                <Bar
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: 'Skills',
                            fontSize: 20,
                            fontColor: '#000',
                            fontFamily: 'Roboto, sans-serif'
                        },
                        legend: {
                            display: false,
                            position: this.props.legendPosition,
                            fontFamily: 'Roboto, sans-serif'
                        },

            yAxes: [{
            ticks: {

                   min: 0,
                   max: 100,
                   callback: function(value){return value+ ""},
                },
								scaleLabel: {
                   display: true,
                   labelString: "Percentage",
                   fontSize: 15
                }
            }]
        }
                    }

                />
            </div>
        );
    }
}

export default Chart;
