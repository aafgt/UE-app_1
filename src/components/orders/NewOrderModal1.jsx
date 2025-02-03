import { useState } from "react";
import NewOrderModalSub1 from "./NewOrderModalSub1";
import SellModal from "./SellModal";

const NewOrderModal1 = (props) => {

    const [toggleNewOrderModalSub1, setToggleNewOrderModalSub1] = useState(false);
    const handleToggleNewOrderModalSub1 = () => {
        setToggleNewOrderModalSub1(prev => !prev);
    };

    const [toggleNewOrderModalSub2, setToggleNewOrderModalSub2] = useState(false);
    const handleToggleNewOrderModalSub2 = () => {
        setToggleNewOrderModalSub2(prev => !prev);
    };

    return (
        <>
            <div id="modal" className="flex items-center justify-center h-screen w-screen fixed inset-0 bg-black/50 overflow-auto">
                <div className="bg-white max-w-xl w-full rounded-md">
                    <div className="p-3 flex items-center justify-end">
                        <span className="modal-close cursor-pointer" onClick={props.handleToggleNewOrderModal}>×</span>
                    </div>

                    <div className="grid grid-cols-2 gap-5 m-5">
                        <button className="text-sm text-white bg-[#73C088] rounded-md px-4 py-2" onClick={handleToggleNewOrderModalSub1}>أمر صرف للأنتاج</button>
                        <button className="text-sm text-white bg-[#73C088] rounded-md px-4 py-2" onClick={handleToggleNewOrderModalSub2}>أمر صرف للبيع</button>
                    </div>

                </div>
            </div>

            {toggleNewOrderModalSub1 && <NewOrderModalSub1 handleToggleNewOrderModalSub1={handleToggleNewOrderModalSub1} />}
            {toggleNewOrderModalSub2 && <SellModal handleToggleSellModal={handleToggleNewOrderModalSub2} />}
        </>
    );
}

export default NewOrderModal1;