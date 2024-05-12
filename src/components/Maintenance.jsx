import { useState } from "react";
import ReactApexChart from "react-apexcharts";

function Maintenance() {

    const [stageToggle, setStageToggle] = useState(false);
    const [consumptionTabsActive, setConsumptionTabsActive] = useState([{ active: "", title: "Gas", data: [31, 40, 28, 51, 42, 109, 100] }, { active: "", title: "Water", data: [45, 68, 12, 13, 47, 30, 14] }, { active: "", title: "Vibration", data: [31, 40, 28, 51, 42, 109, 100] }, { active: "", title: "Energy", data: [55, 45, 71, 32, 21, 10, 39] }, { active: "", title: "Temperature", data: [31, 40, 96, 51, 42, 109, 100] }]);

    const handleStageToggle = () => {
        setStageToggle(!stageToggle);
    };

    const handleConsumptionTabsActive = (tab) => {
        let newConsumptionTabsActive = consumptionTabsActive.map((t, index) => {
            if (tab === index) {
                setConsumptionChartData({
                    ...consumptionChartData, series: [{
                        name: t.title + ' consumption',
                        data: t.data
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
                        title: {
                            text: t.title + " Trends by Month",
                            offsetX: 0,
                            style: {
                                fontSize: '18px',
                            }
                        }
                    }
                });

                return { ...t, active: "active" };
            }
            return { ...t, active: "" };
        });
        setConsumptionTabsActive(newConsumptionTabsActive);
    };

    const [prodChartData, setProdChartData] = useState({
        series: [{
            name: 'cost',
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
            title: {
                text: 'Product Trends by Month',
                offsetX: 0,
                style: {
                    fontSize: '18px',
                }
            }
        },
    });

    const [consumptionChartData, setConsumptionChartData] = useState({
        series: [{
            name: 'consumption',
            data: []
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
            title: {
                text: "",
                offsetX: 0,
                style: {
                    fontSize: '18px',
                }
            }
        },
    });

    return (
        // <>
        //     <div className="container-fluid mb-2 pt-3">
        //         <label className="fw-bold">Maintenance</label><br />
        //         <label>Welcome !</label>
        //     </div>

        //     <hr />

        //     <div className="container">
        //         <div className="row">
        //             <div className="col">
        //                 <div className="dropdown">
        //                     <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                         Stage
        //                     </button>
        //                     <ul className="dropdown-menu">
        //                         <li><a className="dropdown-item" href="#" onClick={handleStageToggle}>Stage 0</a></li>
        //                         <li><a className="dropdown-item" href="#">Stage 1</a></li>
        //                         <li><a className="dropdown-item" href="#">Stage 2</a></li>
        //                     </ul>
        //                 </div>
        //             </div>

        //             <div className="col">
        //                 <div className="dropdown">
        //                     <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                         Machine
        //                     </button>
        //                     <ul className="dropdown-menu">
        //                         <li><a className="dropdown-item" href="#" onClick={handleStageToggle}>Machine 0</a></li>
        //                         <li><a className="dropdown-item" href="#">Machine 1</a></li>
        //                         <li><a className="dropdown-item" href="#">Machine 2</a></li>
        //                     </ul>
        //                 </div>
        //             </div>
        //         </div>

        //         {stageToggle && <div className="card text-bg-light my-3">
        //             <div className="card-header">Production - Cost</div>
        //             <div className="card-body">
        //                 <ReactApexChart options={prodChartData.options} series={prodChartData.series} type="area" height={350} />
        //             </div>
        //         </div>}

        //         {stageToggle && <div className="card text-bg-light my-3">
        //             <div className="card-header">Consumption</div>
        //             <div className="card-body">
        //                 <ul className="nav nav-tabs">
        //                     <li className="nav-item">
        //                         <a className={`nav-link ${consumptionTabsActive[0].active}`} onClick={() => { handleConsumptionTabsActive(0) }} type="button">Gas</a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className={`nav-link ${consumptionTabsActive[1].active}`} onClick={() => { handleConsumptionTabsActive(1) }} type="button">Water</a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className={`nav-link ${consumptionTabsActive[2].active}`} onClick={() => { handleConsumptionTabsActive(2) }} type="button">Vibration</a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className={`nav-link ${consumptionTabsActive[3].active}`} onClick={() => { handleConsumptionTabsActive(3) }} type="button">Energy</a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className={`nav-link ${consumptionTabsActive[4].active}`} onClick={() => { handleConsumptionTabsActive(4) }} type="button">Temperature</a>
        //                     </li>
        //                 </ul>

        //                 <ReactApexChart options={consumptionChartData.options} series={consumptionChartData.series} type="area" height={350} />
        //             </div>
        //         </div>}

        //         {stageToggle && <div className="card text-bg-light mb-3 ">
        //             <div className="card-header">Machine Details</div>
        //             <div className="card-body">
        //                 <table className="table">
        //                     <thead className="table-secondary">
        //                         <tr>
        //                             <td scope="col">
        //                                 <input type="checkbox" className="btn-check" id="btncheckall" autoComplete="off" />
        //                                 <label className="btn btn-outline-primary p-2" htmlFor="btncheckall"></label>
        //                             </td>
        //                             <th scope="col">Stage</th>
        //                             <th scope="col">Machine</th>
        //                             <th scope="col">Last Maintenance</th>
        //                             <th scope="col">Next Maintenance</th>
        //                             <th scope="col">Performance</th>
        //                             <th scope="col">Grade</th>
        //                             <th scope="col">Recommendation</th>
        //                         </tr>
        //                     </thead>
        //                     <tbody className="table-group-divider">
        //                         <tr>
        //                             <td scope="row">
        //                                 <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off" />
        //                                 <label className="btn btn-outline-primary p-2" htmlFor="btncheck1"></label>
        //                             </td>
        //                             <td>Stage 1</td>
        //                             <td scope="row">Machine 1</td>
        //                             <td>1/21/2024, 11:05:18 AM</td>
        //                             <td scope="row">1/21/2024, 11:05:18 AM</td>
        //                             <td>36%</td>
        //                             <td scope="row">A</td>
        //                             <td>.To be Replaced</td>
        //                         </tr>
        //                         <tr>
        //                             <td scope="row">
        //                                 <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off" />
        //                                 <label className="btn btn-outline-primary p-2" htmlFor="btncheck2"></label>
        //                             </td>
        //                             <td>Stage 2</td>
        //                             <td scope="row">Machine 1</td>
        //                             <td>1/21/2024, 11:05:18 AM</td>
        //                             <td scope="row">1/21/2024, 11:05:18 AM</td>
        //                             <td>36%</td>
        //                             <td scope="row">A</td>
        //                             <td>.To be Replaced</td>
        //                         </tr>
        //                         <tr>
        //                             <td scope="row">
        //                                 <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off" />
        //                                 <label className="btn btn-outline-primary p-2" htmlFor="btncheck3"></label>
        //                             </td>
        //                             <td>Stage 3</td>
        //                             <td scope="row">Machine 1</td>
        //                             <td>1/21/2024, 11:05:18 AM</td>
        //                             <td scope="row">1/21/2024, 11:05:18 AM</td>
        //                             <td>36%</td>
        //                             <td scope="row">A</td>
        //                             <td>.No replacement needed</td>
        //                         </tr>
        //                         <tr>
        //                             <td scope="row">
        //                                 <input type="checkbox" className="btn-check" id="btncheck4" autoComplete="off" />
        //                                 <label className="btn btn-outline-primary p-2" htmlFor="btncheck4"></label>
        //                             </td>
        //                             <td>Stage 4</td>
        //                             <td scope="row">Machine 1</td>
        //                             <td>1/21/2024, 11:05:18 AM</td>
        //                             <td scope="row">1/21/2024, 11:05:18 AM</td>
        //                             <td>36%</td>
        //                             <td scope="row">A</td>
        //                             <td>.No replacement needed</td>
        //                         </tr>
        //                         <tr>
        //                             <td scope="row">
        //                                 <input type="checkbox" className="btn-check" id="btncheck5" autoComplete="off" />
        //                                 <label className="btn btn-outline-primary p-2" htmlFor="btncheck5"></label>
        //                             </td>
        //                             <td>Stage 5</td>
        //                             <td scope="row">Machine 1</td>
        //                             <td>1/21/2024, 11:05:18 AM</td>
        //                             <td scope="row">1/21/2024, 11:05:18 AM</td>
        //                             <td>36%</td>
        //                             <td scope="row">A</td>
        //                             <td>.No replacement needed</td>
        //                         </tr>
        //                     </tbody>
        //                 </table>

        //                 <nav aria-label="Page navigation">
        //                     <ul className="pagination justify-content-end">
        //                         <li className="page-item">
        //                             <a className="page-link" href="#" aria-label="Previous">
        //                                 <span aria-hidden="true">&laquo;</span>
        //                             </a>
        //                         </li>
        //                         <li className="page-item"><a className="page-link" href="#">1</a></li>
        //                         <li className="page-item"><a className="page-link" href="#">2</a></li>
        //                         <li className="page-item"><a className="page-link" href="#">3</a></li>
        //                         <li className="page-item">
        //                             <a className="page-link" href="#" aria-label="Next">
        //                                 <span aria-hidden="true">&raquo;</span>
        //                             </a>
        //                         </li>
        //                     </ul>
        //                 </nav>
        //             </div>
        //         </div>}
        //     </div>
        // </>

        <>
            <div className="bg-slate-100 w-full p-2">
                <div className="border-b-2 mb-4 p-2 bg-gray-50">
                    <label className="font-medium">Maintenance</label><br />
                    <label>Welcome !</label>
                </div>

                {/* <div className="flex">
                    <button onClick={handleStageToggle}>Stage</button>
                    <button>Machines</button>
                </div> */}

                {true && <div className="bg-white rounded-md shadow-md mt-5">
                    <div className="border-b-2 p-2">Production - Cost</div>
                    <div className="">
                        <ReactApexChart options={prodChartData.options} series={prodChartData.series} type="area" height={350} />
                    </div>
                </div>}

                {true && <div className="bg-white rounded-md shadow-md mt-5">
                    <div className="border-b-2 p-2">Consumption</div>
                    <div className="">
                        <ul className="flex ml-5 my-3">
                            <li className="mr-2">
                                <a className={`hover:cursor-pointer bg-blue-50 px-2 py-1 rounded-md ${consumptionTabsActive[0].active}`} onClick={() => { handleConsumptionTabsActive(0) }} type="button">Gas</a>
                            </li>
                            <li className="mr-2">
                                <a className={`hover:cursor-pointer bg-blue-50 px-2 py-1 rounded-md ${consumptionTabsActive[1].active}`} onClick={() => { handleConsumptionTabsActive(1) }} type="button">Water</a>
                            </li>
                            <li className="mr-2">
                                <a className={`hover:cursor-pointer bg-blue-50 px-2 py-1 rounded-md ${consumptionTabsActive[2].active}`} onClick={() => { handleConsumptionTabsActive(2) }} type="button">Vibration</a>
                            </li>
                            <li className="mr-2">
                                <a className={`hover:cursor-pointer bg-blue-50 px-2 py-1 rounded-md ${consumptionTabsActive[3].active}`} onClick={() => { handleConsumptionTabsActive(3) }} type="button">Energy</a>
                            </li>
                            <li className="">
                                <a className={`hover:cursor-pointer bg-blue-50 px-2 py-1 rounded-md ${consumptionTabsActive[4].active}`} onClick={() => { handleConsumptionTabsActive(4) }} type="button">Temperature</a>
                            </li>
                        </ul>

                        <ReactApexChart options={consumptionChartData.options} series={consumptionChartData.series} type="area" height={350} />
                    </div>
                </div>}

                <div className="bg-white rounded-lg shadow-md m-3 mt-7">
                    <div className="border-b-2 p-2">Machine Details</div>
                    <div className="p-3">
                        <table className="w-full text-center">
                            <thead className="text-green-700 font-semibold">
                                <tr>
                                    <th scope="">Machine</th>
                                    <th scope="">Last Maintenance</th>
                                    <th scope="">Next Maintenance</th>
                                    <th scope="">Performance</th>
                                    <th scope="">Grade</th>
                                    <th scope="">Recommendation</th>
                                </tr>
                            </thead>
                            <tbody className="">
                                <tr className="border-b-2">
                                    <td scope="">Machine 1</td>
                                    <td>1/21/2024, 11:05:18 AM</td>
                                    <td scope="">1/21/2024, 11:05:18 AM</td>
                                    <td>36%</td>
                                    <td scope="">A</td>
                                    <td><i className="bi bi-dot text-green-700 text-xl"></i> No replacement needed</td>
                                </tr>
                                <tr className="border-b-2">
                                    <td scope="">Machine 1</td>
                                    <td>1/21/2024, 11:05:18 AM</td>
                                    <td scope="">1/21/2024, 11:05:18 AM</td>
                                    <td>36%</td>
                                    <td scope="">A</td>
                                    <td><i className="bi bi-dot text-red-700 text-xl"></i> To be Replaced</td>
                                </tr>
                                <tr className="border-b-2">

                                    <td scope="">Machine 1</td>
                                    <td>1/21/2024, 11:05:18 AM</td>
                                    <td scope="">1/21/2024, 11:05:18 AM</td>
                                    <td>36%</td>
                                    <td scope="">A</td>
                                    <td><i className="bi bi-dot text-red-700 text-xl"></i> To be Replaced</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Maintenance;