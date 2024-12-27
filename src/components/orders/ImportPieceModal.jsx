import { useEffect, useState } from "react";

import { SERVER_URL } from "../../MetaData";

const ImportPieceModal = ({ cows, handleToggleModal, handleToggleModal22, batchCode, createOrderRes, handleSelectedCowType, handleSelectedCowsListParent }) => {

    const [selectedPieceType, setSelectedPieceType] = useState("");
    const [piecesTypesList, setPiecesTypesList] = useState([]);

    const [selectedPiecesList, setSelectedPiecesList] = useState([]);

    const [piecesList, setPiecesList] = useState([]);

    const isPieceInList = (piece) => {
        return selectedPiecesList.includes(piece);
    };

    const handleSelectedPiecesList = (piece) => {
        if (selectedPiecesList.includes(piece)) {
            setSelectedPiecesList(prevItems => prevItems.filter(item => item !== piece));
        }
        else {
            setSelectedPiecesList(prevItems => [...prevItems, piece]);
        }
    };

    const getCowPieces = async () => {
        const response = await fetch(SERVER_URL+"/api/Front/GetCowsPiecesIds");

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }

        const data = await response.json();
        // setCowPiecesList(data.piecesIds.map(piece => ({"pieceId":piece})));
        setPiecesTypesList(data.map(item => ({...item, piecesIds: item.piecesIds.map(piece => ({"pieceId":piece}))})));

        // setCowPiecesList(data.piecesIds);
    }

    useEffect(() => {
        getCowPieces();
    }, []);
    
    const handleAdd = () => {
        handleSelectedCowType(selectedPieceType);

        handleSelectedCowsListParent(selectedPiecesList, selectedPieceType);

        handleToggleModal22();
    };

    return (
        <div id="modal" className="flex items-center justify-center h-screen w-screen fixed inset-0 bg-black/50">
            {/* <div className="bg-white max-w-xl w-full rounded-md absolute top-1/2 -translate-y-1/2 translate-x-1/2"> */}
            <div className="bg-white max-w-xl w-full rounded-md">
                <div className="p-3 flex items-center justify-between">
                    <h3 className="font-semibold text-xl text-green-600">Number Of Pieces</h3>
                    <span className="modal-close cursor-pointer" onClick={handleToggleModal22}>×</span>
                </div>

                <div className="grid grid-cols-5 gap-3 mx-3 border-b-4 pb-3">

                    {piecesTypesList && piecesTypesList.map((pieceType, index) => (
                        <button key={index} type="button" className={`border-2 px-2 py-2 text-green-600 rounded-md hover:bg-[#76C18B] hover:text-white ${selectedPieceType === pieceType.typeName ? "bg-[#76C18B] text-white" : ""}`} onClick={() => {setSelectedPieceType(pieceType.typeName); setPiecesList(pieceType.piecesIds);}}>{pieceType.typeName}</button>
                    ))}

                    {/* <button className={`border-2 px-2 py-2 text-green-600 rounded-md hover:bg-[#76C18B] hover:text-white ${selectedCowType === "Type 1" ? "bg-[#76C18B] text-white" : ""}`} onClick={() => setSelectedCowType("Type 1")}>Type 1</button>
                    <button className={`border-2 px-2 py-2 text-green-600 rounded-md hover:bg-[#76C18B] hover:text-white ${selectedCowType === "Type 2" ? "bg-[#76C18B] text-white" : ""}`} onClick={() => setSelectedCowType("Type 2")}>Type 2</button>
                    <button className={`border-2 px-2 py-2 text-green-600 rounded-md hover:bg-[#76C18B] hover:text-white ${selectedCowType === "Type 3" ? "bg-[#76C18B] text-white" : ""}`} onClick={() => setSelectedCowType("Type 3")}>Type 3</button> */}
                </div>

                <div className="p-3">
                    <div className="grid grid-cols-4 gap-5">
                        {/* {cows.map((cow, index) => (
                            <button key={index} className={`border-2 px-2 py-2 text-green-600 rounded-md hover:bg-[#76C18B] hover:text-white ${isCowInList(cow) ? "bg-[#76C18B] text-white" : ""}`} onClick={() => { handleSelectedCowsList(cow) }}>{cow}</button>
                        ))} */}
                        {piecesList && piecesList.map((piece, index) => (
                            <button key={index} type="button" className={`border-2 px-2 py-2 text-green-600 rounded-md hover:bg-[#76C18B] hover:text-white ${isPieceInList(piece) ? "bg-[#76C18B] text-white" : ""}`} onClick={() => { handleSelectedPiecesList(piece) }}>{piece.pieceId}</button>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center my-2">
                    <button type="button" className="text-white bg-[#73C088] rounded-md px-4 py-1" onClick={handleAdd}>Add</button>
                </div>

                {/* <div className="p-3 flex items-center justify-end">
                        <div>
                            <button className="text-sm text-white bg-blue-500 rounded-md px-4 py-2" onClick={handleToggleModal2}>Ok</button>
                            <button className="modal-close text-sm text-gray-400 border rounded-md px-4 py-2" onClick={handleToggleModal2}>Cancel</button>
                        </div>
                    </div> */}
            </div>
        </div>
    )
}

export default ImportPieceModal;