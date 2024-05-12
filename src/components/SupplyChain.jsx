import { useState } from "react";
import ReactApexChart from "react-apexcharts";

function SupplyChain() {

    const [toggle, setToggle] = useState(false);
    const [dropDown, setDropDown] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    const handleDropDown = () => {
        setDropDown(!dropDown);
    };

    const [prodChartData, setProdChartData] = useState({
          
        series: [{
          name: 'Inflation',
          data: [50, 61, 50, 45, 50, 80, 50, 36, 23, 70, 50, 100]
        }],
        options: {
          chart: {
            height: 350,
            type: 'bar',
          },
          plotOptions: {
            bar: {
              borderRadius: 10,
              dataLabels: {
                position: 'top', // top, center, bottom
              },
            }
          },
          dataLabels: {
            enabled: true,
            formatter: function (val) {
              return val + "T";
            },
            offsetY: -20,
            style: {
              fontSize: '12px',
              colors: ["#304758"] 
            }
          },
          
          xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            position: 'top',
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            },
            crosshairs: {
              fill: {
                type: 'gradient',
                gradient: {
                  colorFrom: '#D8E3F0',
                  colorTo: '#BED1E6',
                  stops: [0, 100],
                  opacityFrom: 0.4,
                  opacityTo: 0.5,
                }
              }
            },
            tooltip: {
              enabled: true,
            }
          },
          yaxis: {
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false,
            },
            labels: {
              show: false,
              formatter: function (val) {
                return val + "%";
              }
            }
          
          },
          title: {
            text: 'Monthly Inflation in Argentina, 2002',
            floating: true,
            offsetY: 330,
            align: 'center',
            style: {
              color: '#444'
            }
          }
        },
      });

    return (
        <>
            <div className="bg-slate-100 w-full p-2">
                <div className="border-b-2 mb-4 p-2 bg-gray-50">
                    <label className="font-medium">Supply-chain</label><br />
                    <label>Welcome !</label>
                </div>

                <div>
                    <button className="bg-green-400 px-3 py-1 rounded-md" onClick={handleDropDown}>Raw Material <i className="bi bi-arrow-down-short"></i></button>
                    {dropDown && <div className="bg-white rounded-lg shadow-md mt-1 w-fit">
                        <button className="bg-green-400 px-3 py-1 rounded-md" onClick={handleToggle}>Material 1</button>
                        <button className="bg-green-400 px-3 py-1 rounded-md mx-2" onClick={handleToggle}>Material 2</button>
                        <button className="bg-green-400 px-3 py-1 rounded-md" onClick={handleToggle}>Material 3</button>
                    </div>}
                </div>

                {toggle && <div className="bg-white rounded-lg shadow-md mt-7">
                    <div className="border-b-2 p-2">Material Stock</div>
                    <div className="p-3">
                        <table className="w-full text-center table-fixed">
                            <thead className="text-green-700 font-semibold">
                                <tr>
                                    <td>Supplier</td>
                                    <td>id</td>
                                    <td>Rate</td>
                                    <td>Last Order Date</td>
                                    <td>Last Order Quantity</td>
                                    <td>New Order Date</td>
                                    <td>New Order Quantity</td>
                                    <td>Grade</td>
                                    <td>Timestamp</td>
                                </tr>
                            </thead>
                            <tbody className="">
                                <tr className="border-b-2">
                                    <td>Ahmed</td>
                                    <td>25</td>
                                    <td>100 T/month</td>
                                    <td>1/2/2024</td>
                                    <td>150 T</td>
                                    <td>1/2/2024</td>
                                    <td>200 T</td>
                                    <td>A</td>
                                    <td>1/22/2024, 3:34:51 PM</td>
                                </tr>
                                <tr className="border-b-2">
                                    <td>Ahmed</td>
                                    <td>25</td>
                                    <td>100 T/month</td>
                                    <td>1/2/2024</td>
                                    <td>150 T</td>
                                    <td>1/2/2024</td>
                                    <td>200 T</td>
                                    <td>A</td>
                                    <td>1/22/2024, 3:34:51 PM</td>
                                </tr>
                                <tr className="border-b-2">
                                    <td>Ahmed</td>
                                    <td>25</td>
                                    <td>100 T/month</td>
                                    <td>1/2/2024</td>
                                    <td>150 T</td>
                                    <td>1/2/2024</td>
                                    <td>200 T</td>
                                    <td>D</td>
                                    <td>1/22/2024, 3:34:51 PM</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>}

                {toggle && <div className="bg-white rounded-md shadow-md w-full mt-5">
                        <h6 className="border-b-2 p-2">Material Consumption</h6>
                        <div className="">
                            <ReactApexChart options={prodChartData.options} series={prodChartData.series} type="bar" height={300} />
                        </div>
                </div>}

                <div className="flex mt-5">
                    <div className={`bg-white rounded-md shadow-md ${toggle ? 'w-full' : 'w-full'}`}>
                        <div className="border-b-2 p-2">Messages</div>
                        <div className="mx-3 py-5">
                            <div className="bg-white rounded-sm shadow-md">
                                <div className="border-b-2 p-2">Oil Production Stage</div>
                                <div className="">
                                    ...
                                </div>
                            </div>
                            <div className="bg-white rounded-sm shadow-md mt-5">
                                <div className="border-b-2 p-2">Corn Stock</div>
                                <div className="">
                                    ...
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SupplyChain;