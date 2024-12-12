import { useState } from "react";
import SellModalOption1 from "./SellModalOption1";
import SellModalOption2 from "./SellModalOption2";

const TransferModal = (props) => {

    const [toggleModal, setToggleModal] = useState(false);

    const handleToggleModal = () => {
        // takes the cow, to add to list... (or selects the cow and ADD adds to list)
        setToggleModal(!toggleModal);
    };

    const [toggleModal2, setToggleModal2] = useState(false);

    const handleToggleModal2 = () => {
        setToggleModal2(!toggleModal2);
    };

    return (
        <>
            <div id="modal" className="flex items-center justify-center h-screen w-screen fixed inset-0 bg-black/50 overflow-auto">
                <div className="bg-white max-w-xl w-full rounded-md">
                    <div className="p-3 flex items-center justify-end">
                        <span className="modal-close cursor-pointer" onClick={props.handleToggleTransferModal}>×</span>
                    </div>
                    <h3 className="font-semibold text-xl text-[#043912] text-center">تحويل</h3>

                    <div className="grid grid-cols-2 gap-5 m-5">
                        <button className="text-sm text-white bg-[#73C088] rounded-md px-4 py-2">من <i className="bi bi-arrow-down-short"></i></button>
                        <button className="text-sm text-white bg-[#73C088] rounded-md px-4 py-2">الي <i className="bi bi-arrow-down-short"></i></button>
                    </div>

                    <div className="p-3 flex items-center justify-center">
                        <button className="text-sm text-white bg-[#73C088] rounded-md px-4 py-1">Done</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TransferModal;