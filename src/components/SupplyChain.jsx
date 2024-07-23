import { useEffect, useState } from "react";
import logo from "../assets/Business growth-amico.png";
import CommoditiesCard from "./supplyChain/CommoditiesCard";
import CowsCard from "./supplyChain/CowsCard";
import SpendingCard from "./supplyChain/SpendingCard";
import SupplierCard from "./supplyChain/SupplierCard";
import NewOrderModal from "./supplyChain/NewOrderModal";
import NewSupplierModal from "./supplyChain/NewSupplierModal";
import { fetchCommodities, fetchCows, fetchFeedInfoByType, fetchFeeds, fetchOrders, fetchTotalStoreFeedInfo, getScrapedData } from "../redux/ActionCreators";
import { connect } from "react-redux";
import AmountOfFeedCard from "./supplyChain/AmountOfFeedCard";
import AmountOfFeedCard2 from "./supplyChain/AmountOfFeedCard2";
import ScrapedData from "./supplyChain/ScrapedData";

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
    feeds: state.feeds
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchOrders: (feedType) => { dispatch(fetchOrders(feedType)) },
  fetchFeeds: () => { dispatch(fetchFeeds()) },
  fetchFeedInfoByType: (feedType) => { dispatch(fetchFeedInfoByType(feedType)) },

  fetchCows: () => { dispatch(fetchCows()) },
  fetchTotalStoreFeedInfo: () => { dispatch(fetchTotalStoreFeedInfo()) },
  fetchCommodities: () => { dispatch(fetchCommodities()) },
  getScrapedData: () => { dispatch(getScrapedData()) }
})

function OrderRow({ order }) {

  const [subTableOpen, setSubTableOpen] = useState(false);

  const toggleSubTable = () => {
    setSubTableOpen(!subTableOpen);
  };

  const subTableRows2 = () => {
    return (
      <>
        <div className="border-l-4 border-green-800 w-full">
          <div className="border-b-2 w-full flex">
            <div className="bg-black border border-green-400 ml-[31px] my-1 w-28 h-16 flex justify-center items-center">
              <img src="/vite.svg" alt="" />
            </div>
            <table className="w-full text-center text-green-700">
              <thead className="mb-7">
                <tr>
                  <th className="px-5">Name</th>
                  <th className="px-5">Material Code</th>
                  <th className="px-5">Quantity</th>
                  <th className="px-5">Order Time</th>
                </tr>
              </thead>
              <tbody className="text-[20px] font-semibold">
                <tr>
                  <td>Starch</td>
                  <td>ST3</td>
                  <td>250Kwh</td>
                  <td>08/4/2022</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="border-b-2 w-full flex">
            <div className="bg-black border border-green-400 ml-[31px] my-1 w-28 h-16 flex justify-center items-center">
              <img src="/vite.svg" alt="" />
            </div>
            <table className="w-full text-center text-green-700">
              <thead className="mb-7">
                <tr>
                  <th className="px-5">Name</th>
                  <th className="px-5">Material Code</th>
                  <th className="px-5">Quantity</th>
                  <th className="px-5">Order Time</th>
                </tr>
              </thead>
              <tbody className="text-[20px] font-semibold">
                <tr>
                  <td>Starch</td>
                  <td>ST3</td>
                  <td>250Kwh</td>
                  <td>08/4/2022</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    )
  };

  return (
    <>
      <tr className="border-b-2 hover:cursor-pointer" onClick={toggleSubTable}>
        <td className="py-3 text-green-500">{order.orderID}</td>
        <td className="py-3">{order.startDate}</td>
        <td className="py-3">{order.supplierName}</td>
        <td className="py-3">{order.deliveryDate}</td>
        <td className="py-3">{order.quantity} KG</td>
        <td className="py-3">{order.grade}</td>
        {/* <td className="py-3">{order.shippingTracking}</td> */}
        <td className="py-3">
          <div className="flex justify-center">
            {order.shippingTracking === "On Road" && <div className="bg-yellow-400 rounded-xl w-fit px-2">
              <i className="bi bi-dot text-yellow-600"></i> <span className="">{order.shippingTracking}</span>
            </div>}
            {order.shippingTracking === "Failing" && <div className="bg-red-400 rounded-xl w-fit px-4">
              <i className="bi bi-dot text-red-600"></i> <span className="">{order.shippingTracking}</span>
            </div>}
            {order.shippingTracking === "Success" && <div className="bg-green-400 rounded-xl w-fit px-3">
              <i className="bi bi-dot text-green-600"></i> <span className="">{order.shippingTracking}</span>
            </div>}
          </div>
        </td>
        {/* <td className="bg-slate-200 rounded-full"><i className="bi bi-arrow-down-short"></i></td> */}
      </tr>
      {subTableOpen && <tr>
        <td colSpan={7}>
          {subTableRows2()}
        </td>
      </tr>}
    </>
  );
};



function SupplyChain(props) {

  const messages = [
    { message: "Lorem ipsum dolor sit amet consectetur.", color: "text-green-800" },
    { message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", color: "text-red-700" },
    { message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", color: "text-green-400" },
    { message: "Lorem ipsum dolor.", color: "text-red-700" },
    { message: "Lorem ipsum dolor sit amet consectetur.", color: "text-green-800" },
    { message: "Lorem ipsum dolor sit amet consectetur adip.", color: "text-green-800" },
  ];

  const [isFeedItemsOpen, setIsFeedItemsOpen] = useState(false);
  const [feedItemText, setFeedItemText] = useState("Items");

  const [toggleNewOrderModal, setToggleNewOrderModal] = useState(false);
  const handleToggleNewOrderModal = () => {
    setToggleNewOrderModal(prev => !prev);
  };

  const [toggleNewSupplierModal, setToggleNewSupplierModal] = useState(false);
  const handleToggleNewSupplierModal = () => {
    setToggleNewSupplierModal(prev => !prev);
  };

  useEffect(() => {
    props.fetchFeeds();

    props.fetchCows();
    props.fetchTotalStoreFeedInfo();
    props.fetchCommodities();
    // props.getScrapedData();
    fetchScrapedData();
  }, []);

  useEffect(() => {
    if (feedItemText != "Items") {
      props.fetchFeedInfoByType(feedItemText);
      props.fetchOrders(feedItemText);

      // const totalCurrentFeedWeightPercent = Math.floor((props.feeds.feedInfoByType?.totalCurrentFeedWeight / props.feeds.feedInfoByType?.totalFeedCapacity) * 100);

      // setSupplierData((prev) => ({ ...prev, series: [totalCurrentFeedWeightPercent, (100 - totalCurrentFeedWeightPercent)] }));
    }
  }, [feedItemText]);


  const [scrappedData, setScrappedData] = useState(null);

  const fetchScrapedData = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/getScrapedData");

      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }

      const data = await response.json();

      console.log(data);

      setScrappedData(data);

      return data;
    }
    catch (error) {
      return error.message;
    }
  };

  return (
    <div className="flex flex-col">
      {/* <button className="ml-5 mt-2 h-5 w-5 bg-black border border-white absolute rounded-full" onClick={() => { setFeedItemText("Items") }}></button> */}
      {(feedItemText !== "Items") && <div className="ml-5 mt-2 text-3xl hover:cursor-pointer w-fit" onClick={() => { setFeedItemText("Items") }}><i className="bi bi-arrow-left"></i></div>}
      <div className="flex justify-center">
        <div className="bg-white rounded-lg shadow-md m-3 mt-7 p-3 w-8/12 flex items-between justify-between">
          <div className="w-fit">
            <h3 className="text-3xl text-green-800 font-semibold">Welcome Ahmed !</h3>
            <div className="mt-3">
              {messages.map((message, index) => (
                <div key={index} className="mt-2">
                  <input type="checkbox" />
                  <label className={`ml-2 ${message.color}`}>{message.message}</label>
                </div>
              ))}



              <table className="w-full text-center text-green-700 font-semibold">
                <thead className="text-[20px] font-extralight">
                  <tr>
                    {scrappedData && scrappedData.header?.map((header, index) => (
                      <th key={index}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="">
                  {scrappedData && scrappedData.data?.map((data, index) => (
                    <tr key={index} className="border-b-2 hover:cursor-pointer">
                      <td className="py-3">{data[0]}</td>
                      <td className="py-3">{data[1]}</td>
                      <td className="py-3">{data[2]} EGP</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="ml-16 flex flex-col relative justify-between">

            <button className="py-1 border-2 rounded-lg text-2xl leading-none text-green-800 font-semibold" onClick={() => { setIsFeedItemsOpen(prev => !prev) }}>{feedItemText} <i className="bi bi-arrow-down-short"></i></button>

            {isFeedItemsOpen && <div className="border absolute bg-white rounded-lg text-2xl leading-none text-green-800 font-semibold top-10 w-full">
              {props.feeds.feedItems.map((item) => (
                <p key={item} className="text-center border-b-2 py-2 hover:cursor-pointer hover:bg-[#1CAD995E]  " onClick={() => { setIsFeedItemsOpen(prev => !prev); setFeedItemText(item); }}>{item}</p>
              ))}
            </div>}

            <div className="w-40 h-44 mt-5">
              <img src={logo} alt="" />
            </div>

          </div>
        </div>

        {(feedItemText === "Items") ? <CommoditiesCard /> : <AmountOfFeedCard feedType={feedItemText} />}
      </div>

      {(feedItemText === "Items") ? (<div className="flex justify-center">
        <SpendingCard />
        <div className="flex">
          <CowsCard />
          <SupplierCard />
        </div>
      </div>) :
        (
          <>
            <div className="flex">
              <div className="relative  m-3 flex-1">
                <input className="pl-10 pr-4 py-2 border rounded-2xl w-full" type="text" placeholder="Search, Order ID" />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="bi bi-search text-gray-400"></i>
                </div>
              </div>

              <button className="bg-white px-7 my-3 mx-1 border rounded-2xl font-semibold text-[#043912]"><i className="bi bi-funnel"></i> Filter</button>
              <button className="bg-white px-7 my-3 mx-1 border rounded-2xl font-semibold text-[#043912]">Export To Excel</button>
              <button className="bg-white px-7 my-3 mx-1 border rounded-2xl font-semibold text-[#043912]" onClick={handleToggleNewSupplierModal}>Add Supplier</button>
              <button className="bg-[#76C18B] px-2 my-3 mx-1 border rounded-2xl font-normal text-white" onClick={handleToggleNewOrderModal}><i className="bi bi-plus-lg"></i> New Order</button>
            </div>
            <div className="bg-white rounded-lg shadow-md m-3">
              <div className="p-3">
                <table className="w-full text-center text-green-700 font-semibold">
                  <thead className="text-[20px] font-extralight">
                    <tr>
                      <th>Order ID</th>
                      <th>Start Date</th>
                      <th>Supplier</th>
                      <th>Delivery Date</th>
                      <th>Quantity</th>
                      <th>Grade</th>
                      <th>Shipping Tracking</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {props.orders.orders.map((order, index) => (
                      <OrderRow key={index} order={order} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}


      {toggleNewOrderModal && <NewOrderModal handleToggleNewOrderModal={handleToggleNewOrderModal} feedType={feedItemText} />}
      {toggleNewSupplierModal && <NewSupplierModal handleToggleNewSupplierModal={handleToggleNewSupplierModal} />}

      {/* <ScrapedData /> */}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SupplyChain);