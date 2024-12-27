import { useState } from "react";

import { SERVER_URL } from "../../MetaData";

const NewClientModal = (props) => {

    const [newOrderForm, setNewOrderForm] = useState({
        code: "",
        name: ""
    });

    const handleOrderSubmit = async () => {
        const response = await fetch(SERVER_URL + `/api/Front/add-client?name=${newOrderForm.name}&code=${newOrderForm.code}`, {
            method: "POST"
        });

        if (!response.ok) {
            alert("Code Already Exists.");
            return;
        }

        setNewOrderForm({
            code: "",
            name: ""
        });

        props.handleToggleNewOrderModal();
    };

    return (
        <>
            <div id="modal" className="flex items-center justify-center h-screen w-screen fixed inset-0 bg-black/50 overflow-auto">
                <div className="bg-white max-w-xl w-full rounded-md">
                    <div className="p-3 flex items-center justify-between">
                        <h3 className="font-semibold text-xl text-[#043912]">New Client</h3>
                        <span className="modal-close cursor-pointer" onClick={props.handleToggleNewOrderModal}>×</span>
                    </div>
                    <form className="m-5 mx-24">
                        <div className="flex justify-between">
                            <label className="mr-10 text-[#043912] font-medium text-lg">Code</label>
                            <input className="border-2 w-7/12 p-1 rounded-lg" type="text" onChange={(e) => { setNewOrderForm({ ...newOrderForm, code: e.target.value }) }} />
                        </div>
                        <div className="flex justify-between mt-3">
                            <label className="mr-10 text-[#043912] font-medium text-lg">Name</label>
                            <input className="border-2 w-7/12 p-1 rounded-lg" type="text" onChange={(e) => { setNewOrderForm({ ...newOrderForm, name: e.target.value }) }} />
                        </div>
                    </form>
                    <div className="p-3 flex items-center justify-end">
                        <div>
                            <button className="text-sm text-white bg-[#73C088] rounded-md px-4 py-1" onClick={handleOrderSubmit}>Confirm</button>
                            <button className="modal-close text-sm text-[#73C088] border rounded-md px-4 py-1 ml-3" onClick={props.handleToggleNewOrderModal}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NewClientModal;