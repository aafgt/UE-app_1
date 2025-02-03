// import { useEffect, useState } from "react";
// import ReactApexChart from "react-apexcharts";
// import { connect } from "react-redux";
// import { fetchHorizonMetrics } from "../../redux/ActionCreators";

// const mapStateToProps = (state) => {
//     return {
//         horizon: state.horizon
//     }
// }

// const mapDispatchToProps = (dispatch) => ({
//     fetchHorizonMetrics: ({date, year}) => { dispatch(fetchHorizonMetrics({date, year})) }
// })

// const RateOfProductionCard = (props) => {

//     const [isRateOfProdOpen, setIsRateOfProdOpen] = useState(false);
//     const [selectedRateOfProdYear, setSelectedRateOfProdYear] = useState(new Date().getFullYear() + "");

//     const [prodChartData, setProdChartData] = useState({
//         series: [{
//             name: 'rate',
//             data: [31, 40, 28, 51, 42, 109, 100, 31, 40, 28, 51, 42]
//         }],
//         options: {
//             chart: {
//                 height: 350,
//                 type: 'area'
//             },
//             dataLabels: {
//                 enabled: false
//             },
//             stroke: {
//                 curve: 'straight'
//             },
//             xaxis: {
//                 type: 'datetime',
//                 categories: ["2023-01-01T00:00:00.000Z", "2023-02-01T01:30:00.000Z", "2023-03-01T02:30:00.000Z", "2023-04-01T03:30:00.000Z", "2023-05-01T04:30:00.000Z", "2023-06-01T05:30:00.000Z", "2023-07-01T06:30:00.000Z", "2023-08-01T06:30:00.000Z", "2023-09-01T06:30:00.000Z", "2023-10-01T06:30:00.000Z", "2023-11-01T06:30:00.000Z", "2023-12-01T06:30:00.000Z"]
//                 // categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
//             },
//             tooltip: {
//                 x: {
//                     format: 'MM'
//                 },
//             },
//             colors: ['#73C088']
//         },
//     });

//     const updateChartData = () => {
//         let res = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

//         const data_len = props.horizon?.cowsKilledMetrics?.rateOfProduction.length;
//         for (let i = 0; i < data_len; i++) {
//             let current_month = props.horizon?.cowsKilledMetrics?.rateOfProduction[i][0];
//             let current_weight = props.horizon?.cowsKilledMetrics?.rateOfProduction[i][1];

//             res[current_month - 1] = current_weight;
//         }

//         setProdChartData({
//             series: [{
//                 name: 'rate',
//                 data: res
//             }],
//             options: {
//                 chart: {
//                     height: 350,
//                     type: 'area'
//                 },
//                 dataLabels: {
//                     enabled: false
//                 },
//                 stroke: {
//                     curve: 'straight'
//                 },
//                 xaxis: {
//                     type: 'datetime',
//                     categories: ["2023-01-01T00:00:00.000Z", "2023-02-01T01:30:00.000Z", "2023-03-01T02:30:00.000Z", "2023-04-01T03:30:00.000Z", "2023-05-01T04:30:00.000Z", "2023-06-01T05:30:00.000Z", "2023-07-01T06:30:00.000Z", "2023-08-01T06:30:00.000Z", "2023-09-01T06:30:00.000Z", "2023-10-01T06:30:00.000Z", "2023-11-01T06:30:00.000Z", "2023-12-01T06:30:00.000Z"]
//                     // categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
//                 },
//                 tooltip: {
//                     x: {
//                         format: 'MM'
//                     },
//                 },
//                 colors: ['#73C088']
//             },
//         });
//     };

//     useEffect(() => {
//         updateChartData();
//     }, [props.horizon?.cowsKilledMetrics?.rateOfProduction]);

//     useEffect(() => {
//           props.fetchHorizonMetrics({year: selectedRateOfProdYear});
//       }, [selectedRateOfProdYear]);

//     // Get from backend the array of years available in the DB...
//     const rateOfProdYears = ["2022","2023","2024"];

//     return (
//         <div className="bg-white rounded-lg shadow-md relative">
//             <div className="px-5 py-4 flex justify-between">
//                 <p className="font-semibold text-xl">Rate of Production</p>
//                 <button className="border border-gray-500 text-gray-500 px-2 rounded-md" onClick={() => { setIsRateOfProdOpen(prev => !prev) }}>{selectedRateOfProdYear} <i className="bi bi-arrow-down-short"></i></button>

//                 {isRateOfProdOpen && <div className="border absolute bg-white rounded-lg text-2xl leading-none text-green-800 font-semibold top-4 -right-14 w-fit">
//                     {rateOfProdYears.map((item) => (
//                         <p key={item} className="text-center border-b-2 py-2 hover:cursor-pointer hover:bg-[#1CAD995E] px-3" onClick={() => { setIsRateOfProdOpen(prev => !prev); setSelectedRateOfProdYear(item); }}>{item}</p>
//                     ))}
//                 </div>}

//             </div>
//             <div className="">
//                 <ReactApexChart options={prodChartData.options} series={prodChartData.series} type="area" height={473} />
//             </div>
//         </div>
//     )
// }

// export default connect(mapStateToProps, mapDispatchToProps)(RateOfProductionCard);









import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const RateOfProductionCard = (props) => {

    const [isRateOfProdOpen, setIsRateOfProdOpen] = useState(false);
    const [selectedRateOfProdYear, setSelectedRateOfProdYear] = useState("");

    const [prodChartData, setProdChartData] = useState({
        series: [{
            name: 'rate',
            data: [31, 40, 28, 51, 42, 109, 100, 31]
        }],
        options: {
            chart: {
                height: 350,
                type: 'area'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            xaxis: {
                type: 'datetime',
                categories: ["2024-01-01T09:00:00.000Z", "2024-01-01T10:00:00.000Z", "2024-01-01T11:00:00.000Z", "2024-01-01T12:00:00.000Z", "2024-01-01T13:00:00.000Z", "2024-01-01T14:00:00.000Z", "2024-01-01T15:00:00.000Z", "2024-01-01T16:00:00.000Z"]
                // categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
                x: {
                    format: 'MM'
                },
            },
            colors: ['#73C088']
        },
    });

    const updateChartData = () => {
        let res = [0, 0, 0, 0, 0, 0, 0, 0];

        const data_len = props.graph?.length;
        for (let i = 0; i < data_len; i++) {
            let current_weight = props.graph[i]?.value;

            current_weight === null ? res[i] = 0 : res[i] = current_weight;
        }

        setProdChartData({
            series: [{
                name: 'rate',
                data: res
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'area'
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                xaxis: {
                    type: 'datetime',
                    categories: ["2024-01-01T09:00:00.000Z", "2024-01-01T10:00:00.000Z", "2024-01-01T11:00:00.000Z", "2024-01-01T12:00:00.000Z", "2024-01-01T13:00:00.000Z", "2024-01-01T14:00:00.000Z", "2024-01-01T15:00:00.000Z", "2024-01-01T16:00:00.000Z", "2024-01-01T17:00:00.000Z"]
                    // categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
                },
                tooltip: {
                    x: {
                        format: 'MM'
                    },
                },
                colors: ['#73C088']
            },
        });
    };

    useEffect(() => {
        updateChartData();
    }, [props.graph, props.graphDate]);

    useEffect(() => {
        props.setGraphDate(selectedRateOfProdYear);
    }, [selectedRateOfProdYear]);

    const generateRateOfProdDates = () => {
        const today = new Date();

        const month = today.getMonth() + 1; // Months are zero-based, so add 1
        const day = today.getDate();
        const year = today.getFullYear();
        const formattedDate = `${month}-${day}-${year}`;

        today.setDate(today.getDate() - 1); // Subtract one day to get yesterday's date
        const month1 = today.getMonth() + 1; // Months are zero-based, so add 1
        const day1 = today.getDate();
        const year1 = today.getFullYear();
        const formattedDate1 = `${month1}-${day1}-${year1}`;

        today.setDate(today.getDate() - 1);
        const month2 = today.getMonth() + 1; // Months are zero-based, so add 1
        const day2 = today.getDate();
        const year2 = today.getFullYear();
        const formattedDate2 = `${month2}-${day2}-${year2}`;

        return [formattedDate2, formattedDate1, formattedDate];
    };

    // Get from backend the array of years available in the DB...
    const rateOfProdYears = generateRateOfProdDates();

    return (
        <div className="bg-white rounded-lg shadow-md relative">
            <div className="px-5 py-4 flex justify-between">
                <p className="font-semibold text-xl">Rate of Production</p>
                <button className="border border-gray-500 text-gray-500 px-2 rounded-md" onClick={() => { setIsRateOfProdOpen(prev => !prev) }}>{props.graphDate} <i className="bi bi-arrow-down-short"></i></button>

                {isRateOfProdOpen && <div className="border absolute bg-white rounded-lg text-2xl leading-none text-green-800 font-semibold top-3 -right-32 z-10 w-fit">
                    {rateOfProdYears.map((item) => (
                        <p key={item} className="text-center border-b-2 py-2 hover:cursor-pointer hover:bg-[#1CAD995E] px-3" onClick={() => { setIsRateOfProdOpen(prev => !prev); setSelectedRateOfProdYear(item); }}>{item}</p>
                    ))}
                </div>}

            </div>
            <div className="">
                <ReactApexChart options={prodChartData.options} series={prodChartData.series} type="area" height={473} />
            </div>
        </div>
    )
}

export default RateOfProductionCard;