

const CowsModal = ({ cows, handleToggleModal, handleToggleModal2 }) => {
    return (
        <div id="modal" className="flex items-center justify-center h-screen w-screen fixed inset-0 bg-black/50">
            {/* <div className="bg-white max-w-xl w-full rounded-md absolute top-1/2 -translate-y-1/2 translate-x-1/2"> */}
            <div className="bg-white max-w-xl w-full rounded-md">
                <div className="p-3 flex items-center justify-between">
                    <h3 className="font-semibold text-xl text-green-600">Number Of Cows</h3>
                    <span className="modal-close cursor-pointer" onClick={handleToggleModal2}>×</span>
                </div>
                <div className="p-3">
                    <div className="grid grid-cols-4 gap-5">
                        {cows.map((cow, index) => (
                            <button key={index} className="border-2 px-2 py-2 text-green-600 rounded-md hover:bg-[#76C18B] hover:text-white" onClick={() => {handleToggleModal(cow);}}>{cow}</button>
                        ))}
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

export default CowsModal;