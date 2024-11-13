import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        horizon: state.horizon
    }
}

const PerformanceCard = (props) => {

    const [supplierData, setSupplierData] = useState({
        series: [60],
        options: {
            chart: {
                height: '100%',
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            show: true,
                        },
                        value: {
                            show: true,
                            fontSize: '18px',
                            formatter: function (val) {
                                return val + '%'
                            }
                        },
                        total: {
                            show: true,
                            fontSize: '14px',
                            fontWeight: 550,
                            label: 'Performance'
                        }
                    },
                    hollow: {
                        size: '40%'
                    },
                    track: {
                        show: true,
                        background: '#EEC35EBD',
                        strokeWidth: '30%',
                        opacity: 1
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
            colors: ['#77C18B', '#EEC35EBD']
        }
    });

    // const [supplierData, setSupplierData] = useState({
    //     series: [60, 40],
    //     options: {
    //         chart: {
    //             height: 350,
    //             type: 'donut',
    //         },
    //         plotOptions: {
    //             pie: {
    //                 donut: {
    //                     size: '80%',
    //                     labels: {
    //                         show: true,
    //                         total: {
    //                             show: true,
    //                             showAlways: true,
    //                             fontSize: "16px",
    //                             label: 'Performance',
    //                             color: '#043912',
    //                             formatter: function (w) {
    //                                 return w.globals.seriesTotals.reduce((a, b) => {
    //                                     // return 100 - b
    //                                     // return props.feeds.feedInfoByType?.totalCurrentFeedWeight;
    //                                     return 60 + "%";
    //                                 }, 0)
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //         },
    //         stroke: {
    //             show: true,
    //             curve: 'smooth',
    //             // lineCap: 'butt',
    //             // colors: ['#F99963'],
    //             width: 1,
    //             // dashArray: 0
    //         },
    //         dataLabels: {
    //             enabled: false,
    //         },
    //         legend: {
    //             show: false
    //         },
    //         labels: ['', ''],
    //         colors: ['#77C18B', '#EEC35EBD']
    //     }
    // });

    const updateChartData = () => {
        setSupplierData({
            series: [(props.horizon.cowsKilledMetrics?.performance)?.toFixed(2)],
            options: {
                chart: {
                    height: '100%',
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        dataLabels: {
                            name: {
                                show: true,
                            },
                            value: {
                                show: true,
                                fontSize: '18px',
                                formatter: function (val) {
                                    return val + '%'
                                }
                            },
                            total: {
                                show: true,
                                fontSize: '14px',
                                fontWeight: 550,
                                label: 'Performance'
                            }
                        },
                        hollow: {
                            size: '40%'
                        },
                        track: {
                            show: true,
                            background: '#EEC35EBD',
                            strokeWidth: '30%',
                            opacity: 1
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
                colors: ['#77C18B', '#EEC35EBD']
            }
        });
    };

    useEffect(() => {
        updateChartData();
    }, [props.horizon.cowsKilledMetrics?.performance])

    if (props.horizon.isLoading) {
        return (
            <div className="bg-white rounded-lg shadow-md m-3 mt-7">
                <p className="text-green-700 text-xl p-7">Loading...</p>
            </div>
        );
    }
    else if (props.horizon.errMess) {
        return (
            <div className="bg-white rounded-lg shadow-md m-3 mt-7">
                <p className="text-red-700 text-xl p-7">{props.horizon.errMess}</p>
            </div>
        );
    }
    else {
        return (
            // <div className="bg-white rounded-lg shadow-md w-fit h-full flex flex-col justify-center text-center gap-3 text-[#043912] font-normal">
            //     {/* {props.feeds.feedInfoByType && <ReactApexChart options={supplierData.options} series={supplierData.series} type="donut" />} */}
            //     <div className="h-full flex items-center">
            //         <ReactApexChart options={supplierData.options} series={supplierData.series} type="radialBar" />
            //     </div>
            // </div>

            <div className="bg-white rounded-lg shadow-md h-full flex items-center">
                {/* {props.feeds.feedInfoByType && <ReactApexChart options={supplierData.options} series={supplierData.series} type="donut" />} */}
                <ReactApexChart options={supplierData.options} series={supplierData.series} type="radialBar" height={250} />
            </div>
        );
    }
}

export default connect(mapStateToProps, null)(PerformanceCard);