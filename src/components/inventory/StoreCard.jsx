import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const StoreCard = (props) => {

    const [supplierData, setSupplierData] = useState({
        series: [60],
        options: {
            // Remove any extra padding/margin here, if needed
            grid: {
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                },
            },
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
                            label: 'Store'
                        }
                    },
                    hollow: {
                        size: '40%'
                    },
                    track: {
                        show: true,
                        background: '#A9FFC0',
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
            colors: ['#0D6B26', '#EEC35EBD']
        }
    });

    const updateChartData = () => {
        setSupplierData({
            // series: [(props.horizon.cowsKilledMetrics?.performance)?.toFixed(2)],
            series: [props.store.storeFilledPercentage],
            options: {
                // Remove any extra padding/margin here, if needed
                grid: {
                    padding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                    },
                },
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
                                label: 'Store'
                            }
                        },
                        hollow: {
                            size: '40%'
                        },
                        track: {
                            show: true,
                            background: '#A9FFC0',
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
                colors: ['#0D6B26', '#EEC35EBD']
            }
        });
    };

    useEffect(() => {
        updateChartData();
    }, [props.store.storeFilledPercentage]);

    return (
        <div className="bg-white shadow-md rounded-sm h-fit w-fit hover:cursor-pointer">
            <h5 className="bg-[#09832959] px-16 py-3 text-white text-2xl rounded-sm text-center">{props.store.storeName}</h5>
            <div className="mx-3 space-y-0">
                <p className="text-[#043912]"><span className="text-3xl text-[#19C747]">•</span> Total Weight: <span className="text-[#098329]">{props.store.totalWeight}Tn</span></p>
                <p className="text-[#043912]"><span className="text-3xl text-[#19C747]">•</span> Total Piece: <span className="text-[#098329]">{props.store.totalPieces} Piece</span></p>
                <p className="text-[#043912]"><span className="text-3xl text-[#19C747]">•</span> Height Capacity: <span className="text-[#098329]">{props.store.heightCapacity} Piece</span></p>
            </div>
            <div className="mt-5 flex flex-col items-center justify-center">
                <p>Store Filled about %</p>
                <div className="h-fit w-fit">
                    <ReactApexChart options={supplierData.options} series={supplierData.series} type="radialBar" height={250} />
                </div>
            </div>
        </div>
    )
}

export default StoreCard;