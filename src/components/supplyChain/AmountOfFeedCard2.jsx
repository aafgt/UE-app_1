import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { connect } from "react-redux";
import { fetchFeedInfoByType } from "../../redux/ActionCreators";

import Chart from 'chart.js/auto';

const mapStateToProps = (state) => {
    return {
        feeds: state.feeds
    }
}

const AmountOfFeedCard2 = (props) => {

    const [data, setData] = useState({
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    });
    const [options, setOptions] = useState({
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Doughnut Chart'
            }
        }
    });

    const updateChartData = () => {
        setData({
            ...data,
            datasets: [{
                ...data.datasets[0],
                data: [props.feeds.feedInfoByType?.totalCurrentFeedWeight]
            }]
        });
    };

    useEffect(() => {
        updateChartData();
    }, [props.feeds.feedInfoByType?.totalCurrentFeedWeight])

    return (
        <div className="bg-white rounded-lg shadow-md m-3 mt-7 p-3 w-fit flex flex-col text-center gap-3 text-[#043912] font-normal">
            <div className="font-medium">
                <p>Consumption Per Month</p>
                <p>{props.feeds.feedInfoByType && props.feeds.feedInfoByType.totalFeedCapacity}</p>
            </div>
            <Doughnut data={data} options={options} />
            <p className="font-medium">Total Money <span className="font-bold">{props.feeds.feedInfoByType && props.feeds.feedInfoByType.totalPrice}</span></p>
        </div>
    );
}

export default connect(mapStateToProps, null)(AmountOfFeedCard2);