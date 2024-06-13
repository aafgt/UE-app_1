import { useState } from "react";
import logo from "../assets/Business growth-amico.png";
import ReactApexChart from "react-apexcharts";
import { ORDERS2 } from "../Data/orders";

function Commodities() {

  const [commoditiesChartData, setCommoditiesChartData] = useState({
    series: [{
      data: [20000000, 8000000]
    }],
    options: {
      chart: {
        height: 350,
        type: 'bar',
        events: {
          click: function (chart, w, e) {
            // console.log(chart, w, e)
          }
        }
      },
      colors: ["#1CAD99", "#EEC35E"],
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      xaxis: {
        categories: [
          "Budget Saving",
          "Project Saving"
        ],
        labels: {
          style: {
            colors: ["#1CAD99", "#EEC35E"],
            fontSize: '12px'
          }
        }
      }
    },

  });

  return (
    <div className="bg-white rounded-lg shadow-md m-3 mt-7 p-3 w-fit flex flex-col text-center gap-3 text-[#043912] font-normal">
      <h3>Commmodities</h3>

      <ReactApexChart options={commoditiesChartData.options} series={commoditiesChartData.series} type="bar" height={350} />
    </div>
  );
};

function Supplier() {

  const [supplierData, setSupplierData] = useState({
    series: [70, 30],
    options: {
      chart: {
        height: 350,
        type: 'donut',
        // events: {
        //   animationEnd: function(ctx) {
        //      ctx.toggleDataPointSelection(2)
        //   }
        // }
      },
      plotOptions: {
        pie: {
          donut: {
            size: '80%',
            labels: {
              show: true,
              total: {
                show: true,
                showAlways: true,
                label: 'OEE',
                color: '#F99963',
                formatter: function (w) {
                  return w.globals.seriesTotals.reduce((a, b) => {
                    return 100 - b
                  }, 0)
                }
              }
            }
          }
        }
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false
      },
      labels: ['', ''],
      colors: ['#F99963', '#76B18B']
    }
  });

  return (
    <div className="bg-white rounded-lg shadow-md m-3 mt-7 p-3 w-fit flex flex-col text-center gap-3 text-[#043912] font-normal h-3/5">
      <h3>Supplier</h3>
      <p>Monthly Income: $50,000,000</p>

      <ReactApexChart options={supplierData.options} series={supplierData.series} type="donut" />

      <p>Total award spend per month</p>
    </div>
  );
};

function Cows() {

  const [cowsData, setCowsData] = useState({
    series: [76],
    options: {
      chart: {
        type: 'radialBar',
        offsetY: -20,
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: "#e7e7e7",
            strokeWidth: '97%',
            margin: 5, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              color: '#999',
              opacity: 1,
              blur: 2
            }
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              offsetY: -2,
              fontSize: '22px'
            }
          }
        }
      },
      grid: {
        padding: {
          top: -10
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          shadeIntensity: 0.4,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 53, 91]
        },
      },
      labels: ['Average Results'],
    },

  })

  return (
    <div className="bg-white rounded-lg shadow-md m-3 mt-7 p-3 w-fit flex flex-col text-center gap-3 text-[#043912] font-normal justify-between h-3/5">
      <div className="">
        <h3>Cows</h3>
        <p className="mt-3">Monthly Income: $16,5000</p>
      </div>


      <ReactApexChart options={cowsData.options} series={cowsData.series} type="radialBar" />
      <div>
        <p>$15,305,000</p>
        <p>Saving Identified</p>
      </div>

    </div>
  );
};

function Spending() {

  const [spendingChartData, setSpendingChartData] = useState({
    series: [{
      data: [50, 100, 50, 70, 70]
    }],
    options: {
      chart: {
        height: 350,
        type: 'bar',
        events: {
          click: function (chart, w, e) {
            // console.log(chart, w, e)
          }
        }
      },
      colors: ["#1CAD99", "#EEC35E"],
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      xaxis: {
        categories: [
          "10",
          "11",
          "12",
          "13",
          "14"
        ],
        labels: {
          style: {
            colors: ["#1CAD99", "#EEC35E"],
            fontSize: '12px'
          }
        }
      }
    },

  });

  return (
    <div className="bg-white rounded-lg shadow-md m-3 mt-7 p-3 w-fit flex flex-col text-center gap-3 text-[#043912] font-normal justify-between">
      <div className="text-[#043912] font-normal">
        <div className="flex justify-around">
          <i className="bi bi-caret-left-fill hover:cursor-pointer"></i> March 2022 <i className="bi bi-caret-right-fill hover:cursor-pointer"></i>
        </div>
        <p>Your weekly average is <span className="font-semibold">$100</span></p>
      </div>

      <ReactApexChart options={spendingChartData.options} series={spendingChartData.series} type="bar" height={350} />

      <div>
        <div className="border-b-2 flex justify-between p-3 text-[#BA5F0B]">
          <h6>Today</h6>
          <p>$55.00</p>
        </div>

        <div className="border-b-2 flex justify-between p-3">
          <h6>Yesterday</h6>
          <p>$90.00</p>
        </div>

        <div className="border-b-2 flex justify-between p-3">
          <h6>Average</h6>
          <p>$65.00</p>
        </div>
      </div>
    </div>
  );
};


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
        <td className="py-3 text-green-500">{order.orderId}</td>
        <td className="py-3">{order.startDate}</td>
        <td className="py-3">{order.supplier}</td>
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

function AmountOfFeed() {

  const [supplierData, setSupplierData] = useState({
    series: [70, 30],
    options: {
      chart: {
        height: 350,
        type: 'donut',
      },
      plotOptions: {
        pie: {
          donut: {
            size: '80%',
            labels: {
              show: true,
              total: {
                show: true,
                showAlways: true,
                label: 'feed in the store',
                color: '#F99963',
                formatter: function (w) {
                  return w.globals.seriesTotals.reduce((a, b) => {
                    return 100 - b
                  }, 0)
                }
              }
            }
          }
        }
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false
      },
      labels: ['', ''],
      colors: ['#F99963', '#76B18B']
    }
  });

  return (
    <div className="bg-white rounded-lg shadow-md m-3 mt-7 p-3 w-fit flex flex-col text-center gap-3 text-[#043912] font-normal">
      <ReactApexChart options={supplierData.options} series={supplierData.series} type="donut" />
    </div>
  );
};





function SupplyChain() {

  const messages = [
    { message: "Lorem ipsum dolor sit amet consectetur.", color: "text-green-800" },
    { message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", color: "text-red-700" },
    { message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", color: "text-green-400" },
    { message: "Lorem ipsum dolor.", color: "text-red-700" },
    { message: "Lorem ipsum dolor sit amet consectetur.", color: "text-green-800" },
    { message: "Lorem ipsum dolor sit amet consectetur adip.", color: "text-green-800" },
  ];

  const feedItems = [
    "Feed1",
    "Feed2",
    "Feed3",
    "Feed4",
    "Feed5",
    "Feed6",
    "Feed7",
    "Feed8",
    "Feed9",
    "Feed10"
  ];

  const [isFeedItemsOpen, setIsFeedItemsOpen] = useState(false);
  const [feedItemText, setFeedItemText] = useState("Items");

  return (
    <div className="flex flex-col">

      <div className="flex">
        <div className="bg-white rounded-lg shadow-md m-3 mt-7 p-3 w-fit flex items-between h-fit">
          <div className="w-fit">
            <h3 className="text-3xl text-green-800">Welcome Ahmed !</h3>
            <div className="mt-3">
              {messages.map((message, index) => (
                <div key={index} className="mt-2">
                  <input type="checkbox" />
                  <label className={`ml-2 ${message.color}`}>{message.message}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="ml-16 flex flex-col relative">
            <button className="h-5 w-5 bg-black border border-white absolute rounded-full" onClick={() => { setFeedItemText("Items") }}></button>
            <button className="py-1 border-2 rounded-lg text-2xl leading-none text-green-800 font-semibold" onClick={() => { setIsFeedItemsOpen(prev => !prev) }}>{feedItemText} <i className="bi bi-arrow-down-short"></i></button>

            {isFeedItemsOpen && <div className="border absolute bg-white rounded-lg text-2xl leading-none text-green-800 font-semibold top-10 w-full">
              {feedItems.map((item) => (
                <p key={item} className="text-center border-b-2 py-1 hover:cursor-pointer hover:bg-[#1CAD995E]  " onClick={() => { setIsFeedItemsOpen(prev => !prev); setFeedItemText(item) }}>{item}</p>
              ))}
            </div>}

            <div className="w-40 h-44 mt-5">
              <img src={logo} alt="" />
            </div>

          </div>
        </div>

        {(feedItemText === "Items") ? <Commodities /> : <AmountOfFeed />}
      </div>

      {(feedItemText === "Items") ? (<div className="flex">
        <Spending />
        <div className="flex">
          <Cows />
          <Supplier />
        </div>
      </div>) :
        (
          <>
            <div className="flex">
              <div className="relative  m-3">
                <input className="pl-10 pr-4 py-2 border rounded-2xl" type="text" placeholder="Search, Order ID" />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="bi bi-search text-gray-400"></i>
                </div>
              </div>

              <button className="bg-white px-7 my-3 mx-1 border rounded-2xl font-semibold text-[#043912]"><i className="bi bi-funnel"></i> Filter</button>
              <button className="bg-[#7FC59296] px-2 my-3 mx-1 border rounded-2xl font-normal text-white"><i className="bi bi-plus-lg"></i> New Order</button>
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
                    {ORDERS2 && ORDERS2.map((order) => (
                      <OrderRow order={order} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

    </div>
  );
};

export default SupplyChain;