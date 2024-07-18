import { useState } from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../../redux/ActionCreators";

const mapDispatchToProps = (dispatch) => ({
    fetchOrders: (feedType) => { dispatch(fetchOrders(feedType)) }
})

const NewOrderModal = (props) => {

    const [newOrderForm, setNewOrderForm] = useState({
        orderId: "",
        supplier: "",
        deliveryDate: "",
        quantity: ""
    });

    const handleOrderSubmit = async () => {
        const response = await fetch(`http://192.168.1.120:5107/api/Orders/AddOrder?orderID=${newOrderForm.orderId}&deliveryDate=${newOrderForm.deliveryDate}&quantity=${newOrderForm.quantity}&supplier_Name=${newOrderForm.supplier}&feedTypeName=${props.feedType}`, {
            method: "POST"
        });

        if(!response.ok) {
            return;
        }

        props.fetchOrders();

        setNewOrderForm({
            orderId: "",
            supplier: "",
            deliveryDate: "",
            quantity: ""
        });

        props.handleToggleNewOrderModal();

        props.fetchOrders(props.feedType);
    };

    return (
        <div id="modal" className="flex items-center justify-center h-screen w-screen fixed inset-0 bg-black/50 overflow-auto">
            <div className="bg-white max-w-xl w-full rounded-md">
                <div className="p-3 flex items-center justify-between">
                    <h3 className="font-semibold text-xl text-[#043912]">New Order</h3>
                    <span className="modal-close cursor-pointer" onClick={props.handleToggleNewOrderModal}>×</span>
                </div>
                <form className="m-5 mx-24">
                    <div className="flex justify-between">
                        <label className="mr-10 text-[#043912] font-medium text-lg">Order ID</label>
                        <input className="border-2 w-7/12 p-1 rounded-lg" type="text" onChange={(e) => { setNewOrderForm({ ...newOrderForm, orderId: e.target.value }) }} />
                    </div>
                    <div className="flex justify-between mt-3">
                        <label className="mr-10 text-[#043912] font-medium text-lg">Supplier</label>
                        <input className="border-2 w-7/12 p-1 rounded-lg" type="text" onChange={(e) => { setNewOrderForm({ ...newOrderForm, supplier: e.target.value }) }} />
                    </div>
                    <div className="flex justify-between mt-3">
                        <label className="mr-10 text-[#043912] font-medium text-lg">Delivery Date</label>
                        <input className="border-2 w-7/12 p-1 rounded-lg" type="text" onChange={(e) => { setNewOrderForm({ ...newOrderForm, deliveryDate: e.target.value }) }} />
                    </div>
                    <div className="flex justify-between mt-3">
                        <label className="mr-10 text-[#043912] font-medium text-lg">Quantity</label>
                        <input className="border-2 w-7/12 p-1 rounded-lg" type="text" onChange={(e) => { setNewOrderForm({ ...newOrderForm, quantity: e.target.value }) }} />
                    </div>
                </form>
                <div className="p-3 flex items-center justify-end">
                    <div>
                        <button className="text-sm text-white bg-[#73C088] rounded-md px-4 py-1" onClick={handleOrderSubmit}>Ok</button>
                        <button className="modal-close text-sm text-[#73C088] border rounded-md px-4 py-1 ml-3" onClick={props.handleToggleNewOrderModal}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default connect(null, mapDispatchToProps)(NewOrderModal);