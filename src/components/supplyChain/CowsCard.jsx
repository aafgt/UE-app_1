import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { connect } from "react-redux";
import { fetchCows, fetchWatchlist } from "../../redux/ActionCreators";

const mapStateToProps = (state) => {
    return {
        cows: state.cows
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchCows: () => { dispatch(fetchCows()) }
})

const CowsCard = (props) => {

    const [cowsData, setCowsData] = useState({
        series: [1],
        options: {
            chart: {
                height: 350,
                type: 'radialBar',
                toolbar: {
                    show: true
                }
            },
            plotOptions: {
                radialBar: {
                    startAngle: -135,
                    endAngle: 225,
                    hollow: {
                        margin: 0,
                        size: '70%',
                        background: '#fff',
                        image: undefined,
                        imageOffsetX: 0,
                        imageOffsetY: 0,
                        position: 'front',
                        dropShadow: {
                            enabled: true,
                            top: 3,
                            left: 0,
                            blur: 4,
                            opacity: 0.24
                        }
                    },
                    track: {
                        background: '#fff',
                        strokeWidth: '67%',
                        margin: 0, // margin is in pixels
                        dropShadow: {
                            enabled: true,
                            top: -3,
                            left: 0,
                            blur: 4,
                            opacity: 0.35
                        }
                    },

                    dataLabels: {
                        show: true,
                        name: {
                            offsetY: -10,
                            show: true,
                            color: '#888',
                            fontSize: '17px'
                        },
                        value: {
                            formatter: function (val) {
                                return parseInt(val);
                            },
                            color: '#111',
                            fontSize: '36px',
                            show: true,
                        }
                    }
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    type: 'horizontal',
                    shadeIntensity: 0.5,
                    gradientToColors: ['#ABE5A1'],
                    inverseColors: true,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100]
                }
            },
            stroke: {
                lineCap: 'round'
            },
            labels: ['Found Now'],
        },

    })

    useEffect(() => {
        // props.fetchCows();

        if(!props.cows.isLoading && !props.cows.errMess) {
            setCowsData({...cowsData, series:[props.cows.cows?.count]});
        }
    }, [props.cows.cows?.count]);

    if (props.cows.isLoading) {
        return (
            <div className="bg-white rounded-lg shadow-md m-3 mt-7 p-3 w-fit flex flex-col text-center gap-3 text-[#043912] font-normal justify-between h-3/5">
                <p className="text-green-700 text-xl p-7">Loading...</p>
            </div>
        );
    }
    else if (props.cows.errMess) {
        return (
            <div className="bg-white rounded-lg shadow-md m-3 mt-7 p-3 w-fit flex flex-col text-center gap-3 text-[#043912] font-normal justify-between h-3/5">
                <p className="text-red-700 text-xl p-7">{props.cows.errMess}</p>
            </div>
        );
    }
    else {
        return (
            <div className="bg-white rounded-lg shadow-md m-3 mt-7 p-3 w-fit flex flex-col text-center gap-3 text-[#043912] font-normal justify-between h-3/5">
                <div className="">
                    <h3>Cows</h3>
                    <p className="mt-3">Monthly Income: $16,5000</p>
                </div>
                {/* {props.cows.cows.count && <ReactApexChart options={cowsData.options} series={cowsData.series} type="radialBar" />} */}
                <ReactApexChart options={cowsData.options} series={cowsData.series} type="radialBar" />
                <div>
                    <p className="font-bold">{props.cows.cows.totalPrices}</p>
                    <p className="font-medium">Saving Identified</p>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CowsCard);