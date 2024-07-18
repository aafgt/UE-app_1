import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { connect } from "react-redux";
import { fetchBarn, fetchCow, fetchDashboardMetrics, fetchPerformanceMetrics } from "../redux/ActionCreators";
import TotalCard from "./dashboard/TotalCard";
import CowsModal from "./dashboard/CowsModal";
import CowDetailsModal from "./dashboard/CowDetailsModal";
import OeeCard from "./dashboard/OeeCard";
import UptimeCard from "./dashboard/UptimeCard";
import ZonesCard from "./dashboard/ZonesCard";
import WatchlistCard from "./dashboard/WatchlistCard";

const mapStateToProps = (state) => {
    return {
        data: state.data,
        barn: state.barn
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchBarn: (barnID) => { dispatch(fetchBarn(barnID)) },
    fetchCow: (cowID) => { dispatch(fetchCow(cowID)) },
    fetchPerformanceMetrics: () => { dispatch(fetchPerformanceMetrics()) },
    fetchDashboardMetrics: () => { dispatch(fetchDashboardMetrics()) }
})


function Dashboard(props) {

    // const handleDemo = () => {
    //     setOeeChartData({...oeeChartData, series:[40,60]});

    //     setTimeout(() => {
    //         setOeeChartData({...oeeChartData, series:[90,10]});
    //     }, 3000);

    //     setProdChartData({...prodChartData, series: [{
    //         name: 'series1',
    //         data: [31, 40, 28, 51, 42, 109, 100, 20]
    //     }],  
    //     xaxis: {
    //         type: 'datetime',
    //         categories: ["2023-01-19T00:00:00.000Z", "2023-02-19T01:30:00.000Z", "2023-03-19T02:30:00.000Z", "2023-04-19T03:30:00.000Z", "2023-05-19T04:30:00.000Z", "2023-06-19T05:30:00.000Z", "2023-07-19T06:30:00.000Z", "2023-08-19T06:30:00.000Z"]
    //     },})

    //     setTimeout(() => {
    //         setProdChartData({...prodChartData, series: [{
    //             name: 'series1',
    //             data: [31, 40, 28, 51, 42, 109, 100, 20, 60]
    //         }],  
    //         xaxis: {
    //             type: 'datetime',
    //             categories: ["2023-01-19T00:00:00.000Z", "2023-02-19T01:30:00.000Z", "2023-03-19T02:30:00.000Z", "2023-04-19T03:30:00.000Z", "2023-05-19T04:30:00.000Z", "2023-06-19T05:30:00.000Z", "2023-07-19T06:30:00.000Z", "2023-08-19T06:30:00.000Z", "2023-09-19T06:30:00.000Z"]
    //         },})
    //     }, 3000);
    // };

    const [toggleModal, setToggleModal] = useState(false);

    const handleToggleModal = (cowID) => {
        props.fetchCow(cowID);
        setToggleModal(!toggleModal);
    };

    const [toggleModal2, setToggleModal2] = useState(false);

    const handleToggleModal2 = (barnID) => {
        props.fetchBarn(barnID);
        setToggleModal2(!toggleModal2);
    };

    const [prodChartData, setProdChartData] = useState({
        series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
        }],
        options: {
            chart: {
                height: 350,
                type: 'area'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            xaxis: {
                type: 'datetime',
                categories: ["2023-01-19T00:00:00.000Z", "2023-02-19T01:30:00.000Z", "2023-03-19T02:30:00.000Z", "2023-04-19T03:30:00.000Z", "2023-05-19T04:30:00.000Z", "2023-06-19T05:30:00.000Z", "2023-07-19T06:30:00.000Z"]
                // categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
                x: {
                    format: 'MM'
                },
            },
            colors: ['#73C088']
        },
    });

    useEffect(() => {
        props.fetchPerformanceMetrics();
        props.fetchDashboardMetrics();
    }, [])

    return (
        <>
            <div className="flex">
                <div className="w-4/5">
                    <div className="flex m-3 gap-5">
                        <TotalCard name="Sales" percent="+12.00" arrow="up" icon={<div className="text-orange-400 text-2xl"><i className="bi bi-trophy-fill"></i></div>} />
                        <TotalCard name="Order" percent="-3.00" arrow="down" icon={<div className="text-red-400 text-2xl"><i className="bi bi-handbag-fill"></i></div>} />
                        <TotalCard name="Product" percent="+2.00" arrow="up" icon={<div className="text-blue-400 text-2xl"><i className="bi bi-tag-fill"></i></div>} />
                    </div>

                    {/* <div className="m-3 mt-7">
                        <div className="bg-white rounded-lg shadow-md">
                            <div className="px-5 py-4 flex justify-between">
                                <p className="font-semibold text-xl">Rate of Production</p>
                                <button className="border border-gray-500 text-gray-500 px-2 rounded-md">Department 1 <i className="bi bi-arrow-down-short"></i></button>
                            </div>
                            <div className="">
                                <ReactApexChart options={prodChartData.options} series={prodChartData.series} type="area" height={350} />
                            </div>
                        </div>
                    </div> */}
                    <div className="bg-white rounded-lg shadow-md m-3 mt-7 p-3">
                        {/* <iframe src="/fig (1).html" title="fig" width={850} height={500} /> */}

                        {/* <iframe src="/fig (1).html" title="fig" className="w-full h-[500px]" /> */}

                        <iframe src="/dashboard_1 (1).html" title="fig" className="w-full h-[600px]" />
                    </div>

                    <WatchlistCard />

                    <ZonesCard handleToggleModal2={handleToggleModal2} />

                    {/* <div className="bg-white rounded-lg shadow-md m-3 mt-7 p-3">
                        {props.data && props.data.data}
                        {props.data?.errMess}
                        <img src={props.data.data} alt="" />
                    </div> */}
                </div>

                <div className="w-1/5 sticky top-0 h-screen">
                    <OeeCard />
                    <UptimeCard />
                </div>
            </div>


            {toggleModal2 && <CowsModal cows={props.barn.barn} handleToggleModal={handleToggleModal} handleToggleModal2={handleToggleModal2} />}

            {/* <button id="modal-button" class="text-sm text-white bg-blue-500 rounded-md px-4 py-2" onClick={handleToggleModal}>Open Modal</button> */}
            {/* TABLE MODAL */}
            {toggleModal && props.barn.cow && <CowDetailsModal cow={props.barn.cow} handleToggleModal={handleToggleModal} />}
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);