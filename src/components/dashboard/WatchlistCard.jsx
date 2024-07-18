import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { fetchWatchlist } from "../../redux/ActionCreators";
import { connect } from "react-redux";

// const signalR = require("@microsoft/signalr");
import * as signalR from '@microsoft/signalr';

const mapStateToProps = (state) => {
    return {
        watchlist: state.watchlist
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchWatchlist: () => { dispatch(fetchWatchlist()) }
})

const WatchListRow = ({ name, value }) => {

    const [tableChartData, setTableChartData] = useState({
        series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
        }],
        options: {
            chart: {
                height: 350,
                type: 'area',
                toolbar: {
                    show: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            xaxis: {
                labels: {
                    show: false,
                },
                type: 'datetime',
                categories: ["2023-01-19T00:00:00.000Z", "2023-02-19T01:30:00.000Z", "2023-03-19T02:30:00.000Z", "2023-04-19T03:30:00.000Z", "2023-05-19T04:30:00.000Z", "2023-06-19T05:30:00.000Z", "2023-07-19T06:30:00.000Z"]
                // categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
                x: {
                    format: 'MM'
                },
                enabled: false
            },
            colors: ['#73C088'],
            yaxis: {
                show: false
            }
        },
    });

    return (
        <div className="grid grid-cols-3 gap-5 border-b-2 hover:cursor-pointer" onClick={() => { window.location.href = "/orders"; }}>
            <div className="flex items-center">
                <p className="text-xl">{name}</p>
            </div>
            <div className="">
                <ReactApexChart options={tableChartData.options} series={tableChartData.series} type="area" height={100} />
            </div>
            <div className="flex justify-end items-center">
                <p className="text-xl">{value} <i className="bi bi-arrow-up text-blue-700"></i></p>
            </div>
        </div>
    );
};

const WatchlistCard = (props) => {

    useEffect(() => {
        const connection = new signalR.HubConnectionBuilder()
            .withUrl("http://192.168.1.120:5107/datahub")
            .build();

        connection.on("CowAdded", function (cow) {
            console.log("Cow Added: ", cow);
            props.fetchWatchlist();
        });

        connection.on("CowUpdated", function (cow) {
            console.log("Cow Updated: ", cow);
        });

        connection.on("CowRemoved", function (cowId) {
            console.log("Cow Removed: ", cowId);
            props.fetchWatchlist();
        });

        connection.start().then(() => {
            console.log("Connected to SignalR hub");
        }).catch(err => console.error("Error connecting to SignalR hub: ", err));

        props.fetchWatchlist();
        // setInterval(props.fetchWatchlist(), 3000);

        return () => {
            connection.stop().then(() => {
                console.log("Disconnected from SignalR hub");
            }).catch(err => console.error("Error Disconnecting from SignalR hub: ", err));
        }
    }, []);

    if (props.watchlist.isLoading) {
        return (
            <div className="bg-white rounded-lg shadow-md m-3 mt-7">
                <p className="text-green-700 text-xl p-7">Loading...</p>
            </div>
        );
    }
    else if (props.watchlist.errMess) {
        return (
            <div className="bg-white rounded-lg shadow-md m-3 mt-7">
                <p className="text-red-700 text-xl p-7">{props.watchlist.errMess}</p>
            </div>
        );
    }
    else {
        return (
            <div className="bg-white rounded-lg shadow-md m-3 mt-7 p-3 relative">
                <p className="font-semibold text-xl">Watchlist</p>
                {/* <button className=" absolute top-5 right-5 px-2 py-1 border-2 rounded-lg text-gray-700 font-semibold">Monday <i className="bi bi-arrow-down-short"></i></button> */}

                <div>
                    <WatchListRow name="Cost" value={props.watchlist.watchlist.cost} />
                    <WatchListRow name="Production" value={props.watchlist.watchlist.production} />
                    <WatchListRow name="No. of Cows" value={props.watchlist.watchlist.cowCount} />
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchlistCard);