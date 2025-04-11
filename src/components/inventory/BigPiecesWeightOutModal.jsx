// import { useState } from "react";
// import { SERVER_URL } from "../../MetaData";

// const BigPiecesWeightOutModal = (props) => {

//     const [tempWeight, setTempWeight] = useState("");

//     const handleWeightOutSubmit = async (piece) => {
//         // const reqBody = {
//         //     "pieceId": piece.pieceNumber,
//         //     "weight": tempWeight,
//         //     "TechId": piece.techDevice,
//         //     "status": piece.status === "Cutting" ? "2" : "1",
//         //     "MachId": "1"
//         // };

//         const response = await fetch(SERVER_URL + `/api/Devices/ScanForDevice3?pieceId=${piece.pieceNumber}&weight=${tempWeight}&TechId=${piece.techDevice}&status=${piece.status === "Cutting" ? "2" : "1"}&MachId=${1}`, {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//             // body: JSON.stringify(reqBody)
//         });

//         if (!response.ok) {
//             // console.log(response);
//             alert("Please enter a valid weight.");
//             return;
//         }

//         setTempWeight("");
//         alert("Weight set Successfully.");
//     };

//     const handleSearchKeyDown = (event, piece) => {
//         if (event.key === 'Enter') {
//             if (tempWeight) {
//                 handleWeightOutSubmit(piece);
//             }
//             else {
//                 alert("Please enter a valid weight.");
//             }
//         }
//     };

//     return (
//         <>
//             <div id="modal" className="flex items-center justify-center h-screen w-screen fixed inset-0 bg-black/50 overflow-auto z-20">
//                 <div className="bg-white max-w-xl w-full h-96 rounded-md">
//                     <div className="p-3 flex items-center justify-between">
//                         <h3 className="font-semibold text-xl text-[#043912]">Set Pieces Weight Out...</h3>
//                         <span className="modal-close cursor-pointer" onClick={props.handleToggleModal}>×</span>
//                     </div>

//                     <div className="m-5 h-72 overflow-auto space-y-5">
//                         {props.pieces.map((piece, index) => (
//                             <div key={index}>
//                                 <div className="px-3 text-center border border-green-500 bg-green-50 rounded-md">
//                                     <div className="flex justify-between">
//                                         <p className="text-[#043912]">Piece ID: {piece.pieceNumber}</p>
//                                         <p>-</p>
//                                         <p className="text-[#043912]">Type: {piece.pieceType}</p>
//                                         <p>-</p>
//                                         <p className="text-[#043912]">Weight: {piece.weight} KG</p>
//                                     </div>
//                                     <div className="flex justify-between">
//                                         <p className="text-[#043912]">Tech: {piece.techDevice}</p>
//                                         <p>-</p>
//                                         <p className="text-[#043912]">Status: {piece.status}</p>
//                                         <p>-</p>
//                                         <p className="text-[#043912]">Batch: {piece.batchNumber}</p>
//                                     </div>
//                                     <div className="flex justify-between">
//                                         <p className="text-[#043912]">Order: {piece.orderNumber}</p>
//                                         <p>-</p>
//                                         <p className="text-[#043912]">Store: {piece.store}</p>
//                                         <p>-</p>
//                                         <p className="text-[#043912]">Date: {piece.create_At_Divece2}</p>
//                                     </div>
//                                 </div>

//                                 <div className="flex items-center">
//                                     <input className="pl-10 pr-4 py-2 border border-green-500 rounded-lg w-full" type="text" placeholder="Input Piece Weight Out and press 'Enter'" onChange={(e) => { setTempWeight(e.target.value); }} onKeyDown={(e) => { handleSearchKeyDown(e, piece); }} />
//                                     <p className="ml-2">KG</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default BigPiecesWeightOutModal;





import { useEffect, useState } from "react";
import { SERVER_URL } from "../../MetaData";

const BigPiecesWeightOutModal = (props) => {

    const [tempWeight, setTempWeight] = useState("");

    const handleWeightOutSubmit = async (piece) => {
        // const reqBody = {
        //     "pieceId": piece.pieceNumber,
        //     "weight": tempWeight,
        //     "TechId": piece.techDevice,
        //     "status": piece.status === "Cutting" ? "2" : "1",
        //     "MachId": "1"
        // };

        const response = await fetch(SERVER_URL + `/api/Devices/ScanForDevice3?pieceId=${piece.pieceNumber}&weight=${tempWeight}&TechId=${piece.techDevice}&status=${piece.status === "Cutting" ? "2" : "1"}&MachId=${1}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            }
            // body: JSON.stringify(reqBody)
        });

        if (!response.ok) {
            // console.log(response);
            alert("Please enter a valid weight.");
            return;
        }

        setTempWeight("");
        alert("Weight set Successfully.");
    };

    const handleSearchKeyDown = (event, piece) => {
        if (event.key === 'Enter') {
            if (tempWeight) {
                handleWeightOutSubmit(piece);
            }
            else {
                alert("Please enter a valid weight.");
            }
        }
    };

    const [userValid, setUserValid] = useState(false);

    const [newOrderForm, setNewOrderForm] = useState({
        password: ""
    });

    const [createOrderValid, setCreateOrderValid] = useState("");
    const isCreateOrderValid = () => {
        if (newOrderForm.password === "") {
            setCreateOrderValid("All fields are required.");
            return false;
        }

        setCreateOrderValid("valid");
        return true;
    };

    useEffect(() => {
        isCreateOrderValid();
    }, [newOrderForm]);

    if (!userValid) {
        return (
            <>
                <div id="modal" className="flex items-center justify-center h-screen w-screen fixed inset-0 bg-black/50 overflow-auto z-20">
                    <div className="bg-white max-w-xl w-full h-96 rounded-md">
                        <div className="p-3 flex items-center justify-between">
                            <h3 className="font-semibold text-xl text-[#043912]">Set Pieces Weight Out...</h3>
                            <span className="modal-close cursor-pointer" onClick={props.handleToggleModal}>×</span>
                        </div>

                        <form className="m-5 mx-24" onSubmit={(e) => { e.preventDefault(); newOrderForm.password === "0000" ? setUserValid(true) : alert("Invalid Password!") }}>
                            <div className="flex justify-between mt-3">
                                <label className="mr-2 text-[#043912] font-medium text-lg">Password</label>
                                <input className="border-2 w-7/12 p-1 rounded-lg" type="password" onChange={(e) => { setNewOrderForm({ ...newOrderForm, password: e.target.value }) }} />
                            </div>

                            <div className="mt-3 py-3 flex items-center justify-center">
                                <button type="submit" className="text-sm text-white bg-[#73C088] rounded-md px-4 py-1" disabled={createOrderValid !== "valid"}>Enter</button>
                            </div>
                        </form>
                        <p className="text-red-600 m-2">{createOrderValid !== "valid" && createOrderValid}</p>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div id="modal" className="flex items-center justify-center h-screen w-screen fixed inset-0 bg-black/50 overflow-auto z-20">
                <div className="bg-white max-w-xl w-full h-96 rounded-md">
                    <div className="p-3 flex items-center justify-between">
                        <h3 className="font-semibold text-xl text-[#043912]">Set Pieces Weight Out...</h3>
                        <span className="modal-close cursor-pointer" onClick={props.handleToggleModal}>×</span>
                    </div>

                    <div className="m-5 h-72 overflow-auto space-y-5">
                        {props.pieces.map((piece, index) => (
                            <div key={index}>
                                <div className="px-3 text-center border border-green-500 bg-green-50 rounded-md">
                                    <div className="flex justify-between">
                                        <p className="text-[#043912]">Piece ID: {piece.pieceNumber}</p>
                                        <p>-</p>
                                        <p className="text-[#043912]">Type: {piece.pieceType}</p>
                                        <p>-</p>
                                        <p className="text-[#043912]">Weight: {piece.weight} KG</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-[#043912]">Tech: {piece.techDevice}</p>
                                        <p>-</p>
                                        <p className="text-[#043912]">Status: {piece.status}</p>
                                        <p>-</p>
                                        <p className="text-[#043912]">Batch: {piece.batchNumber}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-[#043912]">Order: {piece.orderNumber}</p>
                                        <p>-</p>
                                        <p className="text-[#043912]">Store: {piece.store}</p>
                                        <p>-</p>
                                        <p className="text-[#043912]">Date: {piece.create_At_Divece2}</p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <input className="pl-10 pr-4 py-2 border border-green-500 rounded-lg w-full" type="text" placeholder="Input Piece Weight Out and press 'Enter'" onChange={(e) => { setTempWeight(e.target.value); }} onKeyDown={(e) => { handleSearchKeyDown(e, piece); }} />
                                    <p className="ml-2">KG</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BigPiecesWeightOutModal;