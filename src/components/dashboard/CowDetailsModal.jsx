

const CowDetailsModal = ({ cow, handleToggleModal }) => {
    return (
        <div id="modal" className="flex items-center justify-center h-screen w-screen fixed inset-0 bg-black/50 overflow-auto z-50">
            {/* <div className="bg-white max-w-xl w-full rounded-md absolute top-1/2 -translate-y-1/2 translate-x-1/2"> */}
            <div className="bg-white max-w-xl w-full rounded-md">
                <div className="p-3 flex items-center justify-between border-b border-b-gray-300">
                    <h3 className="font-semibold text-xl">Details Of Cow {cow.cows_Id}</h3>
                    <span className="modal-close cursor-pointer" onClick={handleToggleModal}>×</span>
                </div>
                <div className="p-3">
                    <div className="flex text-[#043912]">
                        <div className="">
                            <p>Rate of Growth</p>
                            <p>Grade</p>
                            <p>Issues</p>
                            <p>Date of Supply</p>
                            <p>Supplier</p>
                            <p>Supply Weight</p>
                            <p>Current Weight</p>
                        </div>

                        <div className="ml-20">
                            <p>{cow.rateOfGrowth} kg/month</p>
                            <p>{cow.grade}</p>
                            <p>{cow.issues}</p>
                            <p>{cow.dateOfSupply}</p>
                            <p>{cow.supplierName}</p>
                            <p>{cow.supply_Weight} kg</p>
                            <p>{cow.cow_Weight} kg</p>
                        </div>
                    </div>
                    {/* <p className="mt-5 border px-1 pb-16 rounded-md font-medium">Notes :</p> */}
                    <p className="mt-5 px-1 font-medium">Notes :</p>
                    <textarea className="border rounded-md p-3 w-full max-h-40" />
                </div>
                <div className="p-3 flex items-center justify-end">
                    <div>
                        <button className="text-sm text-white bg-[#73C088] rounded-md px-4 py-1" onClick={handleToggleModal}>Ok</button>
                        <button className="modal-close text-sm text-[#73C088] border rounded-md px-4 py-1 ml-3" onClick={handleToggleModal}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CowDetailsModal;