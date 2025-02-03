import { useEffect, useState } from "react";

import { SERVER_URL } from "../../MetaData";

const NewPieceModal = (props) => {

    const [newOrderForm, setNewOrderForm] = useState({
        code: "",
        cutName: ""
    });

    const [selectedType, setSelectedType] = useState("");

    const [createOrderValid, setCreateOrderValid] = useState("");
    const isCreateOrderValid = () => {
        if (newOrderForm.code === "" || newOrderForm.cutName === "") {
            setCreateOrderValid("All fields are required.");
            return false;
        }

        if (!selectedType) {
            setCreateOrderValid("Please select type.");
            return false;
        }

        setCreateOrderValid("valid");
        return true;
    };

    useEffect(() => {
        isCreateOrderValid();
    }, [newOrderForm, selectedType]);

    const handleOrderSubmit = async () => {
        const response = await fetch(SERVER_URL + `/api/Front/AddCutting`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...newOrderForm, type: selectedType })
        });

        if (!response.ok) {
            // alert("Code Already Exists.");
            alert(`${await response.text()}`);
            return;
        }

        setNewOrderForm({
            code: "",
            cutName: ""
        });

        props.handleToggleNewPieceModal();
    };

    return (
        <>
            <div id="modal" className="flex items-center justify-center h-screen w-screen fixed inset-0 bg-black/50 overflow-auto">
                <div className="bg-white max-w-xl w-full rounded-md">
                    <div className="p-3 flex items-center justify-between">
                        <h3 className="font-semibold text-xl text-[#043912]">New Piece</h3>
                        <span className="modal-close cursor-pointer" onClick={props.handleToggleNewPieceModal}>×</span>
                    </div>
                    <form className="m-5 mx-24">
                        <div className="flex justify-between">
                            <label className="mr-10 text-[#043912] font-medium text-lg">Code</label>
                            <input className="border-2 w-7/12 p-1 rounded-lg" type="text" onChange={(e) => { setNewOrderForm({ ...newOrderForm, code: e.target.value }) }} />
                        </div>
                        <div className="flex justify-between mt-3">
                            <label className="mr-10 text-[#043912] font-medium text-lg">Cut Name</label>
                            <input className="border-2 w-7/12 p-1 rounded-lg" type="text" onChange={(e) => { setNewOrderForm({ ...newOrderForm, cutName: e.target.value }) }} />
                        </div>

                        <div className="flex justify-end space-x-2 mt-3">
                            <button type="button" className={`border-2 px-2 py-2 text-green-600 rounded-md hover:bg-[#76C18B] hover:text-white ${selectedType === "لحم مشفي" ? "bg-[#76C18B] text-white" : ""}`} onClick={() => { setSelectedType("لحم مشفي") }}>لحم مشفي</button>
                            <button type="button" className={`border-2 px-2 py-2 text-green-600 rounded-md hover:bg-[#76C18B] hover:text-white ${selectedType === "سقط" ? "bg-[#76C18B] text-white" : ""}`} onClick={() => { setSelectedType("سقط") }}>سقط</button>
                        </div>
                    </form>
                    <p className="text-red-600">{createOrderValid !== "valid" && createOrderValid}</p>
                    <div className="p-3 flex items-center justify-end">
                        <div>
                            <button className="text-sm text-white bg-[#73C088] rounded-md px-4 py-1" onClick={handleOrderSubmit} disabled={createOrderValid !== "valid"}>Confirm</button>
                            <button className="modal-close text-sm text-[#73C088] border rounded-md px-4 py-1 ml-3" onClick={props.handleToggleNewPieceModal}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NewPieceModal;