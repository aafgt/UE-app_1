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

    return (
        <div className="m-2">
            {selectedStorePieces.length > 0 && <div className="ml-5 my-5 text-3xl hover:cursor-pointer w-fit" onClick={() => { setSelectedStorePieces([]) }}><i className="bi bi-arrow-left"></i></div>}

            {selectedStorePieces.length === 0 && <div className="text-[#043912] font-semibold my-5 flex justify-end">
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