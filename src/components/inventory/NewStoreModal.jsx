import { useEffect, useState } from "react";

import { SERVER_URL } from "../../MetaData";

const NewStoreModal = (props) => {

    const [newOrderForm, setNewOrderForm] = useState({
        siteId: "",
        name: "",
        capacity: ""
    });

    const [createOrderValid, setCreateOrderValid] = useState("");
    const isCreateOrderValid = () => {
        const regex = /^\d+$/;

        if (newOrderForm.siteId === "" || newOrderForm.name === "" || newOrderForm.capacity === "") {
            setCreateOrderValid("All fields are required.");
            return false;
        }

        if(!regex.test(newOrderForm.capacity)) {
            setCreateOrderValid("Capacity should be a number.");
            return false;
        }

        setCreateOrderValid("valid");
        return true;
    };

    useEffect(() => {
        isCreateOrderValid();
    }, [newOrderForm]);

    const handleOrderSubmit = async () => {
        const response = await fetch(SERVER_URL + `/api/Front/add-store?name=${newOrderForm.name}&heightCapacity=${newOrderForm.capacity}&SiteId=${newOrderForm.siteId}`, {
            method: "POST"
        });

        if (!response.ok) {
            // alert("Code Already Exists.");
            alert(`${await response.text()}`);
            return;
        }

        setNewOrderForm({
            siteId: "",
            name: "",
            capacity: ""
        });

        props.handleToggleNewOrderModal();

        alert("Store created Successfully.");
    };

    return (
        <>
            <div id="modal" className="flex items-center justify-center h-screen w-screen fixed inset-0 bg-black/50 overflow-auto">
                <div className="bg-white max-w-xl w-full rounded-md">
                    <div className="p-3 flex items-center justify-between">
                        <h3 className="font-semibold text-xl text-[#043912]">New Store</h3>
                        <span className="modal-close cursor-pointer" onClick={props.handleToggleNewOrderModal}>×</span>
                    </div>
                    <form className="m-5 mx-24">
                        <div className="flex justify-between">
                            <label className="mr-10 text-[#043912] font-medium text-lg">Site ID</label>
                            <input className="border-2 w-7/12 p-1 rounded-lg" type="text" onChange={(e) => { setNewOrderForm({ ...newOrderForm, siteId: e.target.value }) }} />
                        </div>
                        <div className="flex justify-between mt-3">
                            <label className="mr-10 text-[#043912] font-medium text-lg">Name</label>
                            <input className="border-2 w-7/12 p-1 rounded-lg" type="text" onChange={(e) => { setNewOrderForm({ ...newOrderForm, name: e.target.value }) }} />
                        </div>
                        <div className="flex justify-between mt-3">
                            <label className="mr-10 text-[#043912] font-medium text-lg">Capacity</label>
                            <input className="border-2 w-7/12 p-1 rounded-lg" type="text" onChange={(e) => { setNewOrderForm({ ...newOrderForm, capacity: e.target.value }) }} />
                        </div>
                    </form>
                    <p className="text-red-600">{createOrderValid !== "valid" && createOrderValid}</p>
                    <div className="p-3 flex items-center justify-end">
                        <div>
                            <button className="text-sm text-white bg-[#73C088] rounded-md px-4 py-1" onClick={handleOrderSubmit} disabled={createOrderValid !== "valid"}>Confirm</button>
                            <button className="modal-close text-sm text-[#73C088] border rounded-md px-4 py-1 ml-3" onClick={props.handleToggleNewOrderModal}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NewStoreModal;