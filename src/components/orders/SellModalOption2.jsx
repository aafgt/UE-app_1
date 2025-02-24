// import { useState } from "react";
// import { connect } from "react-redux";
// import { fetchOrders } from "../../redux/ActionCreators";
// import CowsModal from "./CowsModal";

// const mapDispatchToProps = (dispatch) => ({
//     fetchOrders: (feedType) => { dispatch(fetchOrders(feedType)) }
// })

// const Batch = ({ index }) => {
//     return (
//         <div className="flex gap-5 border-b-2 py-2 items-center justify-center">
//             <p className="text-[#043912] font-medium">Weight: <span className="text-[#098329]">32Tn</span></p>
//             <p className="text-[#043912] font-medium">Type: <span className="text-[#098329]">Baldi</span></p>
//             <p className="text-[#043912] font-medium">Quantity: <span className="text-[#098329]">3</span></p>
//             <button className="text-sm text-white bg-[#73C088] rounded-md px-2 py-1">Import</button>
//         </div>
//     );
// };

// const SellModalOption2 = (props) => {

//     const [newOrderForm, setNewOrderForm] = useState({
//         code: "",
//         client: "",
//         numberOfPiece: ""
//     });

//     const handleOrderSubmit = async () => {
//         const response = await fetch(`http://192.168.1.120:5107/api/Orders/AddOrder?orderID=${newOrderForm.orderId}&deliveryDate=${newOrderForm.deliveryDate}&quantity=${newOrderForm.quantity}&supplier_Name=${newOrderForm.supplier}&feedTypeName=${props.feedType}`, {
//             method: "POST"
//         });

//         if (!response.ok) {
//             return;
//         }

//         props.fetchOrders();

//         setNewOrderForm({
//             orderId: "",
//             customer: "",
//             deliveryDate: "",
//             quantity: ""
//         });

//         props.handleToggleNewOrderModal();

//         props.fetchOrders(props.feedType);
//     };

//     const [toggleModal, setToggleModal] = useState(false);

//     const handleToggleModal = () => {
//         // takes the cow, to add to list... (or selects the cow and ADD adds to list)
//         setToggleModal(!toggleModal);
//     };

//     const [toggleModal2, setToggleModal2] = useState(false);

//     const handleToggleModal2 = () => {
//         setToggleModal2(!toggleModal2);
//     };


//     const batchesTable = Array.from({ length: newOrderForm.numberOfPiece }, (_, index) => (
//         <Batch key={index} index={index} />
//     ));

//     return (
//         <>
//             <div id="modal" className="flex items-center justify-center h-screen w-screen fixed inset-0 bg-black/50 overflow-auto">
//                 <div className="bg-white max-w-xl w-full rounded-md">
//                     <div className="p-3 flex items-center justify-end">
//                         <span className="modal-close cursor-pointer" onClick={props.handleToggleSellModalOption2}>×</span>
//                     </div>
//                     <h3 className="font-semibold text-xl text-[#043912] text-center">لحم مشفي</h3>

//                     <form className="m-5 mx-24 max-h-96 overflow-y-auto">
//                         <div className="flex justify-between">
//                             <label className="mr-10 text-[#043912] font-medium text-lg">Code</label>
//                             <input className="border-2 w-7/12 p-1 rounded-lg" type="text" onChange={(e) => { setNewOrderForm({ ...newOrderForm, code: e.target.value }) }} />
//                         </div>
//                         <div className="flex justify-between mt-3">
//                             <label className="mr-10 text-[#043912] font-medium text-lg">Client</label>
//                             <input className="border-2 w-7/12 p-1 rounded-lg" type="text" onChange={(e) => { setNewOrderForm({ ...newOrderForm, client: e.target.value }) }} />
//                         </div>
//                         <div className="flex justify-between mt-3">
//                             <label className="mr-10 text-[#043912] font-medium text-lg w-full">No. Of Piece</label>
//                             <div className="flex justify-end w-full">
//                                 <input className="border-2 w-7/12 p-1 rounded-lg" type="text" onChange={(e) => { setNewOrderForm({ ...newOrderForm, numberOfPiece: e.target.value }) }} />
//                                 <button className="text-sm text-white bg-[#73C088] rounded-md px-4 py-1" type="button" onClick={handleToggleModal2}>Enter</button>
//                             </div>
//                         </div>

//                         <div className="mt-3 border rounded-md">
//                             {batchesTable}
//                         </div>
//                     </form>
//                     <div className="p-3 flex items-center justify-end">
//                         <div>
//                             <button className="text-sm text-white bg-[#73C088] rounded-md px-4 py-1">Confirm</button>
//                             <button className="modal-close text-sm text-[#73C088] border rounded-md px-4 py-1 ml-3" onClick={props.handleToggleSellModalOption2}>Cancel</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {toggleModal2 && <CowsModal cows={["123", "456"]} handleToggleModal={handleToggleModal} handleToggleModal2={handleToggleModal2} />}
//         </>
//     );
// }

// export default connect(null, mapDispatchToProps)(SellModalOption2);




import { useEffect, useState } from "react";

import { SERVER_URL } from "../../MetaData";
import ImportPieceModal2 from "./ImportPieceModal2";

const Batch = ({ index, handleToggleModal2, batch, createOrderRes, handleCowBatches, setCreateOrderResValid }) => {

    const [toggleModal, setToggleModal] = useState(false);

    const handleToggleModal = () => {
        // takes the cow, to add to list... (or selects the cow and ADD adds to list)
        setToggleModal(!toggleModal);
    };

    const [toggleModal22, setToggleModal22] = useState(false);

    const handleToggleModal22 = () => {
        setToggleModal22(!toggleModal22);
    };

    const [selectedCowType, setSelectedCowType] = useState("");
    const [selectedCowsList, setSelectedCowsList] = useState([]);

    const handleSelectedCowType = (selectedCowType) => {
        setSelectedCowType(selectedCowType);
    };

    const handleSelectedCowsList = (selectedCowsList, cowType) => {
        setSelectedCowsList(selectedCowsList);

        const cowBatch = {
            "batchCode": batch.batchCode,
            "cowType": cowType,
            "quntity": selectedCowsList.length,
            "pieces": selectedCowsList
        };

        if (selectedCowsList.length > 0) {
            handleCowBatches(cowBatch);
        }
    };

    // useEffect(() => {
    //     const cowBatch = {
    //         "batchCode": batch.batchCode,
    //         "cows": selectedCowsList
    //     };

    //     handleCowBatches(cowBatch);
    // }, [selectedCowsList]);

    const isCreateOrderValid = () => {
        if (selectedCowsList.length <= 0) {
            setCreateOrderResValid("Please select Cows/Pieces.");
            return false;
        }

        setCreateOrderResValid("valid");
        return true;
    };

    useEffect(() => {
        isCreateOrderValid();
    }, [selectedCowsList]);

    return (
        <>
            <div className="flex gap-5 border-b-2 py-2 items-center justify-center">
                <p className="text-[#043912] font-medium">Code: <span className="text-[#098329]">{batch.batchCode}</span></p>
                <p className="text-[#043912] font-medium">Type: <span className="text-[#098329]">{selectedCowType}</span></p>
                <p className="text-[#043912] font-medium">Quantity: <span className="text-[#098329]">{selectedCowsList.length}</span></p>
                <button className="text-sm text-white bg-[#73C088] rounded-md px-2 py-1" type="button" onClick={handleToggleModal22}>Import</button>
            </div>

            {toggleModal22 && <ImportPieceModal2 cows={["123", "456"]} handleToggleModal={handleToggleModal} handleToggleModal22={handleToggleModal22} batchCode={batch.batchCode} createOrderRes={createOrderRes} handleSelectedCowType={handleSelectedCowType} handleSelectedCowsListParent={handleSelectedCowsList} />}
        </>
    );
};

const SellModalOption2 = (props) => {

    const [newOrderForm, setNewOrderForm] = useState({
        orderType: "بيع لحم مشفي",
        code: "",
        clientName: "",
        date: "",
        noOfBatches: ""
    });

    const [createOrderValid, setCreateOrderValid] = useState("");
    const isCreateOrderValid = () => {
        const regex = /^\d+$/;

        if (newOrderForm.code === "" || newOrderForm.clientName === "" || newOrderForm.date === "" || newOrderForm.noOfBatches === "") {
            setCreateOrderValid("All fields are required.");
            return false;
        }

        if (!regex.test(newOrderForm.noOfBatches)) {
            setCreateOrderValid("No. Of Batches should be a number.");
            return false;
        }

        setCreateOrderValid("valid");
        return true;
    };

    useEffect(() => {
        isCreateOrderValid();
    }, [newOrderForm]);


    const [createOrderResValid, setCreateOrderResValid] = useState("");

    const [createOrderRes, setCreateOrderRes] = useState(null);

    const handleOrderSubmit = async () => {
        // console.log(newOrderForm);

        const response = await fetch(SERVER_URL + "/api/Front/create-order", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newOrderForm)
        });

        if (!response.ok) {
            // alert("Order Code Already Exists.");
            alert(`${await response.text()}`);
            return;
        }

        const res = await response.json();
        // console.log(res);
        setCreateOrderRes(res);

        // props.fetchOrders();

        setNewOrderForm({
            orderType: "بيع لحم مشفي",
            code: "",
            clientName: "",
            date: "",
            noOfBatches: ""
        });

        // console.log(createOrderRes);

        // props.handleToggleSellModalOption2();

        // props.handleToggleSlaughterModal();

        // props.fetchOrders(props.feedType);
    };

    const [toggleModal, setToggleModal] = useState(false);

    const handleToggleModal = () => {
        // takes the cow, to add to list... (or selects the cow and ADD adds to list)
        setToggleModal(!toggleModal);
    };

    const [toggleModal2, setToggleModal2] = useState(false);

    const handleToggleModal2 = () => {
        setToggleModal2(!toggleModal2);
    };

    const [cowBatches, setCowBatches] = useState([]);
    const handleCowBatches = (cowBatch) => {
        let index = cowBatches.findIndex(item => item.batchCode === cowBatch.batchCode);

        if (index !== -1) {
            setCowBatches(prevItems => {
                const updatedItems = [...prevItems];
                updatedItems[index] = cowBatch;
                return updatedItems;
            });
        }
        else {
            setCowBatches(prevItems => [...prevItems, cowBatch]);
        }
    };

    // const batchesTable = Array.from({ length: newOrderForm.numberOfBatches }, (_, index) => (
    //     <Batch key={index} index={index} handleToggleModal2={handleToggleModal2} batch={createOrderRes.batches[index]} />
    // ));
    let batchesTable = createOrderRes && Array.from({ length: createOrderRes.batches.length }, (_, index) => (
        <Batch key={index} index={index} handleToggleModal2={handleToggleModal2} batch={createOrderRes.batches[index]} createOrderRes={createOrderRes} handleCowBatches={handleCowBatches} setCreateOrderResValid={setCreateOrderResValid} />
    ));

    useEffect(() => {
        batchesTable = createOrderRes && Array.from({ length: createOrderRes.batches.length }, (_, index) => (
            <Batch key={index} index={index} handleToggleModal2={handleToggleModal2} batch={createOrderRes.batches[index]} createOrderRes={createOrderRes} handleCowBatches={handleCowBatches} setCreateOrderResValid={setCreateOrderResValid} />
        ));
    }, [createOrderRes]);

    const handleFinalOrderSubmit = async () => {
        const reqBody = {
            "orderCode": createOrderRes.orderCode,
            "batches": cowBatches
        };

        // console.log("reqBody", reqBody);

        const response = await fetch(SERVER_URL + "/api/Front/AssignBatchesToPieces2", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reqBody)
        });

        if (!response.ok) {
            // console.log(response);
            return;
        }

        props.handleToggleSellModalOption2();

        setCowBatches([]);

        alert("Order created Successfully.");
    };

    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);

        setNewOrderForm({ ...newOrderForm, clientName: event.target.value });
    };

    const [clients, setClients] = useState([]);
    const fetchClients = async () => {
        const response = await fetch(SERVER_URL + `/api/Front/get-client-orders`);

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }

        const data = await response.json();
        setClients(data);
    };

    useEffect(() => {
        fetchClients();
    }, []);

    const [filterText, setFilterText] = useState('');

    const filteredClients = clients.filter(client =>
        client.clientName.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <>
            <div id="modal" className="flex items-center justify-center h-screen w-screen fixed inset-0 bg-black/50 overflow-auto">
                <div className="bg-white max-w-xl w-full rounded-md">
                    <div className="p-3 flex items-center justify-end">
                        <span className="modal-close cursor-pointer" onClick={props.handleToggleSellModalOption2}>×</span>
                    </div>
                    <h3 className="font-semibold text-xl text-[#043912] text-center">لحم مشفي</h3>

                    <form className="m-5 mx-24 max-h-96 overflow-y-auto">
                        <div className="flex justify-between">
                            <label className="mr-10 text-[#043912] font-medium text-lg">Code</label>
                            <input className="border-2 w-7/12 p-1 rounded-lg" type="text" onChange={(e) => { setNewOrderForm({ ...newOrderForm, code: e.target.value }) }} />
                        </div>
                        {/* <div className="flex justify-between mt-3">
                            <label className="mr-10 text-[#043912] font-medium text-lg">Client</label>
                            <input className="border-2 w-7/12 p-1 rounded-lg" type="text" onChange={(e) => { setNewOrderForm({ ...newOrderForm, clientName: e.target.value }) }} />
                        </div> */}
                        <div className="flex justify-between mt-3">
                            <label htmlFor="dropdown" className="mr-10 text-[#043912] font-medium text-lg">Client</label>
                            <input
                                type="text"
                                id="dropdown"
                                className="border-2 w-4/12 p-1 rounded-lg"
                                placeholder="Search..."
                                value={filterText}
                                onChange={(e) => { setFilterText(e.target.value); }}
                            />
                            <select id="dropdown" className="border-2 w-7/12 p-1 rounded-lg" value={selectedOption} onChange={handleChange}>
                                <option value="">Select...</option>
                                {filteredClients && filteredClients.map((client, index) => (
                                    <option key={index} value={client.clientName}>{client.clientName}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex justify-between mt-3">
                            <label className="mr-10 text-[#043912] font-medium text-lg">Date</label>
                            <input className="border-2 w-7/12 p-1 rounded-lg" type="date" onChange={(e) => { setNewOrderForm({ ...newOrderForm, date: e.target.value }) }} />
                        </div>
                        <div className="flex justify-between mt-3">
                            <label className="mr-10 text-[#043912] font-medium text-lg w-full">No. Of Batches</label>
                            <div className="flex justify-end w-full">
                                <input className="border-2 w-7/12 p-1 rounded-lg" type="text" onChange={(e) => { setNewOrderForm({ ...newOrderForm, noOfBatches: e.target.value }) }} />
                                <button className="text-sm text-white bg-[#73C088] rounded-md px-4 py-1" type="button" onClick={handleOrderSubmit} disabled={createOrderValid !== "valid"}>Enter</button>
                            </div>
                        </div>
                        <p className="text-red-600">{createOrderValid !== "valid" && !createOrderRes && createOrderValid}</p>

                        <div className="mt-3 border rounded-md">
                            {createOrderRes && batchesTable}
                        </div>
                        <p className="text-red-600">{createOrderResValid !== "valid" && createOrderRes && createOrderResValid}</p>
                    </form>
                    <div className="p-3 flex items-center justify-end">
                        <div>
                            {createOrderRes && <button className="text-sm text-white bg-[#73C088] rounded-md px-4 py-1" type="button" onClick={handleFinalOrderSubmit} disabled={createOrderValid !== "valid" && createOrderResValid !== "valid"}>Confirm</button>}
                            <button className="modal-close text-sm text-[#73C088] border rounded-md px-4 py-1 ml-3" onClick={props.handleToggleSellModalOption2}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SellModalOption2;