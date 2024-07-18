import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { connect } from "react-redux";
import { fetchCommodities } from "../../redux/ActionCreators";

const mapStateToProps = (state) => {
    return {
        feeds: state.feeds
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchCommodities: () => { dispatch(fetchCommodities()) }
})

const CommoditiesCard = (props) => {

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

    useEffect(() => {
        // props.fetchCommodities();

        setCommoditiesChartData({ ...commoditiesChartData, series: [{ data: [props.feeds.commoditiesData?.budgetSaving, props.feeds.commoditiesData?.projectSaving] }] });
    }, [props.feeds.commoditiesData]);

    if (props.feeds.isLoading) {
        return (
            <div className="bg-white rounded-lg shadow-md m-3 mt-7 p-3 w-fit flex flex-col text-center gap-3 text-[#043912] font-normal">
                <p className="text-green-700 text-xl p-7">Loading...</p>
            </div>
        );
    }
    else if (props.feeds.errMess) {
        return (
            <div className="bg-white rounded-lg shadow-md m-3 mt-7 p-3 w-fit flex flex-col text-center gap-3 text-[#043912] font-normal">
                <p className="text-red-700 text-xl p-7">{props.feeds.errMess}</p>
            </div>
        );
    }
    else {
        return (
            <div className="bg-white rounded-lg shadow-md m-3 mt-7 p-3 w-fit flex flex-col text-center gap-3 text-[#043912] font-normal">
                <h3>Commmodities</h3>

                {props.feeds.commoditiesData && <ReactApexChart options={commoditiesChartData.options} series={commoditiesChartData.series} type="bar" height={350} />}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommoditiesCard);