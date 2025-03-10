import { useEffect, useState } from "react";
import { SERVER_URL } from "../../MetaData";
import * as XLSX from 'xlsx';

const InventoryTable = (props) => {

    const exportToExcel = () => {
        // Create a workbook and a worksheet
        const wsData = [];

        // Add the headers (the first row)
        const headers = [
            'Store', 'زند شمال', 'فخده شمال', 'زند يمين', 'فخده يمين',
            ...CutNames.names, // Add dynamic headers (from CutNames.names)
            'Total Pieces', 'Height Capacity', 'Total Weight'
        ];
        wsData.push(headers);

        // Loop through the table data and extract row data
        props.tableData.forEach((row) => {
            const rowData = [
                row.storeName,
                getCountOfPieceTypeInStorePieces(row.pieces, "زند شمال"),
                getCountOfPieceTypeInStorePieces(row.pieces, "فخده شمال"),
                getCountOfPieceTypeInStorePieces(row.pieces, "زند يمين"),
                getCountOfPieceTypeInStorePieces(row.pieces, "فخده يمين"),
                ...CutNames.names.map((cutName) => getCountOfPieceTypeInStorePieces(row.pieces, cutName)),
                row.totalPieces,
                row.heightCapacity,
                row.totalWeight
            ];
            wsData.push(rowData);
        });

        // Create a worksheet from the data
        const ws = XLSX.utils.aoa_to_sheet(wsData);

        // Create a new workbook with the worksheet
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Inventory Data');

        // Export the workbook to Excel
        XLSX.writeFile(wb, `inventory - ${handleReportDate()}.xlsx`);
    };

    const exportToCSV = () => {
        const fields = Object.keys(props.tableData[0]);

        // Convert the data to CSV format
        const csv = [
            '\uFEFF', // Add BOM to ensure correct encoding
            fields.join(','), // Add header row
            ...props.tableData.map(row => fields.map(field => JSON.stringify(row[field], replacer)).join(',')) // Add data rows
        ].join('\r\n');

        // Create a Blob and download it as a CSV file
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `inventory - ${handleReportDate()}.csv`;
        link.click();
    };

    function replacer(key, value) {
        return value === null ? '' : value;
    }

    const handleReportDate = () => {
        if (props.date) {
            return props.date;
        }
        else {
            const today = new Date();
            const month = today.getMonth() + 1; // Months are zero-based, so add 1
            const day = today.getDate();
            const year = today.getFullYear();
            const formattedDate = `${month}-${day}-${year}`;

            return formattedDate;
        }
    }

    const getCountOfPieceTypeInStorePieces = (storePieces, pieceType) => {
        return storePieces.reduce((sum, piece) => {
            if (piece.pieceType === pieceType) {
                return sum + 1;
            }
            return sum;
        }, 0);
    };

    const [CutNames, setCutNames] = useState([]);
    const fetchCutNames = async () => {
        const response = await fetch(SERVER_URL + "/api/Front/GetAllCutNames");

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            alert(`${await response.text()}`);
            setCutNames([]);
            throw new Error(message);
        }

        const data = await response.json();
        setCutNames(data);
    };

    useEffect(() => {
        fetchCutNames();
    }, []);

    return (
        <div className="bg-white rounded-lg shadow-md m-3 overflow-x-auto max-w-[77rem] mx-auto">
            <div className="flex justify-end my-2">
                <button className="mx-2 px-3 py-1 rounded-md border border-green-500 text-[#043912] font-semibold bg-white" onClick={exportToExcel}>Export To Excel</button>
            </div>

            <div className="overflow-x-auto h-[30rem] max-w-full">
                <table className="w-full min-w-0 text-center table-fixed">
                    <thead className="">
                        <tr>
                            <th className="bg-gray-100 text-green-700 z-20 sticky top-0 left-0 border border-gray-300 border-b-4 px-4 py-6 w-20">Store</th>
                            <th className="bg-gray-100 text-green-700 z-10 sticky top-0 border border-gray-300 border-b-4 px-4 py-6 w-20">زند شمال</th>
                            <th className="bg-gray-100 text-green-700 z-10 sticky top-0 border border-gray-300 border-b-4 px-4 py-6 w-20">فخده شمال</th>
                            <th className="bg-gray-100 text-green-700 z-10 sticky top-0 border border-gray-300 border-b-4 px-4 py-6 w-20">زند يمين</th>
                            <th className="bg-gray-100 text-green-700 z-10 sticky top-0 border border-gray-300 border-b-4 px-4 py-6 w-20">فخده يمين</th>
                            {CutNames.names?.map((cutName, index) => (
                                <th key={index} className="bg-gray-100 text-green-700 z-10 sticky top-0 border border-gray-300 border-b-4 px-4 py-6 w-20">{cutName}</th>
                            ))}
                            <th className="bg-gray-100 text-green-700 z-10 sticky top-0 border border-gray-300 border-b-4 px-4 py-6 w-24">Total Pieces</th>
                            <th className="bg-gray-100 text-green-700 z-10 sticky top-0 border border-gray-300 border-b-4 px-4 py-6 w-24">Height Capacity</th>
                            <th className="bg-gray-100 text-green-700 z-10 sticky top-0 border border-gray-300 border-b-4 px-4 py-6 w-36">Total Weight</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.tableData && props.tableData?.map((row, index) => (
                            <tr key={index}>
                                <td className="sticky left-0 border border-gray-300 px-4 py-2 bg-green-50">{row.storeName}</td>
                                <td className="border border-gray-300 px-4 py-2">{getCountOfPieceTypeInStorePieces(row.pieces, "زند شمال")}</td>
                                <td className="border border-gray-300 px-4 py-2">{getCountOfPieceTypeInStorePieces(row.pieces, "فخده شمال")}</td>
                                <td className="border border-gray-300 px-4 py-2">{getCountOfPieceTypeInStorePieces(row.pieces, "زند يمين")}</td>
                                <td className="border border-gray-300 px-4 py-2">{getCountOfPieceTypeInStorePieces(row.pieces, "فخده يمين")}</td>
                                {CutNames.names?.map((cutName, index) => (
                                    <td key={index} className="border border-gray-300 px-4 py-2">{getCountOfPieceTypeInStorePieces(row.pieces, cutName)}</td>
                                ))}
                                <td className="border border-gray-300 px-4 py-2 bg-green-50">{row.totalPieces}</td>
                                <td className="border border-gray-300 px-4 py-2 bg-green-50">{row.heightCapacity}</td>
                                <td className="border border-gray-300 px-4 py-2 bg-green-50">{row.totalWeight} KG</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default InventoryTable;