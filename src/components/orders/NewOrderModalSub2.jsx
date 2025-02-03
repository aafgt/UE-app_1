import { useState } from "react";
import SellModal from "./SellModal";

const NewOrderModalSub2 = (props) => {

    const [toggleSellModal, setToggleSellModal] = useState(false);
    const handleToggleSellModal = () => {
        setToggleSellModal(prev => !prev);
    };

    return (
        <>
            <div id="modal" className="flex items-center justify-center h-screen w-screen fixed inset-0 bg-black/50 overflow-auto">
                <div className="bg-white max-w-xl w-full rounded-md">
                    <div className="p-3 flex items-center justify-end">
                        <span className="modal-close cursor-pointer" onClick={props.handleToggleNewOrderModalSub2}>×</span>
                    </div>

                    <div className="grid grid-cols-2 gap-5 m-5">
                        <button className="text-sm text-white bg-[#73C088] rounded-md px-4 py-2" onClick={handleToggleSellModal}>بيع</button>
                    </div>

                </div>
            </div>

            {toggleSellModal && <SellModal handleToggleSellModal={handleToggleSellModal} />}
        </>
    );
}

export default NewOrderModalSub2;