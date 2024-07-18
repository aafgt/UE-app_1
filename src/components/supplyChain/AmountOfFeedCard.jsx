import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { connect } from "react-redux";
import { fetchFeedInfoByType } from "../../redux/ActionCreators";

const mapStateToProps = (state) => {
    return {
        feeds: state.feeds
    }
}

const AmountOfFeedCard = (props) => {

    const [supplierData, setSupplierData] = useState({
        series: [50, 50],
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
                                fontSize: "12px",
                                label: 'Amount of feed in the store',
                                color: '#043912',
                                formatter: function (w) {
                                    return w.globals.seriesTotals.reduce((a, b) => {
                                        // return 100 - b
                                        return props.feeds.feedInfoByType?.totalCurrentFeedWeight;
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

    // useEffect(() => {
    //     props.fetchFeedInfoByType(props.feedType);

    //     if (!props.feeds.isLoading && !props.feeds.errMess) {
    //         const totalCurrentFeedWeightPercent = (props.feeds.feedInfoByType?.totalCurrentFeedWeight / props.feeds.feedInfoByType?.totalFeedCapacity) * 100;
    //         setSupplierData({ ...supplierData, series: [totalCurrentFeedWeightPercent, (100 - totalCurrentFeedWeightPercent)] });
    //     }
    // }, [props.feedType]);

    // useEffect(() => {
    //     console.log(props.feeds.feedInfoByType);

    //     const totalCurrentFeedWeightPercent = Math.floor((props.feeds.feedInfoByType?.totalCurrentFeedWeight / props.feeds.feedInfoByType?.totalFeedCapacity) * 100);

    //     setSupplierData((prev) => ({ ...prev, series: [totalCurrentFeedWeightPercent, (100 - totalCurrentFeedWeightPercent)] }));

    //     console.log(supplierData.series);
    // }, [props.feedType]);

    const updateChartData = () => {
        // setSupplierData((prev) => ({ ...prev, series: [props.feeds.feedInfoByType?.totalCurrentFeedWeight] }));

        const totalCurrentFeedWeightPercent = Math.floor((props.feeds.feedInfoByType?.totalCurrentFeedWeight / props.feeds.feedInfoByType?.totalFeedCapacity) * 100);

        setSupplierData({
            series: [totalCurrentFeedWeightPercent, 100-totalCurrentFeedWeightPercent],
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
                                    fontSize: "12px",
                                    label: 'Amount of feed in the store',
                                    color: '#043912',
                                    formatter: function (w) {
                                        return w.globals.seriesTotals.reduce((a, b) => {
                                            // return 100 - b
                                            return props.feeds.feedInfoByType?.totalCurrentFeedWeight;
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
                colors: ['#F99963', '#76B18B'],
                annotations: {
                    points: [{
                        x: '50%',
                        y: '50%',
                        text: 'Total Fruits',
                        textAlign: 'center',
                        style: {
                            fontSize: '15px'
                        }
                    }]
                }
            }
        });
    };

    useEffect(() => {
        updateChartData();
    }, [props.feeds.feedInfoByType?.totalCurrentFeedWeight])

    if (props.feeds.isLoading) {
        return (
            <div className="bg-white rounded-lg shadow-md m-3 mt-7">
                <p className="text-green-700 text-xl p-7">Loading...</p>
            </div>
        );
    }
    else if (props.feeds.errMess) {
        return (
            <div className="bg-white rounded-lg shadow-md m-3 mt-7">
                <p className="text-red-700 text-xl p-7">{props.feeds.errMess}</p>
            </div>
        );
    }
    else {
        return (
            <div className="bg-white rounded-lg shadow-md m-3 mt-7 p-3 w-fit flex flex-col text-center gap-3 text-[#043912] font-normal">
                <div className="font-medium">
                    <p>Consumption Per Month</p>
                    <p>{props.feeds.feedInfoByType && props.feeds.feedInfoByType.totalFeedCapacity}</p>
                </div>
                {props.feeds.feedInfoByType && <ReactApexChart options={supplierData.options} series={supplierData.series} type="donut" />}
                <p className="font-medium">Total Money <span className="font-bold">{props.feeds.feedInfoByType && props.feeds.feedInfoByType.totalPrice}</span></p>
            </div>
        );
    }
}

export default connect(mapStateToProps, null)(AmountOfFeedCard);