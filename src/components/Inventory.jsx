import { useState } from "react";
import Card_Inventory from "./shared/Card_Inventory";

function Inventory() {

    const [chartData, setChartData] = useState({
        series: [40, 60],
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
                labels: ['', ''],
            }
        }]
    });

    return (
        <>
            <div className="bg-slate-100 w-full p-2">
                <div className="border-b-2 mb-4 p-2 bg-gray-50">
                    <label className="font-medium">Inventory</label><br />
                    <label>Welcome !</label>
                </div>

                <div className="flex">
                    <div className="bg-white rounded-md shadow-md w-1/2">
                        <div className="pl-5 py-5 font-semibold">Product Inventory</div>
                    </div>
                    <div className="bg-white rounded-md shadow-md w-1/2 ml-5">
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
            </div>
        </>
    )
}

export default Inventory;