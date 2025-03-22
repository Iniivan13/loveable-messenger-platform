
import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

// Define the type for our form data
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  notes?: string;
  submittedAt: string;
}

// Path to our data file
const dataFilePath = path.join(process.cwd(), 'public', 'data', 'datadiri.json');

// Ensure the data directory exists
const ensureDirectoryExists = () => {
  const dir = path.join(process.cwd(), 'public', 'data');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Create an empty JSON file if it doesn't exist
  if (!fs.existsSync(dataFilePath)) {
    fs.writeFileSync(dataFilePath, JSON.stringify([]));
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Ensure CORS headers for local development
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Ensure our data directory exists
    ensureDirectoryExists();

    // Get the request body
    const formData: Omit<FormData, 'submittedAt'> = req.body;
    
    // Add submission timestamp
    const newEntry: FormData = {
      ...formData,
      submittedAt: new Date().toISOString(),
    };

    // Read existing data
    let existingData = [];
    try {
      const fileContent = fs.readFileSync(dataFilePath, 'utf8');
      existingData = JSON.parse(fileContent);
      // Ensure it's an array
      if (!Array.isArray(existingData)) {
        existingData = [];
      }
    } catch (error) {
      // If file doesn't exist or is invalid JSON, start with empty array
      existingData = [];
    }
    
    // Add new entry
    existingData.push(newEntry);
    
    // Write updated data back to file
    fs.writeFileSync(dataFilePath, JSON.stringify(existingData, null, 2));
    
    // Return success
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error saving form data:', error);
    return res.status(500).json({ message: 'Failed to save form data', error: String(error) });
  }
}
