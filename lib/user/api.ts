import { LoginRequest, LoginResponse } from './types';

const API_BASE_URL = 'http://localhost:5000'; // Directly use the local API URL

export async function loginUser(credentials: LoginRequest): Promise<LoginResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      console.error('API Response Status:', response.status);
      console.error('API Response Status Text:', response.statusText);
      let errorData: { message?: string, [key: string]: any } = {}; // Specify that errorData might have a message property and other properties
      try {
        errorData = await response.json();
        console.error('API Error Data:', JSON.stringify(errorData, null, 2)); // Stringify for full content
      } catch (jsonError) {
        console.error('Could not parse error response as JSON:', jsonError);
        errorData = { message: response.statusText || 'Unknown error' };
      }
      throw new Error(errorData.message || 'An error occurred during login');
    }

    return await response.json();
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
} 