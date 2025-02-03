import { useState } from "react";
import SlaughterModal from "./SlaughterModal";
import TransferModal from "./TransferModal";
import CuttingModal from "./CuttingModal";

const NewOrderModalSub1 = (props) => {

    const [toggleSlaughterModal, setToggleSlaughterModal] = useState(false);
    const handleToggleSlaughterModal = () => {
        setToggleSlaughterModal(prev => !prev);
    };

    const [toggleTransferModal, setToggleTransferModal] = useState(false);
    const handleToggleTransferModal = () => {
        setToggleTransferModal(prev => !prev);
    };

    const [toggleCuttingModal, setToggleCuttingModal] = useState(false);
    const handleToggleCuttingModal = () => {
        setToggleCuttingModal(prev => !prev);
    };

    return (
        <>
            <div id="modal" className="flex items-center justify-center h-screen w-screen fixed inset-0 bg-black/50 overflow-auto">
                <div className="bg-white max-w-xl w-full rounded-md">
                    <div className="p-3 flex items-center justify-end">
                        <span className="modal-close cursor-pointer" onClick={props.handleToggleNewOrderModalSub1}>×</span>
                    </div>

                    <div className="grid grid-cols-2 gap-5 m-5">
                        <button className="text-sm text-white bg-[#73C088] rounded-md px-4 py-2" onClick={handleToggleSlaughterModal}>ذبح</button>
                        <button className="text-sm text-white bg-[#73C088] rounded-md px-4 py-2" onClick={handleToggleTransferModal}>تحويل</button>
                        <button className="text-sm text-white bg-[#73C088] rounded-md px-4 py-2" onClick={handleToggleCuttingModal}>تشافي</button>
                    </div>

                </div>
            </div>

            {toggleSlaughterModal && <SlaughterModal handleToggleSlaughterModal={handleToggleSlaughterModal} />}
            {toggleTransferModal && <TransferModal handleToggleTransferModal={handleToggleTransferModal} />}
            {toggleCuttingModal && <CuttingModal handleToggleCuttingModal={handleToggleCuttingModal} />}
        </>
    );
}

export default NewOrderModalSub1;