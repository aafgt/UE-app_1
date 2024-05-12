import ReactApexChart from "react-apexcharts";

function Card_Inventory({ title, data }) {
    return (
        // <div className="card text-bg-light mb-3 h-100">
        //     <div className="card-header fw-bold">{title}</div>
        //     <div className="card-body">
        //         <ReactApexChart options={data.responsive[0].options} series={data.series} type="pie" height={350} />
        //         <p className="fw-bold text-center mt-2">Max = 100/T</p>
        //     </div>
        // </div>

        <div className="bg-white rounded-md shadow-md">
            <h6 className="border-b-2 p-2">{title}</h6>
            <div className="">
                <ReactApexChart options={data.options} series={data.series} type="radialBar" height={200} />
                <p className="text-center">Max = 100/T</p>
            </div>
        </div>
    )
}

export default Card_Inventory;