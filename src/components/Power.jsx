import React, { useState } from "react"
import Card_Power from "./shared/Card_Power";
import ReactApexChart from "react-apexcharts";

function Power() {

    const [powerFactorChartData, setPowerFactorChartData] = useState({
        series: [70],
        options: {
            chart: {
                height: 350,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    startAngle: -135,
                    endAngle: 135,
                    track: {
                        background: '#333',
                        startAngle: -135,
                        endAngle: 135,
                    },
                    dataLabels: {
                        name: {
                            show: false,
                        },
                        value: {
                            fontSize: "30px",
                            show: true
                        }
                    }
                },
            },
            stroke: {
                lineCap: "butt"
            },
            labels: [''],
        }
    });

    const [powerChartData, setProdChartData] = useState({
        series: [{
            name: 'power1',
            data: [31, 40, 28, 51, 42, 109, 100, 40, 28, 51, 42, 109, 100, 40, 28, 51, 42, 109, 100]
        }, {
            name: 'power2',
            data: [11, 32, 45, 32, 34, 52, 41, 32, 45, 32, 34, 52, 41, 32, 45, 32, 34, 52, 41]
        }, {
            name: 'power3',
            data: [24, 65, 30, 47, 27, 36, 10, 65, 30, 47, 27, 36, 10, 65, 30, 47, 27, 36, 10]
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
                // type: 'datetime',
                // categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
        },
    });

    const [frequencyChartData, setFrequencyChartData] = useState({
        series: [{
            name: 'freq1',
            data: [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60]
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
                // type: 'datetime',
                // categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
        },
    });

    const [voltageChartData, setVoltageChartData] = useState({
        series: [{
            name: 'voltage1',
            data: [31, 40, 28, 51, 42, 109, 100, 40, 28, 51, 42, 109, 100, 40, 28, 51, 42, 109, 100]
        }, {
            name: 'voltage2',
            data: [11, 32, 45, 32, 34, 52, 41, 32, 45, 32, 34, 52, 41, 32, 45, 32, 34, 52, 41]
        }, {
            name: 'voltage3',
            data: [24, 65, 30, 47, 27, 36, 10, 65, 30, 47, 27, 36, 10, 65, 30, 47, 27, 36, 10]
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
                // type: 'datetime',
                // categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
        },
    });

    const [currentChartData, setCurrentChartData] = useState({
        series: [{
            name: 'current1',
            data: [31, 40, 28, 51, 42, 109, 100, 40, 28, 51, 42, 109, 100, 40, 28, 51, 42, 109, 100]
        }, {
            name: 'current2',
            data: [11, 32, 45, 32, 34, 52, 41, 32, 45, 32, 34, 52, 41, 32, 45, 32, 34, 52, 41]
        }, {
            name: 'current3',
            data: [24, 65, 30, 47, 27, 36, 10, 65, 30, 47, 27, 36, 10, 65, 30, 47, 27, 36, 10]
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
                // type: 'datetime',
                // categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
        },
    });

    const [harmonicChartData, setHarmonicChartData] = useState({
        series: [{
            name: 'harmonic1',
            data: [31, 40, 28, 51, 42, 109, 100, 40, 28, 51, 42, 109, 100, 40, 28, 51, 42, 109, 100]
        }, {
            name: 'harmonic2',
            data: [11, 32, 45, 32, 34, 52, 41, 32, 45, 32, 34, 52, 41, 32, 45, 32, 34, 52, 41]
        }, {
            name: 'harmonic3',
            data: [24, 65, 30, 47, 27, 36, 10, 65, 30, 47, 27, 36, 10, 65, 30, 47, 27, 36, 10]
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
                // type: 'datetime',
                // categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
        },
    });

    return (
        <>
            <div className="bg-slate-100 w-full p-2">
                <div className="border-b-2 mb-4 p-2 bg-gray-50">
                    <label className="font-medium">Power</label><br />
                    <label>Welcome !</label>
                </div>

                <div className="flex">
                    <div className="grid grid-cols-3 gap-5 w-2/3">
                        <Card_Power title="Current Voltage 1" body="223 V" />
                        <Card_Power title="Current Voltage 2" body="223 V" />
                        <Card_Power title="Current Voltage 3" body="223 V" />
                        <Card_Power title="CT1 Current" body="8.5875 A" />
                        <Card_Power title="CT2 Current" body="8.5875 A" />
                        <Card_Power title="CT3 Current" body="9.5875 A" />
                        <Card_Power title="Current Power 1" body="1.7 KW" />
                        <Card_Power title="Current Power 2" body="1.7 KW" />
                        <Card_Power title="Current Power 3" body="1.7 KW" />
                    </div>
                    <div className="ml-5 w-1/3">
                        <Card_Power title="Power Factor" body={<ReactApexChart options={powerFactorChartData.options} series={powerFactorChartData.series} type="radialBar" height={350} />} />
                    </div>
                </div>

                <div className="">
                    <div className="mt-5">
                        <Card_Power title="Power" body={<ReactApexChart options={powerChartData.options} series={powerChartData.series} type="area" height={190} />} />
                    </div>
                    <div className="mt-5">
                        <Card_Power title="Average Frequency" body={<ReactApexChart options={frequencyChartData.options} series={frequencyChartData.series} type="area" height={190} />} />
                    </div>
                    <div className="mt-5">
                        <Card_Power title="Voltage" body={<ReactApexChart options={voltageChartData.options} series={voltageChartData.series} type="area" height={190} />} />
                    </div>
                    <div className="mt-5">
                        <Card_Power title="Current" body={<ReactApexChart options={currentChartData.options} series={currentChartData.series} type="area" height={190} />} />
                    </div>
                    <div className="mt-5">
                        <Card_Power title="Harmonic" body={<ReactApexChart options={harmonicChartData.options} series={harmonicChartData.series} type="area" height={190} />} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Power;