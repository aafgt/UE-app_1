// import { useEffect, useState } from "react";

// import { SERVER_URL } from "../../MetaData";

const HorizonTable = (props) => {

    // const [tableData, setTableData] = useState([]);

    // const getHorizonTable = async () => {
    //     const response = await fetch(SERVER_URL+"/api/Front/GetTable");

    //     if (!response.ok) {
    //         const message = `An error has occured: ${response.status}`;
    //         throw new Error(message);
    //     }

    //     const data = await response.json();
    //     setTableData(data);
    // }

    // useEffect(() => {
    //     getHorizonTable();
    // }, []);
    

    return (
        <div className="bg-white rounded-lg shadow-md overflow-x-auto m-3">
            <table className="w-full min-w-max text-center">
                <thead className="bg-gray-100 text-green-700">
                    <tr>
                        <th className="border border-gray-300 border-b-4 px-4 py-6">Order Id</th>
                        <th className="border border-gray-300 border-b-4 px-4 py-6">Batch</th>
                        <th className="border border-gray-300 border-b-4 px-4 py-6">Number Of Cow/Pieces</th>
                        <th className="border border-gray-300 border-b-4 px-4 py-6">Start Date</th>
                        <th className="border border-gray-300 border-b-4 px-4 py-6">End Date</th>
                        <th className="border border-gray-300 border-b-4 px-4 py-6">Type Cows</th>
                        <th className="border border-gray-300 border-b-4 px-4 py-6">Waste</th>
                        <th className="border border-gray-300 border-b-4 px-4 py-6">Miscarriage</th>
                        <th className="border border-gray-300 border-b-4 px-4 py-6">Order Type</th>
                        <th className="border border-gray-300 border-b-4 px-4 py-6">Client</th>
                        <th className="border border-gray-300 border-b-4 px-4 py-6">Total Weight</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        <td className="border border-gray-300 px-4 py-2 text-green-400 hover:cursor-pointer" onClick={() => { props.handleToggleModal2(); }}>#101</td>
                        <td className="border border-gray-300 px-4 py-2">100</td>
                        <td className="border border-gray-300 px-4 py-2">20000Tn</td>
                        <td className="border border-gray-300 px-4 py-2">22/18/2024</td>
                        <td className="border border-gray-300 px-4 py-2">22/18/2024</td>
                        <td className="border border-gray-300 px-4 py-2">Brazilian</td>
                        <td className="border border-gray-300 px-4 py-2">2Tn</td>
                        <td className="border border-gray-300 px-4 py-2">2Tn</td>
                        <td className="border border-gray-300 px-4 py-2">60%</td>
                        <td className="border border-gray-300 px-4 py-2">A</td>
                        <td className="border border-gray-300 px-4 py-2">100 Tn</td>
                    </tr> */}

                        {props.tableData && props.tableData?.map((row, index) => (
                            <tr key={index}>
                                <td className="border border-gray-300 px-4 py-2">{row.orderId}</td>
                                <td className="border border-gray-300 px-4 py-2 text-green-400 hover:cursor-pointer" onClick={() => { props.handleCowsList(row.batch); props.handleToggleModal2(); }}>{row.batch}</td>
                                <td className="border border-gray-300 px-4 py-2">{row.numberOfCowOrPieces}</td>
                                <td className="border border-gray-300 px-4 py-2">{row.startDate}</td>
                                <td className="border border-gray-300 px-4 py-2">{row.endDate}</td>
                                <td className="border border-gray-300 px-4 py-2">{row.typeOfCows}</td>
                                <td className="border border-gray-300 px-4 py-2">{row.waste}</td>
                                <td className="border border-gray-300 px-4 py-2">{row.miscarage}</td>
                                <td className="border border-gray-300 px-4 py-2">{row.orderType}</td>
                                <td className="border border-gray-300 px-4 py-2">{row.customer}</td>
                                <td className="border border-gray-300 px-4 py-2">{row.totalWeight}</td>
                            </tr>
                         ))}
                </tbody>
            </table>
        </div>
    )
}

export default HorizonTable;