import express from 'express';
import axios from 'axios';
import Company from './Model/companyModel.js'


const router = express.Router();


// POST route to upload data
router.post('/upload', async (req, res) => {
    const companyDataArray = req.body; // Expecting an array of company objects
    console.log(req.body);

    try {
        // Validate that the data is an array
        if (!Array.isArray(companyDataArray)) {
            return res.status(400).json({ error: 'Data must be an array' });
        }

        // Validate each item in the array
        for (const companyData of companyDataArray) {
            const { companyName, contactName, phone, email } = companyData;

            if (!companyName || !contactName || !phone || !email) {
                return res.status(400).json({ error: 'Each company object must have companyName, contactName, phone, and email' });
            }
        }

        // Insert all company data into the database
        const result = await Company.insertMany(companyDataArray);

        // Send success response
        res.status(201).json({ message: 'Company data uploaded successfully', data: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error uploading company data' });
    }
});



export default router; 