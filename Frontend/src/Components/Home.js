import React, { useState } from "react";
import * as XLSX from "xlsx";


function Home({ onFileUpload }) {
    const [file, setFile] = useState(null);
    const [data, setData] = useState(null);

    const API_URL = 'http://localhost:9000/api/upload'

    async function postCompanyData(companyDataArray) {
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(companyDataArray),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Error posting company data:', error);
            throw error; // You can also handle this in your component or UI
        }
    }

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = () => {
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const binaryStr = event.target.result;
                const workbook = XLSX.read(binaryStr, { type: "binary" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const jsonData = XLSX.utils.sheet_to_json(worksheet);

                // Validate and process the data here
                const validatedData = validateData(jsonData);
                setData(validatedData);

                onFileUpload(validatedData); // Send the validated data to the backend
            };
            reader.readAsBinaryString(file);
        } else {
            alert("Please select a file first!");
        }
    };

    const validateData = (data) => {
        // Example validation: Ensure required fields are present and correct types
        return data.map(row => {
            return {
                companyName: typeof row["Company Name"] === 'string' ? row["Company Name"] : null,
                contactName: typeof row["Contact Name"] === 'string' ? row["Contact Name"] : null,
                phone: typeof row["Phone"] === 'number' ? row["Phone"] : null,
                email: typeof row["Email"] === 'string' ? row["Email"] : null,
            };
        }).filter(row => row.companyName && row.contactName && row.phone && row.email);
    };

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
