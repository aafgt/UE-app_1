import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        metrics: state.metrics
    }
}

const UptimeCard = (props) => {

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
            labels: ['Up-Time', ''],
            colors: ['#F99963', '#76B18B']
        }
    });

    useEffect(() => {
        if (!props.metrics.isLoading && !props.metrics.errMess) {
            setUptimeChartData({ ...uptimeChartData, series: [parseInt(props.metrics.performanceMetrics?.upTime), (100 - parseInt(props.metrics.performanceMetrics?.upTime))] });
        }
    }, [props.metrics.performanceMetrics?.upTime])

    if (props.metrics.isLoading) {
        return (
            <div className="bg-white rounded-lg shadow-md m-3 p-2 mt-7 pt-5 relative flex flex-col justify-around">
                <p className="text-green-700 text-xl p-7">Loading...</p>
            </div>
        );
    }
    else if (props.metrics.errMess) {
        return (
            <div className="bg-white rounded-lg shadow-md m-3 p-2 mt-7 pt-5 relative flex flex-col justify-around">
                <p className="text-red-700 text-xl p-7">{props.metrics.errMess}</p>
            </div>
        );
    }
    else {
        return (
            <div className="bg-white rounded-lg shadow-md m-3 p-2 mt-7 pt-5 relative flex flex-col justify-around">
                <div className="absolute top-0 right-0 pr-2 pt-2">
                    <i className="bi bi-calendar3 text-green-700 hover:cursor-pointer"></i>
                </div>
                <div className="text-center text-green-700 font-semibold">
                    <i className="bi bi-caret-left-fill hover:cursor-pointer"></i> March 2023 <i className="bi bi-caret-right-fill hover:cursor-pointer"></i>
                </div>
                <div className="my-5">
                    <ReactApexChart options={uptimeChartData.options} series={uptimeChartData.series} type="donut" height={180} />
                </div>
                <div className="pl-2 border-t-2 pt-3">
                    {/* <p><span className="bg-slate-300 rounded-full p-1"><i className="bi bi-emoji-smile text-blue-800"></i></span> You're doing good!</p> */}
                    <div className="flex">
                        <div className="bg-slate-300 rounded-full p-1 w-7 h-7 text-center flex justify-center items-center">
                            <i className="bi bi-emoji-smile text-blue-800"></i>
                        </div>
                        <p className="ml-2">You're doing good!</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, null)(UptimeCard);