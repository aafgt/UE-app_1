import { useState } from "react";


const NewSupplierModal = ({ handleToggleNewSupplierModal }) => {

    const [newSupplierForm, setNewSupplierForm] = useState({
        name: "",
        id: "",
        item: ""
    });

    const handleSupplierSubmit = async () => {
        const response = await fetch(`http://192.168.1.120:5107/api/Supplier/AddSupplier?ID=${newSupplierForm.id}&Name=${newSupplierForm.name}&Item=${newSupplierForm.item}`, {
            method: "POST"
        });

        if (!response.ok) {
            return;
        }

        // props.fetchOrders();

        setNewSupplierForm({
            name: "",
            id: "",
            item: ""
        });

        handleToggleNewSupplierModal();
    };

    return (
        <div id="modal" className="flex items-center justify-center h-screen w-screen fixed inset-0 bg-black/50 overflow-auto">
            <div className="bg-white max-w-xl w-full rounded-md">
                <div className="p-3 flex items-center justify-between">
                    <h3 className="font-semibold text-xl text-[#043912]">New Supplier</h3>
                    <span className="modal-close cursor-pointer" onClick={handleToggleNewSupplierModal}>×</span>
                </div>
                <form className="m-5 mx-24">
                    <div className="flex justify-between">
                        <label className="mr-10 text-[#043912] font-medium text-lg">Name</label>
                        <input className="border-2 w-7/12 p-1 rounded-lg" type="text" onChange={(e) => { setNewSupplierForm({ ...newSupplierForm, name: e.target.value }) }} />
                    </div>
                    <div className="flex justify-between mt-3">
                        <label className="mr-10 text-[#043912] font-medium text-lg">ID</label>
                        <input className="border-2 w-7/12 p-1 rounded-lg" type="text" onChange={(e) => { setNewSupplierForm({ ...newSupplierForm, id: e.target.value }) }} />
                    </div>
                    <div className="flex justify-between mt-3">
                        <label className="mr-10 text-[#043912] font-medium text-lg">Item</label>
                        <input className="border-2 w-7/12 p-1 rounded-lg" type="text" onChange={(e) => { setNewSupplierForm({ ...newSupplierForm, item: e.target.value }) }} />
                    </div>
                </form>
                <div className="p-3 flex items-center justify-end">
                    <div>
                        <button className="text-sm text-white bg-[#73C088] rounded-md px-4 py-1" onClick={handleSupplierSubmit}>Ok</button>
                        <button className="modal-close text-sm text-[#73C088] border rounded-md px-4 py-1 ml-3" onClick={handleToggleNewSupplierModal}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewSupplierModal;