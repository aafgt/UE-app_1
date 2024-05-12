import { useState } from "react";
import Card_Dashboard from "./shared/Card_Dashboard";
import ReactApexChart from "react-apexcharts";

function Dashboard() {

    // const handleDemo = () => {
    //     setOeeChartData({...oeeChartData, series:[10]});
    // };

    const [toggleModal, setToggleModal] = useState(false);

    const handleToggleModal = () => {
        setToggleModal(!toggleModal);
    };

    const [toggleModal2, setToggleModal2] = useState(false);

    const handleToggleModal2 = () => {
        setToggleModal2(!toggleModal2);
    };

    const [prodChartData, setProdChartData] = useState({
        series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
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
                curve: 'straight'
            },
            xaxis: {
                type: 'datetime',
                categories: ["2023-01-19T00:00:00.000Z", "2023-02-19T01:30:00.000Z", "2023-03-19T02:30:00.000Z", "2023-04-19T03:30:00.000Z", "2023-05-19T04:30:00.000Z", "2023-06-19T05:30:00.000Z", "2023-07-19T06:30:00.000Z"]
                // categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
                x: {
                    format: 'MM'
                },
            },
            colors: ['#73C088']
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
            labels: ['OEE'],
            colors: ['#FF5733']
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
            labels: ['Up-Time'],
            colors: ['#73C088']
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

    const [subTableOpen, setSubTableOpen] = useState(false);
    const [subTableOpen2, setSubTableOpen2] = useState(false);
    const [subTableOpen3, setSubTableOpen3] = useState(false);
    const [subTableOpen4, setSubTableOpen4] = useState(false);

    const toggleSubTable = () => {
        setSubTableOpen(!subTableOpen);
    };
    const toggleSubTable2 = () => {
        setSubTableOpen2(!subTableOpen2);
    };
    const toggleSubTable3 = () => {
        setSubTableOpen3(!subTableOpen3);
    };
    const toggleSubTable4 = () => {
        setSubTableOpen4(!subTableOpen4);
    };

    const subTableRows = () => {
        return (
            <>
                <tr className="border-b-2">
                    <td></td>
                    <td className="hover:cursor-pointer bg-green-700 rounded-sm" onClick={handleToggleModal2}>Barn 1</td>
                    <td>1,0079</td>
                    <td>100</td>
                    <td>2</td>
                    <td>100</td>
                    <td>1,0079</td>
                    <td>100</td>
                </tr>
                <tr className="border-b-2">
                    <td></td>
                    <td className="hover:cursor-pointer bg-green-700 rounded-sm" onClick={handleToggleModal2}>Barn 2</td>
                    <td>1,0079</td>
                    <td>100</td>
                    <td>2</td>
                    <td>100</td>
                    <td>1,0079</td>
                    <td>100</td>
                </tr>
                <tr className="border-b-2">
                    <td></td>
                    <td className="hover:cursor-pointer bg-green-700 rounded-sm" onClick={handleToggleModal2}>Barn 3</td>
                    <td>1,0079</td>
                    <td>100</td>
                    <td>2</td>
                    <td>100</td>
                    <td>1,0079</td>
                    <td>100</td>
                </tr>
            </>
        )
    };
    const subTableRows2 = () => {
        return (
            <>
                <tr className="border-b-2">
                    <td></td>
                    <td className="hover:cursor-pointer bg-green-700bg-green-700 rounded-sm" onClick={handleToggleModal2}>Barn 1</td>
                    <td>1,0079</td>
                    <td>100</td>
                    <td>2</td>
                    <td>100</td>
                    <td>1,0079</td>
                    <td>100</td>
                </tr>
                <tr className="border-b-2">
                    <td></td>
                    <td className="hover:cursor-pointer bg-green-700bg-green-700 rounded-sm" onClick={handleToggleModal2}>Barn 2</td>
                    <td>1,0079</td>
                    <td>100</td>
                    <td>2</td>
                    <td>100</td>
                    <td>1,0079</td>
                    <td>100</td>
                </tr>
                <tr className="border-b-2">
                    <td></td>
                    <td className="hover:cursor-pointer bg-green-700bg-green-700 rounded-sm" onClick={handleToggleModal2}>Barn 3</td>
                    <td>1,0079</td>
                    <td>100</td>
                    <td>2</td>
                    <td>100</td>
                    <td>1,0079</td>
                    <td>100</td>
                </tr>
            </>
        )
    };
    const subTableRows3 = () => {
        return (
            <>
                <tr className="border-b-2">
                    <td></td>
                    <td className="hover:cursor-pointer bg-green-700 rounded-sm" onClick={handleToggleModal2}>Barn 1</td>
                    <td>1,0079</td>
                    <td>100</td>
                    <td>2</td>
                    <td>100</td>
                    <td>1,0079</td>
                    <td>100</td>
                </tr>
                <tr className="border-b-2">
                    <td></td>
                    <td className="hover:cursor-pointer bg-green-700 rounded-sm" onClick={handleToggleModal2}>Barn 2</td>
                    <td>1,0079</td>
                    <td>100</td>
                    <td>2</td>
                    <td>100</td>
                    <td>1,0079</td>
                    <td>100</td>
                </tr>
                <tr className="border-b-2">
                    <td></td>
                    <td className="hover:cursor-pointer bg-green-700 rounded-sm" onClick={handleToggleModal2}>Barn 3</td>
                    <td>1,0079</td>
                    <td>100</td>
                    <td>2</td>
                    <td>100</td>
                    <td>1,0079</td>
                    <td>100</td>
                </tr>
            </>
        )
    };
    const subTableRows4 = () => {
        return (
            <tr className="border-b-2">
                <td></td>
                <td className="hover:cursor-pointer bg-green-700 rounded-sm" onClick={handleToggleModal2}>Barn 4</td>
                <td>1,0079</td>
                <td>100</td>
                <td>2</td>
                <td>100</td>
                <td>1,0079</td>
                <td>100</td>
            </tr>
        )
    };

    return (
        <>
            <div className="flex">
                <div className="w-4/5">
                    <div className="flex m-3">
                        <div className="bg-white shadow-md rounded-lg w-full px-2 pb-1">
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-green-700 font-medium text-sm">Total Sales</p>
                                    <p className="text-[#043912] font-bold text-xl">$9,230</p>
                                </div>
                                <div className="text-orange-400 text-2xl">
                                    <i className="bi bi-trophy-fill"></i>
                                </div>
                            </div>
                            <p className="mt-2"><i className="bi bi-arrow-up-short rounded-full bg-green-400"></i> <span className="text-green-400">+12.00%</span> This week</p>
                        </div>

                        <div className="bg-white shadow-md rounded-lg w-full px-2 pb-1 ml-5">
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-green-700 font-medium text-sm">Total Order</p>
                                    <p className="text-[#043912] font-bold text-xl">3,604</p>
                                </div>
                                <div className="text-red-400 text-2xl">
                                    <i className="bi bi-handbag-fill"></i>
                                </div>
                            </div>
                            <p className="mt-2"><i className="bi bi-arrow-down-short  rounded-full bg-red-400"></i> <span className="text-red-400">-3.00%</span> This week</p>
                        </div>

                        <div className="bg-white shadow-md rounded-lg w-full px-2 pb-1 ml-5">
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-green-700 font-medium text-sm">Total Product</p>
                                    <p className="text-[#043912] font-bold text-xl">322</p>
                                </div>
                                <div className="text-blue-400 text-2xl">
                                    <i className="bi bi-tag-fill"></i>
                                </div>
                            </div>
                            <p className="mt-2"><i className="bi bi-arrow-up-short rounded-full bg-green-400"></i> <span className="text-green-400">+2.00%</span> This week</p>
                        </div>
                    </div>

                    <div className="m-3 mt-7">
                        <div className="bg-white rounded-lg shadow-md">
                            <div className="px-5 py-4 flex justify-between">
                                <p className="font-semibold text-xl">Rate of Production</p>
                                {/* <button className="border border-gray-500 text-gray-500 px-2 rounded-md">Department 1 <i className="bi bi-arrow-down-short"></i></button> */}
                            </div>
                            <div className="">
                                <ReactApexChart options={prodChartData.options} series={prodChartData.series} type="area" height={350} />
                            </div>
                        </div>
                    </div>

                    {/* <div className="bg-white rounded-lg shadow-md m-3 mt-7">
                        <div className="p-3">
                            <table className="w-full">
                                <thead className="text-green-700 font-semibold">
                                    <tr>
                                        <td>Department</td>
                                        <td>Raw Material</td>
                                        <td>Production</td>
                                        <td>ROP</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b-2">
                                        <td>1</td>
                                        <td>100</td>
                                        <td>1,0079</td>
                                        <td>100</td>
                                    </tr>
                                    <tr className="border-b-2">
                                        <td>2</td>
                                        <td>100</td>
                                        <td>1,0079</td>
                                        <td>100</td>
                                    </tr>
                                    <tr className="border-b-2">
                                        <td>3</td>
                                        <td>100</td>
                                        <td>1,0079</td>
                                        <td>100</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>100</td>
                                        <td>1,0079</td>
                                        <td>100</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div> */}

                    <div className="bg-white rounded-lg shadow-md m-3 mt-7">
                        <div className="p-3">
                            <table className="w-full text-center table-fixed">
                                <thead className="text-green-700 font-semibold">
                                    <tr>
                                        <td>Zone</td>
                                        <td>Barn</td>
                                        <td>No. of Cow</td>
                                        <td>Rate of Growth</td>
                                        <td>Rate of Consumption</td>
                                        <td>Issues</td>
                                        <td>Grade</td>
                                        <td>Type</td>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    <tr className="border-b-2">
                                        <td className="hover:cursor-pointer bg-green-700 rounded-sm font-semibold" onClick={toggleSubTable}>Zone 1</td>
                                    </tr>
                                    {subTableOpen && subTableRows()}
                                    <tr className="border-b-2">
                                        <td className="hover:cursor-pointer bg-green-700 rounded-sm font-semibold" onClick={toggleSubTable2}>Zone 2</td>
                                    </tr>
                                    {subTableOpen2 && subTableRows2()}
                                    <tr className="border-b-2">
                                        <td className="hover:cursor-pointer bg-green-700 rounded-sm font-semibold" onClick={toggleSubTable3}>Zone 3</td>
                                    </tr>
                                    {subTableOpen3 && subTableRows3()}
                                    <tr>
                                        <td className="hover:cursor-pointer bg-green-700 rounded-sm font-semibold" onClick={toggleSubTable4}>Zone 4</td>
                                    </tr>
                                    {subTableOpen4 && subTableRows4()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="w-1/5">
                    <div className="bg-white rounded-lg shadow-md m-3 p-2 pt-5 relative  flex flex-col justify-around">
                        <div className="absolute top-0 right-0 pr-2 pt-2">
                            <i className="bi bi-calendar3 text-green-700"></i>
                        </div>
                        <div className="text-center text-green-700 font-semibold">
                            <i className="bi bi-arrow-bar-left"></i> March 2023 <i className="bi bi-arrow-bar-right"></i>
                        </div>
                        <div>
                            <ReactApexChart options={oeeChartData.options} series={oeeChartData.series} type="radialBar" height={200} />
                        </div>
                        <div className="pl-2 border-t-2 pt-3">
                            <p><span className="bg-slate-300 rounded-full p-1"><i className="bi bi-emoji-smile text-blue-800"></i></span> You're doing good!</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md m-3 p-2 mt-7 pt-5 relative flex flex-col justify-around">
                        <div className="absolute top-0 right-0 pr-2 pt-2">
                            <i className="bi bi-calendar3 text-green-700"></i>
                        </div>
                        <div className="text-center text-green-700 font-semibold">
                            <i className="bi bi-arrow-bar-left"></i> March 2023 <i className="bi bi-arrow-bar-right"></i>
                        </div>
                        <div>
                            <ReactApexChart options={uptimeChartData.options} series={uptimeChartData.series} type="radialBar" height={200} />
                        </div>
                        <div className="pl-2 border-t-2 pt-3">
                            <p><span className="bg-slate-300 rounded-full p-1"><i className="bi bi-emoji-smile text-blue-800"></i></span> You're doing good!</p>
                        </div>
                    </div>
                </div>
            </div>


            {toggleModal2 && <div id="modal" className="items-center justify-center h-screen w-screen fixed top-0 bg-black/50">
                <div className="bg-white max-w-xl w-full rounded-md">
                    <div className="p-3 flex items-center justify-between border-b border-b-gray-300">
                        <h3 className="font-semibold text-xl">Barn</h3>
                        <span className="modal-close cursor-pointer" onClick={handleToggleModal2}>×</span>
                    </div>
                    <div className="p-3 border-b border-b-gray-300">
                        <div className="grid grid-cols-4 gap-5">
                            <button className="bg-green-700 px-2 py-1 text-white" onClick={handleToggleModal}>123456</button>
                            <button className="bg-green-700 px-2 py-1 text-white" onClick={handleToggleModal}>789545</button>
                            <button className="bg-green-700 px-2 py-1 text-white" onClick={handleToggleModal}>789545</button>
                            <button className="bg-green-700 px-2 py-1 text-white" onClick={handleToggleModal}>789545</button>
                            <button className="bg-green-700 px-2 py-1 text-white" onClick={handleToggleModal}>789545</button>
                            <button className="bg-green-700 px-2 py-1 text-white" onClick={handleToggleModal}>789545</button>
                            <button className="bg-green-700 px-2 py-1 text-white" onClick={handleToggleModal}>789545</button>
                            <button className="bg-green-700 px-2 py-1 text-white" onClick={handleToggleModal}>789545</button>
                            <button className="bg-green-700 px-2 py-1 text-white" onClick={handleToggleModal}>789545</button>
                            <button className="bg-green-700 px-2 py-1 text-white" onClick={handleToggleModal}>789545</button>
                            <button className="bg-green-700 px-2 py-1 text-white" onClick={handleToggleModal}>789545</button>
                            <button className="bg-green-700 px-2 py-1 text-white" onClick={handleToggleModal}>789545</button>
                        </div>
                    </div>
                    <div className="p-3 flex items-center justify-end">
                        <div>
                            <button className="text-sm text-white bg-blue-500 rounded-md px-4 py-2" onClick={handleToggleModal2}>Ok</button>
                            <button className="modal-close text-sm text-gray-400 border rounded-md px-4 py-2" onClick={handleToggleModal2}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>}

            {/* <button id="modal-button" class="text-sm text-white bg-blue-500 rounded-md px-4 py-2" onClick={handleToggleModal}>Open Modal</button> */}
            {/* TABLE MODAL */}
            {toggleModal && <div id="modal" className="items-center justify-center h-screen w-screen fixed top-0 bg-black/50">
                <div className="bg-white max-w-xl w-full rounded-md">
                    <div className="p-3 flex items-center justify-between border-b border-b-gray-300">
                        <h3 className="font-semibold text-xl">Details</h3>
                        <span className="modal-close cursor-pointer" onClick={handleToggleModal}>×</span>
                    </div>
                    <div className="p-3 border-b border-b-gray-300">
                        <div className="flex justify-around">
                            <div className="">
                                <p>Rate of Growth</p>
                                <p>Grade</p>
                                <p>Issues</p>
                                <p>Date of Supply</p>
                                <p>Supplier</p>
                                <p>Supply Weight</p>
                                <p>Current Weight</p>
                            </div>

                            <div>
                                <p>10 kg/month</p>
                                <p>A</p>
                                <p>3</p>
                                <p>4/8/2023</p>
                                <p>Ahmed</p>
                                <p>200 kg</p>
                                <p>350 kg</p>
                            </div>
                        </div>
                        <p className="mt-5">Notes:</p>
                    </div>
                    <div className="p-3 flex items-center justify-end">
                        <div>
                            <button className="text-sm text-white bg-blue-500 rounded-md px-4 py-2" onClick={handleToggleModal}>Ok</button>
                            <button className="modal-close text-sm text-gray-400 border rounded-md px-4 py-2" onClick={handleToggleModal}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>}


        </>
    )
}

export default Dashboard;