import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        horizon: state.horizon
    }
}

const MetricCard = (props) => {
    if (props.horizon.isLoading) {
        return (
            <div className="bg-white shadow-md rounded-lg w-full px-2 pb-1">
                <p className="text-green-700 text-xl p-7">Loading...</p>
            </div>
        );
    }
    else if (props.horizon.errMess) {
        return (
            <div className="bg-white shadow-md rounded-lg w-full px-2 pb-1">
                <p className="text-red-700 text-xl p-7">{props.horizon.errMess}</p>
            </div>
        );
    }
    else {
        return (
            <div className="w-full bg-white shadow-md rounded-lg text-center py-5">
                <div className="flex justify-around">
                    <div className="">
                        <h3 className="mb-5 text-green-700 font-medium">{props.title}</h3>
                        <div className="mt-2 flex">
                            {props.arrow && <div className={`w-5 h-5  rounded-full ${props.arrow === "up" ? "bg-[#A7D5B4]" : "bg-[#D5A7A7]"} flex justify-center items-center`}>
                                <i className={`bi bi-arrow-${props.arrow}-short`}></i>
                            </div>}
                            <p className="ml-1">
                                <span className="text-[#043912] font-bold"> {props.value}</span>
                            </p>
                        </div>
                        {/* <p className="text-[#043912] font-bold"><span>ARW</span> {value} Tn</p> */}
                    </div>
                    <div className="flex items-center">
                        {props.icon}
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, null)(MetricCard);