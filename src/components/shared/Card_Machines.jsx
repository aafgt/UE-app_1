

function Card_Machines({ machine, state, temp, vibration }) {
    return (
        <>
            <div className="d-flex flex-column align-items-center m-1">
                <button type="button" className={`btn btn-${state} rounded-circle`} data-bs-toggle="modal" data-bs-target="#machinesModal">
                    {machine}
                </button>
            </div>

            {/* <a data-bs-toggle="modal" data-bs-target="#machinesModal">
                <div className="d-flex flex-column align-items-center">
                    <p className={`badge rounded-circle p-2 text-bg-${state}`}>{machine}</p>
                </div>
            </a> */}

            <div className="card text-bg-light mb-3 ">
                <div className="card-body text-center">
                    <p className="card-text fw-bold">Temp.</p>
                    <p className="card-text fw-bold">{temp}</p>
                    <hr />
                    <p className="card-text fw-bold">Vibration</p>
                    <p className="card-text fw-bold">{vibration}</p>
                </div>
            </div>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="machinesModal" tabIndex="-1" aria-hidden="true">
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
                                        <th scope="row">Stage</th>
                                        <td>Stage 1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Machine</th>
                                        <td>Machine 1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Last Maintenance</th>
                                        <td>1/21/2024, 11:30:38 AM</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Next Maintenance</th>
                                        <td>1/21/2024, 11:30:38 AM</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Energy Consumption</th>
                                        <td>250 kWh</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Gas Consumption</th>
                                        <td>50 kg</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Water Consumption</th>
                                        <td>25 m3</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Max Temperature</th>
                                        <td>45 'C</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Max Vibration</th>
                                        <td>Ips</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Time Stamp</th>
                                        <td>1/21/2024, 11:30:38 AM</td>
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
        </>
    )
}

export default Card_Machines;