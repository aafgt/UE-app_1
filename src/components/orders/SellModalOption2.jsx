import { useState } from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../../redux/ActionCreators";
import CowsModal from "./CowsModal";

const mapDispatchToProps = (dispatch) => ({
    fetchOrders: (feedType) => { dispatch(fetchOrders(feedType)) }
})

const Batch = ({ index }) => {
    return (
        <div className="flex gap-5 border-b-2 py-2 items-center justify-center">
            <p className="text-[#043912] font-medium">Weight: <span className="text-[#098329]">32Tn</span></p>
            <p className="text-[#043912] font-medium">Type: <span className="text-[#098329]">Baldi</span></p>
            <p className="text-[#043912] font-medium">Quantity: <span className="text-[#098329]">3</span></p>
            <button className="text-sm text-white bg-[#73C088] rounded-md px-2 py-1">Import</button>
        </div>
    );
};

const SellModalOption2 = (props) => {

    const [newOrderForm, setNewOrderForm] = useState({
        code: "",
        client: "",
        numberOfPiece: ""
    });

    const handleOrderSubmit = async () => {
        const response = await fetch(`http://192.168.1.120:5107/api/Orders/AddOrder?orderID=${newOrderForm.orderId}&deliveryDate=${newOrderForm.deliveryDate}&quantity=${newOrderForm.quantity}&supplier_Name=${newOrderForm.supplier}&feedTypeName=${props.feedType}`, {
            method: "POST"
        });

        if (!response.ok) {
            return;
        }

        props.fetchOrders();

        setNewOrderForm({
            orderId: "",
            customer: "",
            deliveryDate: "",
            quantity: ""
        });

        props.handleToggleNewOrderModal();

        props.fetchOrders(props.feedType);
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


    const batchesTable = Array.from({ length: newOrderForm.numberOfPiece }, (_, index) => (
        <Batch key={index} index={index} />
    ));

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
                        <div className="flex justify-between mt-3">
                            <label className="mr-10 text-[#043912] font-medium text-lg">Client</label>
                            <input className="border-2 w-7/12 p-1 rounded-lg" type="text" onChange={(e) => { setNewOrderForm({ ...newOrderForm, client: e.target.value }) }} />
                        </div>
                        <div className="flex justify-between mt-3">
                            <label className="mr-10 text-[#043912] font-medium text-lg w-full">No. Of Piece</label>
                            <div className="flex justify-end w-full">
                                <input className="border-2 w-7/12 p-1 rounded-lg" type="text" onChange={(e) => { setNewOrderForm({ ...newOrderForm, numberOfPiece: e.target.value }) }} />
                                <button className="text-sm text-white bg-[#73C088] rounded-md px-4 py-1" type="button" onClick={handleToggleModal2}>Enter</button>
                            </div>
                        </div>

                        <div className="mt-3 border rounded-md">
                            {batchesTable}
                        </div>
                    </form>
                    <div className="p-3 flex items-center justify-end">
                        <div>
                            <button className="text-sm text-white bg-[#73C088] rounded-md px-4 py-1">Confirm</button>
                            <button className="modal-close text-sm text-[#73C088] border rounded-md px-4 py-1 ml-3" onClick={props.handleToggleSellModalOption2}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>

            {toggleModal2 && <CowsModal cows={["123", "456"]} handleToggleModal={handleToggleModal} handleToggleModal2={handleToggleModal2} />}
        </>
    );
}

export default connect(null, mapDispatchToProps)(SellModalOption2);