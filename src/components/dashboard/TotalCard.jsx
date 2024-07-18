import { connect } from "react-redux";


const mapStateToProps = (state) => {
    return {
        metrics: state.metrics
    }
}

const TotalCard = (props) => {
    if (props.metrics.isLoading) {
        return (
            <div className="bg-white shadow-md rounded-lg w-full px-2 pb-1">
                <p className="text-green-700 text-xl p-7">Loading...</p>
            </div>
        );
    }
    else if (props.metrics.errMess) {
        return (
            <div className="bg-white shadow-md rounded-lg w-full px-2 pb-1">
                <p className="text-red-700 text-xl p-7">{props.metrics.errMess}</p>
            </div>
        );
    }
    else {
        return (
            <div className="bg-white shadow-md rounded-lg w-full px-2 pb-1">
                <div className="flex justify-between">
                    <div>
                        <p className="text-green-700 font-medium text-sm">Total {props.name}</p>
                        <p className="text-[#043912] font-bold text-xl">{props.name === "Sales" ? props.metrics.dashboardMetrics?.totalSales : props.name === "Order" ? props.metrics.dashboardMetrics?.totalOrders : props.metrics.dashboardMetrics?.totalProduct}</p>
                    </div>
                    {props.icon}
                </div>
                <div className="mt-2 flex">
                    <div className={`w-5 h-5  rounded-full ${props.arrow === "up" ? "bg-[#A7D5B4]" : "bg-[#D5A7A7]"} flex justify-center items-center`}>
                        <i className={`bi bi-arrow-${props.arrow}-short`}></i>
                    </div>
                    <p className="ml-1">
                        <span className={`${props.arrow === "up" ? "text-[#A7D5B4]" : "text-[#D5A7A7]"}`}>{props.percent}%</span> This week
                    </p>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, null)(TotalCard);