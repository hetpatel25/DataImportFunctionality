# Data Import Functionality
## Overview

This repository contains both the frontend and backend components of the project. The frontend is built with React, and the backend is built with Node.js and Express. The backend is connected to a MongoDB database.

## Directory Structure


## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- MongoDB Atlas account

## Getting Started

### Frontend

The frontend is built with React and is located in the `frontend` directory.

1. **Navigate to the `frontend` directory:**

    ```bash
    cd frontend
    ```

2. **Install the dependencies:**

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

3. **Start the development server:**

    ```bash
    npm start
    ```

    or

    ```bash
    yarn start
    ```

   This will start the frontend application on `http://localhost:3000`.

### Backend

The backend is built with Node.js and Express and is located in the `backend` directory.

1. **Navigate to the `backend` directory:**

    ```bash
    cd backend
    ```

2. **Create a `.env` file in the `backend` directory and add your MongoDB connection URI:**

    ```env
    MONGO_URI=mongodb+srv://hetpatel3245:het%40123@cluster0.qqi5r.mongodb.net/mydatabase?retryWrites=true&w=majority
    ```

3. **Install the dependencies:**

    ```bash
    npm install
    npm nodemon
    
    ```

4. **Start the backend server:**

    ```bash
    nodemon server.js
    ```

   This will start the backend server on `http://localhost:9000`.

## API Endpoints

### `/upload`

- **Method:** POST
- **Description:** Upload company data from an Excel file.
- **Request Body:** An array of company objects with the following attributes:
  - `companyName`: (String) Name of the company
  - `contactName`: (String) Name of the contact person
  - `phone`: (Number) Contact phone number
  - `email`: (String) Contact email address
- **Response:** Success or error message.

## Test in frontend

upload the "dummy_data.xlsx" file that is provided to you and see is it giving you success result notification?

## Notes

- Ensure that MongoDB Atlas is correctly set up and accessible.
- The frontend and backend should be running on different ports. Ensure that the backend API URL in the frontend code matches the URL where the backend is running.

## Troubleshooting

- **CORS Issues:** If you encounter CORS issues, make sure the backend is configured to accept requests from the frontend URL.
- **Database Connection Issues:** Verify that your MongoDB URI in the `.env` file is correct and that your MongoDB instance is running.


