import Modal_Vehicles from "./shared/Modal_Vehicles";

function Vehicles() {
    return (
        <>
            <div className="container-fluid mb-2 pt-3">
                <label className="fw-bold">Vehicles</label><br />
                <label>Welcome !</label>
            </div>

            <hr />

            <div className="container">
                <div className="card text-bg-light mb-3 h-100">
                    <div className="card-header fw-bold">Map</div>
                    <div className="card-body">
                        ...
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="card text-bg-light mb-3 h-100">
                    <div className="card-header fw-bold">Vehicles Details</div>
                    <div className="card-body">
                        <table className="table">
                            <thead className="table-secondary">
                                <tr>
                                    <td scope="col">
                                        <input type="checkbox" className="btn-check" id="btncheckall" autoComplete="off" />
                                        <label className="btn btn-outline-primary p-2" htmlFor="btncheckall"></label>
                                    </td>
                                    <th scope="col">Vehicle</th>
                                    <th scope="col">Last Trip</th>
                                    <th scope="col">From</th>
                                    <th scope="col">To</th>
                                    <th scope="col">Time Stamp</th>
                                    <th scope="col">Performance</th>
                                    <th scope="col">Plate</th>
                                    <th scope="col">Driver</th>
                                    <th scope="col">Distance</th>
                                    <th scope="col">Last Maintenance</th>
                                    <th scope="col">Next Maintenance</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                                <Modal_Vehicles vehicle={"Vehicle 1"} lastTrip={"46.47"} from={"Cairo"} to={"Giza"} timeStamp={"1/21/2024, 11:06:07 AM"} performance={"70 %"} plate={"123ABC"} driver={"Hassan"} distance={"845.85"} lastMaintenance={"1/21/2024, 11:06:07 AM"} nextMaintenance={"1/21/2024, 11:06:07 AM"} />
                                <Modal_Vehicles vehicle={"Vehicle 1"} lastTrip={"46.47"} from={"Cairo"} to={"Giza"} timeStamp={"1/21/2024, 11:06:07 AM"} performance={"70 %"} plate={"123ABC"} driver={"Hassan"} distance={"845.85"} lastMaintenance={"1/21/2024, 11:06:07 AM"} nextMaintenance={"1/21/2024, 11:06:07 AM"} />
                                <Modal_Vehicles vehicle={"Vehicle 1"} lastTrip={"46.47"} from={"Cairo"} to={"Giza"} timeStamp={"1/21/2024, 11:06:07 AM"} performance={"70 %"} plate={"123ABC"} driver={"Hassan"} distance={"845.85"} lastMaintenance={"1/21/2024, 11:06:07 AM"} nextMaintenance={"1/21/2024, 11:06:07 AM"} />
                                <Modal_Vehicles vehicle={"Vehicle 1"} lastTrip={"46.47"} from={"Cairo"} to={"Giza"} timeStamp={"1/21/2024, 11:06:07 AM"} performance={"70 %"} plate={"123ABC"} driver={"Hassan"} distance={"845.85"} lastMaintenance={"1/21/2024, 11:06:07 AM"} nextMaintenance={"1/21/2024, 11:06:07 AM"} />
                                <Modal_Vehicles vehicle={"Vehicle 1"} lastTrip={"46.47"} from={"Cairo"} to={"Giza"} timeStamp={"1/21/2024, 11:06:07 AM"} performance={"70 %"} plate={"123ABC"} driver={"Hassan"} distance={"845.85"} lastMaintenance={"1/21/2024, 11:06:07 AM"} nextMaintenance={"1/21/2024, 11:06:07 AM"} />
                            </tbody>
                        </table>

                        {/* <!-- Modal --> */}
                        <div className="modal fade" id="vehiclesModal" tabIndex="-1" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5">Vehicle Details</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <table className="table">
                                            <thead className="table-secondary">
                                                <tr>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Value</th>
                                                </tr>
                                            </thead>
                                            <tbody className="table-group-divider">
                                                <tr>
                                                    <th scope="row">Car license</th>
                                                    <td>1972:ف ى ن</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Expression Date</th>
                                                    <td>1/21/2024, 11:29:19 AM</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Average Cost Per Month</th>
                                                    <td>40$</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Current Trip From</th>
                                                    <td>Cairo</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Current Trip To</th>
                                                    <td>Giza</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">OK</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <nav aria-label="Page navigation">
                            <ul className="pagination justify-content-end">
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Vehicles;