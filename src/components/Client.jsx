import { useEffect, useState } from "react";
import { ORDERS } from "../Data/orders";
import NewClientModal from "./client/NewClientModal";

import { SERVER_URL } from "../MetaData";

function Client() {

    const handleExportToExcelCSV = () => {
        let csv = "";

        const headers = Object.keys(orders[0]);
        csv += headers.join(",") + "\n";

        orders.forEach(element => {
            const values = headers.map(header => element[header]);
            csv += values.join(",") + "\n";
        });

        //alert(csv);

        const blob = new Blob([csv], { type: "text/csv" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.download = "orders.csv";
        link.href = url;
        link.click();
    };

    const [toggleNewOrderModal, setToggleNewOrderModal] = useState(false);
    const handleToggleNewOrderModal = () => {
        setToggleNewOrderModal(prev => !prev);
    };

    const [orders, setOrders] = useState([]);
    const fetchOrders = async () => {
        const response = await fetch(SERVER_URL + `/api/Front/get-client-orders`);

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }

        const data = await response.json();
        setOrders(data);
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <>
            <div className="bg-white shadow-md rounded-lg min-h-screen m-2">
                <div className="flex justify-between p-2">
                    <h6 className="text-2xl font-semibold">Client</h6>
                    <div className="text-[#043912] font-semibold">
                        <button className="mx-2 px-3 py-1 rounded-md border border-green-500" onClick={handleExportToExcelCSV}>Export To Excel</button>
                        <button className="mx-2 px-3 py-1 rounded-md bg-[#73C088]" onClick={handleToggleNewOrderModal}><i className="bi bi-plus text-white"></i> New Client</button>
                    </div>
                </div>

                <div className="flex justify-between p-2 mt-7">
                    <div className="relative bg-slate-100">
                        <input className="pl-10 pr-4 py-2 border rounded-lg" type="text" placeholder="Search, Order ID" />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i className="bi bi-search text-gray-400"></i>
                        </div>
                    </div>
                    <div className="text-[#043912] font-semibold">
                        <button className="mx-2 px-3 py-1 rounded-md bg-slate-100">Date <i className="bi bi-arrow-down-short"></i></button>
                        <button className="mx-2 px-3 py-1 rounded-md bg-slate-100">Active Client</button>
                        <button className="mx-2 px-3 py-1 rounded-md bg-slate-100">All Client</button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-x-auto m-3">
                    <table className="w-full min-w-max text-center">
                        <thead className="bg-gray-100 text-green-700">
                            <tr>
                                <th className="border border-gray-300 border-b-4 px-4 py-6">Client</th>
                                <th className="border border-gray-300 border-b-4 px-4 py-6">Code</th>
                                <th className="border border-gray-300 border-b-4 px-4 py-6">Last Order</th>
                                <th className="border border-gray-300 border-b-4 px-4 py-6">Active Order</th>
                                <th className="border border-gray-300 border-b-4 px-4 py-6">Total Weight</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2"></td>
                                <td className="border border-gray-300 px-4 py-2"></td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <div className="flex justify-around">
                                        <p className="">Weight</p>
                                        <p className="">Date</p>
                                        <p className="">Delivery Date</p>
                                    </div>
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <div className="flex justify-around">
                                        <p className="">Weight</p>
                                        <p className="">Date</p>
                                        <p className="">Delivery Date</p>
                                    </div>
                                </td>
                                {/* <td className="border border-gray-300 px-4 py-2"><span className="border-r-2 mx-2 pr-2">Quantity</span><span className="border-r-2 mx-2 pr-2">Date</span>Delivery Date</td> */}
                                <td className="border border-gray-300 px-4 py-2"></td>
                            </tr>

                            {orders && orders.map((order, index) => (
                                <tr key={index}>
                                    <td className="border border-gray-300 px-4 py-2">{order.clientName}</td>
                                    <td className="border border-gray-300 px-4 py-2">{order.code}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <div className="flex justify-around">
                                            <p className="">{order.lastOrder?.quantity ? order.lastOrder?.quantity : "---"}</p>
                                            <p className="">{order.lastOrder?.date ? order.lastOrder?.date : "-----------"}</p>
                                            <p className="">{order.lastOrder?.deliveryDate ? order.lastOrder?.deliveryDate : "----------"}</p>
                                        </div>
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <div className="flex justify-around">
                                            <p className="">{order.activeOrder?.quantity ? order.activeOrder?.quantity : "---"}</p>
                                            <p className="">{order.activeOrder?.date ? order.activeOrder?.date : "-----------"}</p>
                                            <p className="">{order.activeOrder?.deliveryDate ? order.activeOrder?.deliveryDate : "----------"}</p>
                                        </div>
                                    </td>
                                    {/* <td className="border border-gray-300 px-4 py-2"><span className="border-r-2 mx-2 pr-2">{order.lastOrder?.quantity}</span><span className="border-r-2 mx-2 pr-2">{order.lastOrder?.date}</span>{order.lastOrder?.deliveryDate}</td>
                                    <td className="border border-gray-300 px-4 py-2"><span className="border-r-2 mx-2 pr-2">{order.activeOrder?.quantity}</span><span className="border-r-2 mx-2 pr-2">{order.activeOrder?.date}</span>{order.activeOrder?.deliveryDate}</td> */}
                                    <td className="border border-gray-300 px-4 py-2">{order.totalQuantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {toggleNewOrderModal && <NewClientModal handleToggleNewOrderModal={handleToggleNewOrderModal} />}
        </>
    )
}

export default Client;