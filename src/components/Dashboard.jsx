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

    const [uptimeChartData, setUptimeChartData] = useState({
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
            <div className="bg-slate-100 w-full p-2">
                <div className="border-b-2 mb-4 p-2 bg-gray-50">
                    <label className="font-medium">Dashboard</label><br />
                    <label>Welcome !</label>
                </div>

                <div className="grid grid-cols-4 gap-5">
                    <Card_Dashboard title="123,45 T" body="Feed 15 %" />
                    <Card_Dashboard title="234,56 T" body="Feed 65 %" />
                    <Card_Dashboard title="123,45 T" body="Raw Material 1" />
                    <Card_Dashboard title="234,56 T" body="Raw Material 2" />
                    <Card_Dashboard title="458,7 L" body="Oil" />
                    <Card_Dashboard title="456 L" body={<div>Liquid Starch <i className="bi bi-info-circle hover:cursor-pointer"></i></div>} />
                    <Card_Dashboard title="458,7 L" body="Raw Material 3" />
                    <Card_Dashboard title="456 L" body="Raw Material 4" />
                </div>

                <div className="mt-5 flex">
                    <div className="bg-white rounded-md shadow-md w-3/4">
                        <div className="border-b-2 p-2">Production</div>
                        <div className="">
                            <ReactApexChart options={prodChartData.options} series={prodChartData.series} type="area" height={350} />
                        </div>
                    </div>

                    <div className="w-1/4 flex flex-col ml-5">
                        <div className="bg-white rounded-md shadow-md h-1/2">
                            <div className="border-b-2 p-2">OEE</div>
                            <div className="">
                                <ReactApexChart options={oeeChartData.options} series={oeeChartData.series} type="radialBar" height={157} />
                            </div>
                        </div>

                        <div className="bg-white rounded-md shadow-md h-1/2 mt-3">
                            <div className="border-b-2 p-2">Up-Time</div>
                            <div className="">
                                <ReactApexChart options={uptimeChartData.options} series={uptimeChartData.series} type="radialBar" height={157} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-5 flex">
                    <div className="bg-white rounded-md shadow-md w-1/4">
                        <div className="border-b-2 p-2">Corn Components</div>
                        <div className="">
                            <ReactApexChart options={cornChartData.responsive[0].options} series={cornChartData.series} type="pie" height={350} />
                        </div>
                    </div>

                    <div className="bg-white rounded-md shadow-md w-3/4 ml-3">
                        <div className="border-b-2 p-2">Stage Summary</div>
                        <div className="">
                            <table className="table-auto w-full border-collapse border border-slate-100">
                                <thead className="border-b-2">
                                    <tr>
                                        <td scope="">
                                            <input type="checkbox" className="" id="btncheckall" autoComplete="off" />
                                            <label className="" htmlFor="btncheckall"></label>
                                        </td>
                                        <th scope="border border-slate-300">Stage</th>
                                        <th scope="">Input</th>
                                        <th scope="">Production</th>
                                        <th scope="">Waste</th>
                                        <th scope="">Stops</th>
                                        <th scope="">Status</th>
                                        <th scope="">ROP</th>
                                        <th scope="">Time Stamp</th>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    <tr>
                                        <td scope="">
                                            <input type="checkbox" className="" id="btncheck1" autoComplete="off" />
                                            <label className="" htmlFor="btncheck1"></label>
                                        </td>
                                        <td>Stage 0</td>
                                        <td scope="">1000 kg</td>
                                        <td>980 kg</td>
                                        <td scope="">20 kg. 0</td>
                                        <td>0</td>
                                        <td scope="">.Off</td>
                                        <td>400 kg/h</td>
                                        <td scope="">1/21/2024, 11:06:07 AM</td>
                                    </tr>
                                    <tr>
                                        <td scope="">
                                            <input type="checkbox" className="" id="btncheck2" autoComplete="off" />
                                            <label className="" htmlFor="btncheck2"></label>
                                        </td>
                                        <td>Stage 1</td>
                                        <td scope="">1000 kg</td>
                                        <td>980 kg</td>
                                        <td scope="">20 kg. 0</td>
                                        <td>1</td>
                                        <td scope="">.Off</td>
                                        <td>400 kg/h</td>
                                        <td scope="">1/21/2024, 11:06:07 AM</td>
                                    </tr>
                                    <tr>
                                        <td scope="">
                                            <input type="checkbox" className="" id="btncheck3" autoComplete="off" />
                                            <label className="" htmlFor="btncheck3"></label>
                                        </td>
                                        <td>Stage 2</td>
                                        <td scope="">1000 kg</td>
                                        <td>980 kg</td>
                                        <td scope="">20 kg. 0</td>
                                        <td>2</td>
                                        <td scope="">.Off</td>
                                        <td>400 kg/h</td>
                                        <td scope="">1/21/2024, 11:06:07 AM</td>
                                    </tr>
                                    <tr>
                                        <td scope="">
                                            <input type="checkbox" className="" id="btncheck4" autoComplete="off" />
                                            <label className="" htmlFor="btncheck4"></label>
                                        </td>
                                        <td>Stage 3</td>
                                        <td scope="">1000 kg</td>
                                        <td>980 kg</td>
                                        <td scope="">20 kg. 0</td>
                                        <td>3</td>
                                        <td scope="">.On</td>
                                        <td>400 kg/h</td>
                                        <td scope="">1/21/2024, 11:06:07 AM</td>
                                    </tr>
                                    <tr>
                                        <td scope="">
                                            <input type="checkbox" className="" id="btncheck5" autoComplete="off" />
                                            <label className="" htmlFor="btncheck5"></label>
                                        </td>
                                        <td>Stage 4</td>
                                        <td scope="">1000 kg</td>
                                        <td>980 kg</td>
                                        <td scope="">20 kg. 0</td>
                                        <td>4</td>
                                        <td scope="">.On</td>
                                        <td>400 kg/h</td>
                                        <td scope="">1/21/2024, 11:06:07 AM</td>
                                    </tr>
                                </tbody>
                            </table>

                            <nav className="" aria-label="Page navigation">
                                <ul className="flex justify-end">
                                    <li className="">
                                        <a className="" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                        </a>
                                    </li>
                                    <li className=""><a className="" href="#">1</a></li>
                                    <li className=""><a className="" href="#">2</a></li>
                                    <li className=""><a className="" href="#">3</a></li>
                                    <li className="">
                                        <a className="" href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;