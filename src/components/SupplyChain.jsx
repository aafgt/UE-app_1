import { useState } from "react";
import ReactApexChart from "react-apexcharts";

function SupplyChain() {

    const [oeeChartData, setOeeChartData] = useState({
        series: [70],
        options: {
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

    return (
        <>
            <div className="container-fluid mb-2 pt-3">
                <label className="fw-bold">Supply-chain</label><br />
                <label>Welcome !</label>
            </div>

            <hr />

            <div className="container">
                <div className="card text-bg-light mb-3 ">
                    <div className="card-header fw-bold">Material Stock</div>
                    <div className="card-body">
                        <table className="table">
                            <thead className="table-secondary">
                                <tr>
                                    <td scope="col">
                                        <input type="checkbox" className="btn-check" id="btncheckall" autoComplete="off" />
                                        <label className="btn btn-outline-primary p-2" htmlFor="btncheckall"></label>
                                    </td>
                                    <th scope="col">Name</th>
                                    <th scope="col">ID</th>
                                    <th scope="col">Rate</th>
                                    <th scope="col">Last Order</th>
                                    <th scope="col">New Order</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Order Date</th>
                                    <th scope="col">Receiving Date</th>
                                    <th scope="col">Grade</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                                <tr>
                                    <td scope="row">
                                        <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off" />
                                        <label className="btn btn-outline-primary p-2" htmlFor="btncheck1"></label>
                                    </td>
                                    <td>Starch</td>
                                    <td scope="row">20</td>
                                    <td>10 T/M</td>
                                    <td scope="row">Order-4554</td>
                                    <td>Order-4555</td>
                                    <td scope="row">3 T</td>
                                    <td>1/21/2024, 11:07:25 AM</td>
                                    <td scope="row">1/21/2024, 11:07:25 AM</td>
                                    <td>A</td>
                                </tr>
                                <tr>
                                    <td scope="row">
                                        <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off" />
                                        <label className="btn btn-outline-primary p-2" htmlFor="btncheck2"></label>
                                    </td>
                                    <td>Starch</td>
                                    <td scope="row">130</td>
                                    <td>10 T/M</td>
                                    <td scope="row">Order-4554</td>
                                    <td>Order-4555</td>
                                    <td scope="row">3 T</td>
                                    <td>1/21/2024, 11:07:25 AM</td>
                                    <td scope="row">1/21/2024, 11:07:25 AM</td>
                                    <td>A</td>
                                </tr>
                                <tr>
                                    <td scope="row">
                                        <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off" />
                                        <label className="btn btn-outline-primary p-2" htmlFor="btncheck3"></label>
                                    </td>
                                    <td>Starch</td>
                                    <td scope="row">26</td>
                                    <td>10 T/M</td>
                                    <td scope="row">Order-4554</td>
                                    <td>Order-4555</td>
                                    <td scope="row">3 T</td>
                                    <td>1/21/2024, 11:07:25 AM</td>
                                    <td scope="row">1/21/2024, 11:07:25 AM</td>
                                    <td>A</td>
                                </tr>
                                <tr>
                                    <td scope="row">
                                        <input type="checkbox" className="btn-check" id="btncheck4" autoComplete="off" />
                                        <label className="btn btn-outline-primary p-2" htmlFor="btncheck4"></label>
                                    </td>
                                    <td>Starch</td>
                                    <td scope="row">200</td>
                                    <td>10 T/M</td>
                                    <td scope="row">Order-4554</td>
                                    <td>Order-4555</td>
                                    <td scope="row">3 T</td>
                                    <td>1/21/2024, 11:07:25 AM</td>
                                    <td scope="row">1/21/2024, 11:07:25 AM</td>
                                    <td>A</td>
                                </tr>
                                <tr>
                                    <td scope="row">
                                        <input type="checkbox" className="btn-check" id="btncheck5" autoComplete="off" />
                                        <label className="btn btn-outline-primary p-2" htmlFor="btncheck5"></label>
                                    </td>
                                    <td>Starch</td>
                                    <td scope="row">58</td>
                                    <td>10 T/M</td>
                                    <td scope="row">Order-4554</td>
                                    <td>Order-4555</td>
                                    <td scope="row">3 T</td>
                                    <td>1/21/2024, 11:07:25 AM</td>
                                    <td scope="row">1/21/2024, 11:07:25 AM</td>
                                    <td>A</td>
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

                <div className="row">
                    <div className="col">
                        <div className="card text-bg-light mb-3">
                            <div className="card-header fw-bold">Messages</div>
                            <div className="card-body">
                                <div className="card-text fw-bold">
                                    <div className="card text-bg-light mb-3">
                                        <div className="card-header fw-bold">Oil Production Stage</div>
                                        <div className="card-body">
                                            <div className="card-text fw-bold">
                                                ...
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card text-bg-light mb-3">
                                        <div className="card-header fw-bold">Corn Stock</div>
                                        <div className="card-body">
                                            <div className="card-text fw-bold">
                                                ...
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-bg-light mb-3">
                            <div className="card-header fw-bold">Material Consumption</div>
                            <div className="card-body">
                                <ReactApexChart options={oeeChartData.options} series={oeeChartData.series} type="radialBar" height={157} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SupplyChain;