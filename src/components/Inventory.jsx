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
            <div className="container-fluid mb-2 pt-3">
                <label className="fw-bold">Inventory</label><br />
                <label>Welcome !</label>
            </div>

            <hr />

            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <h6 className="card-title p-1 fw-bold">
                                    Product Inventory
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <h6 className="card-title p-1 fw-bold">
                                    Raw Material
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-3 my-1">
                        <Card_Inventory title="Feed 15 %" data={chartData} />
                    </div>
                    <div className="col-3 my-1">
                        <Card_Inventory title="Feed 65 %" data={chartData} />
                    </div>
                    <div className="col-3 my-1">
                        <Card_Inventory title="Main Corn" data={chartData} />
                    </div>
                    <div className="col-3 my-1">
                        <Card_Inventory title="Material 1" data={chartData} />
                    </div>

                    <div className="col-3 my-1">
                        <Card_Inventory title="Liquid Starch" data={chartData} />
                    </div>
                    <div className="col-3 my-1">
                        <Card_Inventory title="Oil" data={chartData} />
                    </div>
                    <div className="col-3 my-1">
                        <Card_Inventory title="Material 2" data={chartData} />
                    </div>
                    <div className="col-3 my-1">
                        <Card_Inventory title="Material 3" data={chartData} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Inventory;