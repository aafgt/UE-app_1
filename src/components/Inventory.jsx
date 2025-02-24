import { useEffect, useState } from "react";
import PieceCard from "./inventory/PieceCard";
import StoreCard from "./inventory/StoreCard";

import { SERVER_URL } from "../MetaData";
import DatePickerCard from "./inventory/DatePickerCard";
import NewStoreModal from "./inventory/NewStoreModal";

const Inventory = () => {

    const [isFilterClicked, setIsFilterClicked] = useState(false);

    const [sortBy, setSortBy] = useState("");
    const [date, setDate] = useState("");

    const [storesData, setStoresData] = useState(null);

    const fetchStoresData = async () => {
        const response = await fetch(SERVER_URL + `/api/Front/GetStores?date=${date}&sort=${sortBy}`);

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }

        const data = await response.json();
        setStoresData(data);
    }

    const [selectedStorePieces, setSelectedStorePieces] = useState([]);

    useEffect(() => {
        fetchStoresData();
    }, [sortBy, date]);

    const [toggleNewOrderModal, setToggleNewOrderModal] = useState(false);
    const handleToggleNewOrderModal = () => {
        setToggleNewOrderModal(prev => !prev);
    };

    const [totalPieces, setTotalPieces] = useState(0);
    const getTotalPieces = () => {
        const total = storesData?.reduce((sum, store) => {
            return sum + store.totalPieces;
        }, 0);
        setTotalPieces(total);
    };

    useEffect(() => {
        getTotalPieces();
    }, [storesData]);

    return (
        <div className="m-2">
            {selectedStorePieces.length > 0 && <div className="ml-5 my-5 text-3xl hover:cursor-pointer w-fit" onClick={() => { setSelectedStorePieces([]) }}><i className="bi bi-arrow-left"></i></div>}

            {selectedStorePieces.length === 0 && <div className="text-[#043912] font-semibold my-5 flex justify-end">
                <p>Total Pieces: <span>{totalPieces}</span></p>    

                <button type="button" className="mx-2 px-3 py-1 rounded-md bg-white" onClick={() => { setIsFilterClicked(prev => !prev); }}><i className="bi bi-funnel"></i> Filter</button>
                {isFilterClicked && <div className="relative">
                    <div className="absolute top-10 right-0 bg-white rounded-md shadow-md">
                        <button type="button" className="mx-2 px-3 py-1 rounded-md bg-white flex" onClick={ () => { setSortBy("asc"); setIsFilterClicked(prev => !prev); }}><i className="bi bi-arrow-up-short"></i> ASC</button>
                        <button type="button" className="mx-2 px-3 py-1 rounded-md bg-white flex" onClick={ () => { setSortBy("desc"); setIsFilterClicked(prev => !prev); }}><i className="bi bi-arrow-down-short"></i> DESC</button>
                    </div>
                </div>}
                {/* <button className="mx-2 px-3 py-1 rounded-md bg-[#76C18B] text-white"><i className="bi bi-calendar3"></i> 2/8/2024</button> */}
                <DatePickerCard setDate={setDate} />
                <button type="button" className="mx-2 px-3 py-1 rounded-md bg-[#76C18B] text-white" onClick={handleToggleNewOrderModal}><i className="bi bi-plus-lg"></i> New Store</button>
            </div>}

            {selectedStorePieces.length === 0 && <div className="grid grid-cols-3 gap-5 justify-items-center">
                {storesData && storesData.map((store, index) => (
                    <div key={index} onClick={() => { setSelectedStorePieces(store.pieces) }}>
                        <StoreCard store={store} />
                    </div>
                ))}
            </div>}

            {selectedStorePieces.length > 0 && <div className="grid grid-cols-3 gap-5 gap-y-10 justify-items-center mx-8">
                {selectedStorePieces.map((piece, index) => (
                    <PieceCard key={index} piece={piece} />
                ))}
            </div>}

            {toggleNewOrderModal && <NewStoreModal handleToggleNewOrderModal={handleToggleNewOrderModal} />}
        </div>
    )
}

export default Inventory;







// import { useEffect, useState } from "react";
// import PieceCard from "./inventory/PieceCard";
// import StoreCard from "./inventory/StoreCard";

// import { SERVER_URL } from "../MetaData";
// import DatePickerCard from "./inventory/DatePickerCard";
// import NewStoreModal from "./inventory/NewStoreModal";

// const Inventory = () => {

//     const [isFilterClicked, setIsFilterClicked] = useState(false);

//     const [sortBy, setSortBy] = useState("");
//     const [date, setDate] = useState("");

//     const [storesData, setStoresData] = useState(null);

//     const fetchStoresData = async () => {
//         const response = await fetch(SERVER_URL + `/api/Front/GetStores?date=${date}&sort=${sortBy}`);

//         if (!response.ok) {
//             const message = `An error has occured: ${response.status}`;
//             throw new Error(message);
//         }

//         const data = await response.json();
//         setStoresData(data);
//     }

//     const [selectedStorePieces, setSelectedStorePieces] = useState([]);

//     useEffect(() => {
//         fetchStoresData();

//         setStorePieces(storesData?.slice(0, Math.ceil(storesData.length / 2)));
//         setStoreCutting(storesData?.slice(Math.ceil(storesData.length / 2), storesData.length));
//     }, [sortBy, date]);

//     const [toggleNewOrderModal, setToggleNewOrderModal] = useState(false);
//     const handleToggleNewOrderModal = () => {
//         setToggleNewOrderModal(prev => !prev);
//     };

//     const [totalPieces, setTotalPieces] = useState(0);
//     const getTotalPieces = () => {
//         const total = storesData?.reduce((sum, store) => {
//             return sum + store.totalPieces;
//         }, 0);
//         setTotalPieces(total);
//     };

//     useEffect(() => {
//         getTotalPieces();
//     }, [storesData]);

//     const [storePieces, setStorePieces] = useState([]);
//     const [storeCutting, setStoreCutting] = useState([]);

//     const [selectedToTrack, setSelectedToTrack] = useState("All");

//     return (
//         <div className="m-2">
//             {selectedStorePieces.length > 0 && <div className="ml-5 my-5 text-3xl hover:cursor-pointer w-fit" onClick={() => { setSelectedStorePieces([]) }}><i className="bi bi-arrow-left"></i></div>}

//             <div className="flex space-x-3 justify-end">
//                 <p className="bg-white shadow-md rounded-lg px-2">Total Pieces: <span>{totalPieces}</span></p>
//                 <p className="bg-white shadow-md rounded-lg px-2">اربع: <span>{totalPieces}</span></p>
//                 <p className="bg-white shadow-md rounded-lg px-2">مشفي: <span>{totalPieces}</span></p>
//             </div>

//             {selectedStorePieces.length === 0 && <div className="text-[#043912] font-semibold my-5 flex justify-between">
//                 <div className="ml-5 space-x-5">
//                     <button className={`border-2 px-5 py-2 rounded-md shadow-md text-green-600 hover:bg-[#76C18B] hover:text-white ${selectedToTrack === "All" ? "bg-[#76C18B] text-white" : "bg-white"}`} onClick={() => { setSelectedToTrack("All"); }}>All</button>
//                     <button className={`border-2 px-5 py-2 rounded-md shadow-md text-green-600 hover:bg-[#76C18B] hover:text-white ${selectedToTrack === "بيع" ? "bg-[#76C18B] text-white" : "bg-white"}`} onClick={() => { setSelectedToTrack("بيع"); }}>بيع</button>
//                     <button className={`border-2 px-5 py-2 rounded-md shadow-md text-green-600 hover:bg-[#76C18B] hover:text-white ${selectedToTrack === "تشافي" ? "bg-[#76C18B] text-white" : "bg-white"}`} onClick={() => { setSelectedToTrack("تشافي"); }}>تشافي</button>
//                 </div>

//                 <div className="flex">
//                     <button type="button" className="mx-2 px-3 py-1 rounded-md bg-white" onClick={() => { setIsFilterClicked(prev => !prev); }}><i className="bi bi-funnel"></i> Filter</button>
//                     {isFilterClicked && <div className="relative">
//                         <div className="absolute top-10 right-0 bg-white rounded-md shadow-md">
//                             <button type="button" className="mx-2 px-3 py-1 rounded-md bg-white flex" onClick={() => { setSortBy("asc"); setIsFilterClicked(prev => !prev); }}><i className="bi bi-arrow-up-short"></i> ASC</button>
//                             <button type="button" className="mx-2 px-3 py-1 rounded-md bg-white flex" onClick={() => { setSortBy("desc"); setIsFilterClicked(prev => !prev); }}><i className="bi bi-arrow-down-short"></i> DESC</button>
//                         </div>
//                     </div>}
//                     {/* <button className="mx-2 px-3 py-1 rounded-md bg-[#76C18B] text-white"><i className="bi bi-calendar3"></i> 2/8/2024</button> */}
//                     <DatePickerCard setDate={setDate} />
//                     <button type="button" className="mx-2 px-3 py-1 rounded-md bg-[#76C18B] text-white" onClick={handleToggleNewOrderModal}><i className="bi bi-plus-lg"></i> New Store</button>
//                 </div>
//             </div>}

//             {selectedStorePieces.length === 0 && <div className="grid grid-cols-3 gap-5 justify-items-center">
//                 {storesData && storesData.map((store, index) => (
//                     <div key={index} onClick={() => { setSelectedStorePieces(store.pieces) }}>
//                         <StoreCard store={store} />
//                     </div>
//                 ))}
//             </div>}

//             {selectedStorePieces.length > 0 && <div className="grid grid-cols-3 gap-5 gap-y-10 justify-items-center mx-8">
//                 {selectedStorePieces.map((piece, index) => (
//                     <PieceCard key={index} piece={piece} />
//                 ))}
//             </div>}

//             {toggleNewOrderModal && <NewStoreModal handleToggleNewOrderModal={handleToggleNewOrderModal} />}
//         </div>
//     )
// }

// export default Inventory;