import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        metrics: state.metrics
    }
}

const OeeCard = (props) => {

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
                                        return 100 - b + "%"
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
            labels: ['OEE', ''],
            colors: ['#AFAFAF', '#77C18B']
        }
    });

    useEffect(() => {
        if (!props.metrics.isLoading && !props.metrics.errMess) {
            setOeeChartData({ ...oeeChartData, series: [parseInt(props.metrics.performanceMetrics?.oee), (100 - parseInt(props.metrics.performanceMetrics?.oee))] });
        }
    }, [props.metrics.performanceMetrics?.oee])

    // if (props.metrics.isLoading) {
    //     return (
    //         <div className="bg-white rounded-lg shadow-md m-3 p-2 pt-5 relative  flex flex-col justify-around">
    //             <p className="text-green-700 text-xl p-7">Loading...</p>
    //         </div>
    //     );
    // }
    // else if (props.metrics.errMess) {
    //     return (
    //         <div className="bg-white rounded-lg shadow-md m-3 p-2 pt-5 relative  flex flex-col justify-around">
    //             <p className="text-red-700 text-xl p-7">{props.metrics.errMess}</p>
    //         </div>
    //     );
    // }
    // else {
        return (
            <div className="bg-white rounded-lg shadow-md m-3 p-2 pt-5 relative  flex flex-col justify-around">
                <div className="absolute top-0 right-0 pr-2 pt-2">
                    <i className="bi bi-calendar3 text-green-700 hover:cursor-pointer"></i>
                </div>
                <div className="text-center text-green-700 font-semibold">
                    <i className="bi bi-caret-left-fill hover:cursor-pointer"></i> March 2023 <i className="bi bi-caret-right-fill hover:cursor-pointer"></i>
                </div>
                <div className="my-2">
                    <p className="text-center text-2xl text-[#043912]">OEE</p>
                    <ReactApexChart options={oeeChartData.options} series={oeeChartData.series} type="donut" height={180} />
                </div>
            </div>
        );
    // }
}

export default connect(mapStateToProps, null)(OeeCard);