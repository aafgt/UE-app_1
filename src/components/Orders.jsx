import { useState } from "react";
import { ORDERS } from "../Data/orders";

function OrderRow({ order }) {

    const [subTableOpen, setSubTableOpen] = useState(false);

    const toggleSubTable = () => {
        setSubTableOpen(!subTableOpen);
    };

    const subTableRows2 = () => {
        return (
            <>
                <div className="border-l-4 border-green-800 w-full">
                    <div className="border-b-2 w-full flex">
                        <div className="bg-black border border-green-400 ml-[31px] my-1 w-28 h-16 flex justify-center items-center">
                            <img src="/vite.svg" alt="" />
                        </div>
                        <table className="w-full text-center text-green-700">
                            <thead className="mb-7">
                                <tr>
                                    <th className="px-5">Name</th>
                                    <th className="px-5">Material Code</th>
                                    <th className="px-5">Quantity</th>
                                    <th className="px-5">Order Time</th>
                                </tr>
                            </thead>
                            <tbody className="text-[20px] font-semibold">
                                <tr>
                                    <td>Starch</td>
                                    <td>ST3</td>
                                    <td>250Kwh</td>
                                    <td>08/4/2022</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="border-b-2 w-full flex">
                        <div className="bg-black border border-green-400 ml-[31px] my-1 w-28 h-16 flex justify-center items-center">
                            <img src="/vite.svg" alt="" />
                        </div>
                        <table className="w-full text-center text-green-700">
                            <thead className="mb-7">
                                <tr>
                                    <th className="px-5">Name</th>
                                    <th className="px-5">Material Code</th>
                                    <th className="px-5">Quantity</th>
                                    <th className="px-5">Order Time</th>
                                </tr>
                            </thead>
                            <tbody className="text-[20px] font-semibold">
                                <tr>
                                    <td>Starch</td>
                                    <td>ST3</td>
                                    <td>250Kwh</td>
                                    <td>08/4/2022</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    };

    return (
        <>
            <tr className="border-b-2 hover:cursor-pointer" onClick={toggleSubTable}>
                <td className="py-3 text-green-500">{order.orderId}</td>
                <td className="py-3">{order.deliveryDate}</td>
                <td className="py-3">{order.customer}</td>
                <td className="py-3">{order.shippingVia}</td>
                <td className="py-3">{order.item}</td>
                <td className="py-3">
                    <div className="flex justify-center">
                        {order.status === "Pending" && <div className="bg-yellow-400 rounded-xl w-fit px-2">
                            <i className="bi bi-dot text-yellow-600"></i> <span className="">{order.status}</span>
                        </div>}
                        {order.status === "Failed" && <div className="bg-red-400 rounded-xl w-fit px-4">
                            <i className="bi bi-dot text-red-600"></i> <span className="">{order.status}</span>
                        </div>}
                        {order.status === "Success" && <div className="bg-green-400 rounded-xl w-fit px-2">
                            <i className="bi bi-dot text-green-600"></i> <span className="">{order.status}</span>
                        </div>}
                    </div>
                </td>
                {/* <td className="bg-slate-200 rounded-full"><i className="bi bi-arrow-down-short"></i></td> */}
            </tr>
            {subTableOpen && <tr>
                <td colSpan={6}>
                    {subTableRows2()}
                </td>
            </tr>}
        </>
    );
};

function Orders() {

    const handleExportToExcelCSV = () => {
        let csv = "";

        const headers = Object.keys(ORDERS[0]);
        csv += headers.join(",") + "\n";

        ORDERS.forEach(element => {
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

    return (
        <>
            <div className="bg-white shadow-md rounded-lg min-h-screen m-2">
                <div className="flex justify-between p-2">
                    <h6 className="text-2xl font-semibold">Orders</h6>
                    <div className="text-[#043912] font-semibold">
                        <button className="mx-2 px-3 py-1 rounded-md border border-green-500" onClick={handleExportToExcelCSV}>Export To Excel</button>
                        <button className="mx-2 px-3 py-1 rounded-md border border-green-500">Import Order</button>
                        <button className="mx-2 px-3 py-1 rounded-md bg-[#73C088]"><i className="bi bi-plus text-white"></i> New Order</button>
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
                        <button className="mx-2 px-3 py-1 rounded-md bg-slate-100">Active Order <i className="bi bi-arrow-down-short"></i></button>
                        <button className="mx-2 px-3 py-1 rounded-md bg-slate-100">Closed Order <i className="bi bi-arrow-down-short"></i></button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md m-3 mt-7">
                    <div className="p-3">
                        <table className="w-full text-center text-green-700 font-semibold">
                            <thead className="text-[20px] font-extralight">
                                <tr>
                                    <th>Order ID</th>
                                    <th>Delivery Date</th>
                                    <th>Customer</th>
                                    <th>Shipping Via</th>
                                    <th>Item</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody className="">
                                {ORDERS && ORDERS.map((order, index) => (
                                    <OrderRow key={index} order={order} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <audio controls>
                <source src="/sample3.m4a" type="audio/mp4" />
                Your browser does not support the audio element.
            </audio>
        </>
    )
}

export default Orders;