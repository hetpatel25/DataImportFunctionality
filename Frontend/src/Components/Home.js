import React, { useState } from "react";
import * as XLSX from "xlsx";


function Home({ onFileUpload }) {
    const [file, setFile] = useState(null);
    const [data, setData] = useState(null);




    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = () => {
        if (file) {
            const reader = new FileReader();

            reader.onload = (event) => {
                const arrayBuffer = event.target.result;
                const workbook = XLSX.read(arrayBuffer, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];

                // Convert the worksheet to JSON
                const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

                // Convert to array of objects with header keys
                const headers = jsonData[0];
                const dataRows = jsonData.slice(1);

                const formattedData = dataRows.map(row => {
                    let dataObject = {};
                    headers.forEach((header, index) => {
                        dataObject[header] = row[index];
                    });
                    return dataObject;
                });

                setData(formattedData);
                //console.log(formattedData);
                onFileUpload(formattedData);


            };

            reader.readAsArrayBuffer(file);
        } else {
            alert("Please select a file first!");
        }
    };

    // const validateData = (data) => {
    //     // Example validation: Ensure required fields are present and correct types
    //     return data.map(row => {
    //         return {
    //             companyName: typeof row["Company Name"] === 'string' ? row["Company Name"] : null,
    //             contactName: typeof row["Contact Name"] === 'string' ? row["Contact Name"] : null,
    //             phone: typeof row["Phone"] === 'number' ? row["Phone"] : null,
    //             email: typeof row["Email"] === 'string' ? row["Email"] : null,
    //         };
    //     }).filter(row => row.companyName && row.contactName && row.phone && row.email);
    // };

    return (

        <>
            <h1 className="flex w-full justify-center text-5xl mt-10 p-5">Upload your Excel sheet here</h1>
            <div className="flex flex-col items-center p-4 border rounded-lg mt-5 bg-cream w-10/12 mx-auto h-1/6">
                <input
                    type="file"
                    accept=".xls,.xlsx"
                    onChange={handleFileChange}
                    className="mb-4"
                />


                <button onClick={handleUpload} className="border px-5 py-1 rounded-md bg-brown text-cream">
                    Upload
                </button>
                {data && (
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold mb-2">Parsed Data:</h3>
                        <pre className="bg-gray-100 p-2 rounded">{JSON.stringify(data, null, 2)}</pre>
                    </div>
                )}
            </div>
        </>
    );
}

export default Home
