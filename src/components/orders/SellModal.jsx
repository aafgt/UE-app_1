import { useState } from "react";
import SellModalOption1 from "./SellModalOption1";
import SellModalOption2 from "./SellModalOption2";

const SellModal = (props) => {

    const [toggleSellModalOption1, setToggleSellModalOption1] = useState(false);
    const handleToggleSellModalOption1 = () => {
        setToggleSellModalOption1(prev => !prev);
    };

    const [toggleSellModalOption2, setToggleSellModalOption2] = useState(false);
    const handleToggleSellModalOption2 = () => {
        setToggleSellModalOption2(prev => !prev);
    };

    return (
        <>
            <div id="modal" className="flex items-center justify-center h-screen w-screen fixed inset-0 bg-black/50 overflow-auto">
                <div className="bg-white max-w-xl w-full rounded-md">
                    <div className="p-3 flex items-center justify-end">
                        <span className="modal-close cursor-pointer" onClick={props.handleToggleSellModal}>×</span>
                    </div>
                    <h3 className="font-semibold text-xl text-[#043912] text-center">بيع</h3>

                    <div className="grid grid-cols-2 gap-5 m-5">
                        <button className="text-sm text-white bg-[#73C088] rounded-md px-4 py-2" onClick={handleToggleSellModalOption1}>لحم بعضم</button>
                        <button className="text-sm text-white bg-[#73C088] rounded-md px-4 py-2" onClick={handleToggleSellModalOption2}>لحم مشفي</button>
                    </div>

                </div>
            </div>

            {toggleSellModalOption1 && <SellModalOption1 handleToggleSellModalOption1={handleToggleSellModalOption1} />}
            {toggleSellModalOption2 && <SellModalOption2 handleToggleSellModalOption2={handleToggleSellModalOption2} />}
        </>
    );
}

export default SellModal;