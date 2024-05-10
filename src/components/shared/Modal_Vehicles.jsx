

function Modal_Vehicles({ vehicle, lastTrip, from, to, timeStamp, performance, plate, driver, distance, lastMaintenance, nextMaintenance}) {
    return (
        <>
            <tr>
                <td scope="row">
                    <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off" />
                    <label className="btn btn-outline-primary p-2" htmlFor="btncheck1"></label>
                </td>
                <td data-bs-toggle="modal" data-bs-target="#vehiclesModal"><a href="#">{vehicle}</a></td>
                <td scope="row">{lastTrip}</td>
                <td>{from}</td>
                <td scope="row">{to}</td>
                <td>{timeStamp}</td>
                <td scope="row">{performance}</td>
                <td>{plate}</td>
                <td scope="row">{driver}</td>
                <td>{distance}</td>
                <td scope="row">{lastMaintenance}</td>
                <td>{nextMaintenance}</td>
            </tr>
        </>
    )
}

export default Modal_Vehicles;