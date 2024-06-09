import { useRef, useState } from "react";


function Reports() {

    const inputFile = useRef(null);
    const [inputFile2, setInputFile2] = useState(null);

    const [data, setData] = useState(null);

    const handleUpload = () => {
        inputFile.current.click();
    };

    const viewFile = async () => {
        const res = await inputFile2.current.files[0].text();
        setData(JSON.parse(res));
        // setData(JSON.parse(res.substring(0,441).concat("}")));
    };

    const test = () => {
        // let s = '{"barn":{"barnID":"AC13","type":"---","date":"Mon May 20 12:39:13 EET 2024"}}';

        let s = '{"barn":{"barnID":"AC13","type":"---","date":"Mon May 20 12:39:13 EET 2024"},"stats":{"maxWaste":{"opNumber":"12","quantity":23.0,"timeStart":"2024-05-15T13:50:10.3666037","timeEnd":"2024-05-15T13:50:10.3663072","opReturn":45.0,"waste":12.0,"da":0.0,"flage":true},"maxTime":{"opNumber":"12","quantity":23.0,"timeStart":"2024-05-15T13:50:10.3666037","timeEnd":"2024-05-15T13:50:10.3663072","opReturn":45.0,"waste":12.0,"da":0.0,"flage":true}},"data":[{"opNumber":"12","quantity":23.0,"timeStart":"2024-05-15T13:50:10.3666037","timeEnd":"2024-05-15T13:50:10.3663072","opReturn":45.0,"waste":12.0,"da":0.0,"flage":true},{"opNumber":"1","quantity":1.0,"timeStart":"2024-05-15T13:52:10.7132622","timeEnd":"2024-05-15T13:52:10.7132467","opReturn":1.0,"waste":1.0,"da":0.0,"flage":false},{"opNumber":"700","quantity":10.0,"timeStart":"2024-05-15T14:08:02.5637206","timeEnd":"2024-05-15T14:08:02.563715","opReturn":20.0,"waste":5.0,"da":0.0,"flage":true},{"opNumber":"700","quantity":20.0,"timeStart":"2024-05-15T14:08:09.9835697","timeEnd":"2024-05-15T14:08:09.9835625","opReturn":20.0,"waste":5.0,"da":0.0,"flage":true},{"opNumber":"700","quantity":30.0,"timeStart":"2024-05-15T14:08:23.6702327","timeEnd":"2024-05-15T14:08:23.6702287","opReturn":20.0,"waste":5.0,"da":0.0,"flage":true},{"opNumber":"700","quantity":40.0,"timeStart":"2024-05-15T14:08:37.0484675","timeEnd":"2024-05-15T14:08:37.0484641","opReturn":20.0,"waste":5.0,"da":0.0,"flage":false}]}';

        // let s = '{"barn":{"barnID":"AC13","type":"---","date":"Mon May 20 12:39:13 EET 2024"},"stats":{"maxWaste":{"opNumber":"12","quantity":23.0,"timeStart":"2024-05-15T13:50:10.3666037","timeEnd":"2024-05-15T13:50:10.3663072","opReturn":45.0,"waste":12.0,"da":0.0,"flage":true},"maxTime":{"opNumber":"12","quantity":23.0,"timeStart":"2024-05-15T13:50:10.3666037","timeEnd":"2024-05-15T13:50:10.3663072","opReturn":45.0,"waste":12.0,"da":0.0,"flage":true}}}';

        let ss = JSON.parse(s);
        console.log(ss);
    };

    return (
        <div>
            <h1 className="text-4xl m-10">Reports</h1>
            <input type="file" ref={inputFile} style={{ display: 'none' }} onChange={() => (setInputFile2(inputFile))} />

            <button className="bg-black text-white px-2 py-1 rounded-lg" onClick={handleUpload}>Upload</button>

            {inputFile2 && <button className="bg-black text-white px-2 py-1 rounded-lg" onClick={viewFile}>View Data</button>}

            {/* <p className="mt-7">{data.substring(0,441).concat("}")}</p> */}
            <h2 className="text-4xl font-bold mt-5">BARN INFO</h2>
            {data && <div className="border border-red-500">
                <p><span className="font-bold">Barn ID: </span>{data?.barn?.barnID}</p>
                <p><span className="font-bold">Barn Type: </span>{data?.barn?.type}</p>
                <p><span className="font-bold">Time: </span>{data?.barn?.date}</p>
            </div>}


            <h2 className="text-4xl font-bold mt-5">DATA</h2>
            {data && data?.data?.map((element) => (
                <div className="border border-red-500">
                    <p><span className="font-bold">opNumber: </span>{element.opNumber}</p>
                    <p><span className="font-bold">quantity: </span>{element.quantity}</p>
                    <p><span className="font-bold">timeStart: </span>{element.timeStart}</p>
                    <p><span className="font-bold">timeEnd: </span>{element.timeEnd}</p>
                    <p><span className="font-bold">opReturn: </span>{element.opReturn}</p>
                    <p><span className="font-bold">waste: </span>{element.waste}</p>
                    <p><span className="font-bold">flage: </span>{element.flage}</p>
                </div>
            ))}

            {data && <div className="border border-red-500 mt-5">
                <h3 className="text-4xl font-bold">MAX WASTE</h3>
                <p><span className="font-bold">opNumber: </span>{data?.stats?.maxWaste.opNumber}</p>
                <p><span className="font-bold">quantity: </span>{data?.stats?.maxWaste.quantity}</p>
                <p><span className="font-bold">timeStart: </span>{data?.stats?.maxWaste.timeStart}</p>
                <p><span className="font-bold">timeEnd: </span>{data?.stats?.maxWaste.timeEnd}</p>
                <p><span className="font-bold">opReturn: </span>{data?.stats?.maxWaste.opReturn}</p>
                <p><span className="font-bold">waste: </span>{data?.stats?.maxWaste.waste}</p>
                <p><span className="font-bold">flage: </span>{data?.stats?.maxWaste.flage}</p>
            </div>}

            {data && <div className="border border-red-500 mt-5">
                <h3 className="text-4xl font-bold">MAX TIME</h3>
                <p><span className="font-bold">opNumber: </span>{data?.stats?.maxTime.opNumber}</p>
                <p><span className="font-bold">quantity: </span>{data?.stats?.maxTime.quantity}</p>
                <p><span className="font-bold">timeStart: </span>{data?.stats?.maxTime.timeStart}</p>
                <p><span className="font-bold">timeEnd: </span>{data?.stats?.maxTime.timeEnd}</p>
                <p><span className="font-bold">opReturn: </span>{data?.stats?.maxTime.opReturn}</p>
                <p><span className="font-bold">waste: </span>{data?.stats?.maxTime.waste}</p>
                <p><span className="font-bold">flage: </span>{data?.stats?.maxTime.flage}</p>
            </div>}

            {/* <button className="bg-black text-white px-2 py-1 rounded-lg" onClick={test}>TEST</button> */}

        </div>
    )
}

export default Reports;