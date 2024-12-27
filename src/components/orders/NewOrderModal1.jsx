import { useState } from "react";
import { connect } from "react-redux";
import CowsModal from "./CowsModal";
import SlaughterModal from "./SlaughterModal";
import SellModal from "./SellModal";
import TransferModal from "./TransferModal";
import SellModalOption1 from "./SellModalOption1";
import CuttingModal from "./CuttingModal";

const NewOrderModal1 = (props) => {

    const [toggleModal, setToggleModal] = useState(false);

    const handleToggleModal = () => {
        // takes the cow, to add to list... (or selects the cow and ADD adds to list)
        setToggleModal(!toggleModal);
    };

    const [toggleModal2, setToggleModal2] = useState(false);

    const handleToggleModal2 = () => {
        setToggleModal2(!toggleModal2);
    };

    const [toggleSlaughterModal, setToggleSlaughterModal] = useState(false);
    const handleToggleSlaughterModal = () => {
        setToggleSlaughterModal(prev => !prev);
    };

    const [toggleSellModal, setToggleSellModal] = useState(false);
    const handleToggleSellModal = () => {
        setToggleSellModal(prev => !prev);
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
                        <span className="modal-close cursor-pointer" onClick={props.handleToggleNewOrderModal}>×</span>
                    </div>

                    <div className="grid grid-cols-2 gap-5 m-5">
                        <button className="text-sm text-white bg-[#73C088] rounded-md px-4 py-2" onClick={handleToggleSlaughterModal}>ذبح</button>
                        <button className="text-sm text-white bg-[#73C088] rounded-md px-4 py-2" onClick={handleToggleSellModal}>بيع</button>
                        <button className="text-sm text-white bg-[#73C088] rounded-md px-4 py-2" onClick={handleToggleTransferModal}>تحويل</button>
                        <button className="text-sm text-white bg-[#73C088] rounded-md px-4 py-2" onClick={handleToggleCuttingModal}>تشافي</button>
                    </div>

                </div>
            </div>

            {toggleModal2 && <CowsModal cows={["123", "456"]} handleToggleModal={handleToggleModal} handleToggleModal2={handleToggleModal2} />}

            {toggleSlaughterModal && <SlaughterModal handleToggleSlaughterModal={handleToggleSlaughterModal} />}
            {toggleSellModal && <SellModal handleToggleSellModal={handleToggleSellModal} />}
            {toggleTransferModal && <TransferModal handleToggleTransferModal={handleToggleTransferModal} />}
            {toggleCuttingModal && <CuttingModal handleToggleCuttingModal={handleToggleCuttingModal} />}
        </>
    );
}

export default NewOrderModal1;