import { useState } from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../../redux/ActionCreators";
import CowsModal from "./CowsModal";

const mapDispatchToProps = (dispatch) => ({
    fetchOrders: (feedType) => { dispatch(fetchOrders(feedType)) }
})

const NewPieceModal = (props) => {

    const [newOrderForm, setNewOrderForm] = useState({
        name: "",
        code: ""
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
            name: "",
            code: ""
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
                            <label className="mr-10 text-[#043912] font-medium text-lg">Name</label>
                            <input className="border-2 w-7/12 p-1 rounded-lg" type="text" onChange={(e) => { setNewOrderForm({ ...newOrderForm, name: e.target.value }) }} />
                        </div>
                        <div className="flex justify-between mt-3">
                            <label className="mr-10 text-[#043912] font-medium text-lg">Code</label>
                            <input className="border-2 w-7/12 p-1 rounded-lg" type="text" onChange={(e) => { setNewOrderForm({ ...newOrderForm, code: e.target.value }) }} />
                        </div>
                    </form>
                    <div className="p-3 flex items-center justify-end">
                        <div>
                            <button className="text-sm text-white bg-[#73C088] rounded-md px-4 py-1">Confirm</button>
                            <button className="modal-close text-sm text-[#73C088] border rounded-md px-4 py-1 ml-3" onClick={props.handleToggleNewPieceModal}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default connect(null, mapDispatchToProps)(NewPieceModal);