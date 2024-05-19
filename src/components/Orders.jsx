import { useState } from "react";


function Orders() {

    const [subTableOpen, setSubTableOpen] = useState(false);

    const toggleSubTable = () => {
        setSubTableOpen(!subTableOpen);
    };

    const subTableRows = () => {
        return (
            <>
                <div className="border-l-4 border-green-800 w-full">
                    <div className="border-b-2 w-full flex">
                        <img src="/vite.svg" alt="" />
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
                        <img src="/vite.svg" alt="" />
                        <table className="w-full text-center text-green-700">
                            <thead className="">
                                <tr>
                                    <th>Name</th>
                                    <th>Material Code</th>
                                    <th>Quantity</th>
                                    <th>Order Time</th>
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
            <div className="bg-white shadow-md rounded-lg min-h-screen m-2">
                <div className="flex justify-between p-2">
                    <h6 className="text-2xl font-semibold">Orders</h6>
                    <div className="text-[#043912] font-semibold">
                        <button className="mx-2 px-3 py-1 rounded-md border border-green-500">Export To Excel</button>
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
                                <tr className="border-b-2 hover:cursor-pointer" onClick={toggleSubTable}>
                                    <td className="py-3 text-green-500">#6703</td>
                                    <td className="py-3">08/4/2023</td>
                                    <td className="py-3">Mahmoud Hassan</td>
                                    <td className="py-3">UPS Ground</td>
                                    <td className="py-3">2</td>
                                    <td className="py-3">
                                        <div className="flex justify-center">
                                            <div className="bg-yellow-400 rounded-xl w-fit px-2">
                                                <i className="bi bi-dot text-yellow-600"></i> <span className="">Pending</span>
                                            </div>
                                        </div>
                                    </td>
                                    {/* <td className="bg-slate-200 rounded-full"><i className="bi bi-arrow-down-short"></i></td> */}
                                </tr>
                                {subTableOpen && <tr>
                                    <td colSpan={6}>
                                        {subTableRows2()}
                                    </td>
                                </tr>}
                                <tr className="border-b-2 hover:cursor-pointer">
                                    <td className="py-3 text-green-500">#6703</td>
                                    <td className="py-3">08/4/2023</td>
                                    <td className="py-3">Mahmoud Hassan</td>
                                    <td className="py-3">UPS Ground</td>
                                    <td className="py-3">2</td>
                                    <td className="py-3">
                                        <div className="flex justify-center">
                                            <div className="bg-red-400 rounded-xl w-fit px-4">
                                                <i className="bi bi-dot text-red-600"></i> <span className="">Failed</span>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="border-b-2 hover:cursor-pointer">
                                    <td className="py-3 text-green-500">#6703</td>
                                    <td className="py-3">08/4/2023</td>
                                    <td className="py-3">Mahmoud Hassan</td>
                                    <td className="py-3">UPS Ground</td>
                                    <td className="py-3">2</td>
                                    <td className="py-3">
                                        <div className="flex justify-center">
                                            <div className="bg-red-400 rounded-xl w-fit px-4">
                                                <i className="bi bi-dot text-red-600"></i> <span className="">Failed</span>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="border-b-2 hover:cursor-pointer">
                                    <td className="py-3 text-green-500">#6703</td>
                                    <td className="py-3">08/4/2023</td>
                                    <td className="py-3">Mahmoud Hassan</td>
                                    <td className="py-3">UPS Ground</td>
                                    <td className="py-3">2</td>
                                    <td className="py-3">
                                        <div className="flex justify-center">
                                            <div className="bg-red-400 rounded-xl w-fit px-4">
                                                <i className="bi bi-dot text-red-600"></i> <span className="">Failed</span>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="border-b-2 hover:cursor-pointer">
                                    <td className="py-3 text-green-500">#6703</td>
                                    <td className="py-3">08/4/2023</td>
                                    <td className="py-3">Mahmoud Hassan</td>
                                    <td className="py-3">UPS Ground</td>
                                    <td className="py-3">2</td>
                                    <td className="py-3">
                                        <div className="flex justify-center">
                                            <div className="bg-red-400 rounded-xl w-fit px-4">
                                                <i className="bi bi-dot text-red-600"></i> <span className="">Failed</span>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="border-b-2 hover:cursor-pointer">
                                    <td className="py-3 text-green-500">#6703</td>
                                    <td className="py-3">08/4/2023</td>
                                    <td className="py-3">Mahmoud Hassan</td>
                                    <td className="py-3">UPS Ground</td>
                                    <td className="py-3">2</td>
                                    <td className="py-3">
                                        <div className="flex justify-center">
                                            <div className="bg-green-400 rounded-xl w-fit px-2">
                                                <i className="bi bi-dot text-green-600"></i> <span className="">Success</span>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Orders;