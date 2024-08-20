require("dotenv").config();
const axios = require("axios");

const EGNYTE_DOMAIN = process.env.EGNYTE_DOMAIN;
const EGNYTE_ACCESS_TOKEN = process.env.EGNYTE_ACCESS_TOKEN;
const BASE_URL = `https://${EGNYTE_DOMAIN}.egnyte.com/pubapi/v1/fs`;

// Function to get files and folders
const getFilesAndFolders = async (path = "") => {
  try {
    const url = `${BASE_URL}${path ? `/${path}` : ""}`;
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${EGNYTE_ACCESS_TOKEN}` },
    });

    const { files, folders, next } = response.data;

    // Process files
    files.forEach((file) => console.log(`File: ${file.path}`));

    // Process folders
    folders.forEach((folder) => {
      console.log(`Folder: ${folder.path}`);
      // Recursively get contents of the folder
      getFilesAndFolders(folder.path);
    });

    // Handle pagination
    if (next) {
      console.log("Fetching more data...");
      await getFilesAndFolders(next);
    }
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};

// Start from the root directory
getFilesAndFolders();
