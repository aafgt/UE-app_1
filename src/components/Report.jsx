import { useEffect, useState } from "react";
import { SERVER_URL } from "../MetaData";
import DatePickerCard from "./horizon/DatePickerCard";

const Report = () => {

    const [graphDate, setGraphDate] = useState("");
    const [date, setDate] = useState("");

    const [selectedCow, setSelectedCow] = useState(null);

    const [data, setData] = useState([]);
    const fetchData = async () => {
        const today = new Date();
        const month = today.getMonth() + 1; // Months are zero-based, so add 1
        const day = today.getDate();
        const year = today.getFullYear();
        const formattedDate = `${month}-${day}-${year}`;

        // if (date === "") {
        //     setDate(formattedDate);
        // }

        const response = await fetch(SERVER_URL + `/api/Front/GetCowsWithPiecesByDate?date=${date ? date : formattedDate}`);

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            alert(`${await response.text()}`);
            setData([]);
            throw new Error(message);
        }

        const data = await response.json();
        setData(data);
    };

    useEffect(() => {
        fetchData();
    }, [date]);

    const exportToCSV = () => {
        // Flatten the data
        const flattenedData = data?.map(item => {
            const { pieces, ...rest } = item;
            return pieces.map(piece => ({ ...rest, ...piece }));
        }).flat();

        // Define the fields
        // const fields = [
        //     'cowsId',
        //     'cow_Weight',
        //     'cowType',
        //     'tech',
        //     'doctor',
        //     'batch',
        //     'order',
        //     'create_At_Divece1',
        //     'pieceId',
        //     'pieceWeight_In',
        //     'pieceWeight_Out',
        //     'pieceType',
        //     'status'
        // ];
        const fields = Object.keys(flattenedData[0]);

        // Convert the data to CSV format
        const csv = [
            '\uFEFF', // Add BOM to ensure correct encoding
            fields.join(','), // Add header row
            ...flattenedData.map(row => fields.map(field => JSON.stringify(row[field], replacer)).join(',')) // Add data rows
        ].join('\r\n');

        // Create a Blob and download it as a CSV file
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `report - ${handleReportDate()}.csv`;
        link.click();
    };

    function replacer(key, value) {
        return value === null ? '' : value;
    }

    const handleReportDate = () => {
        if (date) {
            return date;
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

    return (
        <div className="mx-3">
            <div className="flex justify-between mt-5">
                <h1 className="text-2xl font-semibold mb-3">Report</h1>

                {!selectedCow && <div className="mb-5">
                    <DatePickerCard setDate={setDate} setGraphDate={setGraphDate} />
                </div>}
            </div>

            {!selectedCow && <div className="flex justify-between mb-5">
                <div className="flex gap-5">
                    <h2>Slaughterd Cows: <span className="text-xl">{data?.length}</span></h2>
                    <h2>Pieces: <span className="text-xl">{data?.map(obj => obj.pieces).flat().length}</span></h2>
                </div>
                <button className="mx-2 px-3 py-1 rounded-md border border-green-500 text-[#043912] font-semibold bg-white" onClick={exportToCSV}>Export To Excel</button>
            </div>}

            {
                selectedCow == null &&
                <div className="space-y-3">
                    {data?.map((cow, index) => (
                        <div key={index} className="grid grid-cols-2 space-x-3">
                            <button className={`border-2 px-5 py-2 rounded-md shadow-md text-xl bg-white text-green-600 hover:bg-[#76C18B] hover:text-white`} onClick={() => { setSelectedCow(cow); }}>Cow ID: <span className="text-2xl">{cow.cowsId}</span></button>
                            <div className="bg-white rounded-md shadow-md p-5">
                                <p>Weight: <span className="text-xl">{cow.cow_Weight} KG</span></p>
                                <p>Type: <span className="text-xl">{cow.cowType}</span></p>
                                <p>Tech: <span className="text-xl">{cow.tech}</span></p>
                                <p>Doctor: <span className="text-xl">{cow.doctor}</span></p>
                                <p>Batch Code: <span className="text-xl">{cow.batch}</span></p>
                                <p>Order Code: <span className="text-xl">{cow.order}</span></p>
                                <p>Date: <span className="text-xl">{cow.create_At_Divece1}</span></p>
                            </div>
                        </div>
                    ))}
                </div>
            }

            {
                selectedCow &&
                <div>
                    {selectedCow && <div className="ml-5 my-5 text-3xl hover:cursor-pointer w-fit" onClick={() => { setSelectedCow(null); }}><i className="bi bi-arrow-left"></i></div>}

                    <div className="bg-[#76C18B] text-white w-fit rounded-md shadow-md p-5 mb-5">
                        <h6>Cow ID: <span className="text-xl">{selectedCow?.cowsId}</span></h6>
                        <p>Weight: <span className="text-xl">{selectedCow?.cow_Weight} KG</span></p>
                        <p>Type: <span className="text-xl">{selectedCow?.cowType}</span></p>
                        <p>Tech: <span className="text-xl">{selectedCow?.tech}</span></p>
                        <p>Doctor: <span className="text-xl">{selectedCow?.doctor}</span></p>
                        <p>Batch Code: <span className="text-xl">{selectedCow?.batch}</span></p>
                        <p>Order Code: <span className="text-xl">{selectedCow?.order}</span></p>
                        <p>Date: <span className="text-xl">{selectedCow?.create_At_Divece1}</span></p>
                    </div>

                    <div className="flex justify-around">
                        {selectedCow?.pieces?.map((piece, index) => (
                            <div key={index} className="">
                                <div className="bg-white rounded-md shadow-md mb-5 w-fit p-5">
                                    <p>Piece ID: <span className="text-xl">{piece.pieceId}</span></p>
                                    <p>Weight In: <span className="text-xl">{piece.pieceWeight_In} KG</span></p>
                                    <p>Weight Out: <span className="text-xl">{piece.pieceWeight_Out} KG</span></p>
                                    <p>Type: <span className="text-xl">{piece.pieceType}</span></p>
                                    <p>Status: <span className="text-xl">{piece.status}</span></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}

export default Report;