// import { useEffect, useState } from "react";

// import { SERVER_URL } from "../../MetaData";

// const TransferModal = (props) => {

//     const isPieceInFromList = (piece) => {
//         return FromSelectedPiecesList.includes(piece);
//     };

//     const isPieceInToList = (piece) => {
//         return ToSelectedPiecesList.includes(piece);
//     };

//     const [toggleModal, setToggleModal] = useState(false);

//     const handleToggleModal = () => {
//         // takes the cow, to add to list... (or selects the cow and ADD adds to list)
//         setToggleModal(!toggleModal);
//     };

//     const [toggleModal2, setToggleModal2] = useState(false);

//     const handleToggleModal2 = () => {
//         setToggleModal2(!toggleModal2);
//     };


//     const [selectedFromStore, setSelectedFromStore] = useState(null);
//     const [selectedToStore, setSelectedToStore] = useState(null);
//     // const [selectedPiecesList, setSelectedPiecesList] = useState([]);

//     const [fromPieces, setFromPieces] = useState([]);
//     const [toPieces, setToPieces] = useState([]);

//     const [storePiecesList, setStorePiecesList] = useState([]);

//     const getStorePieces = async () => {
//         const response = await fetch(SERVER_URL + "/api/Front/GetStorePieces");

//         if (!response.ok) {
//             const message = `An error has occured: ${response.status}`;
//             throw new Error(message);
//         }

//         const data = await response.json();
//         setStorePiecesList(data);
//     }

//     useEffect(() => {
//         getStorePieces();
//     }, []);


//     const [From, setFrom] = useState(false);
//     const [To, setTo] = useState(false);

//     const [FromSelectedPiecesList, setFromSelectedPiecesList] = useState([]);
//     const [ToSelectedPiecesList, setToSelectedPiecesList] = useState([]);

//     const handleFromSelectedPiecesList = (piece) => {
//         if (FromSelectedPiecesList.includes(piece)) {
//             setFromSelectedPiecesList(prevItems => prevItems.filter(item => item !== piece));
//         }
//         else {
//             setFromSelectedPiecesList(prevItems => [...prevItems, piece]);
//         }
//     };

//     const handleToSelectedPiecesList = (piece) => {
//         if (ToSelectedPiecesList.includes(piece)) {
//             setToSelectedPiecesList(prevItems => prevItems.filter(item => item !== piece));
//         }
//         else {
//             setToSelectedPiecesList(prevItems => [...prevItems, piece]);
//         }
//     };


//     const handleDone = async () => {
//         const r = {
//             "sourceStoreId": selectedFromStore.storeId,
//             "destinationStoreId": selectedToStore.storeId,
//             "piecesList": FromSelectedPiecesList
//         }

//         console.log(r);

//         const response = await fetch(SERVER_URL+"/api/FlutterService/TransferPieces", {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(r)
//         });

//         if (!response.ok) {
//             return;
//         }

//         props.handleToggleTransferModal();        
//     };

//     // const getSelectedStorePieces = () => {
//     //     storePiecesList.filter((store) => {
//     //         if (store === selectedStore) {
//     //             return store;
//     //         }
//     //     });
//     // };

//     return (
//         <>
//             <div id="modal" className="flex items-center justify-center h-screen w-screen fixed inset-0 bg-black/50 overflow-auto">
//                 <div className="bg-white max-w-xl w-full rounded-md">
//                     <div className="p-3 flex items-center justify-end">
//                         <span className="modal-close cursor-pointer" onClick={props.handleToggleTransferModal}>×</span>
//                     </div>
//                     <h3 className="font-semibold text-xl text-[#043912] text-center">تحويل</h3>

//                     <div className="grid grid-cols-2 gap-5 m-5">
//                         <button className="text-sm text-white bg-[#73C088] rounded-md px-4 py-2" onClick={() => { setFrom(prev => !prev) }}>من <i className="bi bi-arrow-down-short"></i></button>
//                         <button className="text-sm text-white bg-[#73C088] rounded-md px-4 py-2" onClick={() => { setTo(prev => !prev) }}>الي <i className="bi bi-arrow-down-short"></i></button>
//                     </div>

//                     <div className="grid grid-cols-5 gap-3 mx-3 border-b-4 pb-3">

//                         {From && storePiecesList && storePiecesList.map((store, index) => (
//                             <button key={index} type="button" className={`border-2 px-2 py-2 text-green-600 rounded-md hover:bg-[#76C18B] hover:text-white ${selectedFromStore?.storeId === store.storeId ? "bg-[#76C18B] text-white" : ""}`} onClick={() => { setSelectedFromStore(store); setFromPieces(store.pieces); }}>{store.storeName}</button>
//                         ))}

//                         {/* <button className={`border-2 px-2 py-2 text-green-600 rounded-md hover:bg-[#76C18B] hover:text-white ${selectedCowType === "Type 1" ? "bg-[#76C18B] text-white" : ""}`} onClick={() => setSelectedCowType("Type 1")}>Type 1</button>
// <button className={`border-2 px-2 py-2 text-green-600 rounded-md hover:bg-[#76C18B] hover:text-white ${selectedCowType === "Type 2" ? "bg-[#76C18B] text-white" : ""}`} onClick={() => setSelectedCowType("Type 2")}>Type 2</button>
// <button className={`border-2 px-2 py-2 text-green-600 rounded-md hover:bg-[#76C18B] hover:text-white ${selectedCowType === "Type 3" ? "bg-[#76C18B] text-white" : ""}`} onClick={() => setSelectedCowType("Type 3")}>Type 3</button> */}
//                         {/* </div> */}

//                         {/* <div className="p-3">
// <div className="grid grid-cols-4 gap-5"> */}
//                         {/* {cows.map((cow, index) => (
//         <button key={index} className={`border-2 px-2 py-2 text-green-600 rounded-md hover:bg-[#76C18B] hover:text-white ${isCowInList(cow) ? "bg-[#76C18B] text-white" : ""}`} onClick={() => { handleSelectedCowsList(cow) }}>{cow}</button>
//     ))} */}
//                         {/* {selectedStore && storePiecesList.map((store, index) => (
//         <button key={index} type="button" className={`border-2 px-2 py-2 text-green-600 rounded-md hover:bg-[#76C18B] hover:text-white ${isCowInList(cow) ? "bg-[#76C18B] text-white" : ""}`} onClick={() => { handleSelectedCowsList(cow) }}>{cow.cowsId}</button>
//     ))}
// </div> */}
//                     </div>
//                     <div className="p-3">
//                         <div className="grid grid-cols-4 gap-5">
//                             {fromPieces && fromPieces.map((piece, index) => (
//                                 <button key={index} type="button" className={`border-2 px-2 py-2 text-green-600 rounded-md hover:bg-[#76C18B] hover:text-white ${isPieceInFromList(piece) ? "bg-[#76C18B] text-white" : ""}`} onClick={() => { handleFromSelectedPiecesList(piece) }}>{piece}</button>
//                             ))}
//                         </div>
//                     </div>

//                     <div className="grid grid-cols-5 gap-3 mx-3 border-b-4 pb-3">
//                         {To && storePiecesList && storePiecesList.map((store, index) => (
//                             <button key={index} type="button" className={`border-2 px-2 py-2 text-green-600 rounded-md hover:bg-[#76C18B] hover:text-white ${selectedToStore?.storeId === store.storeId ? "bg-[#76C18B] text-white" : ""}`} onClick={() => { setSelectedToStore(store); setToPieces(store.pieces); }}>{store.storeName}</button>
//                         ))}
//                     </div>
//                     {/* <div className="p-3">
//                         <div className="grid grid-cols-4 gap-5">
//                             {toPieces && toPieces.map((piece, index) => (
//                                 <button key={index} type="button" className={`border-2 px-2 py-2 text-green-600 rounded-md hover:bg-[#76C18B] hover:text-white ${isPieceInToList(piece) ? "bg-[#76C18B] text-white" : ""}`} onClick={() => { handleToSelectedPiecesList(piece) }}>{piece}</button>
//                             ))}
//                         </div>
//                     </div> */}

//                     <div className="p-3 flex items-center justify-center">
//                         <button className="text-sm text-white bg-[#73C088] rounded-md px-4 py-1" onClick={handleDone}>Done</button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default TransferModal;





import { useEffect, useState } from "react";

import { SERVER_URL } from "../../MetaData";

const TransferModal = (props) => {

    const isPieceInFromList = (piece) => {
        return FromSelectedPiecesList.includes(piece);
    };

    const isPieceInToList = (piece) => {
        return ToSelectedPiecesList.includes(piece);
    };

    const [toggleModal, setToggleModal] = useState(false);

    const handleToggleModal = () => {
        // takes the cow, to add to list... (or selects the cow and ADD adds to list)
        setToggleModal(!toggleModal);
    };

    const [toggleModal2, setToggleModal2] = useState(false);

    const handleToggleModal2 = () => {
        setToggleModal2(!toggleModal2);
    };


    const [selectedFromStore, setSelectedFromStore] = useState(null);
    const [selectedToStore, setSelectedToStore] = useState(null);
    // const [selectedPiecesList, setSelectedPiecesList] = useState([]);

    const [fromPieces, setFromPieces] = useState([]);
    const [toPieces, setToPieces] = useState([]);

    const [storePiecesList, setStorePiecesList] = useState([]);

    const getStorePieces = async () => {
        const response = await fetch(SERVER_URL + "/api/Front/GetStorePieces");

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }

        const data = await response.json();
        setStorePiecesList(data);
    }

    useEffect(() => {
        getStorePieces();
    }, []);


    const [From, setFrom] = useState(false);
    const [To, setTo] = useState(false);

    const [FromSelectedPiecesList, setFromSelectedPiecesList] = useState([]);
    const [ToSelectedPiecesList, setToSelectedPiecesList] = useState([]);

    const handleFromSelectedPiecesList = (piece) => {
        if (FromSelectedPiecesList.includes(piece)) {
            setFromSelectedPiecesList(prevItems => prevItems.filter(item => item !== piece));
        }
        else {
            setFromSelectedPiecesList(prevItems => [...prevItems, piece]);
        }
    };

    const handleToSelectedPiecesList = (piece) => {
        if (ToSelectedPiecesList.includes(piece)) {
            setToSelectedPiecesList(prevItems => prevItems.filter(item => item !== piece));
        }
        else {
            setToSelectedPiecesList(prevItems => [...prevItems, piece]);
        }
    };

    const [createOrderValid, setCreateOrderValid] = useState("");
    const isCreateOrderValid = () => {
        if(!selectedFromStore || !selectedToStore) {
            setCreateOrderValid("Please select from and to stores.");
            return false;
        }

        if(FromSelectedPiecesList.length <= 0) {
            setCreateOrderValid("Please select pieces.");
            return false;
        }

        setCreateOrderValid("valid");
        return true;
    };

    useEffect(() => {
      isCreateOrderValid();
    }, [selectedFromStore, selectedToStore, FromSelectedPiecesList]);


    const handleDone = async () => {
        const r = {
            "sourceStoreId": selectedFromStore.storeId,
            "destinationStoreId": selectedToStore.storeId,
            "piecesList": FromSelectedPiecesList
        }

        // console.log(r);

        const response = await fetch(SERVER_URL + "/api/FlutterService/TransferPieces", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(r)
        });

        if (!response.ok) {
            return;
        }

        props.handleToggleTransferModal();

        alert("Order created Successfully.");
    };

    // const getSelectedStorePieces = () => {
    //     storePiecesList.filter((store) => {
    //         if (store === selectedStore) {
    //             return store;
    //         }
    //     });
    // };

    return (
        <>
            <div id="modal" className="flex items-center justify-center h-screen w-screen fixed inset-0 bg-black/50 overflow-auto">
                <div className="bg-white max-w-xl w-full rounded-md max-h-96 overflow-y-auto">
                    <div className="p-3 flex items-center justify-end">
                        <span className="modal-close cursor-pointer" onClick={props.handleToggleTransferModal}>×</span>
                    </div>
                    <h3 className="font-semibold text-xl text-[#043912] text-center">تحويل</h3>

                    <div className="grid grid-cols-2 gap-5 m-5">
                        <button className="text-sm text-white bg-[#73C088] rounded-md px-4 py-2" onClick={() => { setFrom(prev => !prev) }}>من <i className="bi bi-arrow-right-short"></i></button>
                        <div className="mx-3 border-b-4 pb-3">
                            {From && storePiecesList && storePiecesList.map((store, index) => (
                                <button key={index} type="button" className={`border-2 px-2 py-2 text-green-600 rounded-md hover:bg-[#76C18B] hover:text-white ${selectedFromStore?.storeId === store.storeId ? "bg-[#76C18B] text-white" : ""}`} onClick={() => { setSelectedFromStore(store); setFromPieces(store.pieces); }}>{store.storeName}</button>
                            ))}
                        </div>

                        <button className="text-sm text-white bg-[#73C088] rounded-md px-4 py-2" onClick={() => { setTo(prev => !prev) }}>الي <i className="bi bi-arrow-right-short"></i></button>
                        <div className="mx-3 border-b-4 pb-3">
                            {To && storePiecesList && storePiecesList.map((store, index) => (
                                <button key={index} type="button" className={`border-2 px-2 py-2 text-green-600 rounded-md hover:bg-[#76C18B] hover:text-white ${selectedToStore?.storeId === store.storeId ? "bg-[#76C18B] text-white" : ""}`} onClick={() => { setSelectedToStore(store); setToPieces(store.pieces); }}>{store.storeName}</button>
                            ))}
                        </div>
                    </div>

                    <div className="p-3">
                        <div className="grid grid-cols-4 gap-5">
                            {fromPieces && fromPieces.map((piece, index) => (
                                <button key={index} type="button" className={`border-2 px-2 py-2 text-green-600 rounded-md hover:bg-[#76C18B] hover:text-white ${isPieceInFromList(piece) ? "bg-[#76C18B] text-white" : ""}`} onClick={() => { handleFromSelectedPiecesList(piece) }}>{piece}</button>
                            ))}
                        </div>
                    </div>

                    <p className="text-red-600">{createOrderValid !== "valid" && createOrderValid}</p>

                    <div className="p-3 flex items-center justify-center">
                        <button className="text-sm text-white bg-[#73C088] rounded-md px-4 py-1" onClick={handleDone} disabled={createOrderValid !== "valid"}>Done</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TransferModal;