import { useRef } from "react";


const PrintModal = (props) => {

    const iframeRef = useRef(null);

    const handlePrint = () => {
        // window.print();

        const contentToPrint = document.getElementById('contentToPrint').innerHTML;

        // Inject content into the iframe for printing
        const iframe = iframeRef.current;
        const doc = iframe.contentWindow.document;
        doc.open();
        doc.write(`
        <html>
        <head>
          <title></title>
          <!-- Link to the same Tailwind CSS file -->
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        </head>
        <body>
          ${contentToPrint}
        </body>
        </html>
        `);
        // doc.write(contentToPrint);
        // doc.write('</body></html>');
        doc.close();

        // Trigger print dialog
        // iframe.contentWindow.print();

        // Wait a little bit to ensure the styles are applied before triggering print
        setTimeout(() => {
            iframe.contentWindow.print();
        }, 500); // 500ms delay to allow styles to be applied
    };

    const subTableRows2 = (numbers) => {
        return (
            <div className="border-l-4 border-green-800 w-full">
                {numbers && numbers?.map((row, index) => (
                    <div key={index} className="border-b-2 w-full flex">
                        <table className="w-full text-center text-green-700">
                            <thead className="mb-7 text-sm">
                                <tr>
                                    <th className="px-5">Cow/Piece ID</th>
                                    <th className="px-5">Weight</th>
                                    <th className="px-5">Type</th>
                                    <th className="px-5">Doctor</th>
                                    <th className="px-5">Technician</th>
                                </tr>
                            </thead>
                            <tbody className="font-semibold">
                                <tr>
                                    <td>{row.number}</td>
                                    <td>{row.weights}</td>
                                    <td>{row.type}</td>
                                    <td>{row.doctorId}</td>
                                    <td>{row.technician}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        )
    };

    return (
        <>
            <div id="modal" className="flex items-center justify-center h-screen w-screen fixed inset-0 bg-black/50 overflow-auto">
                <div className="bg-white max-w-xl w-full rounded-md max-h-96 overflow-y-auto">
                    <div className="p-3 flex items-center justify-end">
                        <span className="modal-close cursor-pointer" onClick={props.handleTogglePrintModal}>×</span>
                    </div>

                    <div id="contentToPrint">
                        <div className="text-start mb-2 ml-3">
                            <p>Order ID: <span className="font-bold text-lg">{props.order.orderNumber}</span></p>
                            <p>No. Of Cows/Pieces: <span className="font-bold text-lg">{props.order.totalCount}</span></p>
                            <p>Customer: <span className="font-bold text-lg">{props.order.customer ? props.order.customer : "-----"}</span></p>
                            <p>Type Of Cow: <span className="font-bold text-lg">{props.order.orderType}</span></p>
                            <p>Create Date: <span className="font-bold text-lg">{props.order.createDate}</span></p>
                            <p>Delivery Date: <span className="font-bold text-lg">{props.order.deliverDate ? props.order.deliverDate : "-----"}</span></p>
                            <p>Start Date: <span className="font-bold text-lg">{props.order.startDate ? props.order.startDate : "-----"}</span></p>
                            <p>Status: <span className="font-bold text-lg">{props.order.status}</span></p>
                            <p>Approved: <span className="font-bold text-lg">{props.order.approve}</span></p>
                        </div>
                        <hr />
                        <div className="text-start mt-2">
                            {props.order.batches && props.order.batches?.map((row, index) => (
                                <div key={index} className="w-full flex">
                                    <table className="w-full text-center text-green-700 mb-5">
                                        <thead className="mb-7 text-sm">
                                            <tr>
                                                <th className="px-5">Batch</th>
                                                <th className="px-5">No. Of Cows/Pieces</th>
                                                <th className="px-5">Type</th>
                                                <th className="px-5">Start Date</th>
                                                <th className="px-5">End Date</th>
                                            </tr>
                                        </thead>
                                        <tbody className="font-semibold">
                                            <tr className="border-b-2 border-green-700">
                                                <td>{row.batchNumber}</td>
                                                <td>{row.count}</td>
                                                <td>{row.batchType}</td>
                                                <td>{row.startDate}</td>
                                                <td>{row.endDate}</td>
                                            </tr>

                                            <tr>
                                                <td colSpan={5}>
                                                    {subTableRows2(row.numbers)}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-3 flex items-center justify-end">
                        <div>
                            <button className="text-sm text-white bg-[#73C088] rounded-md px-4 py-1" type="button" onClick={handlePrint}>Print</button>
                            <button className="modal-close text-sm text-[#73C088] border rounded-md px-4 py-1 ml-3" onClick={props.handleTogglePrintModal}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hidden iframe to handle printing */}
            <iframe ref={iframeRef} style={{ display: 'none' }} title="Print Frame"></iframe>
        </>
    );
}

export default PrintModal;