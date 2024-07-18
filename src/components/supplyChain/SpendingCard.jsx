import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const SpendingCard = () => {
    
    const [spendingChartData, setSpendingChartData] = useState({
        series: [{
            data: [50, 100, 50, 70, 70]
        }],
        options: {
            chart: {
                height: 350,
                type: 'bar',
                events: {
                    click: function (chart, w, e) {
                        // console.log(chart, w, e)
                    }
                }
            },
            colors: ["#1CAD99", "#EEC35E"],
            plotOptions: {
                bar: {
                    columnWidth: '45%',
                    distributed: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            },
            xaxis: {
                categories: [
                    "10",
                    "11",
                    "12",
                    "13",
                    "14"
                ],
                labels: {
                    style: {
                        colors: [],
                        fontSize: '12px'
                    }
                }
            }
        },

    });

    return (
        <div className="bg-white rounded-lg shadow-md m-3 mt-7 p-3 w-fit flex flex-col text-center gap-3 text-[#043912] font-normal justify-between">
            <div className="text-[#043912] font-normal">
                <div className="flex justify-around my-4">
                    <i className="bi bi-caret-left-fill hover:cursor-pointer"></i> <span className="font-medium text-xl">March 2022</span> <i className="bi bi-caret-right-fill hover:cursor-pointer"></i>
                </div>
                <p>Your weekly average is <span className="font-semibold">$100</span></p>
            </div>

            <ReactApexChart options={spendingChartData.options} series={spendingChartData.series} type="bar" height={350} />

            <div>
                <div className="border-b-2 flex justify-between p-3 text-[#BA5F0B]">
                    <h6 className="font-semibold">Today</h6>
                    <p className="font-medium">$55.00</p>
                </div>

                <div className="border-b-2 flex justify-between p-3">
                    <h6 className="text-[#043912]">Yesterday</h6>
                    <p className="text-[#043912] font-medium">$90.00</p>
                </div>

                <div className="border-b-2 flex justify-between p-3">
                    <h6 className="text-[#043912]">Average</h6>
                    <p className="text-[#043912] font-medium">$65.00</p>
                </div>
            </div>
        </div>
    );
}

export default SpendingCard;