import React, { useState } from "react";

function Home({ onFileUpload }) {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = () => {
        if (file) {
            onFileUpload(file);
        } else {
            alert("Please select a file first!");
        }
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
            </div>
        </>
    );
}

export default Home
