import ReactApexChart from "react-apexcharts";

function Card_Inventory({ title, data }) {
    return (
        <div className="card text-bg-light mb-3 h-100">
            <div className="card-header fw-bold">{title}</div>
            <div className="card-body">
                <ReactApexChart options={data.responsive[0].options} series={data.series} type="pie" height={350} />
                <p className="fw-bold text-center mt-2">Max = 100/T</p>
            </div>
        </div>
    )
}

export default Card_Inventory;