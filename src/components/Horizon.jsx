import { useEffect, useState } from "react";
import HorizonTable from "./horizon/HorizonTable";
import MetricCard from "./horizon/MetricCard";
import PerformanceCard from "./horizon/PerformanceCard";
import CowsModal from "./dashboard/CowsModal";
import CowDetailsModal from "./horizon/CowDetailsModal";
import OeeCard from "./horizon/OeeCard";
import UptimeCard from "./horizon/UptimeCard";
import ReactApexChart from "react-apexcharts";
import { connect } from "react-redux";
import { fetchHorizonMetrics } from "../redux/ActionCreators";
import RateOfProductionCard from "./horizon/RateOfProductionCard";

const mapStateToProps = (state) => {
    return {
        horizon: state.horizon
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchHorizonMetrics: () => { dispatch(fetchHorizonMetrics()) }
})

const Horizon = (props) => {

    const [toggleModal, setToggleModal] = useState(false);

    const handleToggleModal = () => {
        setToggleModal(!toggleModal);
    };

    const [toggleModal2, setToggleModal2] = useState(false);

    const handleToggleModal2 = () => {
        setToggleModal2(!toggleModal2);
    };

    useEffect(() => {
        props.fetchHorizonMetrics();
    }, []);

    return (
        <>
            <div className="flex">
                <div className="w-4/5 m-3 px-5">
                    <div className="flex gap-10 justify-around mb-5">
                        <MetricCard title={"Cows Request"} value={"---"} arrow={"up"} icon={<div className="text-orange-400 text-2xl"><i className="bi bi-trophy-fill"></i></div>} />
                        <MetricCard title={"Killed Cow"} value={props.horizon.cowsKilledMetrics?.killedCow} arrow={"up"} icon={<div className="text-red-400 text-2xl"><i className="bi bi-handbag-fill"></i></div>} />
                        <MetricCard title={"Remainder"} value={"---"} arrow={"down"} icon={<div className="text-blue-400 text-2xl"><i className="bi bi-tag-fill"></i></div>} />
                    </div>

                    <div className="flex gap-10 justify-around">
                        <MetricCard title={"Weight Of Killed Cow"} value={props.horizon.cowsKilledMetrics?.killedCowsWeight + " KG"} icon={<div className="text-orange-400 text-2xl"><i className="bi bi-trophy-fill"></i></div>} />
                        <MetricCard title={"Total Waste"} value={props.horizon.cowsKilledMetrics?.killedCowsWaste + " KG"} arrow={"down"} icon={<div className="text-red-400 text-2xl"><i className="bi bi-handbag-fill"></i></div>} />
                        <MetricCard title={"Miscarriage"} value={"--- Tn"} icon={<div className="text-blue-400 text-2xl"><i className="bi bi-tag-fill"></i></div>} />
                    </div>
                </div>
                <div className="w-1/5 m-3">
                    <PerformanceCard />
                </div>
            </div>

            <div className="flex justify-end">
                <div className="w-4/5 m-3 px-5">
                    <div className="m-3">
                        <RateOfProductionCard />
                    </div>
                </div>
                <div className="w-1/5 m-3">
                    <OeeCard />
                    <UptimeCard />
                </div>
            </div>

            <HorizonTable handleToggleModal2={handleToggleModal2} />

            {toggleModal2 && <CowsModal cows={["123","456"]} handleToggleModal={handleToggleModal} handleToggleModal2={handleToggleModal2} />}

            {toggleModal && <CowDetailsModal handleToggleModal={handleToggleModal} />}
        </>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Horizon);