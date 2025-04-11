import { useEffect, useState } from "react";
import { SERVER_URL } from "../MetaData";
import DatePickerCard from "./horizon/DatePickerCard";
import MetricCard from "./horizon/MetricCard";
import CowCard from "./report/CowCard";
import PieceCard from "./report/PieceCard";

const Report = () => {

    const [graphDate, setGraphDate] = useState("");
    const [date, setDate] = useState("");

    const [lastPiece, setLastPiece] = useState(null);

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
            // alert(`${await response.text()}`);
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

    const handleLastPieceDelete = async () => {
        const response = await fetch(SERVER_URL + "/api/Front/delete-last-piece", {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            alert(`${await response.text()}`);
            return;
        }

        alert("Last Piece deleted Successfully.");
    };


    const [totalPiecesWeight, setTotalPiecesWeight] = useState("");
    const [SlaughterdCowsWeight, setSlaughterdCowsWeight] = useState("");

    useEffect(() => {
        setTotalPiecesWeight(data?.map(obj => obj.pieces).flat().reduce((sum, piece) => {
            return sum + piece.pieceWeight_In;
        }, 0).toFixed(2));

        setSlaughterdCowsWeight(data?.reduce((sum, obj) => {
            return sum + obj.cow_Weight;
        }, 0).toFixed(2));

        setLastPiece(data?.map(cow => cow.pieces).flat().slice(-1)[0]);
    }, [data]);

    const [deleteLastPieceConfirmation, setDeleteLastPieceConfirmation] = useState(false);

    const [devicesLastPieceDate, setDevicesLastPieceDate] = useState("");
    const getDevicesLastPieceDate = async () => {
        const response = await fetch(SERVER_URL + "/api/Devices/GetLastPiece");

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }

        const data = await response.json();
        if (data?.statusCode === 200) {
            // Regular expression to match the date in the format DD/MM/YY
            const datePattern = /\d{2}\/\d{2}\/\d{2}/;

            // Extract the date
            const match = data?.message.match(datePattern);
            if (match) {
                // console.log("Date found:", match[0]);
                // const today = new Date(match[0]);
                // const month = today.getMonth() + 1; // Months are zero-based, so add 1
                // const day = today.getDate();
                // const year = today.getFullYear();
                // const formattedDate = `${month}-${day}-${year}`;

                // const [dday, mmonth, yyear] = formattedDate.split('-');
                // const newFormattedDate = `${mmonth.padStart(2, '0')}-${dday.padStart(2, '0')}-${yyear}`;

                const [day, month, year] = match[0].split("/");
                const newFormattedDate = `${month.padStart(2, '0')}-${day.padStart(2, '0')}-${year.padStart(4, '20')}`;

                setDevicesLastPieceDate(newFormattedDate);
            } else {
                // console.log("No date found.");
                setDevicesLastPieceDate("");
            }
        }
    };

    const getDateNowInDevicesLastPieceDateF = () => {
        const today = new Date();
        const month = today.getMonth() + 1; // Months are zero-based, so add 1
        const day = today.getDate();
        const year = today.getFullYear();
        const formattedDate = `${month}-${day}-${year}`;

        const [dday, mmonth, yyear] = formattedDate.split('-');
        const newFormattedDate = `${dday.padStart(2, '0')}-${mmonth.padStart(2, '0')}-${yyear}`;

        return newFormattedDate;
    };

    return (
        <div className="mx-3">
            <div className="flex justify-between mt-5">
                <h1 className="text-2xl font-semibold mb-3">Report</h1>

                {!selectedCow && <div className="mb-5">
                    <DatePickerCard setDate={setDate} setGraphDate={setGraphDate} />
                </div>}
            </div>

            {/* {!selectedCow && <div className="flex justify-between mb-5">
                <div className="flex gap-5">
                    <h2>Slaughterd Cows: <span className="text-xl">{data?.length}</span></h2>
                    <h2>Pieces: <span className="text-xl">{data?.map(obj => obj.pieces).flat().length}</span></h2>
                    <h2>Total Pieces Weight: <span className="text-xl">{data?.map(obj => obj.pieces).flat().reduce((sum, piece) => {
                        return sum + piece.pieceWeight_In;
                    }, 0).toFixed(2)}</span> KG</h2>
                </div>
                <button className="mx-2 px-3 py-1 rounded-md border border-green-500 text-[#043912] font-semibold bg-white" onClick={exportToCSV}>Export To Excel</button>
            </div>} */}

            {!selectedCow && <div className="flex justify-between mb-5">
                <div className="flex gap-5 w-2/3">
                    <MetricCard title={"Slaughtered Cows"} value={data?.length} arrow={"up"} icon={<div className="text-orange-400 text-2xl"><i className="bi bi-trophy-fill"></i></div>} />
                    <MetricCard title={"Pieces"} value={data?.map(obj => obj.pieces).flat().length} arrow={"up"} icon={<div className="text-orange-400 text-2xl"><i className="bi bi-trophy-fill"></i></div>} />
                    <MetricCard title={"Total Pieces Weight"} value={totalPiecesWeight + " KG"} arrow={"up"} icon={<div className="text-orange-400 text-2xl"><i className="bi bi-trophy-fill"></i></div>} />
                </div>
                <div className="flex flex-col justify-around">
                    <button className="mx-2 px-3 py-1 rounded-md border border-green-500 text-[#043912] font-semibold bg-white h-fit" onClick={exportToCSV}>Export To Excel</button>
                    <button className="mx-2 px-3 py-1 rounded-md border border-green-500 text-white font-semibold bg-red-500 h-fit" onClick={() => { getDevicesLastPieceDate(); setDeleteLastPieceConfirmation(prev => !prev); }}>Delete Last Piece</button>
                </div>
            </div>}

            {!selectedCow && <div className="mb-5">
                <div className="flex gap-5 w-2/3">
                    <MetricCard title={"Weight Of Slaughtered Cows"} value={SlaughterdCowsWeight + " KG"} icon={<div className="text-orange-400 text-2xl"><i className="bi bi-trophy-fill"></i></div>} />
                    <MetricCard title={"Total Waste"} value={(SlaughterdCowsWeight - totalPiecesWeight).toFixed(2) + " KG"} arrow={"down"} icon={<div className="text-red-400 text-2xl"><i className="bi bi-handbag-fill"></i></div>} />
                </div>
            </div>}

            {/* {
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
            } */}

            {
                selectedCow == null &&
                (data.length > 0 ?
                    <div className="grid grid-cols-4 gap-5 justify-items-center mb-3">
                        {data?.map((cow, index) => (
                            <div key={index} onClick={() => { setSelectedCow(cow); }}>
                                <CowCard cow={cow} />
                            </div>
                        ))}
                    </div>
                    :
                    <p>No cows Slaughtered</p>)
            }

            {
                selectedCow &&
                <div>
                    {selectedCow && <div className="ml-5 my-5 text-3xl hover:cursor-pointer w-fit" onClick={() => { setSelectedCow(null); }}><i className="bi bi-arrow-left"></i></div>}

                    {/* <div className="bg-[#76C18B] text-white w-fit rounded-md shadow-md p-5 mb-5">
                        <h6>Cow ID: <span className="text-xl">{selectedCow?.cowsId}</span></h6>
                        <p>Weight: <span className="text-xl">{selectedCow?.cow_Weight} KG</span></p>
                        <p>Type: <span className="text-xl">{selectedCow?.cowType}</span></p>
                        <p>Tech: <span className="text-xl">{selectedCow?.tech}</span></p>
                        <p>Doctor: <span className="text-xl">{selectedCow?.doctor}</span></p>
                        <p>Batch Code: <span className="text-xl">{selectedCow?.batch}</span></p>
                        <p>Order Code: <span className="text-xl">{selectedCow?.order}</span></p>
                        <p>Date: <span className="text-xl">{selectedCow?.create_At_Divece1}</span></p>
                    </div> */}
                    <div className="mb-5">
                        <CowCard cow={selectedCow} />
                    </div>

                    <div className="flex justify-around mb-3">
                        {selectedCow?.pieces?.map((piece, index) => (
                            <div key={index} className="relative">
                                {/* <div className="bg-white rounded-md shadow-md mb-5 w-fit p-5">
                                    <p>Piece ID: <span className="text-xl">{piece.pieceId}</span></p>
                                    <p>Weight In: <span className="text-xl">{piece.pieceWeight_In} KG</span></p>
                                    <p>Weight Out: <span className="text-xl">{piece.pieceWeight_Out} KG</span></p>
                                    <p>Type: <span className="text-xl">{piece.pieceType}</span></p>
                                    <p>Status: <span className="text-xl">{piece.status}</span></p>

                                    <div className="flex justify-end">
                                        <button type="button" onClick={() => { handlePieceDelete(selectedCow?.order, selectedCow?.batch, piece.pieceId); }}><i className="bi bi-trash text-red-600"></i></button>
                                    </div>
                                </div> */}

                                <PieceCard piece={piece} />
                                {/* {piece.pieceId === lastPiece.pieceId && <div className="flex justify-end absolute top-2 right-2">
                                    <button type="button" onClick={() => { handlePieceDelete(selectedCow?.order, selectedCow?.batch, piece.pieceId); }}><i className="bi bi-trash text-red-600"></i></button>
                                </div>} */}
                            </div>
                        ))}
                    </div>
                </div>
            }

            {deleteLastPieceConfirmation &&
                <div className="flex items-center justify-center h-screen w-screen fixed inset-0 bg-black/50 overflow-auto">
                    <div className="bg-white max-w-xl w-full rounded-md overflow-y-auto h-fit">
                        <div className="p-3 flex items-center justify-between">
                            <h3 className="font-semibold text-xl text-green-600">Are you sure you want to delete the last piece?</h3>
                            <span className="modal-close cursor-pointer" onClick={() => { setDeleteLastPieceConfirmation(prev => !prev); }}>×</span>
                        </div>

                        <div className="flex justify-center items-center">
                            {(lastPiece && (date === devicesLastPieceDate || (!date && (getDateNowInDevicesLastPieceDateF() === devicesLastPieceDate)))) ? <PieceCard piece={lastPiece} /> : <p>Last Piece was at {devicesLastPieceDate}. Please go to this date.</p>}
                        </div>

                        <div className="p-3 flex items-center justify-end">
                            <div>
                                <button className="mx-2 px-3 py-1 rounded-md border border-green-500 text-white font-semibold bg-red-500 h-fit" onClick={handleLastPieceDelete} disabled={!(lastPiece && (date === devicesLastPieceDate || (!date && (getDateNowInDevicesLastPieceDateF() === devicesLastPieceDate))))}>Delete Last Piece</button>
                                <button className="modal-close text-sm text-gray-400 border rounded-md px-4 py-2" onClick={() => { setDeleteLastPieceConfirmation(prev => !prev); }}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Report;