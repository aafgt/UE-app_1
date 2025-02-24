import { useEffect, useState } from "react";

import { SERVER_URL } from "../../MetaData";

const ImportModal = ({ cows, handleToggleModal, handleToggleModal22, batchCode, createOrderRes, handleSelectedCowType, handleSelectedCowsListParent }) => {

    const [selectedCowType, setSelectedCowType] = useState("");
    const [selectedCowsList, setSelectedCowsList] = useState([]);

    const [cowTypesList, setCowTypesList] = useState([]);
    const [cowsList, setCowsList] = useState([]);

    const isCowInList = (cow) => {
        return selectedCowsList.includes(cow);
    };

    const handleSelectedCowsList = (cow) => {
        if (selectedCowsList.includes(cow)) {
            setSelectedCowsList(prevItems => prevItems.filter(item => item !== cow));
        }
        else {
            setSelectedCowsList(prevItems => [...prevItems, cow]);
        }
    };

    const getCowTypes = async () => {
        const response = await fetch(SERVER_URL + "/api/Front/GetTypesWithCows");

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }

        const data = await response.json();
        setCowTypesList(data);
    }

    useEffect(() => {
        getCowTypes();
    }, []);

    const handleAdd = () => {
        // handleSelectedCowType(selectedCowType);
        handleSelectedCowType(cowTypesList[selectedCowType - 1].typeName);
        handleSelectedCowsListParent(selectedCowsList, cowTypesList[selectedCowType - 1].typeName);

        handleToggleModal22();
    };

    const [checked, setChecked] = useState(false);
    const handleSelectAllChange = () => {
        setChecked(prevChecked => !prevChecked);
    };

    useEffect(() => {
        if (checked) {
            setSelectedCowType(cowTypesList[0]?.typeId);
            setSelectedCowsList(cowTypesList.map(item => item.cows).flat());
        }
        else {
            setSelectedCowType("");
            setSelectedCowsList([]);
        }
    }, [checked]);

    return (
        <div id="modal" className="flex items-center justify-center h-screen w-screen fixed inset-0 bg-black/50 overflow-auto">
            {/* <div className="bg-white max-w-xl w-full rounded-md absolute top-1/2 -translate-y-1/2 translate-x-1/2"> */}
            <div className="bg-white max-w-xl w-full rounded-md overflow-y-auto max-h-96">
                <div className="p-3 flex items-center justify-between">
                    <h3 className="font-semibold text-xl text-green-600">Number Of Cows</h3>
                    <p>Selected Cows: {selectedCowsList.length}</p>
                    <span className="modal-close cursor-pointer" onClick={handleToggleModal22}>×</span>
                </div>

                <div className="grid grid-cols-5 gap-3 mx-3 border-b-4 pb-3">

                    {cowTypesList && cowTypesList.map((cowType, index) => (
                        <button key={index} type="button" className={`border-2 px-2 py-2 text-green-600 rounded-md hover:bg-[#76C18B] hover:text-white ${selectedCowType === cowType.typeId ? "bg-[#76C18B] text-white" : ""}`} onClick={() => { setSelectedCowType(cowType.typeId); setCowsList(cowType.cows); }}>{cowType.typeName}</button>
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
                        {cowsList && cowsList.map((cow, index) => (
                            <button key={index} type="button" className={`border-2 px-2 py-2 text-green-600 rounded-md hover:bg-[#76C18B] hover:text-white ${isCowInList(cow) ? "bg-[#76C18B] text-white" : ""}`} onClick={() => { handleSelectedCowsList(cow) }}>{cow.cowId}</button>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center my-2">
                    <button type="button" className="text-white bg-[#73C088] rounded-md px-4 py-1" onClick={handleAdd}>Add</button>
                </div>

                <div className="flex justify-end mr-5 gap-2">
                    <input type="checkbox" checked={checked} onChange={handleSelectAllChange} />
                    <label>Select All</label>
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

export default ImportModal;