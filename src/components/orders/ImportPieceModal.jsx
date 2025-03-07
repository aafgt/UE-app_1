import { useEffect, useState } from "react";

import { SERVER_URL } from "../../MetaData";

const ImportPieceModal = ({ cows, handleToggleModal, handleToggleModal22, batchCode, createOrderRes, handleSelectedCowType, handleSelectedCowsListParent }) => {

    const [selectedPieceType, setSelectedPieceType] = useState("");
    const [piecesTypesList, setPiecesTypesList] = useState([]);

    const [selectedPiecesList, setSelectedPiecesList] = useState([]);

    const [piecesList, setPiecesList] = useState([]);

    const isPieceInList = (piece) => {
        // return selectedPiecesList.includes(piece);
        return selectedPiecesList.some(item => item.pieceId === piece.pieceId);
    };

    const handleSelectedPiecesList = (piece) => {
        // if (selectedPiecesList.includes(piece)) {
        if (selectedPiecesList.some(item => item.pieceId === piece.pieceId)) {
            // setSelectedPiecesList(prevItems => prevItems.filter(item => item !== piece));
            setSelectedPiecesList(prevItems => prevItems.filter(item => item.pieceId !== piece.pieceId));
        }
        else {
            setSelectedPiecesList(prevItems => [...prevItems, piece]);
        }
    };

    const getCowPieces = async () => {
        const response = await fetch(SERVER_URL + "/api/Front/GetCowsPiecesIds");

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }

        const data = await response.json();
        // setCowPiecesList(data.piecesIds.map(piece => ({"pieceId":piece})));
        setPiecesTypesList(data.map(item => ({ ...item, piecesIds: item.piecesIds.map(piece => ({ "pieceId": piece })) })));

        // setCowPiecesList(data.piecesIds);

        // setAllPiecesIds(piecesTypesList.reduce((acc, obj) => {
        //     return acc.concat(obj.piecesIds);
        // }, []));
    }

    useEffect(() => {
        getCowPieces();
    }, []);

    const handleAdd = () => {
        handleSelectedCowType(selectedPieceType);

        handleSelectedCowsListParent(selectedPiecesList, selectedPieceType);

        handleToggleModal22();
    };

    const [selectAllChecked, setSelectAllChecked] = useState(false);
    const handleSelectAllChange = () => {
        setSelectAllChecked(prevChecked => !prevChecked);
    };

    const [selectAllTypeChecked, setSelectAllTypeChecked] = useState(false);
    const handleSelectAllTypeChange = () => {
        setSelectAllTypeChecked(prevChecked => !prevChecked);
    };

    useEffect(() => {
        if (selectAllChecked) {
            setSelectedPieceType(piecesTypesList[0]?.typeName);
            setSelectedPiecesList(piecesTypesList.map(item => item.piecesIds).flat());
        }
        else {
            setSelectedPieceType("");
            setSelectedPiecesList([]);
        }
    }, [selectAllChecked]);


    // useEffect(() => {
    //     if (selectAllTypeChecked) {
    //         setSelectedPiecesList(prevItems => [
    //             ...new Set([
    //               ...prevItems, 
    //               ...piecesList.map(item => ({"pieceId": item.pieceId}))
    //             ])
    //           ]);
    //     }
    //     else {
    //         setSelectedPiecesList(prevItems => 
    //             prevItems.filter(item => !piecesList.some(piece => piece.pieceId === item.pieceId))
    //           );
    //     }
    // }, [selectAllTypeChecked]);
    // useEffect(() => {
    //     if (selectAllTypeChecked) {
    //         setSelectedPiecesList(prevItems => {
    //             // Create a new list of objects, ensuring that no duplicates are added
    //             const updatedList = [
    //                 ...new Set([
    //                     ...prevItems.map(item => item.pieceId),  // Extract pieceId from previous items to avoid duplicates
    //                     ...piecesList.map(item => item.pieceId)  // Map pieceIds from piecesList
    //                 ])
    //             ].map(pieceId => ({ pieceId })); // Convert pieceIds back into objects
    
    //             // Only update if the list actually changed
    //             if (updatedList.length !== prevItems.length || !updatedList.every((item, idx) => item.pieceId === prevItems[idx]?.pieceId)) {
    //                 return updatedList;
    //             }
    //             return prevItems; // No change, return previous list
    //         });
    //     } else {
    //         setSelectedPiecesList(prevItems => {
    //             const updatedList = prevItems.filter(item => !piecesList.some(piece => piece.pieceId === item.pieceId));
    
    //             // Only update if the list actually changed
    //             if (updatedList.length !== prevItems.length || !updatedList.every((item, idx) => item.pieceId === prevItems[idx]?.pieceId)) {
    //                 return updatedList;
    //             }
    //             return prevItems; // No change, return previous list
    //         });
    //     }
    // }, [selectAllTypeChecked]);
    useEffect(() => {
        if (selectAllTypeChecked) {
            // setSelectedPiecesList(piecesTypesList.map(item => item.typeName === selectedPieceType ? item.piecesIds : []).flat());
            setSelectedPiecesList(prevItems => [
                ...prevItems,  // Keep the previous items
                ...piecesTypesList
                    .map(item => item.typeName === selectedPieceType ? item.piecesIds : [])
                    .flat()  // Flatten the new piecesIds from selectedPieceType
            ]);
        } else {
            // remove from selectedPiecesList the pieces if the item.typeName === selectedPieceType
            setSelectedPiecesList(prevItems => {
                return prevItems.filter(item => {
                    // Only keep pieces that don't belong to the current selectedPieceType
                    return !piecesTypesList.some(pieceType => 
                        pieceType.typeName === selectedPieceType && pieceType.piecesIds.includes(item)
                    );
                });
            });
        }
    }, [selectAllTypeChecked]);
    
    

    // const [allPiecesIds, setAllPiecesIds] = useState([]);
    const [cowID, setCowID] = useState("");
    const addCowPiecesUsingCowID = async () => {

        const allPiecesIds = piecesTypesList.reduce((acc, obj) => {
            return acc.concat(obj.piecesIds);
        }, []);

        const response = await fetch(SERVER_URL + `/api/Front/GetPiecesByCowId?CowId=${cowID}`);

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            // alert(`${await response.text()}`);
            alert("Cow pieces ID is not available.");
            throw new Error(message);
        }

        const piecesToAdd = await response.json();

        piecesToAdd.map((piece) => {
            if (allPiecesIds.some(item => item.pieceId === piece.pieceId)) {
                handleSelectedPiecesList({ "pieceId": piece.pieceId });
            }
        });     
    };


    // const [isDragging, setIsDragging] = useState(false);
    // const [startPos, setStartPos] = useState(null);
    // const [selectionRect, setSelectionRect] = useState(null); // State for the selection rectangle

    // // Handle mouse down (drag start)
    // const handleMouseDown = (e) => {
    //     setIsDragging(true);
    //     setStartPos({ x: e.clientX, y: e.clientY });
    //     setSelectionRect(null); // Reset the selection rectangle
    // };

    // // Handle mouse move (dragging)
    // const handleMouseMove = (e) => {
    //     if (!isDragging || !startPos) return;

    //     // Find items that fall within the selected area based on mouse coordinates
    //     // const selected = [];
    //     const dragRect = {
    //         x1: Math.min(startPos.x, e.clientX),
    //         y1: Math.min(startPos.y, e.clientY),
    //         x2: Math.max(startPos.x, e.clientX),
    //         y2: Math.max(startPos.y, e.clientY),
    //     };
    //     setSelectionRect(dragRect); // Set the current rectangle for rendering

    //     piecesList.forEach((item, index) => {
    //         const itemElement = document.getElementById(`item-${index}`);
    //         const rect = itemElement.getBoundingClientRect();

    //         // if (
    //         //     rect.left >= dragRect.x1 && rect.right <= dragRect.x2 &&
    //         //     rect.top >= dragRect.y1 && rect.bottom <= dragRect.y2
    //         // ) {
    //         //     // selected.push(item);
    //         //     handleSelectedPiecesList(item);
    //         // }

    //         // Check if the item's bounding box intersects with the selection rectangle
    //         const isIntersecting = !(
    //             rect.right < dragRect.x1 ||   // Item is entirely to the left of the selection box
    //             rect.left > dragRect.x2 ||    // Item is entirely to the right of the selection box
    //             rect.bottom < dragRect.y1 ||  // Item is entirely above the selection box
    //             rect.top > dragRect.y2       // Item is entirely below the selection box
    //         );

    //         if (isIntersecting) {
    //             // Call your handler to select the piece
    //             handleSelectedPiecesList(item);
    //         }
    //     });

    //     // setSelectedItems(selected);
    // };


    // // Handle mouse up (drag end)
    // const handleMouseUp = () => {
    //     setIsDragging(false);
    //     setStartPos(null);
    //     setSelectionRect(null); // Hide the selection rectangle when the drag ends
    // };



    return (
        <div id="modal" className="flex items-center justify-center h-screen w-screen fixed inset-0 bg-black/50 overflow-auto">
            {/* <div className="bg-white max-w-xl w-full rounded-md absolute top-1/2 -translate-y-1/2 translate-x-1/2"> */}
            <div className="bg-white max-w-xl w-full rounded-md overflow-y-auto max-h-96">
                <div className="p-3 flex items-center justify-between">
                    <h3 className="font-semibold text-xl text-green-600">Number Of Pieces</h3>
                    <p>Selected Pieces: {selectedPiecesList.length}</p>
                    <span className="modal-close cursor-pointer" onClick={handleToggleModal22}>×</span>
                </div>

                <div className="m-2">
                    <label>Cow ID: </label>
                    <input className="border-2 w-1/2 p-1 rounded-lg mr-2" type="text" onChange={(e) => { setCowID(e.target.value); }} />
                    <button type="button" className="text-white bg-[#73C088] rounded-md px-4 py-1" onClick={addCowPiecesUsingCowID}>Put</button>
                </div>

                <div className="grid grid-cols-5 gap-3 mx-3 border-b-4 pb-3">

                    {piecesTypesList && piecesTypesList.map((pieceType, index) => (
                        <button key={index} type="button" className={`border-2 px-2 py-2 text-green-600 rounded-md hover:bg-[#76C18B] hover:text-white ${selectedPieceType === pieceType.typeName ? "bg-[#76C18B] text-white" : ""}`} onClick={() => { setSelectedPieceType(pieceType.typeName); setPiecesList(pieceType.piecesIds); }}>{pieceType.typeName}</button>
                    ))}

                    {/* <button className={`border-2 px-2 py-2 text-green-600 rounded-md hover:bg-[#76C18B] hover:text-white ${selectedCowType === "Type 1" ? "bg-[#76C18B] text-white" : ""}`} onClick={() => setSelectedCowType("Type 1")}>Type 1</button>
                    <button className={`border-2 px-2 py-2 text-green-600 rounded-md hover:bg-[#76C18B] hover:text-white ${selectedCowType === "Type 2" ? "bg-[#76C18B] text-white" : ""}`} onClick={() => setSelectedCowType("Type 2")}>Type 2</button>
                    <button className={`border-2 px-2 py-2 text-green-600 rounded-md hover:bg-[#76C18B] hover:text-white ${selectedCowType === "Type 3" ? "bg-[#76C18B] text-white" : ""}`} onClick={() => setSelectedCowType("Type 3")}>Type 3</button> */}
                </div>

                {/* <div className="p-3"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}> */}
                <div className="p-3">

                    {/* Render the selection rectangle */}
                    {/* {selectionRect && (
                        <div
                            style={{
                                position: 'absolute',
                                top: `${selectionRect.y1}px`,
                                left: `${selectionRect.x1}px`,
                                width: `${selectionRect.x2 - selectionRect.x1}px`,
                                height: `${selectionRect.y2 - selectionRect.y1}px`,
                                backgroundColor: 'rgba(0, 0, 255, 0.3)', // Semi-transparent blue
                                border: '1px solid blue',
                                pointerEvents: 'none', // Don't interfere with mouse events
                            }}
                        />
                    )} */}

                    <div className="grid grid-cols-4 gap-5">
                        {/* {cows.map((cow, index) => (
                            <button key={index} className={`border-2 px-2 py-2 text-green-600 rounded-md hover:bg-[#76C18B] hover:text-white ${isCowInList(cow) ? "bg-[#76C18B] text-white" : ""}`} onClick={() => { handleSelectedCowsList(cow) }}>{cow}</button>
                        ))} */}
                        {piecesList && piecesList.map((piece, index) => (
                            <button id={`item-${index}`} key={index} type="button" className={`border-2 px-2 py-2 text-green-600 rounded-md hover:bg-[#76C18B] hover:text-white ${isPieceInList(piece) ? "bg-[#76C18B] text-white" : ""}`} onClick={() => { handleSelectedPiecesList(piece) }}>{piece.pieceId}</button>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center my-2">
                    <button type="button" className="text-white bg-[#73C088] rounded-md px-4 py-1" onClick={handleAdd}>Add</button>
                </div>

                <div className="flex justify-between mx-5 gap-2">
                    <div>
                        <input type="checkbox" checked={selectAllTypeChecked} onChange={handleSelectAllTypeChange} />
                        <label className="ml-1">Select All in Type</label>
                    </div>

                    <div>
                        <input type="checkbox" checked={selectAllChecked} onChange={handleSelectAllChange} />
                        <label className="ml-1">Select All</label>
                    </div>
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