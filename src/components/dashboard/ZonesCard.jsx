import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchZones } from "../../redux/ActionCreators";
import { ZONES } from "../../Data/zones";


const mapStateToProps = (state) => {
    return {
        zones: state.zones,
        barn: state.barn
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchZones: (zone) => { dispatch(fetchZones(zone)) }
})

const ZonesCard = (props) => {

    const [isZoneListOpen, setIsZoneListOpen] = useState(false);
    const [zoneListText, setZoneListText] = useState("1");

    const [barns, setBarns] = useState(ZONES[0].barns);

    useEffect(() => {
        props.fetchZones(zoneListText);
    }, [zoneListText]);

    if (props.zones.isLoading) {
        return (
            <div className="bg-white rounded-lg shadow-md m-3 mt-7">
                <p className="text-green-700 text-xl p-7">Loading...</p>
            </div>
        );
    }
    else if (props.zones.errMess) {
        return (
            <div className="bg-white rounded-lg shadow-md m-3 mt-7">
                <p className="text-red-700 text-xl p-7">{props.zones.errMess}</p>
            </div>
        );
    }
    else {
        return (
            <div className="bg-white rounded-lg shadow-md m-3 mt-7">
                <div className="p-3">
                    <div className="flex justify-end relative">
                        <button className="px-2 py-1 border-2 rounded-lg text-gray-700 font-semibold" onClick={() => { setIsZoneListOpen(prev => !prev); }}>Zone{zoneListText} <i className="bi bi-arrow-down-short"></i></button>

                        {isZoneListOpen && <div className="absolute border rounded-lg px-2 py-1 leading-none bg-white text-gray-700 font-semibold top-10 w-1/6 h-44 overflow-auto">
                            {ZONES.map((zone) => (
                                <p key={zone.zone} className="text-center border-b-2 py-2 hover:cursor-pointer hover:bg-[#1CAD995E]  " onClick={() => { setIsZoneListOpen(prev => !prev); setZoneListText(zone.zone); setBarns(ZONES[0].barns); }}>Zone{zone.zone}</p>
                            ))}
                        </div>}
                    </div>
                    <table className="w-full text-center table-fixed">
                        <thead className="text-green-700 font-semibold">
                            <tr>
                                <td>Barn</td>
                                <td>No. of Cow</td>
                                <td>Rate of Growth</td>
                                <td>Rate of Consumption</td>
                                <td>Issues</td>
                                <td>Grade</td>
                                <td>Type</td>
                            </tr>
                        </thead>
                        <tbody className="">
                            {/* {barns.map((barn) => (
                                <tr key={barn.barn}>
                                    <td className="text-green-400 hover:cursor-pointer" onClick={() => { props.handleToggleModal2(barn.cows); }}>{barn.barn}</td>
                                    <td>{barn.numberOfCows}</td>
                                    <td>{barn.rateOfGrowth}</td>
                                    <td>{barn.rateOfConsumption}</td>
                                    <td>{barn.Issues}</td>
                                    <td>{barn.Grade}</td>
                                    <td>{barn.Type}</td>
                                </tr>
                            ))} */}
                            {/* {props.zones.zones ? props.zones.zones.map((barn) => (
                                <tr key={barn.id}>
                                    <td className="text-green-400 hover:cursor-pointer" onClick={() => { handleToggleModal2(barn.cows); }}>{barn.opnumber}</td>
                                    <td>{barn.quantity}</td>
                                    <td>{barn.timestart}</td>
                                    <td>{barn.timeend}</td>
                                    <td>{barn.opreturn}</td>
                                    <td>{barn.waste}</td>
                                    <td>{barn.flag ? "t" : "f"}</td>
                                </tr>
                            )) : ""} */}
                            {props.zones.zones && props.zones.zones.map((barn) => (
                                <tr key={barn.barnId}>
                                    <td className="text-green-400 hover:cursor-pointer" onClick={() => { props.handleToggleModal2(barn.barnId); }}>{barn.barnId}</td>
                                    <td>{barn.numOfCow}</td>
                                    <td>{barn.rateOfGrowth}</td>
                                    <td>{barn.rateOfConsumption}</td>
                                    <td>{barn.issues}</td>
                                    <td>{barn.grade}</td>
                                    <td>{barn.typeName}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ZonesCard);