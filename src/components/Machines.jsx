import { connect } from "react-redux";
import Card_Machines from "./shared/Card_Machines";
import { fetchMachines, fetchProducts } from "../redux/ActionCreators";
import { useEffect } from "react";

const mapStateToProps = (state) => {
    return {
        machines: state.machines.machines,
        machinesData: state.machines.machinesData,
        products: state.products.products
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchMachines: () => { dispatch(fetchMachines()) },
    fetchProducts: () => { dispatch(fetchProducts()) }
})

function Machines(props) {

    // const [machinesData, setMachinesData] = useState([]);


    useEffect(() => {
        props.fetchMachines();

        // console.log(props.machines); /////////

        // setTimeout(() => {
        //     props.fetchMachines();
        //   }, 2000);

        // if(props.machines.data) {
        //     setMachinesData(props.machines.data);
        //     console.log("IN IF: ", machinesData);
        // }

        // console.log("IN EFFECT: ", props.machinesData);

        // props.fetchProducts();

        // {
        //     "pageIndex": 1,
        //     "pageSize": 5,
        //     "count": 6,
        //     "data": [
        //         {
        //             "id": 1,
        //             "machineNumber": 1,
        //             "numberOfLastWeightAdd": 300,
        //             "totalWeight": 1270,
        //             "time": "2024-03-09T17:21:32.3922081",
        //             "status": "End",
        //             "weightFeed16_Id": 5
        //         },
        //         {
        //             "id": 2,
        //             "machineNumber": 2,
        //             "numberOfLastWeightAdd": 4000,
        //             "totalWeight": 11500,
        //             "time": "2024-03-25T10:41:28.6107171",
        //             "status": "End",
        //             "weightFeed16_Id": 12
        //         },
        //         {
        //             "id": 3,
        //             "machineNumber": 1,
        //             "numberOfLastWeightAdd": 4000,
        //             "totalWeight": 12500,
        //             "time": "2024-03-25T10:41:31.9722832",
        //             "status": "End",
        //             "weightFeed16_Id": 13
        //         },
        //         {
        //             "id": 4,
        //             "machineNumber": 3,
        //             "numberOfLastWeightAdd": 7500,
        //             "totalWeight": 20000,
        //             "time": "2024-03-25T10:41:54.9825475",
        //             "status": "End",
        //             "weightFeed16_Id": 16
        //         },
        //         {
        //             "id": 5,
        //             "machineNumber": 4,
        //             "numberOfLastWeightAdd": 7500,
        //             "totalWeight": 7500,
        //             "time": "2024-03-25T10:41:59.2704081",
        //             "status": "End",
        //             "weightFeed16_Id": 17
        //         }
        //     ]
        // }
    }, []);

    return (
        <>
            <div className="container-fluid mb-2 pt-3">
                <label className="fw-bold">Machines</label><br />
                <label>Welcome !</label>
            </div>

            <hr />

            <div className="container">
                <div className="card text-bg-light mb-3 h-100">
                    <div className="card-header fw-bold">Machines State</div>
                    <div className="card-body">
                        <div className="row g-3">
                            <div className="col-2">
                                <Card_Machines machine="M1" state="success" temp="25°C" vibration="12 IPS" />
                            </div>
                            <div className="col-2">
                                <Card_Machines machine="M2" state="danger" temp="25°C" vibration="12 IPS" />
                            </div>
                            <div className="col-2">
                                <Card_Machines machine="M3" state="success" temp="25°C" vibration="12 IPS" />
                            </div>
                            <div className="col-2">
                                <Card_Machines machine="M4" state="success" temp="25°C" vibration="12 IPS" />
                            </div>
                            <div className="col-2">
                                <Card_Machines machine="M5" state="success" temp="25°C" vibration="12 IPS" />
                            </div>
                            <div className="col-2">
                                <Card_Machines machine="M6" state="success" temp="25°C" vibration="12 IPS" />
                            </div>
                            <div className="col-2">
                                <Card_Machines machine="M7" state="success" temp="25°C" vibration="12 IPS" />
                            </div>
                            <div className="col-2">
                                <Card_Machines machine="M8" state="success" temp="25°C" vibration="12 IPS" />
                            </div>
                            <div className="col-2">
                                <Card_Machines machine="M9" state="success" temp="25°C" vibration="12 IPS" />
                            </div>
                            <div className="col-2">
                                <Card_Machines machine="M10" state="success" temp="25°C" vibration="12 IPS" />
                            </div>
                            <div className="col-2">
                                <Card_Machines machine="M11" state="danger" temp="25°C" vibration="12 IPS" />
                            </div>
                            <div className="col-2">
                                <Card_Machines machine="M12" state="danger" temp="25°C" vibration="12 IPS" />
                            </div>
                            <div className="col-2">
                                <Card_Machines machine="M13" state="danger" temp="25°C" vibration="12 IPS" />
                            </div>
                            <div className="col-2">
                                <Card_Machines machine="M14" state="danger" temp="25°C" vibration="12 IPS" />
                            </div>
                            <div className="col-2">
                                <Card_Machines machine="M15" state="danger" temp="25°C" vibration="12 IPS" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {props.machines && <div className="container">
                <div className="card text-bg-light mb-3 h-100">
                    <div className="card-header fw-bold">Machines DATA from SERVER</div>
                    <div className="card-body">
                        <p>Page Index: {props.machines.pageIndex}</p>
                        <p>Page Size: {props.machines.pageSize}</p>

                        {console.log("propsMachinesData Length: ", props.machines.data?.length)}

                        {props.machines.data?.map((machine, index) => {
                            return <div key={index}>
                                <p>Machine Number: {machine.machineNumber}</p> <br />
                                <p>Last Weight Added: {machine.numberOfLastWeightAdd}</p> <br />
                                <p>Total Weight: {machine.totalWeight}</p> <br />
                                <p>Time: {machine.time}</p> <br />
                                <p>Status: {machine.status}</p> <br />
                                <p>WeightFeed16_Id: {machine.weightFeed16_Id}</p> <br />
                                <hr />
                            </div>
                        })}
                    </div>
                </div>
            </div>}

            {/* {machinesData && <div className="container">
                <div className="card text-bg-light mb-3 h-100">
                    <div className="card-header fw-bold">Machines DATA from SERVER</div>
                    <div className="card-body">
                        <p>Page Index: {props.machines.pageIndex}</p>
                        <p>Page Size: {props.machines.pageSize}</p>

                        {console.log("machinesData Length: ", machinesData?.length)}

                        {machinesData?.map((machine, index) => {
                            <div key={index}>
                                <p>Machine Number: {machine.machineNumber}</p> <br />
                                <p>Last Weight Added: {machine.numberOfLastWeightAdd}</p> <br />
                                <p>Total Weight: {machine.totalWeight}</p> <br />
                                <p>Time: {machine.time}</p> <br />
                                <p>Status: {machine.status}</p> <br />
                                <p>WeightFeed16_Id: {machine.weightFeed16_Id}</p> <br />
                                <hr />
                            </div>
                        })}
                    </div>
                </div>
            </div>} */}

            {props.machinesData && <div className="container">
                <div className="card text-bg-light mb-3 h-100">
                    <div className="card-header fw-bold">Machines DATA from SERVER</div>
                    <div className="card-body">
                        <p>Page Index: {props.machines.pageIndex}</p>
                        <p>Page Size: {props.machines.pageSize}</p>

                        {console.log("props.machinesData Length: ", props.machinesData?.length)}

                        {props.machinesData?.map((machine, index) => {
                            return <div key={index}>
                                <p>Machine Number: {machine.machineNumber}</p> <br />
                                <p>Last Weight Added: {machine.numberOfLastWeightAdd}</p> <br />
                                <p>Total Weight: {machine.totalWeight}</p> <br />
                                <p>Time: {machine.time}</p> <br />
                                <p>Status: {machine.status}</p> <br />
                                <p>WeightFeed16_Id: {machine.weightFeed16_Id}</p> <br />
                                <hr />
                            </div>
                        })}
                    </div>
                </div>
            </div>}



            {/* {props.products && <div className="container">
                <div className="card text-bg-light mb-3 h-100">
                    <div className="card-header fw-bold">Products DATA from SERVER</div>
                    <div className="card-body">

                        {console.log(props.products)}

                        {props.products?.map((product, index) => {
                            console.log("IIIINSUBBB", product);

                            return <div key={index}>
                                <p>Product: {product.product}</p> <br />
                                <p>Time of Product: {product.timeOfProduct}</p> <br />
                                <p>id: {product.id}</p> <br />
                                <hr />
                            </div>
                        })}
                    </div>
                </div>
            </div>} */}
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Machines);