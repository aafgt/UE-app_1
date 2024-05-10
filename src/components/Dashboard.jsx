import { useState } from "react";
import Card_Dashboard from "./shared/Card_Dashboard";
import ReactApexChart from "react-apexcharts";

function Dashboard() {

    // const handleDemo = () => {
    //     setOeeChartData({...oeeChartData, series:[10]});
    // };

    const [prodChartData, setProdChartData] = useState({
        series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
        }, {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
        }],
        options: {
            chart: {
                height: 350,
                type: 'area'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                type: 'datetime',
                categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
        },
    });

    const [oeeChartData, setOeeChartData] = useState({
        series: [70],
        options : {
            chart: {
                height: 350,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '70%',
                    }
                },
            },
            labels: [''],
        }
    });

    const [uptimeChartData, setUptimeChartData] = useState({
        series: [70],
        options : {
            chart: {
                height: 350,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '70%',
                    }
                },
            },
            labels: [''],
        }
    });

    const [cornChartData, setCornChartData] = useState({
        series: [44, 55, 13, 43, 22],
        chart: {
            width: 380,
            type: 'pie',
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                },
                labels: ['', '', '', '', ''],
            }
        }]
    });

    return (
        <>
            <div className="container-fluid mb-2 pt-3">
                <label className="fw-bold">Dashboard</label><br />
                <label>Welcome !</label>
            </div>

            <hr />

            <div className="container">
                <div className="row g-3">
                    <div className="col-3">
                        <Card_Dashboard title="123,45 T" body="Feed 15 %" />
                    </div>
                    <div className="col-3">
                        <Card_Dashboard title="234,56 T" body="Feed 65 %" />
                    </div>
                    <div className="col-3">
                        <Card_Dashboard title="123,45 T" body="Raw Material 1" />
                    </div>
                    <div className="col-3">
                        <Card_Dashboard title="234,56 T" body="Raw Material 2" />
                    </div>
                    <div className="col-3">
                        <Card_Dashboard title="458,7 L" body="Oil" />
                    </div>
                    <div className="col-3">
                        <Card_Dashboard title="456 L" body={<div>Liquid Starch <i className="bi bi-info-circle" type="button"></i></div>} />
                    </div>
                    <div className="col-3">
                        <Card_Dashboard title="458,7 L" body="Raw Material 3" />
                    </div>
                    <div className="col-3">
                        <Card_Dashboard title="456 L" body="Raw Material 4" />
                    </div>
                </div>

                <div className="row my-2">
                    <div className="col-9">
                        <div className="card text-bg-light mb-3">
                            <div className="card-header">Production</div>
                            <div className="card-body">
                                <ReactApexChart options={prodChartData.options} series={prodChartData.series} type="area" height={350} />
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="row g-1 mb-1">
                            <div className="card text-bg-light mb-3">
                                <div className="card-header">OEE</div>
                                <div className="card-body">
                                    <ReactApexChart options={oeeChartData.options} series={oeeChartData.series} type="radialBar" height={157} />
                                </div>
                            </div>
                        </div>
                        <div className="row g-1">
                            <div className="card text-bg-light">
                                <div className="card-header">Up-Time</div>
                                <div className="card-body">
                                    <ReactApexChart options={uptimeChartData.options} series={uptimeChartData.series} type="radialBar" height={157} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row my-2">
                    <div className="col-4">
                        <div className="card text-bg-light mb-3 ">
                            <div className="card-header">Corn Components</div>
                            <div className="card-body">
                                <ReactApexChart options={cornChartData.responsive[0].options} series={cornChartData.series} type="pie" height={350} />
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="card text-bg-light mb-3 ">
                            <div className="card-header">Stage Summary</div>
                            <div className="card-body">
                                <table className="table">
                                    <thead className="table-secondary">
                                        <tr>
                                            <td scope="col">
                                                <input type="checkbox" className="btn-check" id="btncheckall" autoComplete="off" />
                                                <label className="btn btn-outline-primary p-2" htmlFor="btncheckall"></label>
                                            </td>
                                            <th scope="col">Stage</th>
                                            <th scope="col">Input</th>
                                            <th scope="col">Production</th>
                                            <th scope="col">Waste</th>
                                            <th scope="col">Stops</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">ROP</th>
                                            <th scope="col">Time Stamp</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-group-divider">
                                        <tr>
                                            <td scope="row">
                                                <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off" />
                                                <label className="btn btn-outline-primary p-2" htmlFor="btncheck1"></label>
                                            </td>
                                            <td>Stage 0</td>
                                            <td scope="row">1000 kg</td>
                                            <td>980 kg</td>
                                            <td scope="row">20 kg. 0</td>
                                            <td>0</td>
                                            <td scope="row">.Off</td>
                                            <td>400 kg/h</td>
                                            <td scope="row">1/21/2024, 11:06:07 AM</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">
                                                <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off" />
                                                <label className="btn btn-outline-primary p-2" htmlFor="btncheck2"></label>
                                            </td>
                                            <td>Stage 1</td>
                                            <td scope="row">1000 kg</td>
                                            <td>980 kg</td>
                                            <td scope="row">20 kg. 0</td>
                                            <td>1</td>
                                            <td scope="row">.Off</td>
                                            <td>400 kg/h</td>
                                            <td scope="row">1/21/2024, 11:06:07 AM</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">
                                                <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off" />
                                                <label className="btn btn-outline-primary p-2" htmlFor="btncheck3"></label>
                                            </td>
                                            <td>Stage 2</td>
                                            <td scope="row">1000 kg</td>
                                            <td>980 kg</td>
                                            <td scope="row">20 kg. 0</td>
                                            <td>2</td>
                                            <td scope="row">.Off</td>
                                            <td>400 kg/h</td>
                                            <td scope="row">1/21/2024, 11:06:07 AM</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">
                                                <input type="checkbox" className="btn-check" id="btncheck4" autoComplete="off" />
                                                <label className="btn btn-outline-primary p-2" htmlFor="btncheck4"></label>
                                            </td>
                                            <td>Stage 3</td>
                                            <td scope="row">1000 kg</td>
                                            <td>980 kg</td>
                                            <td scope="row">20 kg. 0</td>
                                            <td>3</td>
                                            <td scope="row">.On</td>
                                            <td>400 kg/h</td>
                                            <td scope="row">1/21/2024, 11:06:07 AM</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">
                                                <input type="checkbox" className="btn-check" id="btncheck5" autoComplete="off" />
                                                <label className="btn btn-outline-primary p-2" htmlFor="btncheck5"></label>
                                            </td>
                                            <td>Stage 4</td>
                                            <td scope="row">1000 kg</td>
                                            <td>980 kg</td>
                                            <td scope="row">20 kg. 0</td>
                                            <td>4</td>
                                            <td scope="row">.On</td>
                                            <td>400 kg/h</td>
                                            <td scope="row">1/21/2024, 11:06:07 AM</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <nav aria-label="Page navigation">
                                    <ul className="pagination justify-content-end">
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                            </a>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;