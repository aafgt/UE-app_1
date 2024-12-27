import { useEffect, useState } from "react";
import { connect } from "react-redux";
import ImportModal from "./ImportModal";

import { SERVER_URL } from "../../MetaData";

const Batch = ({ index, handleToggleModal2, batch, createOrderRes, handleCowBatches }) => {

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
            "cows": selectedCowsList
        };

        handleCowBatches(cowBatch);
    };

    // useEffect(() => {
    //     const cowBatch = {
    //         "batchCode": batch.batchCode,
    //         "cows": selectedCowsList
    //     };

    //     handleCowBatches(cowBatch);
    // }, [selectedCowsList]);
    

    return (
        <>
            <div className="flex gap-5 border-b-2 py-2 items-center justify-center">
                <p className="text-[#043912] font-medium">Code: <span className="text-[#098329]">{batch.batchCode}</span></p>
                <p className="text-[#043912] font-medium">Type: <span className="text-[#098329]">{selectedCowType}</span></p>
                <p className="text-[#043912] font-medium">Quantity: <span className="text-[#098329]">{selectedCowsList.length}</span></p>
                <button className="text-sm text-white bg-[#73C088] rounded-md px-2 py-1" type="button" onClick={handleToggleModal22}>Import</button>
            </div>

            {toggleModal22 && <ImportModal cows={["123", "456"]} handleToggleModal={handleToggleModal} handleToggleModal22={handleToggleModal22} batchCode={batch.batchCode} createOrderRes={createOrderRes} handleSelectedCowType={handleSelectedCowType} handleSelectedCowsListParent={handleSelectedCowsList} />}
        </>
    );
};

const SlaughterModal = (props) => {

    const [newOrderForm, setNewOrderForm] = useState({
        orderType: "ذبح",
        code: "",
        noOfCows: "",
        noOfBatches: ""
    });

    const [createOrderRes, setCreateOrderRes] = useState(null);

    const handleOrderSubmit = async () => {
        console.log(newOrderForm);

        const response = await fetch(SERVER_URL+"/api/Front/create-order", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newOrderForm)
        });

        if (!response.ok) {
            alert("Order Code Already Exists.");
            return;
        }

        const res = await response.json();
        console.log(res);
        setCreateOrderRes(res);

        // props.fetchOrders();

        setNewOrderForm({
            orderType: "ذبح",
            code: "",
            noOfCows: "",
            noOfBatches: ""
        });

        console.log(createOrderRes);

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
        setCowBatches(prevItems => [...prevItems, cowBatch]);
    };

    // const batchesTable = Array.from({ length: newOrderForm.numberOfBatches }, (_, index) => (
    //     <Batch key={index} index={index} handleToggleModal2={handleToggleModal2} batch={createOrderRes.batches[index]} />
    // ));
    let batchesTable = createOrderRes && Array.from({ length: createOrderRes.batches.length }, (_, index) => (
        <Batch key={index} index={index} handleToggleModal2={handleToggleModal2} batch={createOrderRes.batches[index]} createOrderRes={createOrderRes} handleCowBatches={handleCowBatches} />
    ));

    useEffect(() => {
        batchesTable = createOrderRes && Array.from({ length: createOrderRes.batches.length }, (_, index) => (
            <Batch key={index} index={index} handleToggleModal2={handleToggleModal2} batch={createOrderRes.batches[index]} createOrderRes={createOrderRes} handleCowBatches={handleCowBatches} />
        ));
    }, [createOrderRes]);

    const handleFinalOrderSubmit = async () => {
        const reqBody = {
            "orderCode": createOrderRes.orderCode,
            "batches": cowBatches
        };

        console.log("reqBody", reqBody);

        const response = await fetch(SERVER_URL+"/api/Front/AssignBatchesToCows", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reqBody)
        });

        if (!response.ok) {
            console.log(response);
            console.log(response.text());
            return;
        }

        props.handleToggleSlaughterModal();

        setCowBatches([]);
    };

    return (
        <>
            <div id="modal" className="flex items-center justify-center h-screen w-screen fixed inset-0 bg-black/50 overflow-auto">
                <div className="bg-white max-w-xl w-full rounded-md">
                    <div className="p-3 flex items-center justify-end">
                        <span className="modal-close cursor-pointer" onClick={props.handleToggleSlaughterModal}>×</span>
                    </div>
                    <h3 className="font-semibold text-xl text-[#043912] text-center">ذبح</h3>

                    <form className="m-5 mx-24 max-h-96 overflow-y-auto">
                        <div className="flex justify-between">
                            <label className="mr-10 text-[#043912] font-medium text-lg">Code</label>
                            <input className="border-2 w-7/12 p-1 rounded-lg" type="text" onChange={(e) => { setNewOrderForm({ ...newOrderForm, code: e.target.value }) }} />
                        </div>
                        <div className="flex justify-between mt-3">
                            <label className="mr-10 text-[#043912] font-medium text-lg">No. Of Cows</label>
                            <input className="border-2 w-7/12 p-1 rounded-lg" type="text" onChange={(e) => { setNewOrderForm({ ...newOrderForm, noOfCows: e.target.value }) }} />
                        </div>
                        <div className="flex justify-between mt-3">
                            <label className="mr-10 text-[#043912] font-medium text-lg w-full">No. Of Batches</label>
                            <div className="flex justify-end w-full">
                                <input className="border-2 w-7/12 p-1 rounded-lg" type="text" onChange={(e) => { setNewOrderForm({ ...newOrderForm, noOfBatches: e.target.value }) }} />
                                <button className="text-sm text-white bg-[#73C088] rounded-md px-4 py-1" type="button" onClick={handleOrderSubmit}>Enter</button>
                            </div>
                        </div>

                        <div className="mt-3 border rounded-md">
                            {createOrderRes && batchesTable}
                        </div>
                    </form>
                    <div className="p-3 flex items-center justify-end">
                        <div>
                            <button className="text-sm text-white bg-[#73C088] rounded-md px-4 py-1" type="button" onClick={handleFinalOrderSubmit}>Confirm</button>
                            <button className="modal-close text-sm text-[#73C088] border rounded-md px-4 py-1 ml-3" onClick={props.handleToggleSlaughterModal}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SlaughterModal;