

const SpeciesOfCows = () => {

    const messages = [
        { message: "Lorem ipsum dolor sit amet consectetur.", color: "text-green-800" },
        { message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", color: "text-red-700" },
        { message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", color: "text-green-400" },
        { message: "Lorem ipsum dolor.", color: "text-red-700" },
        { message: "Lorem ipsum dolor sit amet consectetur.", color: "text-green-800" },
        { message: "Lorem ipsum dolor sit amet consectetur adip.", color: "text-green-800" },
        { message: "Lorem ipsum dolor sit amet consectetur.", color: "text-green-800" },
        { message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", color: "text-red-700" },
        { message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", color: "text-green-400" },
        { message: "Lorem ipsum dolor.", color: "text-red-700" },
        { message: "Lorem ipsum dolor sit amet consectetur.", color: "text-green-800" },
        { message: "Lorem ipsum dolor sit amet consectetur adip.", color: "text-green-800" }
    ];

    return (
        <>
            <div className="flex m-5 gap-3">
                <div className="bg-white shadow-md rounded-lg w-full px-2 pb-1">
                    <iframe src="/dashboard_2.html" title="fig" className="w-full h-[490px]" />
                </div>
                <div className="bg-white shadow-md rounded-lg w-full px-2 pb-1">
                    <iframe src="/dashboard_2.html" title="fig" className="w-full h-[490px]" />
                </div>
                <div className="bg-white shadow-md rounded-lg w-full px-2 pb-1">
                    <iframe src="/dashboard_2.html" title="fig" className="w-full h-[490px]" />
                </div>
                <div className="bg-white shadow-md rounded-lg w-full px-2 pb-1">
                    <iframe src="/dashboard_2.html" title="fig" className="w-full h-[490px]" />
                </div>
            </div>

            <div className="flex m-5">
                <div className="bg-white rounded-lg shadow-md p-3 flex items-between w-3/4">
                    <div className="w-fit">
                        {messages.map((message, index) => (
                            <div key={index} className="mt-2">
                                <input type="checkbox" />
                                <label className={`ml-2 ${message.color}`}>{message.message}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-1/4">
                    <div className="bg-gray-200 h-full rounded-r-lg shadow-lg">
                        <h6 className="text-xl pl-5 pt-5">Calendar</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SpeciesOfCows;