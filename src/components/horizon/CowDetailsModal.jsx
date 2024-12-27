

const CowDetailsModal = ({ cow, handleToggleModal }) => {
    return (
        <div id="modal" className="flex items-center justify-center h-screen w-screen fixed inset-0 bg-black/50 overflow-auto z-50">
            {/* <div className="bg-white max-w-xl w-full rounded-md absolute top-1/2 -translate-y-1/2 translate-x-1/2"> */}
            <div className="bg-white max-w-xl w-full rounded-md">
                <div className="p-3 flex items-center justify-between border-b border-b-gray-300">
                    <span className="modal-close cursor-pointer" onClick={handleToggleModal}>-</span>
                    <h3 className="font-semibold text-xl">Details Of Cow {cow.cowId}</h3>
                    <span className="modal-close cursor-pointer" onClick={handleToggleModal}>×</span>
                </div>
                <div className="p-3 flex text-[#043912] justify-center">
                    <div className="">
                        <p>Order Id: </p>
                        <p>Batch: </p>
                        <p>Type Of Cow: </p>
                        <p>Supplier: </p>
                        <p>Worker: </p>
                        <p>Client: </p>
                        <p>Production Date: </p>
                        <p>Expire Date: </p>
                        <p>Weight: </p>
                        <p>Supervisor Doctor: </p>
                    </div>

                    <div className="ml-20 text-center">
                        {/* <p>#204</p>
                        <p>100</p>
                        <p>Mahmoud</p>
                        <p>Magdy</p>
                        <p>Ahmed</p>
                        <p>Omar</p>
                        <p>4/8/2023</p>
                        <p>20/8/2023</p>
                        <p>4:55</p> */}
                        <p>{cow.orderId}</p>
                        <p>{cow.batchCode}</p>
                        <p>{cow.typeOfCow}</p>
                        <p>-</p>
                        <p>{cow.worker}</p>
                        <p>{cow.client}</p>
                        <p>{cow.productionDate}</p>
                        <p>-</p>
                        <p>{cow.weight}</p>
                        <p>{cow.doctor}</p>
                    </div>
                </div>
                <div className="p-3 flex items-center justify-center border-t border-t-gray-300">
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