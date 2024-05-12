import { useState } from "react";
import Card_Inventory from "./shared/Card_Inventory";

function Inventory() {

    // const [chartData, setChartData] = useState({
    //     series: [40, 60],
    //     chart: {
    //         width: 380,
    //         type: 'pie',
    //     },
    //     responsive: [{
    //         breakpoint: 480,
    //         options: {
    //             chart: {
    //                 width: 200
    //             },
    //             legend: {
    //                 position: 'bottom'
    //             },
    //             labels: ['', ''],
    //         }
    //     }]
    // });

    const [chartData, setChartData] = useState({
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
            colors: ['#FF5733']
        }
    });

    return (
        <>
            <div className="bg-slate-100 w-full p-2">
                <div className="border-b-2 mb-4 p-2 bg-gray-50">
                    <label className="font-medium">Inventory</label><br />
                    <label>Welcome !</label>
                </div>

                <div className="flex">
                    {/* <div className="bg-white rounded-md shadow-md w-1/2">
                        <div className="pl-5 py-5 font-semibold">Product Inventory</div>
                    </div> */}
                    <div className="bg-white rounded-md shadow-md w-full">
                        <div className="pl-5 py-5 font-semibold">Raw Material</div>
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-5 mt-5">
                    <Card_Inventory title="Feed 15 %" data={chartData} />
                    <Card_Inventory title="Feed 65 %" data={chartData} />
                    <Card_Inventory title="Main Corn" data={chartData} />
                    <Card_Inventory title="Material 1" data={chartData} />
                    <Card_Inventory title="Liquid Starch" data={chartData} />
                    <Card_Inventory title="Oil" data={chartData} />
                    <Card_Inventory title="Material 2" data={chartData} />
                    <Card_Inventory title="Material 3" data={chartData} />
                </div>

                <div className="bg-white rounded-lg shadow-md m-3 mt-7">
                    <div className="p-3">
                        <table className="w-full text-center">
                            <thead className="text-green-700 font-semibold">
                                <tr>
                                    <td>Name</td>
                                    <td>Current Quantity</td>
                                    <td>Rate of Consumption</td>
                                    <td>Expected runout time</td>
                                    <td>Need</td>
                                    <td>Order</td>
                                    <td>Order Date</td>
                                    <td>Timestamp</td>
                                </tr>
                            </thead>
                            <tbody className="">
                                <tr className="border-b-2">
                                    <td>RawMaterial 1</td>
                                    <td>100 T</td>
                                    <td>5 T/day</td>
                                    <td>1/2/2024</td>
                                    <td>150 T</td>
                                    <td>453216</td>
                                    <td>4/1/2023</td>
                                    <td>1/22/2024, 3:34:51 PM</td>
                                </tr>
                                <tr className="border-b-2">
                                    <td>RawMaterial 2</td>
                                    <td>100 T</td>
                                    <td>5 T/day</td>
                                    <td>1/2/2024</td>
                                    <td>150 T</td>
                                    <td>453216</td>
                                    <td>4/1/2023</td>
                                    <td>1/22/2024, 3:34:51 PM</td>
                                </tr>
                                <tr className="border-b-2">
                                    <td>RawMaterial 3</td>
                                    <td>100 T</td>
                                    <td>5 T/day</td>
                                    <td>1/2/2024</td>
                                    <td>150 T</td>
                                    <td>453216</td>
                                    <td>4/1/2023</td>
                                    <td>1/22/2024, 3:34:51 PM</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Inventory;