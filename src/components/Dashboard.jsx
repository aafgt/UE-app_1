import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { connect } from "react-redux";
import { fetchData, fetchData2, fetchData3, testPOSTpic } from "../redux/ActionCreators";


const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchData: () => { dispatch(fetchData()) },
    testPOSTpic: () => { dispatch(testPOSTpic()) },
    fetchData2: () => { dispatch(fetchData2()) },
    fetchData3: () => { dispatch(fetchData3()) }
})


function Dashboard(props) {

    useEffect(() => {
        //   props.fetchData();

        //   props.testPOSTpic();
        props.fetchData3();
    }, [])

    const zoneTable = [
        {
            "barn": 1,
            "numberOfCows": "10",
            "rateOfGrowth": "8/10",
            "rateOfConsumption": "5/10",
            "Issues": "100",
            "Grade": "1,0079",
            "Type": "100"
        },
        {
            "barn": 2,
            "numberOfCows": "10",
            "rateOfGrowth": "8/10",
            "rateOfConsumption": "5/10",
            "Issues": "100",
            "Grade": "1,0079",
            "Type": "100"
        },
        {
            "barn": 3,
            "numberOfCows": "10",
            "rateOfGrowth": "8/10",
            "rateOfConsumption": "5/10",
            "Issues": "100",
            "Grade": "1,0079",
            "Type": "100"
        },
        {
            "barn": 4,
            "numberOfCows": "10",
            "rateOfGrowth": "8/10",
            "rateOfConsumption": "5/10",
            "Issues": "100",
            "Grade": "1,0079",
            "Type": "100"
        },
        {
            "barn": 5,
            "numberOfCows": "10",
            "rateOfGrowth": "8/10",
            "rateOfConsumption": "5/10",
            "Issues": "100",
            "Grade": "1,0079",
            "Type": "100"
        }
    ]

    // const handleDemo = () => {
    //     setOeeChartData({...oeeChartData, series:[40,60]});

    //     setTimeout(() => {
    //         setOeeChartData({...oeeChartData, series:[90,10]});
    //     }, 3000);

    //     setProdChartData({...prodChartData, series: [{
    //         name: 'series1',
    //         data: [31, 40, 28, 51, 42, 109, 100, 20]
    //     }],  
    //     xaxis: {
    //         type: 'datetime',
    //         categories: ["2023-01-19T00:00:00.000Z", "2023-02-19T01:30:00.000Z", "2023-03-19T02:30:00.000Z", "2023-04-19T03:30:00.000Z", "2023-05-19T04:30:00.000Z", "2023-06-19T05:30:00.000Z", "2023-07-19T06:30:00.000Z", "2023-08-19T06:30:00.000Z"]
    //     },})

    //     setTimeout(() => {
    //         setProdChartData({...prodChartData, series: [{
    //             name: 'series1',
    //             data: [31, 40, 28, 51, 42, 109, 100, 20, 60]
    //         }],  
    //         xaxis: {
    //             type: 'datetime',
    //             categories: ["2023-01-19T00:00:00.000Z", "2023-02-19T01:30:00.000Z", "2023-03-19T02:30:00.000Z", "2023-04-19T03:30:00.000Z", "2023-05-19T04:30:00.000Z", "2023-06-19T05:30:00.000Z", "2023-07-19T06:30:00.000Z", "2023-08-19T06:30:00.000Z", "2023-09-19T06:30:00.000Z"]
    //         },})
    //     }, 3000);
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

    const [tableChartData, setTableChartData] = useState({
        series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
        }],
        options: {
            chart: {
                height: 350,
                type: 'area',
                toolbar: {
                    show: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            xaxis: {
                labels: {
                    show: false,
                },
                type: 'datetime',
                categories: ["2023-01-19T00:00:00.000Z", "2023-02-19T01:30:00.000Z", "2023-03-19T02:30:00.000Z", "2023-04-19T03:30:00.000Z", "2023-05-19T04:30:00.000Z", "2023-06-19T05:30:00.000Z", "2023-07-19T06:30:00.000Z"]
                // categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
                x: {
                    format: 'MM'
                },
                enabled: false
            },
            colors: ['#73C088'],
            yaxis: {
                show: false
            }
        },
    });

    const [oeeChartData, setOeeChartData] = useState({
        series: [70, 30],
        options: {
            chart: {
                height: 350,
                type: 'donut',
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '80%',
                        labels: {
                            show: true,
                            total: {
                                show: true,
                                showAlways: true,
                                label: 'OEE',
                                color: '#043912',
                                formatter: function (w) {
                                    return w.globals.seriesTotals.reduce((a, b) => {
                                        return 100 - b
                                    }, 0)
                                }
                            }
                        }
                    }
                }
            },
            dataLabels: {
                enabled: false,
            },
            legend: {
                show: false
            },
            labels: ['', ''],
            colors: ['#F99963', '#76B18B']
        }
    });

    const [uptimeChartData, setUptimeChartData] = useState({
        series: [40, 60],
        options: {
            chart: {
                height: 350,
                type: 'donut',
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '80%',
                        labels: {
                            show: true,
                            total: {
                                show: true,
                                showAlways: true,
                                label: 'Up-Time',
                                color: '#043912',
                                formatter: function (w) {
                                    return w.globals.seriesTotals.reduce((a, b) => {
                                        return 100 - b
                                    }, 0)
                                }
                            }
                        }
                    }
                }
            },
            dataLabels: {
                enabled: false,
            },
            legend: {
                show: false
            },
            labels: ['Up-Time', ''],
            colors: ['#F99963', '#76B18B']
        }
    });

    // const [oeeChartData, setOeeChartData] = useState({
    //     series: [70],
    //     options: {
    //         chart: {
    //             height: 350,
    //             type: 'radialBar',
    //         },
    //         plotOptions: {
    //             radialBar: {
    //                 hollow: {
    //                     size: '70%',
    //                 }
    //             },
    //         },
    //         labels: ['OEE'],
    //         colors: ['#FF5733']
    //     }
    // });

    // const [uptimeChartData, setUptimeChartData] = useState({
    //     series: [70],
    //     options: {
    //         chart: {
    //             height: 350,
    //             type: 'radialBar',
    //         },
    //         plotOptions: {
    //             radialBar: {
    //                 hollow: {
    //                     size: '70%',
    //                 }
    //             },
    //         },
    //         labels: ['Up-Time'],
    //         colors: ['#73C088']
    //     }
    // });

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
                            <div className="mt-2 flex"><div className="w-5 h-5  rounded-full bg-[#A7D5B4] flex justify-center items-center"><i className="bi bi-arrow-up-short"></i></div> <p className="ml-1"><span className="text-[#A7D5B4]">+12.00%</span> This week</p></div>
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
                            <div className="mt-2 flex"><div className="w-5 h-5  rounded-full bg-[#D5A7A7] flex justify-center items-center"><i className="bi bi-arrow-down-short"></i></div> <p className="ml-1"><span className="text-[#D5A7A7]">-3.00%</span> This week</p></div>
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
                            <div className="mt-2 flex"><div className="w-5 h-5  rounded-full bg-[#A7D5B4] flex justify-center items-center"><i className="bi bi-arrow-up-short"></i></div> <p className="ml-1"><span className="text-[#A7D5B4]">+2.00%</span> This week</p></div>
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

                    {/* <div className="bg-white rounded-lg shadow-md m-3 mt-7">
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
                    </div> */}





                    <div className="bg-white rounded-lg shadow-md m-3 mt-7 p-3 relative">
                        {/* <div className="px-5 py-4 flex justify-between"> */}
                        <p className="font-semibold text-xl">Watchlist</p>
                        <button className=" absolute top-5 right-5 px-2 py-1 border-2 rounded-lg text-gray-700 font-semibold">Feb <i className="bi bi-arrow-down-short"></i></button>
                        {/* <button className="border border-gray-500 text-gray-500 px-2 rounded-md">Department 1 <i className="bi bi-arrow-down-short"></i></button> */}
                        {/* </div> */}
                        {/* <table className="w-full text-center table-fixed">
                            <tbody>
                                <tr className="hover:cursor-pointer border-b-2" onClick={() => { window.location.href = "/orders"; }}>
                                    <td>Cost</td>
                                    <td><ReactApexChart options={tableChartData.options} series={tableChartData.series} type="area" height={100} /></td>
                                    <td>1658.90 <i className="bi bi-arrow-up text-blue-700"></i></td>
                                </tr>
                                <tr className="hover:cursor-pointer border-b-2" onClick={() => { window.location.href = "/orders"; }}>
                                    <td>Production</td>
                                    <td><ReactApexChart options={tableChartData.options} series={tableChartData.series} type="area" height={100} /></td>
                                    <td>1658.90</td>
                                </tr>
                                <tr className="hover:cursor-pointer" onClick={() => { window.location.href = "/orders"; }}>
                                    <td>No. of Cows</td>
                                    <td><ReactApexChart options={tableChartData.options} series={tableChartData.series} type="area" height={100} /></td>
                                    <td>1658.90</td>
                                </tr>
                            </tbody>
                        </table> */}

                        <div>
                            <div className="grid grid-cols-3 gap-5 border-b-2 hover:cursor-pointer" onClick={() => { window.location.href = "/orders"; }}>
                                <div className="flex items-center">
                                    <p className="text-xl">Cost</p>
                                </div>
                                <div className="">
                                    <ReactApexChart options={tableChartData.options} series={tableChartData.series} type="area" height={100} />
                                </div>
                                <div className="flex justify-end items-center">
                                    <p className="text-xl">1658.90 <i className="bi bi-arrow-up text-blue-700"></i></p>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-5 border-b-2 hover:cursor-pointer" onClick={() => { window.location.href = "/orders"; }}>
                                <div className="flex items-center">
                                    <p className="text-xl">Production</p>
                                </div>
                                <div className="">
                                    <ReactApexChart options={tableChartData.options} series={tableChartData.series} type="area" height={100} />
                                </div>
                                <div className="flex justify-end items-center">
                                    <p className="text-xl">1658.90 <i className="bi bi-arrow-up text-blue-700"></i></p>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 hover:cursor-pointer" onClick={() => { window.location.href = "/orders"; }}>
                                <div className="flex items-center">
                                    <p className="text-xl">No. of Cows</p>
                                </div>
                                <div className="">
                                    <ReactApexChart options={tableChartData.options} series={tableChartData.series} type="area" height={100} />
                                </div>
                                <div className="flex justify-end items-center">
                                    <p className="text-xl">1658 <i className="bi bi-arrow-up text-blue-700"></i></p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="bg-white rounded-lg shadow-md m-3 mt-7">
                        <div className="p-3">
                            <div className="flex justify-end">
                                <button className="px-2 py-1 border-2 rounded-lg text-gray-700 font-semibold">Zone1 <i className="bi bi-arrow-down-short"></i></button>
                            </div>
                            <table className="w-full text-center table-fixed">
                                <thead className="text-green-700 font-semibold">
                                    <tr>
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
                                    {zoneTable.map((zone, index) => (
                                        <tr key={index}>
                                            <td className="text-green-400 hover:cursor-pointer" onClick={handleToggleModal2}>{zone.barn}</td>
                                            <td>{zone.numberOfCows}</td>
                                            <td>{zone.rateOfGrowth}</td>
                                            <td>{zone.rateOfConsumption}</td>
                                            <td>{zone.Issues}</td>
                                            <td>{zone.Grade}</td>
                                            <td>{zone.Type}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md m-3 mt-7 p-3">
                        {props.data && props.data.data}
                        {props.data?.errMess}
                        <img src={props.data.data} alt="" />
                    </div>
                </div>

                <div className="w-1/5">
                    <div className="bg-white rounded-lg shadow-md m-3 p-2 pt-5 relative  flex flex-col justify-around">
                        <div className="absolute top-0 right-0 pr-2 pt-2">
                            <i className="bi bi-calendar3 text-green-700 hover:cursor-pointer"></i>
                        </div>
                        <div className="text-center text-green-700 font-semibold">
                            <i className="bi bi-caret-left-fill hover:cursor-pointer"></i> March 2023 <i className="bi bi-caret-right-fill hover:cursor-pointer"></i>
                        </div>
                        <div className="my-5">
                            <ReactApexChart options={oeeChartData.options} series={oeeChartData.series} type="donut" height={200} />
                        </div>
                        <div className="pl-2 border-t-2 pt-3">
                            <p><span className="bg-slate-300 rounded-full p-1"><i className="bi bi-emoji-smile text-blue-800"></i></span> You're doing good!</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md m-3 p-2 mt-7 pt-5 relative flex flex-col justify-around">
                        <div className="absolute top-0 right-0 pr-2 pt-2">
                            <i className="bi bi-calendar3 text-green-700 hover:cursor-pointer"></i>
                        </div>
                        <div className="text-center text-green-700 font-semibold">
                        <i className="bi bi-caret-left-fill hover:cursor-pointer"></i> March 2023 <i className="bi bi-caret-right-fill hover:cursor-pointer"></i>
                        </div>
                        <div className="my-5">
                            <ReactApexChart options={uptimeChartData.options} series={uptimeChartData.series} type="donut" height={200} />
                        </div>
                        <div className="pl-2 border-t-2 pt-3">
                            <p><span className="bg-slate-300 rounded-full p-1"><i className="bi bi-emoji-smile text-blue-800"></i></span> You're doing good!</p>
                        </div>
                    </div>
                </div>
            </div>


            {toggleModal2 && <div id="modal" className="items-center justify-center h-screen w-screen fixed top-0 bg-black/50">
                <div className="bg-white max-w-xl w-full rounded-md absolute top-1/2 -translate-y-1/2 translate-x-1/2">
                    <div className="p-3 flex items-center justify-between">
                        <h3 className="font-semibold text-xl text-green-600">Number Of Cows</h3>
                        <span className="modal-close cursor-pointer" onClick={handleToggleModal2}>×</span>
                    </div>
                    <div className="p-3">
                        <div className="grid grid-cols-4 gap-5">
                            <button className="border-2 px-2 py-2 text-green-600 rounded-md hover:bg-[#76C18B] hover:text-white" onClick={handleToggleModal}>123456</button>
                            <button className="border-2 px-2 py-2 text-green-600 rounded-md hover:bg-[#76C18B] hover:text-white" onClick={handleToggleModal}>789545</button>
                            <button className="border-2 px-2 py-2 text-green-600 rounded-md hover:bg-[#76C18B] hover:text-white" onClick={handleToggleModal}>789545</button>
                            <button className="border-2 px-2 py-2 text-green-600 rounded-md hover:bg-[#76C18B] hover:text-white" onClick={handleToggleModal}>789545</button>
                            <button className="border-2 px-2 py-2 text-green-600 rounded-md hover:bg-[#76C18B] hover:text-white" onClick={handleToggleModal}>789545</button>
                            <button className="border-2 px-2 py-2 text-green-600 rounded-md hover:bg-[#76C18B] hover:text-white" onClick={handleToggleModal}>789545</button>
                            <button className="border-2 px-2 py-2 text-green-600 rounded-md hover:bg-[#76C18B] hover:text-white" onClick={handleToggleModal}>789545</button>
                            <button className="border-2 px-2 py-2 text-green-600 rounded-md hover:bg-[#76C18B] hover:text-white" onClick={handleToggleModal}>789545</button>
                            <button className="border-2 px-2 py-2 text-green-600 rounded-md hover:bg-[#76C18B] hover:text-white" onClick={handleToggleModal}>789545</button>
                            <button className="border-2 px-2 py-2 text-green-600 rounded-md hover:bg-[#76C18B] hover:text-white" onClick={handleToggleModal}>789545</button>
                            <button className="border-2 px-2 py-2 text-green-600 rounded-md hover:bg-[#76C18B] hover:text-white" onClick={handleToggleModal}>789545</button>
                            <button className="border-2 px-2 py-2 text-green-600 rounded-md hover:bg-[#76C18B] hover:text-white" onClick={handleToggleModal}>789545</button>
                        </div>
                    </div>
                    {/* <div className="p-3 flex items-center justify-end">
                        <div>
                            <button className="text-sm text-white bg-blue-500 rounded-md px-4 py-2" onClick={handleToggleModal2}>Ok</button>
                            <button className="modal-close text-sm text-gray-400 border rounded-md px-4 py-2" onClick={handleToggleModal2}>Cancel</button>
                        </div>
                    </div> */}
                </div>
            </div>}

            {/* <button id="modal-button" class="text-sm text-white bg-blue-500 rounded-md px-4 py-2" onClick={handleToggleModal}>Open Modal</button> */}
            {/* TABLE MODAL */}
            {toggleModal && <div id="modal" className="items-center justify-center h-screen w-screen fixed top-0 bg-black/50">
                <div className="bg-white max-w-xl w-full rounded-md absolute top-1/2 -translate-y-1/2 translate-x-1/2">
                    <div className="p-3 flex items-center justify-between border-b border-b-gray-300">
                        <h3 className="font-semibold text-xl">Details Of Cow 123458</h3>
                        <span className="modal-close cursor-pointer" onClick={handleToggleModal}>×</span>
                    </div>
                    <div className="p-3">
                        <div className="flex text-[#043912]">
                            <div className="">
                                <p>Rate of Growth</p>
                                <p>Grade</p>
                                <p>Issues</p>
                                <p>Date of Supply</p>
                                <p>Supplier</p>
                                <p>Supply Weight</p>
                                <p>Current Weight</p>
                            </div>

                            <div className="ml-20">
                                <p>10 kg/month</p>
                                <p>A</p>
                                <p>3</p>
                                <p>4/8/2023</p>
                                <p>Ahmed</p>
                                <p>200 kg</p>
                                <p>350 kg</p>
                            </div>
                        </div>
                        <p className="mt-5 border px-1 pb-16 rounded-md font-medium">Notes :</p>
                    </div>
                    <div className="p-3 flex items-center justify-end">
                        <div>
                            <button className="text-sm text-white bg-[#73C088] rounded-md px-4 py-1" onClick={handleToggleModal}>Ok</button>
                            <button className="modal-close text-sm text-[#73C088] border rounded-md px-4 py-1 ml-3" onClick={handleToggleModal}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>}


        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);